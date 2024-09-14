import os
import re
import cv2
import numpy as np
from PIL import Image, ImageDraw

files = os.listdir('assets')

sorted_files = sorted(files, key=lambda x: int(re.search(r'\d+', x).group()))

dot_coordinates = []
dot_colors = []

for file in sorted_files:
    img = cv2.imread(os.path.join('assets', file))
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)
    contours, _ = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    
    for contour in contours:
        M = cv2.moments(contour)
        cx = int(M['m10'] / M['m00'])
        cy = int(M['m01'] / M['m00'])
        dot_color = img[cy, cx].tolist()
        dot_coordinates.append((cx, cy))
        dot_colors.append(dot_color)

output_img = Image.new('RGB', (512, 512), (255, 255, 255))
draw = ImageDraw.Draw(output_img)

for i in range(len(dot_coordinates) - 1):
    if dot_colors[i] != [255, 255, 255]:
        draw.line([dot_coordinates[i], dot_coordinates[i + 1]], fill=tuple(dot_colors[i]), width=2)

output_img.save('output.png')
