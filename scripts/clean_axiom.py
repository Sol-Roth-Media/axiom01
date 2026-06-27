import re
from pathlib import Path

def clean_css():
    css_path = Path('css/axiom.css')
    content = css_path.read_text()
    
    # 1. Remove the entire `/* --- Core Variables --- */` up to `/* --- Base & Reset --- */`
    # This covers both the `:root` and `[data-theme="dark"]` blocks which are redundant.
    pattern = re.compile(r'/\* --- Core Variables --- \*/.*?/\* --- Base & Reset --- \*/', re.DOTALL)
    if pattern.search(content):
        content = pattern.sub('/* --- Base & Reset --- */', content)
        print("Removed core variables block.")
    
    # 2. Remove the dark mode overrides for hero, since they should be handled by variables
    hero_pattern = re.compile(r'/\* Ensure hero text and buttons remain high-contrast and vibrant \*/.*?\[data-theme="dark"\] section\.hero \.button\.outline \{[^}]*\}', re.DOTALL)
    if hero_pattern.search(content):
        content = hero_pattern.sub('', content)
        print("Removed hero dark mode overrides.")

    # 3. Remove dark mode overrides for search-modal-content and component-browser header
    search_modal_pattern = re.compile(r'\[data-theme="dark"\] \.search-modal-content,.*?border-color: #424242;\n}', re.DOTALL)
    if search_modal_pattern.search(content):
        content = search_modal_pattern.sub('', content)
        print("Removed search modal dark mode overrides.")

    # 4. Remove the other dark mode hero styling block
    hero2_pattern = re.compile(r'/\* Dark mode hero styling \*/.*?\[data-theme="dark"\] section\.hero \{[^}]*\}', re.DOTALL)
    if hero2_pattern.search(content):
        content = hero2_pattern.sub('', content)
        print("Removed secondary hero dark mode styling.")
        
    css_path.write_text(content)
    print("Done cleaning axiom.css")

if __name__ == '__main__':
    clean_css()
