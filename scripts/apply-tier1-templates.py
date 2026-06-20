#!/usr/bin/env python3
"""
Phase 2 Tier 1 - Apply templates to top 10 core components
- Button (already done)
- Card
- Forms
- Modal
- Alert
- Badge
- Dropdown
- List
- Navigation
- Tabs
"""

import os
from pathlib import Path

COMPONENTS_DIR = Path(__file__).parent.parent / "docs" / "components"

TIER1_COMPONENTS = {
    "card.html": ("Card", "card"),
    "forms.html": ("Forms", "form"),
    "modal.html": ("Modal", "modal"),
    "alert.html": ("Alert", "alert"),
    "badge.html": ("Badge", "badge"),
    "dropdown.html": ("Dropdown", "dropdown"),
    "list.html": ("List", "list"),
    "navigation.html": ("Navigation", "nav"),
    "tabs.html": ("Tabs", "tabs"),
    "table.html": ("Table", "table"),
}

# Generic related components map
RELATED_MAP = {
    "card": ["media", "adaptive-media-card", "button", "badge", "list"],
    "forms": ["input", "button", "validation", "checkbox", "datepicker"],
    "modal": ["button", "forms", "alert", "drawer", "notification"],
    "alert": ["notification", "badge", "icon", "button", "empty-state"],
    "badge": ["button", "tag", "chip", "status", "label"],
    "dropdown": ["button", "menu", "navigation", "select", "pagination"],
    "list": ["card", "media", "avatar", "badge", "button"],
    "nav": ["button", "breadcrumb", "tabs", "sidebar", "mobile-navbar"],
    "tabs": ["navigation", "button", "card", "pagination", "accordion"],
    "table": ["pagination", "sort", "filter", "search", "export"],
}

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def has_section(content, section_name):
    return f'class="{section_name}"' in content or f'class=\'{section_name}\'' in content

def add_when_to_use(component_name):
    return f"""
					<section class="when-to-use-section">
						<h2><span class="axicon render" data-name="CheckCircle"></span> When to Use {component_name}</h2>
						<div class="when-to-use-cards">
							<div class="when-to-use-card do">
								<h3><span class="icon"><span class="axicon render" data-name="Check"></span></span> Do Use</h3>
								<ul>
									<li>Use this component when you need {component_name.lower()}</li>
									<li>Provides clear semantic meaning</li>
									<li>Improves user experience and accessibility</li>
									<li>Follows Axiom01's design system</li>
									<li>Works across all devices and themes</li>
								</ul>
							</div>

							<div class="when-to-use-card dont">
								<h3><span class="icon"><span class="axicon render" data-name="X"></span></span> Don't Use</h3>
								<ul>
									<li>Don't use for unrelated content</li>
									<li>Avoid nesting inappropriately</li>
									<li>Don't ignore accessibility guidelines</li>
									<li>Avoid hardcoding styles</li>
									<li>Don't skip responsive design</li>
								</ul>
							</div>

							<div class="when-to-use-card consider">
								<h3><span class="icon"><span class="axicon render" data-name="AlertCircle"></span></span> Consider</h3>
								<ul>
									<li>Content structure and semantics</li>
									<li>Accessibility requirements (WCAG AAA)</li>
									<li>Dark mode and theme support</li>
									<li>Mobile and desktop experience</li>
									<li>Performance implications</li>
								</ul>
							</div>
						</div>
					</section>
"""

