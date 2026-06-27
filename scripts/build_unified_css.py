#!/usr/bin/env python3
"""Build unified axiom.min.css with all partials inlined (no @import statements)"""

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
    css_content = re.sub(r'\s*~\s*', '~', css_content)
    
    # Remove multiple spaces between selectors/properties
    css_content = re.sub(r'\s+', ' ', css_content)
    
    # Remove leading/trailing whitespace
    css_content = css_content.strip()
    
    return css_content

def build_unified_css():
    """Build unified CSS by inlining all partials."""
    
    root = Path(__file__).resolve().parents[1]
    css_dir = root / "css"
    
    # Files to include in order (no @import statements, just content)
    files_to_inline = [
        "_variables.css",
        "_animations.css", 
        "_utilities.css",
        "axiom_config.css",
    ]
    
    # Start with basic structure from source
    source_file = css_dir / "axiom.css"
    if not source_file.exists():
        print(f"Error: Source file not found: {source_file}")
        return 1
    
    print(f"Reading source CSS from: {source_file}")
    source_content = source_file.read_text(encoding='utf-8')
    
    # Remove all @import statements from source, including those with layer()
    unified_css = re.sub(r'@import\s+url\([^)]+\)(?:\s+layer\([^)]+\))?;?\s*', '', source_content)
    
    # Read and append all partial files
    for partial_file in files_to_inline:
        partial_path = css_dir / partial_file
        if partial_path.exists():
            print(f"  Including: {partial_file}")
            partial_content = partial_path.read_text(encoding='utf-8')
            # Remove comments from partial
            partial_content = re.sub(r'/\*.*?\*/', '', partial_content, flags=re.DOTALL)
            
            if partial_file in ['_variables.css', 'axiom_config.css']:
                layer = 'axiom.tokens'
            elif partial_file in ['_animations.css', '_utilities.css']:
                layer = 'axiom.utilities'
            else:
                layer = 'axiom.components'
                
            unified_css += f"\n@layer {layer} {{\n{partial_content}\n}}\n"
        else:
            print(f"  Warning: Partial file not found: {partial_file}")
    
    original_size = len(unified_css)
    
    # Minify the unified CSS
    print("\nMinifying unified CSS...")
    minified = minify_css(unified_css)
    minified_size = len(minified)
    
    # Write minified version
    output_file = css_dir / "axiom.min.css"
    print(f"Writing minified CSS to: {output_file}")
    output_file.write_text(minified, encoding='utf-8')
    
    # Report
    compression_ratio = ((original_size - minified_size) / original_size) * 100
    print(f"\nUnified CSS build complete!")
    print(f"Original unified size: {original_size:,} bytes")
    print(f"Minified size: {minified_size:,} bytes")
    print(f"Compression: {compression_ratio:.1f}%")
    print(f"Saved: {original_size - minified_size:,} bytes")
    
    # Verify no imports remain
    if "@import" in minified:
        print("\n⚠️  WARNING: Minified CSS still contains @import statements!")
        return 1
    else:
        print("\n✅ Verified: No @import statements in output (safe for GitHub Pages)")
    
    return 0

if __name__ == "__main__":
    import sys
    sys.exit(build_unified_css())
