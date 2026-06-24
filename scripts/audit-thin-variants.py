#!/usr/bin/env python3
"""
Audit script to identify which Thin variants have identical SVG content
to their Regular counterparts (indicates the refactor script failed).
"""

import re
from pathlib import Path

PROJECT_ROOT = Path('/Users/solroth/Sites/axiom01')
AXICONS_FILE = PROJECT_ROOT / 'js' / 'axicons.js'

def parse_axicons(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'const axicons = \[(.*?)\];', content, re.DOTALL)
    if not match:
        raise ValueError("Could not find axicons array")
    
    array_content = match.group(1)
    icons = []
    icon_pattern = r'\{\s*id:\s*(\d+),\s*name:\s*"([^"]+)",\s*svgContent:\s*\'([^\']*)\'\s*\}'
    
    for match in re.finditer(icon_pattern, array_content):
        icon_id = int(match.group(1))
        name = match.group(2)
        svg_content = match.group(3)
        icons.append({
            'id': icon_id,
            'name': name,
            'svgContent': svg_content
        })
    
    return icons

def main():
    print("🔍 Auditing Thin variant SVG content...")
    print()
    
    icons = parse_axicons(AXICONS_FILE)
    
    # Group by concept (Home, HomeThin, HomeInverted, etc.)
    concepts = {}
    for icon in icons:
        # Extract concept name (remove Thin or Inverted suffix)
        concept = icon['name'].replace('Thin', '').replace('Inverted', '')
        
        if concept not in concepts:
            concepts[concept] = {}
        
        if 'Thin' in icon['name']:
            concepts[concept]['Thin'] = icon
        elif 'Inverted' in icon['name']:
            concepts[concept]['Inverted'] = icon
        else:
            concepts[concept]['Regular'] = icon
    
    # Check for identical content
    identical_count = 0
    identical_icons = []
    
    print("Checking Thin vs Regular variants...")
    print()
    
    for concept, variants in concepts.items():
        if 'Regular' in variants and 'Thin' in variants:
            regular = variants['Regular']
            thin = variants['Thin']
            
            if regular['svgContent'] == thin['svgContent']:
                identical_count += 1
                identical_icons.append({
                    'concept': concept,
                    'regular': regular['name'],
                    'thin': thin['name'],
                    'id': regular['id']
                })
    
    print(f"Found {identical_count} Thin variants with IDENTICAL content to Regular:")
    print()
    
    for i, icon in enumerate(identical_icons[:20], 1):
        print(f"{i:3d}. {icon['regular']:30s} ↔ {icon['thin']:30s} (identical)")
    
    if len(identical_icons) > 20:
        print(f"... and {len(identical_icons) - 20} more")
    
    print()
    print(f"Total identical: {identical_count} / {len([i for c in concepts.values() if 'Thin' in c])}")
    print()
    
    if identical_count == 0:
        print("✓ All Thin variants have different content from Regular variants")
    else:
        print(f"⚠️  {identical_count} Thin variants have IDENTICAL content (refactor failed)")
        print()
        print("Sample content:")
        if identical_icons:
            icon_data = [i for i in icons if i['name'] == identical_icons[0]['thin']][0]
            print(f"  {identical_icons[0]['thin']}:")
            print(f"    {icon_data['svgContent'][:100]}...")

if __name__ == '__main__':
    main()
