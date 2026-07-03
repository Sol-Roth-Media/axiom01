Absolutely — I audited the core framework, the live docs shell, and the main documentation pages with the framework philosophy in mind.
Checklist
Read index.html and aligned the audit to Axiom01’s semantic-first philosophy
Reviewed the core frontend files in css/ and js/
Traced major CSS/JS stability and docs-site issues
Ran the existing audit/smoke scripts
Reviewed the main docs pages and key component-doc patterns
Compiled prioritized recommendations for stability, docs quality, responsiveness, and component parity
What I reviewed
Primary framework/runtime:
css/axiom.css
css/_variables.css
css/_component-docs.css
css/_components.css
css/axicons.css
js/axiom.js
js/index-page-manager.js
js/render-icons.js
js/axicons-loader.js
js/sticky-header.js
Docs shell/pages:
index.html
docs/overview-quickstart.html
docs/components-overview.html
docs/axicons.html
plus repo-wide docs/component page findings from the existing audits
Executive summary
Axiom01’s philosophy is clear and strong:
semantic HTML first
minimal classes
token-driven theming
accessibility by default
no BEM / no utility-class sprawl
The main issue is not philosophy drift in the abstract — it’s implementation drift:
source vs built asset drift
docs/runtime drift
component parity drift
content/version/count drift
The framework has a solid base, but the docs site is currently undermining trust in the framework because the live examples, counts, paths, and page scripts are not consistently synchronized.

Proven audit results
Existing test/audit results I ran
Passing
npm run audit:critical-interactions → PASS
npm run audit:a11y-smoke → PASS
npm run audit:drupal-twig → PASS
Failing
npm test stops immediately because:
starter-themes/axiom01/dist/css/axiom.min.css does not match css/axiom.min.css
npm run audit:runtime-loader → FAIL
js/axiom.js missing runtime-loader markers/APIs like:
registerComponent(
loadComponent(
destroyComponent(
destroyAllComponents(
npm run audit:runtime-loader-failures → FAIL
js/axiom.js lacks expected loadComponent behavior/caching/failure handling
npm run audit:gestures → FAIL
missing gesture markers in docs
missing gesture component URLs in js/index-page-manager.js
npm run audit:pre-release → FAIL with 47 findings
npm run audit:philosophy → FAIL
48 inline onclick handlers
class density over budget on several high-priority docs pages
component overview drift
missing expected docs pages
These failures are useful because they’re not speculative — they show exactly where the stabilization work should start.

Highest-priority findings
1) js/index-page-manager.js is a real stability risk
   This is the most important fix.
   At the bottom of js/index-page-manager.js, the file calls:
   initCurrentPageNavState()
   initCodeCopying()
   initThemeExplorer()
   initSmoothScrolling()
   initSidebarHighlighting()
   initDynamicCopyrightYear()
   initDropdowns()
   initTabs()
   initCascadeVisualization()
   Those functions are not defined in the active file.
   They do exist in archive/dist/js/index-page-manager.js.
   Why this matters
   Any page loading js/index-page-manager.js can hit a ReferenceError, which can stop subsequent page initialization.
   Affected pages include:
   index.html
   docs/overview-quickstart.html
   docs/components-overview.html
   docs/axicons.html
   docs/colors-advanced.html
   docs/layout-advanced.html
   docs/typography-advanced.html
   docs/form-elements.html
   docs/media-advanced.html
   docs/animations.html
   docs/styling-guide.html
   and some component pages
   Recommendation
   P0
   Restore the missing functions from archive/dist/js/index-page-manager.js into the active js/index-page-manager.js
   Or temporarily guard each call with existence checks
   Then retest the docs site end-to-end
   This is a safe stabilization task and should be done before any cosmetic docs cleanup.

2) css/axiom.css is no longer a trustworthy source of truth
   css/axiom.css looks like a partially-built monolith that has accumulated manual edits and corrupted fragments.
   Examples:
   orphan token near line ~619:
   div
   malformed block near line ~1041:
   stray white-space, overflow, text-overflow declarations outside a selector
   undefined token usage:
   var(--a-font-size-2xs) appears in css/axiom.css, but no matching token exists in css/_variables.css
   Why this matters
   Even if browsers recover, this makes future maintenance dangerous:
   hard to know whether axiom.css or _components.css is canonical
   generated artifacts are clearly being manually edited
   build output drift is already proven by the failing asset parity audit
   Recommendation
   P0
   Re-establish one source of truth:
   partials in css/_*.css
   Regenerate:
   css/axiom.css
   css/axiom.min.css
   starter-theme dist assets
   Remove stray/broken declarations from the built monolith
   Stop manual edits to generated bundles

3) Source/build/component parity is drifting
   There’s a visible mismatch between:
   css/_components.css
   css/axiom.css
   css/axiom.min.css
   docs examples
   Example: .outline
   In css/_components.css, source support is only clearly defined for:
   .button.outline
   But built CSS includes additional ad hoc outline patterns such as:
   .alert.outline
   .badge.outline
   .pill.outline
   Why this matters
   This is exactly the kind of “it works on one page but not the framework source” instability that hurts confidence.
   Recommendation
   P1 Formalize variant parity in source partials, not in downstream generated files:
   decide which components officially support .outline
   implement them in css/_components.css
   document them consistently
   rebuild all downstream assets
   My recommendation for official outline support:
   button
   badge
   alert
   pill / tag
   optionally card as a visual variant only if it remains semantically clean

4) Documentation counts and versions are inconsistent
   I found multiple contradictory numbers:
   Component counts
   index.html says 73
   docs/components-overview.html says 79
   docs/overview-quickstart.html says 73
   release-info.json says 67
   search placeholder in docs/components-overview.html says 77
   Icon counts
   index.html says 3,941
   docs/axicons.html says 3,969
   Versions
   package.json → 2.1.2
   release-info.json → 2.1.2
   index.html visible release/footer content says v2.0.0
   your install snippet references 2.2.3
   Recommendation
   P0/P1 Create a single source of truth for:
   version
   component count
   icon count
   release date
   bundle size
   Then inject those values into:
   index.html
   docs overview pages
   footer
   release section
   search index labels
   Right now the site looks less “stable release” and more “several release states merged together”.

