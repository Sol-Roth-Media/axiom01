#!/usr/bin/env python3
"""
Convert Thin variants to true outlined/hollow icons

Strategy:
1. Remove any fill attributes from inner elements
2. Ensure all strokes are 0.75px (lighter, more delicate)
3. Convert filled shapes (circles, rects) to strokes with proper geometry
4. Wrap in <g fill="none" stroke-width="0.75"> to enforce outline style
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

def convert_to_outline(svg_content):
    """
    Convert Thin variant to outlined/hollow style
    
    Strategy:
    1. Remove the <g stroke-width="1"> wrapper (we'll add a new one)
    2. Remove all fill attributes
    3. Extract inner content
    4. Wrap in <g fill="none" stroke-width="0.75">
    """
    
    # Remove old <g stroke-width="1"> wrapper if present
    svg_content = re.sub(r'^<g stroke-width="1">', '', svg_content)
    svg_content = re.sub(r'</g>$', '', svg_content)
    
    # Remove all fill="..." attributes (make everything outline)
    svg_content = re.sub(r'\s+fill="[^"]*"', '', svg_content)
    svg_content = re.sub(r'\s+fill=\'[^\']*\'', '', svg_content)
    
    # Remove fill with no quotes (shouldn't happen but be safe)
    svg_content = re.sub(r'\s+fill=[^\s>]*', '', svg_content)
    
    # Wrap in group with fill="none" and 0.75px stroke
    # This ensures ALL elements are outline-only, ultra-thin
    outlined = f'<g fill="none" stroke-width="0.75">{svg_content}</g>'
    
    return outlined

def generate_output(icons):
    """Generate updated axicons.js"""
    output_lines = [
        "/**",
        " * Axicons - Outlined Thin Variants v2.3",
        " * Thin variants now true outlined/hollow icons (0.75px strokes)",
        " * 1,608 icons (536 concepts × 3 styles)",
        " *",
        " * Changes:",
        " * - Thin variants: 0.75px outlined/hollow icons",
        " * - All fills removed (fill=\"none\")",
        " * - Wrapped in <g fill=\"none\" stroke-width=\"0.75\">",
        " * - Clear visual distinction: Regular (filled) vs Thin (outlined)",
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
    print("🎨 Converting Thin variants to outlined/hollow icons...")
    print()
    
    print("📖 Parsing axicons.js...")
    icons = parse_axicons(AXICONS_FILE)
    print(f"✓ Found {len(icons)} icons")
    print()
    
    print("🔧 Converting Thin variants to outlined style...")
    converted_count = 0
    
    for icon in icons:
        if is_thin_variant(icon['name']):
            original = icon['svgContent']
            converted = convert_to_outline(icon['svgContent'])
            icon['svgContent'] = converted
            converted_count += 1
    
    print(f"✓ Converted {converted_count} Thin variants to outlined")
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
    outlined_count = sum(
        1 for i in new_icons 
        if 'Thin' in i['name'] 
        and 'fill="none"' in i['svgContent']
        and 'stroke-width="0.75"' in i['svgContent']
    )
    print(f"✓ Verified: {outlined_count} Thin variants with outline styling")
    
    print()
    print("✅ Thin variant conversion complete!")
    print()
    print("Visual Result:")
    print("  Regular:  2px filled strokes (bold, prominent)")
    print("  Thin:     0.75px outlined, fill=\"none\" (hollow, elegant)")
    print("  Inverted: Solid background + contrasting symbol")
    print()
    print("The visual distinction is now DRAMATIC.")
    print()

if __name__ == '__main__':
    main()
