#!/usr/bin/env python3
"""Minify axiom.js to create axiom.min.js"""

import re
from pathlib import Path

def minify_js(js_content: str) -> str:
    """Minify JavaScript by removing unnecessary whitespace and comments."""
    
    # Remove single-line comments
    js_content = re.sub(r'//.*?$', '', js_content, flags=re.MULTILINE)
    
    # Remove multi-line comments
    js_content = re.sub(r'/\*.*?\*/', '', js_content, flags=re.DOTALL)
    
    # Remove whitespace around operators and special characters
    js_content = re.sub(r'\s*{\s*', '{', js_content)
    js_content = re.sub(r'\s*}\s*', '}', js_content)
    js_content = re.sub(r'\s*;\s*', ';', js_content)
    js_content = re.sub(r'\s*,\s*', ',', js_content)
    js_content = re.sub(r'\s*:\s*', ':', js_content)
    js_content = re.sub(r'\s*\(\s*', '(', js_content)
    js_content = re.sub(r'\s*\)\s*', ')', js_content)
    js_content = re.sub(r'\s*\[\s*', '[', js_content)
    js_content = re.sub(r'\s*\]\s*', ']', js_content)
    js_content = re.sub(r'\s*=\s*', '=', js_content)
    js_content = re.sub(r'\s*\?\s*', '?', js_content)
    
    # Remove multiple spaces (but preserve necessary ones)
    js_content = re.sub(r'  +', ' ', js_content)
    
    # Remove unnecessary spaces around operators that don't affect functionality
    # Keep spaces in keywords like 'function', 'if', 'for', etc. for safety
    js_content = re.sub(r'\s+function\s+', ' function ', js_content)
    js_content = re.sub(r'\s+if\s+', ' if ', js_content)
    js_content = re.sub(r'\s+else\s+', ' else ', js_content)
    js_content = re.sub(r'\s+for\s+', ' for ', js_content)
    js_content = re.sub(r'\s+while\s+', ' while ', js_content)
    js_content = re.sub(r'\s+return\s+', ' return ', js_content)
    js_content = re.sub(r'\s+const\s+', ' const ', js_content)
    js_content = re.sub(r'\s+let\s+', ' let ', js_content)
    js_content = re.sub(r'\s+var\s+', ' var ', js_content)
    
    # Remove leading/trailing whitespace
    js_content = js_content.strip()
    
    return js_content

def main():
    root = Path(__file__).resolve().parents[1]
    source_file = root / "js" / "axiom.js"
    output_file = root / "js" / "axiom.min.js"
    
    if not source_file.exists():
        print(f"Error: Source file not found: {source_file}")
        return 1
    
    # Read source JS
    print(f"Reading source JS from: {source_file}")
    js_content = source_file.read_text(encoding='utf-8')
    original_size = len(js_content)
    
    # Minify
    print("Minifying JavaScript...")
    minified = minify_js(js_content)
    minified_size = len(minified)
    
    # Write minified version
    print(f"Writing minified JS to: {output_file}")
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
