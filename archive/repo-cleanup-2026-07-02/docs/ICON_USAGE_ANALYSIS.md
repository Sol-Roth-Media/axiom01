# Complete Icon Usage Analysis - Axiom01

## Executive Summary

**Total Unique Icons Used:** 173 unique icon names/variants  
**Total Icon References:** 1,956 instances  
**Icons in Base Set (450):** Most are included ✓  
**Icons Needing Investigation:** ~15-20 (case mismatches, special naming)

## Icon Usage by Frequency

### Top 20 Most Used Icons
| Icon | Count | Variant | Status |
|------|-------|---------|--------|
| Link | 255 | base | ✓ Check |
| Check-Circle | 164 | base | ✓ Check |
| Search | 163 | base | ✓ Check |
| Moon | 157 | base | ✓ Check |
| Brand-Github | 154 | base | ✓ Check (GitHub) |
| Menu | 153 | base | ✓ Check |
| Zap | 146 | base | ✓ Check |
| X-Circle | 76 | base | ✓ Check |
| Alert-Circle | 70 | base | ✓ Check |
| Layout | 69 | base | ✓ Check |
| Layers | 67 | base | ✓ Check |
| Settings | 26 | base | ✓ Check |
| Star | 16 | base | ✓ Check |
| Download | 16 | base | ✓ Check |
| Home | 13 | base | ✓ Check |
| Code | 13 | base | ✓ Check |
| Chevron-Down | 11 | base | ✓ Check |
| Bell | 10 | base | ✓ Check |
| X | 9 | base | ✓ Check |
| User | 9 | base | ✓ Check |

### Variant Icons (Need Special Loading)
| Icon | Count | Type | Status |
|------|-------|------|--------|
| SettingsThin | 2 | Thin | ⚠️ Requires thin variant |
| SettingsInverted | 2 | Inverted | ⚠️ Requires inverted variant |
| HomeThin | 2 | Thin | ⚠️ Requires thin variant |
| HomeInverted | 2 | Inverted | ⚠️ Requires inverted variant |
| CheckThin | 2 | Thin | ⚠️ Requires thin variant |
| CheckInverted | 2 | Inverted | ⚠️ Requires inverted variant |
| BellThin | 1 | Thin | ⚠️ Requires thin variant |
| BellInverted | 1 | Inverted | ⚠️ Requires inverted variant |
| MailThin | 1 | Thin | ⚠️ Requires thin variant |
| MailInverted | 1 | Inverted | ⚠️ Requires inverted variant |
| SearchThin | 1 | Thin | ⚠️ Requires thin variant |
| SearchInverted | 1 | Inverted | ⚠️ Requires inverted variant |
| UserThin | 1 | Thin | ⚠️ Requires thin variant |
| UserInverted | 1 | Inverted | ⚠️ Requires inverted variant |
| XThin | 1 | Thin | ⚠️ Requires thin variant |
| XInverted | 1 | Inverted | ⚠️ Requires inverted variant |
| User-MinusThin | 1 | Thin | ⚠️ Requires thin variant |
| Lightbulb-Color | 7 | Color | ⚠️ Requires color variant |

### Potential Issues (Case Mismatches / Naming)

These icons may not exist with exact casing or may need correction:

| Icon Reference | Count | Issue | Suggested Fix |
|---|---|---|---|
| check | 8 | Lowercase | Change to `Check` |
| code | 3 | Lowercase | Change to `Code` |
| heart | 1 | Lowercase | Change to `Heart` |
| home | 1 | Lowercase | Change to `Home` |
| link | 1 | Lowercase | Change to `Link` |
| list | 1 | Lowercase | Change to `List` |
| lock | 1 | Lowercase | Change to `Lock` |
| lightbulb | 2 | Lowercase | Change to `Lightbulb` |
| rocket | 2 | Lowercase | Change to `Rocket` |
| star | 1 | Lowercase | Change to `Star` |
| trash | 1 | Lowercase | Change to `Trash` |
| users | 2 | Lowercase | Change to `Users` |
| mobile-alt | 2 | Font awesome name | Change to `Phone-Mobile` |
| layer-group | 2 | Font awesome name | Change to `Layers` |
| cogs | 2 | Font awesome name | Change to `Settings` |
| swatchbook | 3 | Font awesome name | Change to `Palette` or similar |
| universal-access | 4 | Font awesome name | Check appropriate icon |
| sliders-h | 1 | Font awesome name | Check appropriate icon |
| shield-alt | 1 | Font awesome name | Change to `Shield` |
| arrows-alt | 1 | Font awesome name | Check appropriate icon |
| border-all | 1 | Font awesome name | Check appropriate icon |
| box-open | 1 | Font awesome name | Change to `Box` |
| button | 1 | Non-icon | Check usage |
| database | 1 | Lowercase | Change to `Database` |
| edit | 1 | Lowercase | Change to `Edit` |
| film | 1 | Font awesome name | Change to `Video` |
| hand-paper | 1 | Font awesome name | Check appropriate icon |
| handshake | 1 | Lowercase | Change to `Handshake` |
| keyboard | 1 | Lowercase | Change to `Keyboard` |
| map | 1 | Lowercase | Change to `Map-Pin` |
| medal | 1 | Lowercase | Change to `Medal` |
| magic | 1 | Lowercase | Change to `Wand` or `Sparkles` |
| mouse-pointer | 1 | Font awesome name | Check appropriate icon |
| paint-brush | 1 | Font awesome name | Check appropriate icon |
| plus | 1 | Lowercase | Change to `Plus` |
| play-circle | 1 | Font awesome name | Change to `Play` |
| save | 1 | Lowercase | Change to `Save` |
| tags | 1 | Lowercase | Change to `Tag` |
| text-height | 1 | Font awesome name | Check appropriate icon |
| th | 1 | Font awesome name | Check appropriate icon |
| times | 1 | Font awesome name | Change to `X` |
| ${icon.name} | 2 | Template variable | Check HTML - rendering issue |

