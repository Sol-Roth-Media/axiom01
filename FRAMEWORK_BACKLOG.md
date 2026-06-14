# Axiom01 Framework Backlog

This is the single living backlog for framework feature and bug enhancements.
It supersedes archived planning/session documents moved to `docs/archive/root-history/`.

## P0 — In Progress

1. Component docs standardization
   - Normalize `docs/components/*.html` to one canonical structure (hero, overview, demo, code, accessibility, support).
   - Standardize header/footer/search/theme/menu blocks and script placement/order.
   - Fix inconsistent relative links from component pages.

2. Docs navigation coherence
   - Make `docs/components-overview.html` the primary component index entry point.
   - Remove placeholder navigation targets in docs pages.
   - Align component naming across overview, page titles, and file names.

## P1

3. Interactive behavior parity
   - Standardize keyboard behavior (`Escape`, arrows, Enter/Space) where relevant.
   - Normalize `aria-expanded`, `aria-controls`, and focus restoration patterns.

4. Semantic markup correctness sweep
   - Remove invalid nesting and malformed semantic examples in docs.
   - Ensure examples reflect semantic-first guidance from `AXIOM01_STYLING_GUIDE.md`.

5. Component contract documentation
   - Add concise “required markup contract” section per interactive component page.
   - Align docs claims with actual behavior in `js/components/<name>.js`.

## P2

6. Search/catalog integrity
   - Ensure every component page is discoverable from overview/category pages.
   - Remove dead links/orphan pages.

7. Theme consistency
   - Ensure all docs pages support consistent theme behavior and footer/year parity.

## P3

8. Content clarity
   - Reduce repeated text and add brief “when to use / when not to use” guidance.
