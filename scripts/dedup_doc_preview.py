#!/usr/bin/env python3
"""Deduplicate doc-preview.css by collapsing identical repeated CSS rule blocks."""
import re
import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
css_path = os.path.join(project_dir, 'css', 'doc-preview.css')

with open(css_path, 'r') as f:
    content = f.read()

original_len = len(content.split('\n'))

# Split into sections based on top-level comments (/* ... */)
# Each "/* Specific styles for Xxx demo */" block + its rules forms a unit

# Strategy: split the file into blocks by "/* Specific styles" comments
# then deduplicate: keep only the first occurrence of each block

# Split on comment headers including the preceding newlines
parts = re.split(r'(\n/\* Specific styles for [^*]+\*/)', content)

seen_blocks = {}
deduped = parts[0]  # Keep the preamble (non-repeated beginning)

i = 1
while i < len(parts):
    if i + 1 < len(parts):
        header = parts[i]
        body = parts[i + 1]
        block_key = header.strip() + body.rstrip()
        if block_key not in seen_blocks:
            seen_blocks[block_key] = True
            deduped += header + body
        else:
            pass  # Skip duplicate
        i += 2
    else:
        deduped += parts[i]
        i += 1

new_len = len(deduped.split('\n'))
print(f'Original: {original_len} lines')
print(f'Deduplicated: {new_len} lines')
print(f'Removed: {original_len - new_len} lines')

with open(css_path, 'w') as f:
    f.write(deduped)

print('Done.')

