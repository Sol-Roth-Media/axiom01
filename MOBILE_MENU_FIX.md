# Mobile Menu Fix - Documentation

## Problem
Mobile menu was not responding to clicks on component pages, even though it worked on index.html.

## Root Cause
**Conflict between two menu initialization systems:**

1. **mobile-navbar.js component** (axiom.js framework)
   - Used on component pages via `data-component="mobile-navbar"` on header
   - Properly initialized by axiom.js
   
2. **index-page-manager.js** (legacy page manager)
   - Also tried to initialize menu with initMobileNav() function
   - Created duplicate event listeners and conflicts

## Why Index.html Worked
- index.html doesn't have `data-component="mobile-navbar"`
- Only index-page-manager.js ran → no conflict → worked

## Why Component Pages Failed
- Component pages have `data-component="mobile-navbar"`
- Both systems tried to control the menu
- Unpredictable behavior from competing event listeners

## Solution Implemented
**Removed duplicate initialization:**
- Deleted entire `initMobileNav()` function from index-page-manager.js
- Removed `initMobileNav()` call from initialization chain
- Updated smooth scrolling to not interfere
- Let mobile-navbar component handle ALL menu behavior

## Architecture After Fix
**Single source of truth: mobile-navbar.js component**
- Loaded by axiom.js framework
- Handles: menu toggle, auto-close on link click, ARIA attributes
- No conflicts or double-initialization
- Works on ALL pages (index.html + all component pages)

## Files Modified
- `js/index-page-manager.js` - Removed 31 lines of duplicate code
- Commit: 47e8735

## Testing
✅ Mobile menu works on index.html
✅ Mobile menu works on all component pages
✅ Works at all screen sizes (< 768px)
✅ Works in light and dark modes

## Future Maintenance
If mobile menu needs changes:
1. Edit `js/components/mobile-navbar.js` ONLY
2. Do NOT add code to index-page-manager.js
3. Test on both index.html and component pages
