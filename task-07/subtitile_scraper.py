import os
import click
import requests
from bs4 import BeautifulSoup
from imdb import IMDb
import hashlib

def get_imdb_id(filename):
    imdb_id = filename.split('_')[1]
    return imdb_id

def get_file_hash(filepath):
    hasher = hashlib.md5()
    with open(filepath, 'rb') as f:
        buf = f.read(65536)
        while len(buf) > 0:
            hasher.update(buf)
            buf = f.read(65536)
    return hasher.hexdigest()

def get_file_size(filepath):
    return os.path.getsize(filepath)

def scrape_subtitles(imdb_id, file_hash=None, file_size=None, language=None):
    url = "https://www.opensubtitles.org/en/search/sublanguageid-eng/imdbid-" + imdb_id
    if file_hash:
        url += "/hash-" + file_hash
    elif file_size:
        url += "/filesize-" + str(file_size)
    
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    subtitles = []
    
    for subtitle in soup.find_all("div", class_="subtitles"):
        subtitle_info = {
            'title': subtitle.find("a", class_="subtitle").text.strip(),
            'language': subtitle.find("span", class_="language").text.strip(),
            'download_link': subtitle.find("a", class_="download").get('href')
        }
        if not language or subtitle_info['language'].lower() == language.lower():
            subtitles.append(subtitle_info)
    
    return sorted(subtitles, key=lambda x: x.get('download_count', 0), reverse=True)

def download_subtitle(download_link, output_folder):
    response = requests.get(download_link)
    filename = download_link.split('/')[-1]
    filepath = os.path.join(output_folder, filename)
    
    with open(filepath, 'wb') as f:
        f.write(response.content)
    
    click.echo(f"Downloaded: {filepath}")

@click.command()
@click.argument('file')
@click.option('-l', '--language', default=None, help='Filter subtitles by language.')
@click.option('-o', '--output', default='.', help='Specify the output folder for the subtitles.')
@click.option('-s', '--file-size', default=None, type=int, help='Filter subtitles by movie file size.')
@click.option('-h', '--match-by-hash', default=None, help='Match subtitles by movie hash.')
@click.option('-b', '--batch-download', is_flag=True, help='Enable batch mode.')
def main(file, language, output, file_size, match_by_hash, batch_download):
    if batch_download:
        if not os.path.isdir(file):
            click.echo("Batch download requires a directory.")
            return
        
        for filename in os.listdir(file):
            if filename.endswith('.mp4'):
                filepath = os.path.join(file, filename)
                handle_file(filepath, language, output, file_size, match_by_hash)
    else:
        handle_file(file, language, output, file_size, match_by_hash)

def handle_file(filepath, language, output, file_size, match_by_hash):
    if not os.path.isfile(filepath):
        click.echo(f"File not found: {filepath}")
        return
    
    imdb_id = get_imdb_id(filepath)
    file_hash = match_by_hash or get_file_hash(filepath)
    file_size = file_size or get_file_size(filepath)
    
    click.echo(f"Searching for subtitles for IMDb ID: {imdb_id}")
    subtitles = scrape_subtitles(imdb_id, file_hash, file_size, language)
    
    if not subtitles:
        click.echo("No subtitles found.")
        return
    
    for idx, subtitle in enumerate(subtitles):
        click.echo(f"{idx + 1}: {subtitle['title']} ({subtitle['language']})")
    
    choice = click.prompt("Enter the number of the subtitle you want to download", type=int)
    if 1 <= choice <= len(subtitles):
        download_subtitle(subtitles[choice - 1]['download_link'], output)
    else:
        click.echo("Invalid choice.")

if __name__ == '__main__':
    main()
