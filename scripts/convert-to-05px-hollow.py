#!/usr/bin/env python3
"""
Convert Thin variants to 0.5px outlined strokes with bubble/hollow appearance

Changes:
- All Thin variants: 0.5px strokes (vs 0.75px currently)
- Remove ALL fill attributes (ensure pure outline/hollow)
- Wrap in <g fill="none" stroke-width="0.5">
- Result: Bubble characters with empty insides
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

def is_thin_variant(name):
    return 'Thin' in name and 'Inverted' not in name

def convert_to_outline_hollow(svg_content):
    """
    Convert to ultra-thin (0.5px) outlined hollow appearance
    
    Strategy:
    1. Remove old <g> wrapper if present
    2. Remove ALL fill attributes
    3. Remove any opacity
    4. Wrap in <g fill="none" stroke-width="0.5">
    """
    
    # Remove old <g> wrapper
    svg_content = re.sub(r'^<g[^>]*>', '', svg_content)
    svg_content = re.sub(r'</g>$', '', svg_content)
    
    # Remove ALL fill attributes
    svg_content = re.sub(r'\s+fill="[^"]*"', '', svg_content)
    svg_content = re.sub(r'\s+fill=\'[^\']*\'', '', svg_content)
    svg_content = re.sub(r'\s+fill=[^\s>]*', '', svg_content)
    
    # Remove opacity
    svg_content = re.sub(r'\s+opacity="[^"]*"', '', svg_content)
    svg_content = re.sub(r'\s+opacity=\'[^\']*\'', '', svg_content)
    
    # Wrap in group with fill="none" and 0.5px stroke
    outlined = f'<g fill="none" stroke-width="0.5">{svg_content}</g>'
    
    return outlined

def generate_output(icons):
    """Generate updated axicons.js"""
    output_lines = [
        "/**",
        " * Axicons - Ultra-Thin Hollow Outlined v2.4",
        " * Thin variants: 0.5px outlined/hollow icons (bubble characters)",
        " * 1,608 icons (536 concepts × 3 styles)",
        " *",
        " * Changes:",
        " * - Thin variants: 0.5px strokes (ultra-thin)",
        " * - All fills removed (pure outline/hollow)",
        " * - Wrapped in <g fill=\"none\" stroke-width=\"0.5\">",
        " * - Bubble/hollow appearance (empty insides)",
        " */",
        "",
        "const axicons = [",
    ]
    
    for i, icon in enumerate(icons):
        icon_entry = f'    {{ id: {icon["id"]}, name: "{icon["name"]}", svgContent: \'{icon["svgContent"]}\' }}'
        if i < len(icons) - 1:
            icon_entry += ','
        output_lines.append(icon_entry)
    
    output_lines.append("];")
    output_lines.append("")
    output_lines.append("if (typeof module !== 'undefined' && module.exports) {")
    output_lines.append("    module.exports = axicons;")
    output_lines.append("}")
    
    return '\n'.join(output_lines)

def main():
    print("🎨 Converting Thin variants to 0.5px ultra-thin hollow outlines...")
    print()
    
    print("📖 Parsing axicons.js...")
    icons = parse_axicons(AXICONS_FILE)
    print(f"✓ Found {len(icons)} icons")
    print()
    
    print("🔧 Converting Thin variants to 0.5px hollow outlines...")
    converted_count = 0
    
    for icon in icons:
        if is_thin_variant(icon['name']):
            original = icon['svgContent']
            converted = convert_to_outline_hollow(icon['svgContent'])
            icon['svgContent'] = converted
            converted_count += 1
    
    print(f"✓ Converted {converted_count} Thin variants")
    print()
    
    print("✍️  Generating output...")
    output = generate_output(icons)
    
    print("💾 Writing to file...")
    with open(AXICONS_FILE, 'w', encoding='utf-8') as f:
        f.write(output)
    
    print(f"✓ Updated: {AXICONS_FILE}")
    print()
    
    # Verify
    print("🔍 Verifying...")
    new_icons = parse_axicons(AXICONS_FILE)
    verified = sum(
        1 for i in new_icons 
        if 'Thin' in i['name'] 
        and 'fill="none"' in i['svgContent']
        and 'stroke-width="0.5"' in i['svgContent']
    )
    print(f"✓ Verified: {verified} Thin variants with 0.5px outline styling")
    
    print()
    print("✅ Ultra-thin hollow conversion complete!")
    print()
    print("Visual Result:")
    print("  Regular:  2px filled strokes (bold)")
    print("  Thin:     0.5px outlined, hollow (ultra-thin bubble characters)")
    print("  Inverted: Solid background + contrasting symbol")
    print()

if __name__ == '__main__':
    main()
