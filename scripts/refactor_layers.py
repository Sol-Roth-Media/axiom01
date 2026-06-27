import re
from pathlib import Path

def refactor():
    css_file = Path('/Users/solroth/Sites/axiom01/css/axiom.css')
    content = css_file.read_text(encoding='utf-8')

    # Step 1: Add layers declaration at the top
    layers_decl = "@layer axiom.reset, axiom.tokens, axiom.base, axiom.layout, axiom.components, axiom.utilities;\n\n"
    
    # Step 2: Update imports
    content = re.sub(r'(@import\s+url\([^)]+\);)', lambda m: m.group(1).replace(';', '') + ' layer(axiom.tokens);' if '_variables.css' in m.group(1) or 'axiom_config.css' in m.group(1) else m.group(1).replace(';', '') + ' layer(axiom.utilities);' if '_animations.css' in m.group(1) or '_utilities.css' in m.group(1) else m.group(1).replace(';', '') + ' layer(axiom.components);', content)

    # Step 3: Wrap reset and base styles
    # We will just find the start of reset
    reset_start_idx = content.find("/* _reset.css */")
    
    # Components start
    comp_start_idx = content.find("/* === COMPONENT STYLES FROM _components.css === */")
    
    # Utilities start - actually it looks like all the rest is just components or base
    
    if reset_start_idx != -1 and comp_start_idx != -1:
        top_part = content[:reset_start_idx]
        base_part = content[reset_start_idx:comp_start_idx]
        comp_part = content[comp_start_idx:]
        
        # We need to wrap base_part and comp_part
        new_content = layers_decl + top_part.strip() + "\n\n@layer axiom.base {\n" + base_part + "\n}\n\n@layer axiom.components {\n" + comp_part + "\n}\n"
        
        css_file.write_text(new_content, encoding='utf-8')
        print("Successfully refactored axiom.css with @layer!")
    else:
        print("Could not find sections!")

if __name__ == '__main__':
    refactor()
