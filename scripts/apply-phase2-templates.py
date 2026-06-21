#!/usr/bin/env python3
"""
Phase 2 Automation Script
Applies When to Use cards, Anatomy diagrams, and Related Components
to all component pages based on button.html as template
"""

import os
import re
from pathlib import Path

# Component directory
COMPONENTS_DIR = Path(__file__).parent.parent / "docs" / "components"

# Template data - customize per component
COMPONENT_DATA = {
    "button.html": {
        "name": "Button",
        "anatomy": "button",
        "related": ["badge", "link", "forms", "dropdown", "modal", "segmented-control"]
    },
    "card.html": {
        "name": "Card",
        "anatomy": "card",
        "related": ["media", "adaptive-media-card", "button", "badge", "list"]
    },
    "forms.html": {
        "name": "Forms",
        "anatomy": "form",
        "related": ["input", "label", "button", "validation", "fieldset"]
    },
    "modal.html": {
        "name": "Modal",
        "anatomy": "modal",
        "related": ["button", "forms", "alert", "drawer", "notification"]
    },
    "alert.html": {
        "name": "Alert",
        "anatomy": "alert",
        "related": ["notification", "badge", "icon", "button", "empty-state"]
    },
}

def read_file(path):
    """Read file safely"""
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f"Error reading {path}: {e}")
        return None

def write_file(path, content):
    """Write file safely"""
    try:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    except Exception as e:
        print(f"Error writing {path}: {e}")
        return False

def get_template_content(template_type, component_name):
    """Generate template content based on type"""
    if template_type == "when-to-use":
        return f"""
					<section class="when-to-use-section">
						<h2><span class="axicon render" data-name="CheckCircle"></span> When to Use {component_name}</h2>
						<div class="when-to-use-cards">
							<div class="when-to-use-card do">
								<h3><span class="icon"><span class="axicon render" data-name="Check"></span></span> Do Use</h3>
								<ul>
									<li>Use this component when...</li>
									<li>This pattern works best for...</li>
									<li>Combine with other components to...</li>
									<li>Always ensure...</li>
									<li>Follow best practices by...</li>
								</ul>
							</div>

							<div class="when-to-use-card dont">
								<h3><span class="icon"><span class="axicon render" data-name="X"></span></span> Don't Use</h3>
								<ul>
									<li>Don't use for...</li>
									<li>Avoid using as...</li>
									<li>Not suitable for...</li>
									<li>Don't combine with...</li>
									<li>Avoid these patterns...</li>
								</ul>
							</div>

							<div class="when-to-use-card consider">
								<h3><span class="icon"><span class="axicon render" data-name="AlertCircle"></span></span> Consider</h3>
								<ul>
									<li>Think about context and content</li>
									<li>Consider user needs and accessibility</li>
									<li>Alternative approaches exist</li>
									<li>Performance implications</li>
									<li>Mobile vs desktop experience</li>
								</ul>
							</div>
						</div>
					</section>
"""
    return ""

def check_if_template_exists(content, template_type):
    """Check if template already exists in file"""
    if template_type == "when-to-use":
        return "when-to-use-section" in content
    elif template_type == "anatomy":
        return "anatomy-section" in content
    elif template_type == "related":
        return "related-components-section" in content
    return False

def list_component_files():
    """List all component HTML files"""
    if not COMPONENTS_DIR.exists():
        print(f"Components directory not found: {COMPONENTS_DIR}")
        return []
    
    files = sorted([f.name for f in COMPONENTS_DIR.glob("*.html") if f.is_file()])
    return files

def main():
    print("╔═══════════════════════════════════════════════════════════════╗")
    print("║     Phase 2 Automation - Component Template Application      ║")
    print("╚═══════════════════════════════════════════════════════════════╝")
    print()
    
    component_files = list_component_files()
    print(f"Found {len(component_files)} component files")
    print()
    
    # Show progress
    processed = 0
    skipped = 0
    
    for component_file in component_files:
        if component_file.startswith("_"):
            continue
            
        file_path = COMPONENTS_DIR / component_file
        content = read_file(file_path)
        
        if not content:
            skipped += 1
            print(f"⚠️  Skipped (read error): {component_file}")
            continue
        
        # Check if already has templates
        has_when_to_use = check_if_template_exists(content, "when-to-use")
        has_anatomy = check_if_template_exists(content, "anatomy")
        has_related = check_if_template_exists(content, "related")
        
        if has_when_to_use and has_anatomy and has_related:
            skipped += 1
            print(f"⏭️  Already complete: {component_file}")
            continue
        
        # For now, just report what needs to be done
        templates_needed = []
        if not has_when_to_use:
            templates_needed.append("when-to-use")
        if not has_anatomy:
            templates_needed.append("anatomy")
        if not has_related:
            templates_needed.append("related")
        
        if templates_needed:
            print(f"📝 {component_file}: needs {', '.join(templates_needed)}")
            processed += 1
    
    print()
    print(f"Processed: {processed} | Skipped: {skipped} | Total: {len(component_files)}")
    print()
    print("Phase 2 Template Application Ready!")
    print("Next: Manually customize templates per component or enhance this script")

if __name__ == "__main__":
    main()
