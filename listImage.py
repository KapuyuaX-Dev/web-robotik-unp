import os

curDir = os.getcwd()

imageDir = os.path.join(curDir,"web-test/public/image/gallery")

images = []
for item in os.listdir(imageDir):
    if item.endswith('.jpg') or item.endswith('.JPG'):
        images.append(item)

print(images)