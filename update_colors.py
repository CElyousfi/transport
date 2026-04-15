import re
import os
from pathlib import Path

# Color mapping: Wallbox -> Safe Solution Wheels
color_map = {
    '#202124': '#5B5555',
    '#303236': '#6b6565',
    '#f0eeee': '#f0f4f8',
    '#009b86': '#0863AE',
    '#085d52': '#064d8a',
    '#b4e5dd': '#94c0e6',
    # Handle hex variations
    '#202124]': '#5B5555]',
    '#303236]': '#6b6565]',
    '#f0eeee]': '#f0f4f8]',
    '#009b86]': '#0863AE]',
}

def replace_colors(directory):
    path = Path(directory)
    count = 0
    for filepath in path.glob('**/*'):
        if filepath.is_file() and filepath.suffix in ['.tsx', '.css', '.ts']:
            try:
                with open(filepath, 'r') as f:
                    content = f.read()
            except Exception:
                continue

            orig_content = content
            # Replacing case-insensitively
            for old_c, new_c in color_map.items():
                content = re.sub(old_c, new_c, content, flags=re.IGNORECASE)

            if content != orig_content:
                with open(filepath, 'w') as f:
                    f.write(content)
                count += 1
    print(f"Updated {count} files in {directory}")

replace_colors('/home/kali/code/Transport/wallbox-nextjs/components')
replace_colors('/home/kali/code/Transport/wallbox-nextjs/app')
