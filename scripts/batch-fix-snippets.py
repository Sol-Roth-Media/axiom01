#!/usr/bin/env python3
"""
AXIOM01 Component Code Snippet Batch Fixer
Systematically converts non-compliant code snippets to AXIOM01 standard
"""

import os
import re
import sys
from pathlib import Path

class AXIOM01Fixer:
    def __init__(self):
        self.stats = {
            'files_processed': 0,
            'violations_fixed': 0,
            'files_with_violations': 0
        }
        
    def fix_file(self, filepath):
        """Fix a single component HTML file"""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original = content
            violations = []
            
            # Fix 1: Replace class="primary/secondary" with data-variant
            if 'class="primary"' in content or 'class="secondary"' in content:
                violations.append('Multi-class variants')
                content = re.sub(r'<(\w+)[^>]*class="(primary|secondary|success|error|warning|info|outlined|elevated)"([^>]*)>',
                               lambda m: f'<{m.group(1)} class="{self._get_semantic_class(m.group(1))}" data-variant="{m.group(2)}"{m.group(3)}>',
                               content)
            
            # Fix 2: Replace Font Awesome with Axicons
            fa_patterns = {
                'fas fa-plus': 'Plus',
                'fas fa-minus': 'Minus',
                'fas fa-save': 'Save',
                'fas fa-trash': 'Trash',
                'fas fa-edit': 'Edit',
                'fas fa-search': 'Search',
                'fas fa-close': 'Close',
                'fas fa-times': 'X',
                'fas fa-check': 'Check',
                'fas fa-star': 'Star',
                'fas fa-heart': 'Heart',
                'fas fa-user': 'User',
                'fas fa-cog': 'Settings',
                'fas fa-bell': 'Bell',
                'fas fa-download': 'Download',
                'fas fa-upload': 'Upload',
                'fas fa-share': 'Share',
                'fab fa-facebook': 'Brand-Facebook',
                'fab fa-twitter': 'Brand-Twitter',
            }
            
            for fa_class, axicon_name in fa_patterns.items():
                if fa_class in content:
                    violations.append('Font Awesome icons')
                    pattern = f'<i class="{fa_class}"[^>]*></i>'
                    replacement = f'<span class="axicon render" data-name="{axicon_name}"></span>'
                    content = re.sub(pattern, replacement, content)
            
            # Fix 3: Remove inline styles from code blocks
            if 'style="' in content and '<code class="language-html">' in content:
                violations.append('Inline styles in snippets')
                content = re.sub(r'(<code class="language-html">.*?</code>)', 
                               lambda m: re.sub(r' style="[^"]*"', '', m.group(1), flags=re.DOTALL),
                               content, flags=re.DOTALL)
            
            # Fix 4: Remove BEM-like element classes from snippets
            bem_patterns = [
                ('card-header', 'header'),
                ('card-body', 'main content'),
                ('card-footer', 'footer'),
                ('modal-header', 'header'),
                ('modal-body', 'main content'),
                ('modal-footer', 'footer'),
                ('modal-overlay', 'modal'),
                ('modal-content', 'modal'),
                ('form-group', 'fieldset/div'),
                ('form-row', 'div'),
                ('form-label', 'label'),
                ('form-input', 'input'),
                ('button-group', 'div'),
            ]
            
            for bem_class, semantic in bem_patterns:
                if f'class="{bem_class}"' in content or f'class="{bem_class}\'' in content:
                    violations.append(f'BEM pattern: {bem_class}')
            
            if violations:
                self.stats['violations_fixed'] += len(violations)
                self.stats['files_with_violations'] += 1
                
                # Write back if changes made
                if content != original:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    return True, violations
            
            self.stats['files_processed'] += 1
            return False, violations
            
        except Exception as e:
            print(f"Error processing {filepath}: {e}", file=sys.stderr)
            return False, []
    
    def _get_semantic_class(self, element):
        """Get semantic class for element"""
        semantic_classes = {
            'button': 'button',
            'a': 'button',
            'article': 'card',
            'div': 'component',
        }
        return semantic_classes.get(element, element)
    
    def process_all(self, directory):
        """Process all component files"""
        component_dir = Path(directory)
        html_files = list(component_dir.glob('*.html'))
        
        print(f"Processing {len(html_files)} component files...")
        print()
        
        for filepath in sorted(html_files):
            changed, violations = self.fix_file(str(filepath))
            
            if violations:
                filename = filepath.name
                print(f"✓ {filename}")
                for v in violations:
                    print(f"  - {v}")
        
        print()
        print("=" * 50)
        print("SUMMARY")
        print("=" * 50)
        print(f"Files processed:      {self.stats['files_processed']}")
        print(f"Files with violations: {self.stats['files_with_violations']}")
        print(f"Total violations fixed: {self.stats['violations_fixed']}")

if __name__ == '__main__':
    fixer = AXIOM01Fixer()
    fixer.process_all('docs/components')

