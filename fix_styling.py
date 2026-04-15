import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Strip data-v- attributes
    content = re.sub(r'\[data-v-[a-zA-Z0-9]+\]', '', content)
    content = re.sub(r' data-v-[a-zA-Z0-9]+(="")?', '', content)

    # Replace Wallbox colors with Brand colors
    # Primary Greens -> Blue (#0863AE)
    content = re.sub(r'(?i)#009b86', '#0863AE', content)
    content = re.sub(r'(?i)#00C8AA', '#0863AE', content)
    content = re.sub(r'(?i)#078272', '#064D87', content) # Hover state

    # Dark texts -> #5B5555
    content = re.sub(r'(?i)#202124', '#5B5555', content)
    content = re.sub(r'(?i)#303236', '#5B5555', content)
    content = re.sub(r'(?i)rgba\(32,33,36', 'rgba(91,85,85', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or '.next' in root or '.git' in root:
        continue
    for file in files:
        if file.endswith(('.css', '.tsx', '.ts')):
            process_file(os.path.join(root, file))

print("Cleanup and color replacement complete.")
