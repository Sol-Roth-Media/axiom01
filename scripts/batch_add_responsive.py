#!/usr/bin/env python3
"""
Batch add Responsive Behavior sections to AXIOM01 components
Following the COMPONENT_RESPONSIVE_TEMPLATE.md guide
"""

import os
import re

# Generic template for components without specific behavior
GENERIC_RESPONSIVE = '''            <section class="section">
                <h2 class="title">Responsive Behavior</h2>
                <p>This component automatically adapts to different screen sizes:</p>
                
                <h3>Mobile (< 768px)</h3>
                <p>On mobile devices:</p>
                <ul>
                    <li>Optimized for small screens</li>
                    <li>Touch-friendly spacing maintained (44px minimum)</li>
                    <li>Text wraps naturally without overflow</li>
                    <li>Content density optimized for readability</li>
                </ul>

                <h3>Desktop (1024px+)</h3>
                <p>On desktop displays:</p>
                <ul>
                    <li>Enhanced visual features</li>
                    <li>Hover states and transitions</li>
                    <li>Full keyboard navigation support</li>
                    <li>Optimal spacing and sizing</li>
                </ul>

                <h3>Framework Integration</h3>
                <p>Responsive behavior is automatic:</p>
                <ul>
                    <li>Framework handles media queries</li>
                    <li>No custom CSS required</li>
                    <li>Mobile-first approach applied</li>
                    <li>Accessibility maintained at all sizes</li>
                </ul>
            </section>

'''

# Component-type-specific templates
TEMPLATES = {
    'input': '''            <section class="section">
                <h2 class="title">Responsive Behavior</h2>
                <p>Input fields adapt for optimal usability:</p>
                
                <h3>Mobile (< 768px)</h3>
                <ul>
                    <li>Full-width within container</li>
                    <li>Minimum height 44px (touch target)</li>
                    <li>Large text size (16px+) prevents zoom</li>
                    <li>Appropriate touch keyboard displays</li>
                    <li>Error messages clearly visible</li>
                </ul>

                <h3>Desktop (1024px+)</h3>
                <ul>
                    <li>Width based on input type/length</li>
                    <li>Hover and focus states visible</li>
                    <li>Inline labels possible</li>
                    <li>Autocomplete suggestions clear</li>
                </ul>

                <h3>Framework Integration</h3>
                <ul>
                    <li>Responsive sizing automatic</li>
                    <li>Labels stack on mobile</li>
                    <li>Error states responsive</li>
                    <li>Accessibility maintained</li>
                </ul>
            </section>

''',
    
    'textarea': '''            <section class="section">
                <h2 class="title">Responsive Behavior</h2>
                <p>Textarea fields adapt to different screen sizes:</p>
                
                <h3>Mobile (< 768px)</h3>
                <ul>
                    <li>Full-width with padding</li>
                    <li>Minimum height allows comfortable typing</li>
                    <li>Touch keyboard displays properly</li>
                    <li>Scrolls vertically within viewport</li>
                </ul>

                <h3>Desktop (1024px+)</h3>
                <ul>
                    <li>Width based on context</li>
                    <li>Can resize (drag handle)</li>
                    <li>Character counter visible</li>
                </ul>

                <h3>Framework Integration</h3>
                <ul>
                    <li>Responsive padding and sizing</li>
                    <li>Maintains touch-friendly dimensions</li>
                    <li>Focus states visible</li>
                </ul>
            </section>

''',
    
    'select': '''            <section class="section">
                <h2 class="title">Responsive Behavior</h2>
                <p>Select dropdowns adapt to screen size:</p>
                
                <h3>Mobile (< 768px)</h3>
                <ul>
                    <li>Full-width select element</li>
                    <li>Native mobile picker displays</li>
                    <li>Touch-friendly interaction</li>
                    <li>Options easily scrollable</li>
                </ul>

                <h3>Desktop (1024px+)</h3>
                <ul>
                    <li>Standard dropdown width</li>
                    <li>Keyboard arrow keys work</li>
                    <li>Hover states visible</li>
                </ul>

                <h3>Framework Integration</h3>
                <ul>
                    <li>Responsive width automatic</li>
                    <li>Native browser behavior used</li>
                    <li>No custom dropdown needed</li>
                </ul>
            </section>

''',
    
    'checkbox': '''            <section class="section">
                <h2 class="title">Responsive Behavior</h2>
                <p>Checkboxes maintain usability across devices:</p>
                
                <h3>Mobile (< 768px)</h3>
                <ul>
                    <li>Larger touch targets (44px)</li>
                    <li>Label and checkbox stacked or inline</li>
                    <li>Easy to tap without missing</li>
                    <li>Clear focus state visible</li>
                </ul>

                <h3>Desktop (1024px+)</h3>
                <ul>
                    <li>Standard sizing</li>
                    <li>Hover feedback</li>
                    <li>Keyboard selection</li>
                </ul>

                <h3>Framework Integration</h3>
                <ul>
                    <li>Framework ensures 44px targets</li>
                    <li>Focus visible always</li>
                    <li>Color contrast maintained</li>
                </ul>
            </section>

''',
    
    'radio': '''            <section class="section">
                <h2 class="title">Responsive Behavior</h2>
                <p>Radio buttons adapt for all screen sizes:</p>
                
                <h3>Mobile (< 768px)</h3>
                <ul>
                    <li>Larger touch targets (44px)</li>
                    <li>Vertical stacking of options</li>
                    <li>Clear label association</li>
                    <li>Easy single-hand operation</li>
                </ul>

                <h3>Desktop (1024px+)</h3>
                <ul>
                    <li>Horizontal or vertical grouping</li>
                    <li>Hover feedback</li>
                    <li>Keyboard navigation</li>
                </ul>

                <h3>Framework Integration</h3>
                <ul>
                    <li>Responsive spacing automatic</li>
                    <li>Touch targets guaranteed</li>
                    <li>Accessibility built-in</li>
                </ul>
            </section>

''',
    
    'button': '''            <section class="section">
                <h2 class="title">Responsive Behavior</h2>
                <p>Buttons are responsive across all devices:</p>
                
                <h3>Mobile (< 768px)</h3>
                <ul>
                    <li>Minimum 44px tap target</li>
                    <li>Full-width in grids</li>
                    <li>Touch feedback visible</li>
                    <li>Clear active state</li>
                </ul>

                <h3>Desktop (1024px+)</h3>
                <ul>
                    <li>Hover effects enhanced</li>
                    <li>Focus ring visible</li>
                    <li>Cursor pointer on hover</li>
                    <li>Transitions smooth</li>
                </ul>

                <h3>Framework Integration</h3>
                <ul>
                    <li>Touch targets automatic</li>
                    <li>All sizes maintain contrast</li>
                    <li>Keyboard accessible</li>
                </ul>
            </section>

''',
}

