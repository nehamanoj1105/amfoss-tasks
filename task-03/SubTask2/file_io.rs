use std::fs;

fn main() 
{
    let content = fs::read_to_string("input.txt").expect("Unable to read file");
    fs::write("output.txt", content).expect("Unable to write file");
}
