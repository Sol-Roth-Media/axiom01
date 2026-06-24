=== DETAILED INDEX-PREVIEW.CSS ANALYSIS ===

Total Lines: 2170

REFACTORING STRATEGY:

1. COMPONENT PREVIEWS (.preview)
   - Keep: Scoped preview area styling
   - Consider: Using data attributes instead of .preview class
   - Note: These are page-specific, keep isolated

2. GET STARTED SECTION (.get-started-*)
   - Keep: Card styling, layout specific
   - Consider: Move base card styles to axiom.css if reusable

3. TYPOGRAPHY SECTION (#typography)
   - Keep: Column layout for typography showcase
   - Consider: This is demo-specific, likely safe

4. HEADER/NAVIGATION
   - REVIEW: Multiple "PHASE" fixes and overrides (BAD SIGN)
   - ACTION: Check if framework header is properly styled
   - NOTE: "ABSOLUTE MENU BUTTON FIX" and "OVERRIDE EVERYTHING" = hacks

5. HERO SECTION
   - REVIEW: "PHASE 3 - HERO FULL-WIDTH SOLUTION"
   - ACTION: Should be in framework

6. LAYOUT/GRID
   - REVIEW: Container rules, spacing rules
   - ACTION: Should use framework spacing tokens

7. FORMS & INPUTS
   - Keep: Preview-specific styling
   - Check: If conflicts with framework

8. BUTTONS
   - Review: Preview button overrides
   - Check: Framework button definitions

RECOMMENDED APPROACH:
1. Keep .preview and demo-specific rules (safe)
2. Remove all "OVERRIDE", "PHASE", "FIX" hacks
3. Move legitimate styles to axiom.css
4. Use framework components and tokens
5. Test after each removal