def get_responsive_section(component_name, template_type=None):
    """Get responsive section for component"""
    
    # Check if we have specific template
    if template_type and template_type in TEMPLATES:
        return TEMPLATES[template_type]
    
    # Check component name for patterns
    for pattern, template in TEMPLATES.items():
        if pattern in component_name.lower():
            return template
    
    # Default to generic
    return GENERIC_RESPONSIVE

def add_responsive_section(filepath, component_name):
    """Add responsive section to component file"""
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Check if already has section
    if 'Responsive Behavior' in content:
        return 'skip'
    
    # Get appropriate template
    responsive = get_responsive_section(component_name)
    
    # Try various insertion markers
    markers = [
        '            <section class="section">\n                <h2 class="title">Best Practices</h2>',
        '            <section>\n                <h2>Best Practices</h2>',
        '<section>\n                <h2>Best Practices</h2>',
        '            <article class="card">\n                        <header>\n                            <h3>Best Practices</h3>',
    ]
    
    for marker in markers:
        if marker in content:
            content = content.replace(marker, responsive + marker, 1)
            with open(filepath, 'w') as f:
                f.write(content)
            return 'added'
    
    return 'failed'

# Main batch processing
if __name__ == '__main__':
    components_dir = 'docs/components'
    stats = {'added': 0, 'skip': 0, 'failed': 0}
    
    # Get all component files
    all_components = sorted([f for f in os.listdir(components_dir) if f.endswith('.html')])
    
    # Get already updated
    with_responsive = set()
    for f in all_components:
        with open(os.path.join(components_dir, f), 'r') as file:
            if 'Responsive Behavior' in file.read():
                with_responsive.add(f.replace('.html', ''))
    
    print(f"Components with Responsive Behavior: {len(with_responsive)}/77")
    print(f"Remaining: {77 - len(with_responsive)}\n")
    
    # Process next 20 components
    count = 0
    for filename in all_components:
        component_name = filename.replace('.html', '')
        
        if component_name in with_responsive:
            continue
        
        filepath = os.path.join(components_dir, filename)
        result = add_responsive_section(filepath, component_name)
        
        status_sym = {'added': '✅', 'skip': '✓', 'failed': '⚠️'}[result]
        print(f"{status_sym} {component_name}")
        
        stats[result] += 1
        count += 1
        
        if count >= 20:
            print(f"\n📊 Batch update complete (20 components processed)")
            break
    
    print(f"\n📊 Results: {stats['added']} added, {stats['skip']} skipped, {stats['failed']} failed")
