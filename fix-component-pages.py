#!/usr/bin/env python3
"""
Component Pages Consistency Fixer - Phase 3
Complete Font Awesome to Axicons replacement
"""

import os
import re
from pathlib import Path

COMPONENT_DIR = Path("/Users/solroth/Sites/axiom01/docs/components")

# Complete Font Awesome to Axicons mapping
FA_TO_AXICONS = {
    # Header/Navigation icons
    r'<i class="fas fa-search"[^>]*></i>': '<span class="axicon render" data-name="Search"></span>',
    r'<i class="fas fa-moon"[^>]*></i>': '<span class="axicon render" data-name="Moon"></span>',
    r'<i class="fas fa-sun"[^>]*></i>': '<span class="axicon render" data-name="Sun"></span>',
    r'<i class="fas fa-bars"[^>]*></i>': '<span class="axicon render" data-name="Menu"></span>',
    r'<i class="fab fa-github"[^>]*></i>': '<span class="axicon render" data-name="Brand-Github"></span>',
    r'<i class="fab fa-linkedin"[^>]*></i>': '<span class="axicon render" data-name="Brand-Linkedin"></span>',
    r'<i class="fab fa-twitter"[^>]*></i>': '<span class="axicon render" data-name="Brand-X"></span>',
    
    # Status/Feedback icons
    r'<i class="fas fa-check"[^>]*></i>': '<span class="axicon render" data-name="Check"></span>',
    r'<i class="fas fa-check-circle"[^>]*></i>': '<span class="axicon render" data-name="Check-Circle"></span>',
    r'<i class="fas fa-times-circle"[^>]*></i>': '<span class="axicon render" data-name="X-Circle"></span>',
    r'<i class="fas fa-exclamation-triangle"[^>]*></i>': '<span class="axicon render" data-name="Alert-Triangle"></span>',
    r'<i class="fas fa-exclamation-circle"[^>]*></i>': '<span class="axicon render" data-name="Alert-Circle"></span>',
    r'<i class="fas fa-info-circle"[^>]*></i>': '<span class="axicon render" data-name="Info"></span>',
    r'<i class="fas fa-question-circle"[^>]*></i>': '<span class="axicon render" data-name="Help-Circle"></span>',
    
    # UI Control icons
    r'<i class="fas fa-cog"[^>]*></i>': '<span class="axicon render" data-name="Settings"></span>',
    r'<i class="fas fa-cogs"[^>]*></i>': '<span class="axicon render" data-name="Settings"></span>',
    r'<i class="fas fa-bell"[^>]*></i>': '<span class="axicon render" data-name="Bell"></span>',
    r'<i class="fas fa-shield-alt"[^>]*></i>': '<span class="axicon render" data-name="Shield"></span>',
    r'<i class="fas fa-lock"[^>]*></i>': '<span class="axicon render" data-name="Lock"></span>',
    r'<i class="fas fa-unlock"[^>]*></i>': '<span class="axicon render" data-name="Unlock"></span>',
    r'<i class="fas fa-eye"[^>]*></i>': '<span class="axicon render" data-name="Eye"></span>',
    r'<i class="fas fa-eye-slash"[^>]*></i>': '<span class="axicon render" data-name="Eye-Off"></span>',
    
    # File/Folder icons
    r'<i class="fas fa-file"[^>]*></i>': '<span class="axicon render" data-name="File"></span>',
    r'<i class="fas fa-file-text"[^>]*></i>': '<span class="axicon render" data-name="File-Text"></span>',
    r'<i class="fas fa-folder"[^>]*></i>': '<span class="axicon render" data-name="Folder"></span>',
    r'<i class="fas fa-folder-open"[^>]*></i>': '<span class="axicon render" data-name="Folder-Plus"></span>',
    r'<i class="fas fa-box-open"[^>]*></i>': '<span class="axicon render" data-name="Package"></span>',
    
    # Document/Edit icons
    r'<i class="fas fa-edit"[^>]*></i>': '<span class="axicon render" data-name="Edit"></span>',
    r'<i class="fas fa-save"[^>]*></i>': '<span class="axicon render" data-name="Download"></span>',
    r'<i class="fas fa-trash"[^>]*></i>': '<span class="axicon render" data-name="Trash"></span>',
    r'<i class="fas fa-copy"[^>]*></i>': '<span class="axicon render" data-name="Copy"></span>',
    r'<i class="fas fa-link"[^>]*></i>': '<span class="axicon render" data-name="Attachment"></span>',
    r'<i class="fas fa-code"[^>]*></i>': '<span class="axicon render" data-name="Code"></span>',
    
    # Navigation/Direction icons
    r'<i class="fas fa-home"[^>]*></i>': '<span class="axicon render" data-name="Compass"></span>',
    r'<i class="fas fa-arrow-left"[^>]*></i>': '<span class="axicon render" data-name="Navigation"></span>',
    r'<i class="fas fa-arrow-right"[^>]*></i>': '<span class="axicon render" data-name="Send"></span>',
    r'<i class="fas fa-arrow-up"[^>]*></i>': '<span class="axicon render" data-name="Upload"></span>',
    r'<i class="fas fa-arrow-down"[^>]*></i>': '<span class="axicon render" data-name="Download"></span>',
    r'<i class="fas fa-arrows-alt"[^>]*></i>': '<span class="axicon render" data-name="Maximize"></span>',
    
    # Media icons
    r'<i class="fas fa-image"[^>]*></i>': '<span class="axicon render" data-name="Image"></span>',
    r'<i class="fas fa-images"[^>]*></i>': '<span class="axicon render" data-name="Image"></span>',
    r'<i class="fas fa-camera"[^>]*></i>': '<span class="axicon render" data-name="Camera"></span>',
    r'<i class="fas fa-video"[^>]*></i>': '<span class="axicon render" data-name="Video"></span>',
    r'<i class="fas fa-film"[^>]*></i>': '<span class="axicon render" data-name="Tv"></span>',
    r'<i class="fas fa-play-circle"[^>]*></i>': '<span class="axicon render" data-name="Play"></span>',
    r'<i class="fas fa-play"[^>]*></i>': '<span class="axicon render" data-name="Play"></span>',
    r'<i class="fas fa-pause"[^>]*></i>': '<span class="axicon render" data-name="Pause"></span>',
    r'<i class="fas fa-stop"[^>]*></i>': '<span class="axicon render" data-name="Stop"></span>',
    
    # Interaction icons
    r'<i class="fas fa-download"[^>]*></i>': '<span class="axicon render" data-name="Download"></span>',
    r'<i class="fas fa-upload"[^>]*></i>': '<span class="axicon render" data-name="Upload"></span>',
    r'<i class="fas fa-cloud-upload-alt"[^>]*></i>': '<span class="axicon render" data-name="Upload"></span>',
    r'<i class="fas fa-plus"[^>]*></i>': '<span class="axicon render" data-name="Zap"></span>',
    r'<i class="fas fa-minus"[^>]*></i>': '<span class="axicon render" data-name="Filter"></span>',
    r'<i class="fas fa-times"[^>]*></i>': '<span class="axicon render" data-name="X"></span>',
    
    # Time/Calendar icons
    r'<i class="fas fa-clock"[^>]*></i>': '<span class="axicon render" data-name="Clock"></span>',
    r'<i class="fas fa-calendar"[^>]*></i>': '<span class="axicon render" data-name="Calendar"></span>',
    r'<i class="fas fa-history"[^>]*></i>': '<span class="axicon render" data-name="History"></span>',
    
    # Data/Analytics icons
    r'<i class="fas fa-chart-line"[^>]*></i>': '<span class="axicon render" data-name="Chart-Line"></span>',
    r'<i class="fas fa-chart-bar"[^>]*></i>': '<span class="axicon render" data-name="Chart-Bar"></span>',
    r'<i class="fas fa-database"[^>]*></i>': '<span class="axicon render" data-name="Database"></span>',
    r'<i class="fas fa-server"[^>]*></i>': '<span class="axicon render" data-name="Server"></span>',
    r'<i class="fas fa-laptop"[^>]*></i>': '<span class="axicon render" data-name="Laptop"></span>',
    r'<i class="fas fa-mobile-alt"[^>]*></i>': '<span class="axicon render" data-name="Phone-Mobile"></span>',
    
    # Other common icons
    r'<i class="fas fa-book"[^>]*></i>': '<span class="axicon render" data-name="Book"></span>',
    r'<i class="fas fa-lightbulb"[^>]*></i>': '<span class="axicon render" data-name="Lightbulb"></span>',
    r'<i class="fas fa-star"[^>]*></i>': '<span class="axicon render" data-name="Target"></span>',
    r'<i class="fas fa-heart"[^>]*></i>': '<span class="axicon render" data-name="Heart-Eyes"></span>',
    r'<i class="fas fa-zap"[^>]*></i>': '<span class="axicon render" data-name="Zap"></span>',
    r'<i class="fas fa-rocket"[^>]*></i>': '<span class="axicon render" data-name="Zap"></span>',
    r'<i class="fas fa-magic"[^>]*></i>': '<span class="axicon render" data-name="Ai-Sparkles"></span>',
    r'<i class="fas fa-tag"[^>]*></i>': '<span class="axicon render" data-name="Tag"></span>',
    r'<i class="fas fa-tags"[^>]*></i>': '<span class="axicon render" data-name="Tag"></span>',
    r'<i class="fas fa-user"[^>]*></i>': '<span class="axicon render" data-name="User"></span>',
    r'<i class="fas fa-users"[^>]*></i>': '<span class="axicon render" data-name="Users"></span>',
    r'<i class="fas fa-user-check"[^>]*></i>': '<span class="axicon render" data-name="User-Check"></span>',
    r'<i class="fas fa-list"[^>]*></i>': '<span class="axicon render" data-name="List-Unordered"></span>',
    r'<i class="fas fa-palette"[^>]*></i>': '<span class="axicon render" data-name="Ai-Sparkles"></span>',
    r'<i class="fas fa-swatchbook"[^>]*></i>': '<span class="axicon render" data-name="Ai-Sparkles"></span>',
    r'<i class="fas fa-map"[^>]*></i>': '<span class="axicon render" data-name="Map-Pin"></span>',
    r'<i class="fas fa-globe"[^>]*></i>': '<span class="axicon render" data-name="Globe"></span>',
}

def replace_font_awesome(content):
    """Replace Font Awesome icons with Axicons"""
    for fa_pattern, axicon_replacement in FA_TO_AXICONS.items():
        content = re.sub(fa_pattern, axicon_replacement, content, flags=re.IGNORECASE)
    
    return content

def fix_page(filepath):
    """Fix a single page"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Replace Font Awesome icons
    content = replace_font_awesome(content)
    
    # Write back if changed
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    """Process all component pages"""
    print("=" * 60)
    print("COMPONENT PAGES - FONT AWESOME REPLACEMENT PHASE 3")
    print("=" * 60)
    print()
    
    pages = list(COMPONENT_DIR.glob("*.html"))
    print(f"Found {len(pages)} component pages")
    print()
    
    fixed_count = 0
    for page in sorted(pages):
        if fix_page(page):
            fixed_count += 1
            print(f"Updated {page.name}")
    
    print()
    print(f"Updated {fixed_count} pages")
    print("=" * 60)

if __name__ == "__main__":
    main()
