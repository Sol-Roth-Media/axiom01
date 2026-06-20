#!/usr/bin/env python3
"""
Phase 2 Tier 2 - Apply templates to ALL remaining 63 components
Bulk batch processing
"""

import os
from pathlib import Path

COMPONENTS_DIR = Path(__file__).parent.parent / "docs" / "components"

# Skip button (already done in Phase 1) and Tier 1 components
SKIP_COMPONENTS = {
    "button.html", "card.html", "forms.html", "modal.html", 
    "alert.html", "badge.html", "dropdown.html", "list.html", 
    "navigation.html", "tabs.html", "table.html", "_sidebar.html"
}

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def extract_component_name(filename):
    return filename.replace(".html", "").replace("-", " ").title()

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
									<li>Use this component for its intended purpose</li>
									<li>Follow the semantic structure</li>
									<li>Implement proper accessibility</li>
									<li>Respect responsive design principles</li>
									<li>Use design tokens for customization</li>
								</ul>
							</div>

							<div class="when-to-use-card dont">
								<h3><span class="icon"><span class="axicon render" data-name="X"></span></span> Don't Use</h3>
								<ul>
									<li>Don't modify core structure unnecessarily</li>
									<li>Avoid hardcoding styles or colors</li>
									<li>Don't skip accessibility features</li>
									<li>Avoid responsive design gotchas</li>
									<li>Don't duplicate when a component exists</li>
								</ul>
							</div>

							<div class="when-to-use-card consider">
								<h3><span class="icon"><span class="axicon render" data-name="AlertCircle"></span></span> Consider</h3>
								<ul>
									<li>Your specific use case and context</li>
									<li>User accessibility needs (WCAG AAA)</li>
									<li>Dark mode and theme variations</li>
									<li>Mobile and desktop experiences</li>
									<li>Performance optimization</li>
								</ul>
							</div>
						</div>
					</section>
"""

def add_anatomy(component_name):
    return f"""
					<section class="anatomy-section">
						<h2><span class="axicon render" data-name="Layout"></span> Anatomy</h2>
						<div class="anatomy-diagram">
							<div class="anatomy-svg">
								<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
									<rect x="30" y="20" width="240" height="60" rx="4" fill="var(--a-color-primary)" opacity="0.1" stroke="var(--a-color-primary)" stroke-width="2"/>
									<rect x="50" y="35" width="60" height="30" rx="2" fill="var(--a-color-secondary-container)" stroke="var(--a-color-primary)" stroke-width="1"/>
									<text x="80" y="55" font-family="system-ui" font-size="10" fill="var(--a-color-primary)" text-anchor="middle">Part</text>
									<rect x="130" y="35" width="80" height="30" rx="2" fill="var(--a-color-tertiary-container)" stroke="var(--a-color-primary)" stroke-width="1"/>
									<text x="170" y="55" font-family="system-ui" font-size="10" fill="var(--a-color-primary)" text-anchor="middle">Content</text>
									<rect x="230" y="35" width="30" height="30" rx="2" fill="var(--a-color-primary-container)" stroke="var(--a-color-primary)" stroke-width="1"/>
									<text x="245" y="55" font-family="system-ui" font-size="10" fill="var(--a-color-primary)" text-anchor="middle">…</text>
								</svg>
							</div>
							<div class="anatomy-labels">
								<div class="anatomy-label">
									<div class="label-dot"></div>
									<div>
										<h4>Container</h4>
										<p>Wraps component elements and provides structure, spacing, and styling consistency.</p>
									</div>
								</div>
								<div class="anatomy-label">
									<div class="label-dot"></div>
									<div>
										<h4>Content Area</h4>
										<p>Primary content section where information is displayed or input is collected.</p>
									</div>
								</div>
								<div class="anatomy-label">
									<div class="label-dot"></div>
									<div>
										<h4>Interactive Parts</h4>
										<p>Buttons, toggles, or controls. Always keyboard accessible and touch-friendly.</p>
									</div>
								</div>
								<div class="anatomy-label">
									<div class="label-dot"></div>
									<div>
										<h4>States & Variants</h4>
										<p>Different states (normal, hover, active, disabled) and size/color variants supported.</p>
									</div>
								</div>
							</div>
						</div>
					</section>
