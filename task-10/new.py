import cv2
from PIL import Image, ImageFilter

def preprocess_image(image_path, output_path):
    img = Image.open(image_path).convert('L')
    threshold = 128
    binary_img = img.point(lambda p: p > threshold and 255)
    binary_img = binary_img.filter(ImageFilter.MedianFilter(size=3))
    binary_img.save(output_path)
    return output_path

def detect_edges(image_path, output_path):
    img_cv = cv2.imread(image_path, 0)
    edges = cv2.Canny(img_cv, 100, 200)
    cv2.imwrite(output_path, edges)
    return output_path

def decode_message(binary_string):
    def binary_to_text(binary_string):
        n = int(binary_string, 2)
        return n.to_bytes((n.bit_length() + 7) // 8, 'big').decode()
    
    return binary_to_text(binary_string)

def main():
    input_image_path = 'combined_image.png'
    preprocessed_image_path = 'filtered_image.png'
    edges_image_path = 'edges.png'
    
    preprocess_image(input_image_path, preprocessed_image_path)
    
    detect_edges(preprocessed_image_path, edges_image_path)
    
    binary_string = '0100100001100101011011000110110001101111'
    message = decode_message(binary_string)
    print("Decoded Message:", message)

if __name__ == "__main__":
    main()
