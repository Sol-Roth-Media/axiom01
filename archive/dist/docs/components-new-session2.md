# Reading Width Variables - Typography Best Practice

**Added in:** Session 2 Backport  
**Status:** Production Ready  

## Overview

Axiom includes semantic CSS variables for optimal text readability. The `--ax-reading-width` variable implements typography best practices by constraining text to an optimal line length (60-75 characters) using semantic `ch` (character) units instead of pixels.

## The Problem

Long lines of text are harder to read. Typography best practices recommend:
- **Optimal:** 60-75 characters per line
- **Minimum:** 45 characters
- **Maximum:** 85 characters

Without constraints, text can stretch across the entire viewport, making it difficult to follow and reducing comprehension.

## The Solution

Axiom provides `--ax-reading-width` variable that automatically constrains text to an optimal line length:

```css
:root {
  --ax-reading-width: 65ch;  /* ~650-750px at 1rem base */
}
```

The unit `ch` means "character" and scales automatically with font-size changes, making it more semantic than fixed pixel widths.

## Available Variants

Axiom provides layout width variants for different use cases:

```css
:root[data-layout-width='narrow'] {
  --ax-reading-width: 60ch;  /* Narrow: ~600-650px */
}

:root[data-layout-width='standard'] {
  --ax-reading-width: 65ch;  /* Default: ~650-750px */
}

:root[data-layout-width='wide'] {
  --ax-reading-width: 70ch;  /* Wide: ~700-800px */
}

:root[data-layout-width='full'] {
  --ax-reading-width: 100%;  /* No constraint */
}
```

## Usage

### Apply to Text Content

```html
<article class="article-body">
  <p>Your article text here...</p>
</article>
```

```css
.article-body {
  max-width: var(--ax-reading-width, 65ch);
  margin: 0 auto;
}
```

### Text Elements That Benefit

- `<article>` - Main article content
- `<p>` - Paragraphs
- `<blockquote>` - Quotes
- `<ul>`, `<ol>` - Lists
- `.prose` - Generic prose container
- `.post-content` - Blog posts
- `.page-content` - Page content

### Example HTML

```html
<main>
  <article>
    <h1>Article Title</h1>
    <p>This paragraph will be constrained to 65 characters per line...</p>
    <blockquote>
      "This quote will also be readable at optimal width."
    </blockquote>
    <p>More content here...</p>
  </article>
</main>
```

### Example CSS

```css
article {
  max-width: var(--ax-reading-width, 65ch);
  margin: 0 auto;
}
```

## Why "ch" Units?

The `ch` (character) unit is semantic and responsive:

- **Semantic:** Indicates intent (reading width, not arbitrary pixels)
- **Responsive:** Scales automatically if base font-size changes
- **Readable:** 65ch ≈ 65 characters per line at normal text size
- **Accessible:** Users who increase font-size get proportionally adjusted width

## Changing Width Dynamically

### Via HTML Attribute

```html
<!-- Standard width (default) -->
<html data-layout-width="standard">

<!-- Narrow columns -->
<html data-layout-width="narrow">

<!-- Spacious layout -->
<html data-layout-width="wide">

<!-- No constraint -->
<html data-layout-width="full">
```

### In JavaScript

```javascript
// Change to narrow reading width
document.documentElement.setAttribute('data-layout-width', 'narrow');

// Change to wide reading width
document.documentElement.setAttribute('data-layout-width', 'wide');

// Reset to standard
document.documentElement.removeAttribute('data-layout-width');
```

## Measuring Line Length

To verify your reading width is correct:

1. Open your page in a browser
2. Count characters on a typical line (you can use browser DevTools)
3. Target is 60-75 characters
4. Axiom's 65ch default hits the sweet spot

**Quick check:**
- At 1rem (16px) base font, 65ch ≈ 650-750px
- At larger font-sizes, width adjusts proportionally

## Fallback Values

All Axiom components that use reading width include fallback values:

```css
.prose {
  max-width: var(--ax-reading-width, 65ch);  /* Fallback if variable not set */
}
```

This ensures components work even if the CSS variable isn't defined.

## Best Practices

1. **Use on text-heavy content** - Articles, blog posts, documentation
2. **Combine with proper spacing** - Add line-height and margin for comfort
3. **Test readability** - Verify line length feels natural to read
4. **Consider your audience** - Older readers may prefer wider layouts
5. **Mobile adaptation** - Let width contract naturally on small screens

## Typography Stack

Reading width works best when combined with:

- **Line-height:** 1.5-1.8 for body text
- **Letter-spacing:** Slightly increased for accessibility
- **Font-weight:** Regular for body, bold for headings
- **Font-size:** 16-18px base for comfortable reading

## Integration with Axiom

All of Axiom's text components automatically apply reading width constraints:

```css
.prose,
[data-axiom-text-content],
article > p,
article > blockquote,
article > ul,
article > ol,
.article-body,
.post-content,
.page-content,
main > p {
  max-width: var(--ax-reading-width, 65ch);
  margin-left: auto;
  margin-right: auto;
}
```

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support  
- Safari: ✅ Full support
- Mobile: ✅ Full support

The `ch` unit has excellent browser support across all modern browsers.

## Resources

- [MDN: CSS Unit `ch`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#character_length_units)
- [Web Typography: Optimal Line Length](https://www.smashingmagazine.com/2014/09/balancing-line-length-and-font-size-in-responsive-web-design/)
- [ADA Typography Standards](https://www.w3.org/TR/WCAG21/#target-size)

## Related Documentation

- [Typography Guide](typography-advanced.html)
- [Layout Guide](layout-advanced.html)
- [Color System](colors-advanced.html)
