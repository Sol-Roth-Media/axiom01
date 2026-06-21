# PRIORITY FIX LIST - Must Have Pages

## ROOT DOCUMENTATION PAGES

### TO DELETE IMMEDIATELY
- [ ] docs/What's New.html (or equivalent)
- [ ] docs/Release Notes.html
- [ ] docs/Design Token Reference.html
- [ ] docs/Animations.html
- [ ] docs/utilities-reference.html
- [ ] docs/components-api.html
- [ ] Installation (bad link)

### TO REBUILD/FIX
1. **Overview & Quickstart** (PRIORITY)
   - Status: Broken, needs content
   - Action: Pull content from index.html
   - Required: YES
   
2. **Color System** (Core Concepts)
   - Status: Broken/no content
   - Need: Backup content or rewrite
   - Required: MAYBE
   
3. **Typography** (Core Concepts)
   - Status: Broken/no content
   - Need: Backup content or rewrite
   - Required: MAYBE
   
4. **Layout** (Core Concepts)
   - Status: Broken/no content
   - Need: Backup content or rewrite
   - Required: MAYBE

## COMPONENT PAGES - EXAMPLES OF BROKEN ONES

- [ ] docs/components/pagination.html (has hero, bad formatting, outdated menus)
- [ ] AND 73 others (need individual fixes)

## STRATEGY
1. Delete all unnecessary pages first
2. Fix "Overview & Quickstart" - copy content from index.html
3. Go through component pages ONE BY ONE
4. Use git history to recover old content when needed
5. Test each page as we fix it

