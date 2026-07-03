# Component Icon Audit Checklist

## Overview
This document tracks which Axiom01 components use icons and verifies they're using correct icon names from the modular library.

## Icon Search Results by Component

### Navigation & Headers
- **Header Navigation** (index.html)
  - [ ] Search ✓ (base)
  - [ ] GitHub ✓ (base)
  - [ ] Moon ✓ (base)
  - [ ] Menu ✓ (base)

### Hero Section (index.html)
- **Stats Cards**
  - [ ] Trophy ✓ (base)
  - [ ] Lightbulb-Color ❓ (color variant)
  - [ ] Zap ✓ (base)
  - [ ] Cloud ✓ (base)

### Feature Cards (index.html)
- **Why Axiom is Different**
  - [ ] Brain ✓ (base)
  - [ ] Minimize ✓ (base)
  - [ ] Lock ✓ (base)

### Icons Showcase (index.html)
- **Code & Dev Section**
  - [ ] Code ✓ (base)
- **Social & Brands**
  - [ ] GitHub ✓ (base)
- **Status**
  - [ ] Check-Circle ✓ (base)
- **Files**
  - [ ] File-Text ✓ (base)

### Component Pages (docs/components/*.html)

#### Button Variants
- [ ] Primary button icons
- [ ] Secondary button icons
- [ ] Danger button icons
- Status: **NEEDS VERIFICATION**

#### Badge Component
- [ ] Badge icons
- Status: **NEEDS VERIFICATION**

#### Avatar Component
- [ ] Avatar icons (likely custom, not using axicons)
- Status: **NEEDS VERIFICATION**

#### Toggle Component
- [ ] Toggle icons
- Status: **NEEDS VERIFICATION**

#### Pagination
- [ ] Arrow-left ✓ (base)
- [ ] Arrow-right ✓ (base)
- Status: **NEEDS VERIFICATION**

#### AI Chat Component
- [ ] Message icons
- [ ] Send icon
- [ ] AI assistant icon
- Status: **NEEDS VERIFICATION**

#### Account Menu
- [ ] User icon
- [ ] Settings icon
- [ ] Logout icon
- Status: **NEEDS VERIFICATION**

#### Hero Component
- [ ] Various decorative icons
- Status: **NEEDS VERIFICATION**

### Documentation Pages

#### Components Overview (components-overview.html)
- [ ] Various component example icons
- Status: **NEEDS VERIFICATION**

#### Styling Guide (styling-guide.html)
- [ ] CSS/code icons
- [ ] Design token icons
- Status: **NEEDS VERIFICATION**

#### Typography Advanced (typography-advanced.html)
- [ ] Typography-related icons
- Status: **NEEDS VERIFICATION**

## Base Icons Available (450 Total)

### Commonly Used
- Home, Menu, Search, Settings, User, Bell, Heart, Star, Check, X, Alert, Info
- Download, Upload, Edit, Delete, Save, Cancel, Close, Open
- Arrow-Left, Arrow-Right, Arrow-Up, Arrow-Down
- GitHub, LinkedIn, Twitter, Facebook, Instagram
- Sun, Moon, Cloud, Lock, Unlock

### Categories (33 Total)
- General UI (most abundant)
- Development & Code
- AI & LLMs
- Social & Brands
- IoT & Wearables
- Status & Feedback
- Media & Files
- Communication
- + 25 more

## Icons Needing Special Handling

### Color Variants (Need axicons-color-variants.js)
- `Lightbulb-Color` - Currently in index.html hero
- Any other icons with `-Color` suffix
- Status: **Currently works with base as fallback**

### Thin Variants (Need axicons-thin-variants.js)
- Any `*Thin` suffixed icons
- Status: **Not currently used, optional**

### Premium Variants (Need axicons-premium-variants.js)
- Any `*-Premium` suffixed icons
- Examples: `Zap-Premium`, `Star-Premium`, `Heart-Premium`
- Status: **Not currently used, optional**

## Verification Workflow

### Step 1: Check Current Usage
```bash
grep -r "data-name=" /Users/solroth/Sites/axiom01/docs/ | head -50
grep -r "data-name=" /Users/solroth/Sites/axiom01/index.html
```

### Step 2: Verify Icon Exists in Base
All icons currently used in index.html and default pages should exist in `axicons-base.js` (450 icons).

### Step 3: Fix Missing Icons
- If an icon is missing: Choose alternative from base set OR
- Load specific variant if needed (color, thin, premium)

### Step 4: Document Findings
Update this checklist with actual icon usage

## Priority Fixes

**High Priority** (Used in main pages)
1. Lightbulb-Color in hero section - needs color variant loading
2. Any other color/thin/premium icons in high-traffic pages

**Medium Priority** (Component documentation)
1. Button variant icons
2. Badge component icons
3. AI Chat component icons

**Low Priority** (Advanced components)
1. Specialty component icons
2. Advanced layout icons

## Icons to Check Against

### Base Set Check (450 Icons)
```javascript
// In browser console:
console.log('Total icons:', window.axicons.length);
console.log('Available:', window.axicons.map(i => i.name).join(', '));

// Find specific icon:
window.AxiconsLoader.getIcon('Moon');
window.AxiconsLoader.search('arrow');
```

### Color Set Check (1,351 Icons)
```javascript
// Load color variant
await window.AxiconsLoader.loadColor();
console.log('Total after loading color:', window.axicons.length);
```

## Findings Log

### Date: [to be filled]
- Icons checked: 
- Missing icons found:
- Fixed icons:
- Notes:

---

## Action Items

- [ ] Run icon grep across all HTML files
- [ ] List all unique data-name attributes
- [ ] Cross-reference with base icon set
- [ ] Identify icons needing color/thin/premium variants
- [ ] Update loading strategy if needed
- [ ] Test all pages with modular setup
- [ ] Document final icon usage statistics

## Success Criteria

✅ All currently used icons render correctly with base + axicons-loader
✅ No missing icon errors in console
✅ All pages load in < 150ms with base icons
✅ Optional variants load on-demand when needed
✅ No breaking changes to existing component code
