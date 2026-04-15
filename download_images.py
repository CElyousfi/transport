import re
import os
import urllib.request
from pathlib import Path

comps_dir = Path('/home/kali/code/Transport/wallbox-nextjs/components')
images_dir = Path('/home/kali/code/Transport/wallbox-nextjs/public/images')
images_dir.mkdir(parents=True, exist_ok=True)

url_pattern = re.compile(r'https://d1lnencgr7glws\.cloudfront\.net[^\s"\'\`]+')

for tsx_file in comps_dir.glob('**/*.tsx'):
    with open(tsx_file, 'r') as f:
        content = f.read()
    
    urls = url_pattern.findall(content)
    if not urls:
        continue
        
    for url in set(urls):
        filename = url.split('/')[-1]
        local_path = images_dir / filename
        
        if not local_path.exists():
            print(f"Downloading {url} ...")
            try:
                urllib.request.urlretrieve(url, local_path)
            except Exception as e:
                print(f"Failed to download {url}: {e}")
                
        # Replace in content
        content = content.replace(url, f'/images/{filename}')
        
    with open(tsx_file, 'w') as f:
        f.write(content)

print("Images downloaded and files updated.")