def add_anatomy(component_name, component_type):
    return f"""
					<section class="anatomy-section">
						<h2><span class="axicon render" data-name="Layout"></span> Anatomy</h2>
						<div class="anatomy-diagram">
							<div class="anatomy-svg">
								<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
									<!-- Visual representation of {component_name} structure -->
									<rect x="30" y="20" width="240" height="60" rx="4" fill="var(--a-color-primary)" opacity="0.1" stroke="var(--a-color-primary)" stroke-width="2"/>
									
									<!-- Component parts -->
									<rect x="50" y="35" width="60" height="30" rx="2" fill="var(--a-color-secondary-container)" stroke="var(--a-color-primary)" stroke-width="1"/>
									<text x="80" y="55" font-family="system-ui" font-size="10" fill="var(--a-color-primary)" text-anchor="middle">Part A</text>
									
									<rect x="130" y="35" width="80" height="30" rx="2" fill="var(--a-color-tertiary-container)" stroke="var(--a-color-primary)" stroke-width="1"/>
									<text x="170" y="55" font-family="system-ui" font-size="10" fill="var(--a-color-primary)" text-anchor="middle">Content</text>
									
									<rect x="230" y="35" width="30" height="30" rx="2" fill="var(--a-color-primary-container)" stroke="var(--a-color-primary)" stroke-width="1"/>
									<text x="245" y="55" font-family="system-ui" font-size="10" fill="var(--a-color-primary)" text-anchor="middle">...</text>
								</svg>
							</div>
							<div class="anatomy-labels">
								<div class="anatomy-label">
									<div class="label-dot"></div>
									<div>
										<h4>Container</h4>
										<p>The main wrapper that holds all component elements. Provides structure, spacing, and styling.</p>
									</div>
								</div>
								<div class="anatomy-label">
									<div class="label-dot"></div>
									<div>
										<h4>Content</h4>
										<p>The primary content area. This is where your main information or interaction happens.</p>
									</div>
								</div>
								<div class="anatomy-label">
									<div class="label-dot"></div>
									<div>
										<h4>Interactive Elements</h4>
										<p>Buttons, icons, or other elements that users interact with. Always keyboard and touch accessible.</p>
									</div>
								</div>
								<div class="anatomy-label">
									<div class="label-dot"></div>
									<div>
										<h4>States & Variants</h4>
										<p>Different states (default, hover, active, disabled) and variants for different use cases.</p>
									</div>
								</div>
							</div>
						</div>
					</section>
"""

def add_related(component_name, component_type, related_list):
    cards_html = ""
    categories = ["similar", "complementary", "alternative"]
    
    for i, related in enumerate(related_list[:6]):
        category = categories[i % len(categories)]
        category_text = {"similar": "Similar", "complementary": "Complementary", "alternative": "Alternative"}[category]
        icon = {"similar": "Link", "complementary": "Zap", "alternative": "Layers"}[category]
        
        cards_html += f"""							<a href="{related}.html" class="related-component-card {category}">
								<div class="category-badge">{category_text}</div>
								<div class="icon"><span class="axicon render" data-name="{icon}"></span></div>
								<h3>{related.replace('-', ' ').title()}</h3>
								<p>Related component</p>
							</a>
"""
    
    return f"""
					<section class="related-components-section">
						<h2><span class="axicon render" data-name="Link"></span> Related Components</h2>
						<p>Explore components that work well with {component_name.lower()} or provide similar functionality.</p>
						<div class="related-components-grid">
{cards_html}						</div>
					</section>
"""

def process_component(filename, component_name, component_type):
    filepath = COMPONENTS_DIR / filename
    
    if not filepath.exists():
        print(f"✗ File not found: {filename}")
        return False
    
    content = read_file(filepath)
    
    # Check what's missing
    needs_when = not has_section(content, "when-to-use-section")
    needs_anatomy = not has_section(content, "anatomy-section")
    needs_related = not has_section(content, "related-components-section")
    
    if not (needs_when or needs_anatomy or needs_related):
        print(f"⏭️  Already complete: {filename}")
        return True
    
    # Get related components
    related = RELATED_MAP.get(component_type, [])
    
    # Build new content to insert
    new_sections = ""
    if needs_anatomy:
        new_sections += add_anatomy(component_name, component_type)
    if needs_when:
        new_sections += add_when_to_use(component_name)
    if needs_related:
        new_sections += add_related(component_name, component_type, related)
    
    # Insert before closing </main>
    if "</main>" in content:
        content = content.replace("</main>", new_sections + "\n</main>")
        write_file(filepath, content)
        print(f"✓ Updated: {filename} ({['anatomy' if needs_anatomy else ''] + ['when-to-use' if needs_when else ''] + ['related' if needs_related else '']})")
        return True
    else:
        print(f"✗ Could not find </main> in {filename}")
        return False

def main():
    print("╔═══════════════════════════════════════════════════════════════╗")
    print("║     Phase 2 Tier 1 - Apply Templates to Core Components     ║")
    print("╚═══════════════════════════════════════════════════════════════╝")
    print()
    
    success = 0
    failed = 0
    
    for filename, (component_name, component_type) in TIER1_COMPONENTS.items():
        if process_component(filename, component_name, component_type):
            success += 1
        else:
            failed += 1
    
    print()
    print(f"Completed: {success}/{len(TIER1_COMPONENTS)} components")
    if failed > 0:
        print(f"Failed: {failed}")
    print()

if __name__ == "__main__":
    main()
