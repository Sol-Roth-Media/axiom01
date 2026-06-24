#!/usr/bin/env python3
"""Minify axiom.css to create axiom.min.css"""

import re
from pathlib import Path

def minify_css(css_content: str) -> str:
    """Minify CSS by removing unnecessary whitespace and comments."""
    
    # Remove comments
    css_content = re.sub(r'/\*.*?\*/', '', css_content, flags=re.DOTALL)
    
    # Remove whitespace around special characters
    css_content = re.sub(r'\s*{\s*', '{', css_content)
    css_content = re.sub(r'\s*}\s*', '}', css_content)
    css_content = re.sub(r'\s*:\s*', ':', css_content)
    css_content = re.sub(r'\s*;\s*', ';', css_content)
    css_content = re.sub(r'\s*,\s*', ',', css_content)
    css_content = re.sub(r'\s*>\s*', '>', css_content)
    css_content = re.sub(r'\s*\+\s*', '+', css_content)
    css_content = re.sub(r'\s*~\s*', '~', css_content)
    
    # Remove multiple spaces between selectors/properties
    css_content = re.sub(r'\s+', ' ', css_content)
    
    # Remove leading/trailing whitespace
    css_content = css_content.strip()
    
    # Remove space before opening brace in media queries and other at-rules
    css_content = re.sub(r'@media\s+', '@media ', css_content)
    css_content = re.sub(r'@supports\s+', '@supports ', css_content)
    
    return css_content

def main():
    root = Path(__file__).resolve().parents[1]
    source_file = root / "css" / "axiom.css"
    output_file = root / "css" / "axiom.min.css"
    
    if not source_file.exists():
        print(f"Error: Source file not found: {source_file}")
        return 1
    
    # Read source CSS
    print(f"Reading source CSS from: {source_file}")
    css_content = source_file.read_text(encoding='utf-8')
    original_size = len(css_content)
    
    # Minify
    print("Minifying CSS...")
    minified = minify_css(css_content)
    minified_size = len(minified)
    
    # Write minified version
    print(f"Writing minified CSS to: {output_file}")
    output_file.write_text(minified, encoding='utf-8')
    
    # Report
    compression_ratio = ((original_size - minified_size) / original_size) * 100
    print(f"\nMinification complete!")
    print(f"Original size: {original_size:,} bytes")
    print(f"Minified size: {minified_size:,} bytes")
    print(f"Compression: {compression_ratio:.1f}%")
    print(f"Saved: {original_size - minified_size:,} bytes")
    
    return 0

if __name__ == "__main__":
    import sys
    sys.exit(main())
