#!/usr/bin/env python3
import os
import glob
import re

docs_dir = 'docs'
html_files = glob.glob(os.path.join(docs_dir, '**/*.html'), recursive=True)

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Remove style="..."
    content = re.sub(r'\sstyle="[^"]*"', '', content)

    # 2. Remove <style>...</style>
    content = re.sub(r'<style>.*?</style>', '', content, flags=re.DOTALL)

    # 3. Clean up utility classes: animate, delay-X
    # Only within class="..." to be safe
    def clean_classes(match):
        classes = match.group(1).split()
        # Remove animate, delay-X, icon
        classes = [c for c in classes if c != 'animate' and not c.startswith('delay-') and c != 'icon']
        # If it's empty, we could remove the class attribute, but for safety just return empty class="" or re-join
        if classes:
            return f'class="{" ".join(classes)}"'
        else:
            return 'class=""'
            
    content = re.sub(r'class="([^"]+)"', clean_classes, content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Processed {len(html_files)} HTML files.")
