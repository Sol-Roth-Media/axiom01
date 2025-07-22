# File Structure Documentation

This document explains the organized structure of the Axiom01 framework and the reasoning behind each directory.

## Current Structure Overview

```
/axiom/
├── docs/                    # Complete documentation system
│   ├── components/          # ALL component documentation (24 files)
│   ├── guides/             # Usage and implementation guides
│   ├── css/                # Documentation-specific styles
│   └── js/                 # Documentation JavaScript
├── css/                    # Core framework styles
│   ├── axiom.css          # Main framework file (~12KB)
│   └── tokens/            # Design token definitions
├── js/                     # Framework JavaScript functionality
├── showcase/              # ⚠️ DEPRECATED - Being eliminated
└── examples/              # Live implementation examples
```

## Directory Purpose & Organization

### `/docs/` - Documentation Hub
**Purpose:** Complete documentation system for developers
- `components/` - Comprehensive component documentation (24 components)
- `guides/` - Implementation guides and best practices
- `css/` & `js/` - Documentation-specific assets

### `/css/` - Framework Styles
**Purpose:** Core Axiom01 CSS framework
- `axiom.css` - Single main file containing all framework styles
- `tokens/` - Design token definitions and theme variables

### `/js/` - Framework JavaScript
**Purpose:** Optional JavaScript enhancements for components
- Component-specific functionality
- Accessibility helpers
- Interactive behaviors

### `/showcase/` - ⚠️ DEPRECATED
**Status:** Being eliminated due to redundancy
**Issues:** 
- Duplicates documentation components
- Contains BEM violations
- Inconsistent with framework philosophy

## File Organization Philosophy

### Semantic File Structure
Axiom01's file organization follows the same semantic-first principles as the framework:

1. **Clear Purpose** - Each directory has a single, clear responsibility
2. **Minimal Hierarchy** - Avoid deep nesting and complex folder structures  
3. **Semantic Naming** - Directory names clearly indicate their contents
4. **No Redundancy** - Each file has a unique purpose and location

### Documentation-First Approach
- All components documented in `/docs/components/`
- Living examples embedded within documentation
- Single source of truth for each component

## Upcoming Structure Changes

### Phase 1: Eliminate Showcase Directory
The `/showcase/` directory will be completely removed because:
- It duplicates `/docs/components/` content
- Contains non-compliant code examples
- Violates the "single source of truth" principle

### Phase 2: Consolidate Examples
Live examples will be:
- Embedded directly in component documentation
- Moved to `/docs/examples/` for complex demonstrations
- Made fully compliant with Axiom01 principles

### Phase 3: Streamlined Structure
Final structure will be:
```
/axiom/
├── docs/                   # Complete documentation
├── css/axiom.css          # Single CSS file
├── js/axiom.js           # Single JS file (optional)
└── README.md             # Quick start guide
```

## Why This Structure?

### Developer Experience
- **Single Entry Point** - Developers start with `/docs/`
- **Clear Separation** - Framework code separate from documentation
- **Easy Navigation** - Logical, predictable file locations

### Maintenance Benefits
- **Single Source of Truth** - No duplicate component definitions
- **Easier Updates** - Changes made in one place
- **Consistent Quality** - All examples follow same standards

### Framework Philosophy Alignment
- **Semantic Organization** - Structure reflects content purpose
- **Minimal Complexity** - Simple, understandable hierarchy
- **Developer-Focused** - Organized for ease of use, not technical convenience

## Migration Plan

1. **Audit Showcase Directory** - Identify unique content worth preserving
2. **Migrate Compliant Examples** - Move good examples to proper documentation
3. **Fix Compliance Violations** - Update all BEM and class stacking issues
4. **Remove Showcase Directory** - Complete elimination of redundant files
5. **Update All References** - Fix any links pointing to old showcase files

This streamlined structure will make Axiom01 easier to understand, maintain, and use while ensuring complete compliance with the framework's semantic-first philosophy.