"""

def add_related(component_name):
    return f"""
					<section class="related-components-section">
						<h2><span class="axicon render" data-name="Link"></span> Related Components</h2>
						<p>Explore other components that may work well with {component_name.lower()} or serve similar purposes.</p>
						<div class="related-components-grid">
							<a href="button.html" class="related-component-card similar">
								<div class="category-badge">Similar</div>
								<div class="icon"><span class="axicon render" data-name="Link"></span></div>
								<h3>Button</h3>
								<p>Interactive action element</p>
							</a>

							<a href="card.html" class="related-component-card complementary">
								<div class="category-badge">Complementary</div>
								<div class="icon"><span class="axicon render" data-name="Zap"></span></div>
								<h3>Card</h3>
								<p>Content container</p>
							</a>

							<a href="badge.html" class="related-component-card similar">
								<div class="category-badge">Similar</div>
								<div class="icon"><span class="axicon render" data-name="Link"></span></div>
								<h3>Badge</h3>
								<p>Status indicator</p>
							</a>

							<a href="list.html" class="related-component-card complementary">
								<div class="category-badge">Complementary</div>
								<div class="icon"><span class="axicon render" data-name="Zap"></span></div>
								<h3>List</h3>
								<p>Item collections</p>
							</a>

							<a href="navigation.html" class="related-component-card similar">
								<div class="category-badge">Similar</div>
								<div class="icon"><span class="axicon render" data-name="Link"></span></div>
								<h3>Navigation</h3>
								<p>Menu and routing</p>
							</a>

							<a href="modal.html" class="related-component-card alternative">
								<div class="category-badge">Alternative</div>
								<div class="icon"><span class="axicon render" data-name="Layers"></span></div>
								<h3>Modal</h3>
								<p>Dialog patterns</p>
							</a>
						</div>
					</section>
"""

def process_component(filepath):
    try:
        content = read_file(filepath)
        
        # Check what's missing
        needs_when = not has_section(content, "when-to-use-section")
        needs_anatomy = not has_section(content, "anatomy-section")
        needs_related = not has_section(content, "related-components-section")
        
        if not (needs_when or needs_anatomy or needs_related):
            return None, "already complete"
        
        component_name = extract_component_name(filepath.name)
        
        # Build new sections
        new_sections = ""
        if needs_anatomy:
            new_sections += add_anatomy(component_name)
        if needs_when:
            new_sections += add_when_to_use(component_name)
        if needs_related:
            new_sections += add_related(component_name)
        
        # Insert before closing </main>
        if "</main>" in content:
            content = content.replace("</main>", new_sections + "\n</main>")
            write_file(filepath, content)
            updated = []
            if needs_anatomy: updated.append("anatomy")
            if needs_when: updated.append("when-to-use")
            if needs_related: updated.append("related")
            return filepath.name, ", ".join(updated)
        else:
            return filepath.name, "ERROR: no </main>"
    
    except Exception as e:
        return filepath.name, f"ERROR: {str(e)}"

def main():
    print("╔═══════════════════════════════════════════════════════════════╗")
    print("║    Phase 2 Tier 2 - Batch Apply Templates to 63 Components   ║")
    print("╚═══════════════════════════════════════════════════════════════╝")
    print()
    
    # Get all component files
    component_files = sorted([f for f in COMPONENTS_DIR.glob("*.html") if f.is_file()])
    component_files = [f for f in component_files if f.name not in SKIP_COMPONENTS]
    
    print(f"Processing {len(component_files)} components...")
    print()
    
    updated = 0
    skipped = 0
    errors = 0
    
    for filepath in component_files:
        filename, status = process_component(filepath)
        
        if status == "already complete":
            skipped += 1
            print(f"⏭️  {filename}")
        elif status.startswith("ERROR"):
            errors += 1
            print(f"✗ {filename}: {status}")
        else:
            updated += 1
            print(f"✓ {filename}: {status}")
    
    print()
    print(f"Updated: {updated} | Skipped: {skipped} | Errors: {errors}")
    print(f"Total: {updated + skipped + errors}/{len(component_files)}")
    print()
    print("Phase 2 Tier 2 Batch Complete!")

if __name__ == "__main__":
    main()