Category-by-category recommendations
1) Improved examples / documentation on the live site
   What’s good
   The philosophy is compelling and distinct
   index.html communicates the semantic-first angle well
   docs/overview-quickstart.html has a good onboarding shape
   docs/axicons.html is useful and developer-friendly
   Main docs improvements needed
   A. Make every example match the actual framework API
   Examples currently mix inconsistent naming and variant support.
   Examples to normalize:
   danger vs error
   component counts
   icon totals
   version strings
   whether docs should show axiom.css or axiom.min.css
   B. Replace placeholder or fake media assets
   Several docs pages still reference placeholder assets, which weakens the “production-ready” claim.
   Notable examples:
   docs/media-advanced.html
   docs/components/avatar.html
   docs/components/testimonial.html
   docs/components/card.html
   docs/components/carousel.html
   docs/components/audio-player.html
   docs/components/video-player.html
   docs/components/file-display-download.html
   docs/components/ai-image-generator.html
   Recommendation
   Either:
   add real local demo assets under assets/
   or replace with semantic placeholder components that are clearly intentional
   C. Remove inline event handlers from docs
   Audit flagged inline onclick across multiple component docs:
   docs/animations.html
   docs/components/carousel.html
   docs/components/drawer.html
   docs/components/editor.html
   docs/components/lightbox.html
   docs/components/modal.html
   docs/components/notification.html
   docs/components/sidebar.html
   docs/components/swiping-card-interface.html
   This is philosophically off-brand for Axiom01.
   Recommendation
   Move all example interactivity to delegated listeners or page-scoped scripts using data attributes.
   D. Stop hard-coding the search index
   js/index-page-manager.js hard-codes searchable docs/component entries and is already missing many component pages.
   Recommendation
   Generate the search index from docs/components/*.html during build time.
   That single change would solve:
   docs parity drift
   search omissions
   category count drift
   gesture doc omission regressions
   E. Improve “why this is semantic” explanations
   The site shows examples, but not always enough “why”.
   Add per-component docs sections:
   semantic structure rules
   acceptable child order
   what variants are officially supported
   keyboard behavior
   mobile behavior
   accessibility notes
   when not to use the component
   That would make the docs feel much more framework-grade.

2) Code fixes / improvements / bug fixes that are safe
   Safe, high-value fixes
   P0 safe fixes
   Restore missing functions in js/index-page-manager.js
   Remove duplicate icon rendering logic from pages that already load js/render-icons.js
   Fix broken footer/docs links:
   index.html
   docs/components-overview.html
   docs/form-elements.html
   docs/styling-guide.html
   other docs pages linking missing AXIOM01_STYLING_GUIDE.md
   Clean malformed declarations from css/axiom.css
   Rebuild and sync:
   css/axiom.min.css
   starter theme dist assets
   P1 safe fixes
   Make js/axicons-loader.js path resolution robust
   current fetch('js/axicons-base.js') style is relative to page URL, not script location
   this breaks from docs subdirectories if dynamic loading is used
   A safer pattern:
   resolve relative to document.currentScript.src
   or use injected script tags rather than fetch + eval
   Remove duplication between:
   js/render-icons.js
   inline renderAxicons() blocks in pages
   Normalize button variant naming
   pick one: error or danger
   then align CSS + docs + examples
   Fix semantic markup warnings for tablists index.html uses:
<menu role="tablist"> with direct <button> children
IDE warnings show this is invalid in that context.
Recommendation
Use:
<div role="tablist"> or
<nav aria-label="..."> around buttons
Important note on js/axiom.js
The runtime-loader audits are failing because the current file appears to be a lightweight DOM enhancement layer, not the loader API the audits expect.
Recommendation
Choose one direction:
if runtime-loader is still a release goal: implement those APIs
if not: separate the audit target from js/axiom.js so the repo stops failing on a feature it no longer ships
Right now it’s an expectations mismatch.

3) Responsiveness / mobile / accessibility / usability
   Good news
   The a11y smoke test passed, which means the project already has a decent baseline.
   Main responsive/usability concerns
   A. Global min-width: 360px is risky
   css/axiom.css includes hard minimum widths on:
   html, body
   main
   section
   .container
   header.main
   footer.main
   This can force horizontal overflow on narrow devices.
   Recommendation
   Remove global min-width constraints. If a demo needs a minimum width, scope it to that demo, not the whole framework/site.
   B. Grid minimums are too aggressive in some contexts
   The main .grid uses:
   minmax(320px, 1fr)
   That’s usually fine for top-level layouts, but too rigid for nested examples and smaller docs panes.
   Recommendation
   Consider:
   a more flexible default grid
   or scoped grid variants for docs showcase content
   C. Mobile menu behavior needs one more pass
   The mobile nav toggle works visually, but I’d improve:
   initial aria-expanded
   aria-controls
   focus management
   body scroll locking when menu is open
   escape-to-close behavior specifically for the mobile menu
   D. Search modal depends on unstable page manager
   Once js/index-page-manager.js errors, search/theme behavior may fail silently.
   This makes the docs site feel fragile even if the underlying CSS framework is fine.
   E. Small-screen hero compression still looks over-constrained
   There are many hero overrides in css/axiom.css, including a malformed ultra-small block.
   Recommendation
   After cleaning the CSS source:
   test 320px
   360px
   390px
   414px
   768px
   1024px
   Specifically verify:
   hero action wrapping
   stats grid readability
   code block overflow
   tab controls
   footer columns
   component preview cards
   F. Accessibility/usability improvements to add
   Add visible skip links on docs pages
   Ensure search results are keyboard navigable
   Add focus return behavior after modal close everywhere
   Add clipboard fallback messaging on docs/axicons.html if navigator.clipboard is unavailable
   Ensure icon-only controls always have explicit aria-labels
   Avoid div role="button" patterns in docs examples
   Audit specifically flagged:
   docs/components/file-upload.html
   docs/components/touch-components.html

4) Component enhancements using existing framework patterns
   You gave the best example already: .outline parity.
   This is exactly the right stabilization mindset — don’t add random new systems, just make existing ones coherent.
   Best parity wins to implement next
   A. Formalize shared variant support
   Create a consistent matrix for official variants across components:
   primary
   secondary
   success
   warning
   error
   info
   outline
   Suggested targets:
   button
   badge
   alert
   pill / tag
   avatar only if it remains semantically useful
   notification if it is intended as a first-class component
   B. Unify sizing API
   Some components support:
   .small
   .medium
   .large
   Others don’t.
   Recommendation
   Where size makes sense, standardize it.
   C. Unify semantic child structure in docs
   For example, cards are strongest when docs consistently show:
   article.card > header + p + footer
   Same for:
   modal structure
   hero structure
   table wrappers
   tab panels
   alert content with dismiss control
   D. Remove docs-only structural drift
   Audit flagged forbidden doc-* classes like:
   doc-live-example
   Those aren’t BEM, but they do drift away from the “use the framework itself” story.
   Recommendation
   Where practical, showcase docs using native framework components instead of custom docs-only wrappers.
   E. Search/index parity should treat every component page as part of the product
   If a component exists in docs/components/, it should automatically get:
   overview page presence
   search presence
   count inclusion
   category inclusion
   related-links presence
   That will solve a lot of trust issues.

Page-by-page second-pass review
index.html
Strengths
Best expression of the Axiom01 philosophy
Good visual hierarchy
Strong semantic-first messaging
Good use of native elements
Issues
duplicate icon-rendering logic despite js/render-icons.js
broken footer links
closing tag mismatch warning
tablist markup warning with <menu>
version/count drift
live site uses css/axiom.css while docs snippets emphasize axiom.min.css
inline JS overlaps with framework JS responsibilities
Recommendation
Treat index.html as the canonical polished demo and remove all duplicated runtime logic from it first.

docs/overview-quickstart.html
Strengths
clear onboarding flow
good first-component examples
Issues
examples need variant-name normalization
page depends on unstable js/index-page-manager.js
inline icon rendering exists despite shared renderer already being loaded
Recommendation
Make this page the single “correct install and first component” page, then ensure all other docs point back to it consistently.

docs/components-overview.html
This is currently the weakest high-priority page.
Issues
broken links:
components/axicons.html
components/component-browser.html
../CONTRIBUTING.md
AXIOM01_STYLING_GUIDE.md
class budget drift
inline style usage
inconsistent counts
quick access markup appears to miss the .quick-categories wrapper that the CSS expects
search placeholder says 77 while page hero says 79
mobile collapse logic contains a bug:
if (!category.dataset.category === 'feedback')
that condition is logically wrong
Recommendation
This page should be rebuilt as a generated index, not hand-maintained.

docs/axicons.html
Strengths
useful icon browser
click-to-copy is good
variant filter UI is solid
Issues
icon total drift (3,969 vs 3,941)
docs examples use page-relative js/... paths that are correct in code samples only if understood as project-root paths
clipboard operation has no fallback path
page still depends on unstable shared page manager
Recommendation
Keep this as a showcase page, but tighten counts and add a small “project-root paths” note in examples.

docs/form-elements.html
Main issue
Broken relative links to component docs:
forms.html
field-validation.html
multi-step-form.html
etc.
These should point into docs/components/.
Recommendation
This page should become a strong cross-reference hub for form-related components.

docs/media-advanced.html
Main issue
Too many placeholder assets make it feel unfinished.
Recommendation
Either:
add real demo assets
or convert examples to explicit semantic placeholders
Right now it hurts perceived production-readiness.

docs/styling-guide.html, docs/layout-advanced.html, docs/animations.html
Main issue
Broken references to AXIOM01_STYLING_GUIDE.md and general docs drift.
Recommendation
Decide whether the canonical styling guide is:
AXIOM01_STYLING_GUIDE.md at repo root
or docs/styling-guide.html
Then make one canonical and link only to that.

Component docs set overall
Strong points
broad coverage
many useful examples
accessible baseline is decent
Recurring problems
inline onclick
placeholder media/assets
occasional non-semantic interactive patterns
inconsistent class/variant demonstrations
search and overview parity drift

Prioritized stabilization plan
P0 — do these first
Fix js/index-page-manager.js by restoring missing functions
Clean css/axiom.css malformed content and restore source-of-truth discipline
Rebuild/sync css/axiom.min.css and starter-theme dist assets
Fix real broken docs links in:
index.html
docs/components-overview.html
docs/form-elements.html
docs/styling-guide.html
related docs pages
Reconcile version/component/icon counts across site and metadata
P1 — docs trust and framework parity
Remove duplicate inline icon rendering where shared renderer exists
Auto-generate docs search index from component files
Auto-generate component totals and overview entries
Normalize error vs danger
Formalize .outline support in source partials
P2 — showcase polish
Replace placeholder assets
Remove inline onclick from component pages
Replace div role="button" examples with actual buttons
Refine mobile nav/search dialog focus behavior
Run narrow-screen manual pass at 320/360/390/414 widths
P3 — longer-term maintainability
Add build-time checks for:
docs link integrity
count/version consistency
source/build parity
search index parity
Split docs-site JS from framework JS more clearly
Make generated assets immutable outputs, not manual edit targets

Final recommendation
If the goal is stabilize, not expand, I would focus the next pass on this exact order:
js/index-page-manager.js
css/axiom.css / build pipeline parity
docs/components-overview.html
index.html
docs link cleanup + count/version unification
.outline and variant parity in css/_components.css
remove inline event handlers from docs examples
That sequence gives you the biggest trust/reliability gain without changing the framework’s philosophy or public direction.
If you want, I can take the next step and start implementing the P0 stabilization fixes directly, beginning with js/index-page-manager.js and the broken docs links.