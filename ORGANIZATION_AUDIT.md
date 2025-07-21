# Repository Organization Audit & Cleanup Plan

## 🚨 CRITICAL ORGANIZATIONAL ISSUES FOUND

### 1. Duplicate Component Directories
- **ROOT `/components/`**: 43 files (includes AI, advanced components)
- **DOCS `/docs/components/`**: 13 files (documentation-integrated)
- **PROBLEM**: Documentation system only sees docs/components but search references root components

### 2. File Structure Inconsistencies
- Mixed file purposes in root directory
- Development files mixed with production files
- Legacy files not properly archived

## 🔧 CLEANUP ACTIONS REQUIRED

### IMMEDIATE: Remove Development Planning Files
```bash
rm AXIOM01_COMPONENT_CHECKLIST.md
rm AXIOM01_ENHANCEMENT_TODO.md
rm AXIOM01_IMPROVEMENT_ROADMAP.md
rm AXIOM01_INDEX_REVAMP_PLAN.md
rm AXIOM_IMPROVEMENT_PLAN.md
rm GEMINI_SELF_VERIFICATION.md
rm RELEASE_TODO.md
rm performance-report.json
rm performance-report.md
rm -rf .idea/
rm -rf .vscode-extension/
```

### CRITICAL: Resolve Component Directory Conflict
**DECISION NEEDED**: 
- Option A: Move root components to `/docs/components/` and update documentation
- Option B: Keep root components as demos, docs components as documentation
- Option C: Merge and organize by maturity level

### ORGANIZE: Create Clear Directory Structure
```
/docs/               # User-facing documentation
  /components/       # Production-ready components with full docs
  /guides/          # Style guides and tutorials
  /css/            # Documentation styling
  /js/             # Documentation functionality

/examples/          # Live demo pages
/components/        # → RENAME to /demos/ or /showcase/
/css/              # Core framework CSS
/js/               # Core framework JS
```

### ARCHIVE: Legacy and Experimental Files
Move to `/archive/experimental/`:
- AI components (ai-chat.html, ai-image-generator.html)
- Advanced experimental features
- Legacy build scripts

## 📊 CURRENT STATE ANALYSIS

### Production-Ready Components (in /docs/components/)
1. alert.html ✅
2. badge.html ✅
3. breadcrumb.html ✅
4. button.html ✅
5. card.html ✅ (recently updated)
6. carousel.html ✅
7. chat.html ✅
8. commerce.html ✅
9. dropdown.html ✅
10. input.html ✅
11. modal.html ✅
12. table.html ✅
13. tabs.html ✅

### Experimental Components (in /components/)
- AI components (2)
- Advanced UI patterns (30+)
- Prototype components

## 🎯 NEXT STEPS
1. Resolve component directory structure
2. Complete file cleanup
3. Standardize all component documentation
4. Verify all links and references
5. Create production build
