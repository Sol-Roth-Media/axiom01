#!/usr/bin/env python3
"""
Add code-copy.js script to all HTML documentation pages
"""

import os
import re
from pathlib import Path

DOCS_DIR = Path("/Users/solroth/Sites/axiom01")
SCRIPT_TAG = '<script src="../../js/code-copy.js"></script>'
PATTERN = r'(<script src="../../js/index-page-manager\.js"><\/script>)'

def add_script_to_file(filepath):
    """Add code-copy.js script before index-page-manager.js"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if script already included
    if 'code-copy.js' in content:
        return False
    
    # Check if index-page-manager is there
    if 'index-page-manager.js' not in content:
        return False
    
    # Replace
    new_content = re.sub(
        PATTERN,
        SCRIPT_TAG + '\n\t<script src="../../js/index-page-manager.js"></script>',
        content
    )
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    
    return False

def main():
    # Add to docs pages
    docs_html = list(DOCS_DIR.glob("docs/*.html"))
    # Add to component pages
    components_html = list(DOCS_DIR.glob("docs/components/*.html"))
    
    all_files = docs_html + components_html
    
    updated = 0
    skipped = 0
    
    for filepath in all_files:
        if add_script_to_file(filepath):
            updated += 1
            print(f"✓ {filepath.name}")
        else:
            skipped += 1
    
    print(f"\nUpdated: {updated}")
    print(f"Skipped: {skipped}")

if __name__ == "__main__":
    main()
