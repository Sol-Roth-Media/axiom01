#!/usr/bin/env python3
"""
Add opacity to Thin variants for visual distinction

This script adds opacity="0.65" to all Thin variant <g> wrappers,
making them visually distinct from Regular variants through lightness
rather than just stroke width.
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

def add_opacity_to_thin(svg_content, opacity="0.65"):
    """Add opacity to <g stroke-width="1"> wrapper in Thin variants"""
    
    # Check if it's already wrapped with opacity
    if 'opacity=' in svg_content:
        return svg_content  # Already has opacity
    
    # Replace <g stroke-width="1"> with <g stroke-width="1" opacity="0.65">
    updated = re.sub(
        r'<g stroke-width="1">',
        f'<g stroke-width="1" opacity="{opacity}">',
        svg_content
    )
    
    return updated

def generate_output(icons):
    """Generate updated axicons.js"""
    output_lines = [
        "/**",
        " * Axicons - Thin Variant Refinement v2.2",
        " * Thin variants now with opacity for visual distinction",
        " * 1,608 icons (536 concepts × 3 styles)",
        " *",
        " * Changes:",
        " * - Thin variants wrapped in <g stroke-width=\"1\" opacity=\"0.65\">",
        " * - Creates clear visual hierarchy: Regular (bold) vs Thin (light)",
        " * - Elegant, refined appearance for dense layouts",
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
    print("🎨 Adding opacity to Thin variants for visual distinction...")
    print()
    
    print("📖 Parsing axicons.js...")
    icons = parse_axicons(AXICONS_FILE)
    print(f"✓ Found {len(icons)} icons")
    print()
    
    print("🔧 Adding opacity to Thin variants...")
    updated_count = 0
    already_has_opacity = 0
    
    for icon in icons:
        if is_thin_variant(icon['name']):
            original = icon['svgContent']
            updated = add_opacity_to_thin(icon['svgContent'], opacity="0.65")
            
            if original != updated:
                icon['svgContent'] = updated
                updated_count += 1
            else:
                already_has_opacity += 1
    
    print(f"✓ Updated {updated_count} Thin variants with opacity")
    print(f"✓ Already had opacity: {already_has_opacity}")
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
    with_opacity = sum(1 for i in new_icons if 'Thin' in i['name'] and 'opacity="0.65"' in i['svgContent'])
    print(f"✓ Verified: {with_opacity} Thin variants have opacity='0.65'")
    
    print()
    print("✅ Opacity refinement complete!")
    print()
    print("Visual Result:")
    print("  Regular:  2px, 100% opacity (bold, prominent)")
    print("  Thin:     1px, 65% opacity (light, refined)")
    print("  Inverted: Solid background + contrasting symbol")
    print()
    print("Next: Test rendering in browser to verify visual hierarchy.")
    print()

if __name__ == '__main__':
    main()