## Recommended Actions

### Priority 1: Fix Template Variable Issue
- [ ] Find `${icon.name}` references (2 instances)
- [ ] These are likely interpolation failures in Vue/React/etc
- [ ] Fix the template rendering

### Priority 2: Fix Case Mismatches (Easy Win - 38 instances)
```javascript
// Replacements needed:
check → Check (8)
code → Code (3)
lightbulb → Lightbulb (2)
users → Users (2)
heart → Heart (1)
home → Home (1)
// ... etc
```

### Priority 3: Load Required Variants
- [ ] Load `axicons-thin-variants.js` (18 *Thin instances)
- [ ] Load `axicons-inverted-variants.js` (18 *Inverted instances)
- [ ] Load `axicons-color-variants.js` (7 Lightbulb-Color instances)

### Priority 4: Replace Font Awesome Icons
- [ ] ~15 Font Awesome specific icons need replacement
- [ ] Some may not have direct Axicons equivalent
- [ ] Examples: universal-access, sliders-h, arrows-alt, etc.

## Implementation Plan

### Step 1: Update index.html (High Traffic)
```html
<!-- Current -->
<script src="js/axicons-loader.js"></script>
<script src="js/axicons-base.js"></script>

<!-- Potentially add for immediate access to common variants -->
<script src="js/axicons-thin-variants.js"></script>
<script src="js/axicons-inverted-variants.js"></script>
```

### Step 2: Fix Case Issues
Use find-and-replace across HTML files:
- `data-name="check"` → `data-name="Check"`
- `data-name="code"` → `data-name="Code"`
- etc.

### Step 3: Handle Font Awesome Replacements
Manually review each and replace with Axicons equivalent

### Step 4: Test All Pages
- [ ] index.html (hero + components)
- [ ] docs/components-overview.html
- [ ] docs/components/*.html (all component demos)
- [ ] docs/axicons.html (icon browser)

## Icon Set Compatibility

### ✓ Definitely in Base Set (450 icons)
All common UI icons are present. Examples:
- Navigation: Home, Menu, Search, Settings, Bell, User
- Actions: Download, Upload, Edit, Delete, Save, Copy
- Status: Check, X, Alert, Info, Warning, Error
- Arrows: Arrow-Left, Arrow-Right, Arrow-Up, Arrow-Down
- UI Elements: Lock, Unlock, Heart, Star, Link, File, Folder
- Brands: GitHub, LinkedIn, Twitter, Facebook

### ⚠️ May Need Variants or Replacement
- Font Awesome specific icons (sliders-h, universal-access, etc.)
- Some descriptive names that might have different names in Axicons
- Any icon with hyphenated Font Awesome names

### ❌ Definitely Not in Base Set
- Template variables (${icon.name})
- Non-icon strings (button, etc.)

## Statistics

```
Base Icons Using (Likely Safe): ~155
Variant Icons Using: 18 (thin + inverted)
Color Icons Using: 7
Case Mismatch Icons: 38
Font Awesome Specific: ~15
Template/Error Issues: 2
────────────────────────────────
Total Unique: 173
```

## Files to Update

1. **High Priority:**
   - [ ] /Users/solroth/Sites/axiom01/index.html
   - [ ] /Users/solroth/Sites/axiom01/docs/components-overview.html

2. **Component Pages:**
   - [ ] /Users/solroth/Sites/axiom01/docs/components/button-variants.html
   - [ ] /Users/solroth/Sites/axiom01/docs/components/badge.html
   - [ ] /Users/solroth/Sites/axiom01/docs/components/ai-chat.html
   - [ ] /Users/solroth/Sites/axiom01/docs/components/account-menu.html
   - [ ] Others as needed...

## Next Steps

1. **Audit Script** - Create script to identify problematic icons
2. **Fix Pass 1** - Case mismatches
3. **Fix Pass 2** - Font Awesome replacements
4. **Fix Pass 3** - Add variant loading where needed
5. **Testing** - Full page verification
6. **Documentation** - Update component docs with new icon names

---

**Last Updated:** June 23, 2024  
**Status:** Analysis Complete - Ready for Fix Phase
