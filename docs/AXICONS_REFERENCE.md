# Axicons: The Axiom01 Icon System

**Version**: 1.0.0  
**Icons**: 200+ production-ready SVG icons  
**Philosophy**: Semantic-first, minimal CSS, perfect for Axiom01

---

## What Are Axicons?

Axicons are 200+ hand-crafted SVG icons designed specifically for Axiom01. Instead of relying on external icon fonts like Font Awesome, Axicons give you full control over your icon system while maintaining Axiom's core philosophy: semantic-first, minimal classes, and beautiful design.

### Why Axicons Over Font Awesome?

| Aspect | Axicons | Font Awesome |
|--------|---------|-------------|
| **Load Type** | SVG (no external font) | Icon font (CDN dependency) |
| **Performance** | Lightweight JS injection | Font file download |
| **Control** | 100% in your framework | Third-party dependency |
| **Semantic** | Native to Axiom philosophy | Generic icon system |
| **Customization** | Built for CSS variables | Limited to font properties |
| **Accessibility** | Automatic `aria-hidden="true"` | Manual management required |

---

## Quick Start

### 1. Include in Your HTML

```html
<!-- In <head> -->
<link rel="stylesheet" href="css/axicons.css">

<!-- In <body>, before </body> -->
<script src="js/axicons.js"></script>
<script>
    // Render hook - inject SVG content
    document.querySelectorAll('.axicon.render').forEach(el => {
        const name = el.getAttribute('data-name');
        const icon = axicons.find(i => i.name.toLowerCase() === name.toLowerCase());
        if (icon) {
            el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${icon.svgContent}</svg>`;
        }
    });
</script>
```

### 2. Use in Your HTML

```html
<!-- Simple icon -->
<span class="axicon render" data-name="Search"></span>

<!-- Large icon -->
<span class="axicon render axicon-lg" data-name="Settings"></span>

<!-- With custom color -->
<span class="axicon render" style="color: #3b82f6;" data-name="Heart"></span>

<!-- Spinning loader -->
<span class="axicon render axicon-spin" data-name="Loader"></span>

<!-- In a button -->
<button>
    <span class="axicon render" data-name="Download"></span>
    Download
</button>
```

---

## CSS Classes & Utilities

### Base Classes

```html
<!-- Required classes -->
<span class="axicon render" data-name="IconName"></span>
```

- `.axicon` - Base container class (required)
- `.render` - JavaScript behavior hook (required)
- `data-name` - Icon name attribute (required, case-insensitive)

### Size Utilities

```html
<span class="axicon render axicon-sm" data-name="Star"></span>   <!-- 0.875em -->
<span class="axicon render" data-name="Star"></span>              <!-- 1em (default) -->
<span class="axicon render axicon-lg" data-name="Star"></span>   <!-- 1.25em -->
<span class="axicon render axicon-xl" data-name="Star"></span>   <!-- 1.5em -->
<span class="axicon render axicon-2xl" data-name="Star"></span>  <!-- 2em -->
```

### Animation Utilities

```html
<!-- Spinning animation -->
<span class="axicon render axicon-spin" data-name="Loader"></span>

<!-- Pulse animation (attention) -->
<span class="axicon render axicon-pulse" data-name="Bell"></span>
```

### Semantic Color Utilities

```html
<span class="axicon render axicon-primary" data-name="Star"></span>      <!-- Primary color -->
<span class="axicon render axicon-secondary" data-name="Star"></span>    <!-- Secondary color -->
<span class="axicon render axicon-success" data-name="Check"></span>     <!-- Success color -->
<span class="axicon render axicon-warning" data-name="AlertTriangle"></span> <!-- Warning color -->
<span class="axicon render axicon-error" data-name="X"></span>           <!-- Error color -->
<span class="axicon render axicon-info" data-name="Info"></span>         <!-- Info color -->
<span class="axicon render axicon-muted" data-name="Help"></span>        <!-- Muted color -->
```

---

## How Axicons Works

### 1. SVG Content Storage

All 200+ icons are stored in `js/axicons.js` as an array of objects:

```javascript
const axicons = [
    { 
        id: 1, 
        name: "Search", 
        svgContent: '<path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 0l5 5"/>' 
    },
    { 
        id: 2, 
        name: "Menu", 
        svgContent: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>' 
    },
    // ... 198 more icons
];
```

### 2. JavaScript Injection

The render script targets elements with BOTH `.axicon` AND `.render` classes:

```javascript
document.querySelectorAll('.axicon.render').forEach(el => {
    const name = el.getAttribute('data-name');
    const icon = axicons.find(i => i.name.toLowerCase() === name.toLowerCase());
    if (icon) {
        el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${icon.svgContent}</svg>`;
    }
});
```

### 3. CSS Styling

The `.axicon` class provides base styling:

```css
.axicon {
    display: inline-block;
    width: 1em;           /* Scales with font-size */
    height: 1em;
    stroke: currentColor; /* Inherits text color */
    stroke-width: 2;
    fill: none;
    vertical-align: -0.125em; /* Aligns with text baseline */
    flex-shrink: 0;       /* Prevents shrinking in flex containers */
}
```

---

## Design Principles

### ✅ Semantic-First

- Single `.axicon` class (meaningful intent)
- `.render` as pure behavior trigger
- `data-name` for configuration

### ✅ Minimal Classes

- No BEM naming (`axicon__element--modifier`)
- No utility stacking (one class per concern)
- Optional modifiers cascade naturally

### ✅ CSS Cascade

- Icons inherit `currentColor` from parent
- Override with inline `style="color: ..."`
- Add modifiers (`.axicon-lg`, `.axicon-spin`) additively

### ✅ Performance

- No external font file (no CDN dependency)
- Lightweight SVG injection (only when needed)
- 200 icons = smaller payload than Font Awesome

### ✅ Accessibility

- Automatic `aria-hidden="true"` on SVGs
- Semantic HTML markup
- Proper focus management
- Respects `prefers-reduced-motion`

---

## All 200 Axicons

### Navigation (25 icons)
- Menu, X, ChevronDown, ChevronUp, ChevronLeft, ChevronRight
- ArrowDown, ArrowUp, ArrowLeft, ArrowRight
- Home, Map, MapPin, Navigation, Compass
- SkipBack, SkipForward, ChevronsLeft, ChevronsRight
- Maximize, Minimize, Expand, Corners, CornerDownLeft, CornerDownRight, CornerUpLeft, CornerUpRight

### User & Account (15 icons)
- User, Users, UserPlus, UserMinus, UserCheck
- UserCircle, UserX, LogOut, LogIn
- Settings, Bell, BellOff, Heart, HeartOff
- Eye, EyeOff

### Communication (20 icons)
- Mail, Send, MessageCircle, MessageSquare
- Phone, PhoneMissed, Video, VideoOff
- Mic, MicOff, Speaker, Volume, VolumeUp, VolumeDown, VolumeMute
- AtSign, Hash, Slash
- Inbox, Archive, Trash, Share

### Media (25 icons)
- Image, Images, Video, Camera, Play, Pause, Stop
- Music, Radio, Headphones, Headset
- Film, Tv, Clipboard, ClipboardCheck, ClipboardList, ClipboardX
- Layers, Layout, Repeat, Shuffle, RotateCw, RotateCcw
- Zoom, ZoomIn, ZoomOut

### Files & Documents (20 icons)
- File, FileText, FileCode, FileImage, FilePdf, FileAudio
- FileArchive, FileCheck, FileX, FilePlus, FileMinus
- Folder, FolderOpen, FolderPlus, FolderMinus
- Copy, Download, Upload, Save, Inbox

### Business & Work (20 icons)
- Briefcase, Suitcase, Package, Package2
- Award, Trophy, Target, Bullseye
- TrendingUp, TrendingDown, BarChart, BarChart2, LineChart
- PieChart, Gauge, Codepen, GitBranch, GitCommit
- GitMerge, GitPullRequest

### Development (20 icons)
- Code, CodeBrackets, Terminal, Console, Command
- Cursor, Keyboard, Mouse, Touchpad
- Database, Server, HardDrive, Cpu
- Zap, Cpu, Power, Activity, Radio

### UI Elements (20 icons)
- Button, Checkbox, RadioButton, ToggleLeft, ToggleRight
- Slider, SliderVertical, Menu, MenuAlt, Search
- Filter, Settings, Wrench, Tool, Hammer
- Layers, Grid, List, ListChecks, Menu

### Status & Feedback (20 icons)
- CheckCircle, XCircle, AlertCircle, AlertTriangle, Info
- HelpCircle, QuestionCircle, ExclamationCircle
- Check, X, Minus, Plus, Equal
- Star, StarOff, Flag, Bookmark, BookmarkOff

### Shapes & Objects (25 icons)
- Circle, Square, Triangle, Hexagon, Octagon, Pentagon
- Box, Cube, Gift, Package
- Heart, HeartOff, Star, StarOff, Sun, Moon, Cloud
- Smile, Frown, Meh, Laughing, Angry, Confused
- Thumbs-Up, Thumbs-Down

### Social & Web (15 icons)
- Share2, Link, LinkOff, Share, ShareAlt
- Globe, Wifi, Wifi-Off, Bluetooth, Bluetooth-Off
- Cast, Rss, Github, Gitlab, Trello

**Total: 200+ icons**

---

## Styling with Axicons

### Inherit Text Color

```html
<!-- Icon inherits parent's text color -->
<p style="color: #3b82f6;">
    <span class="axicon render" data-name="Heart"></span>
    Blue heart
</p>
```

### Override Individual Icon

```html
<!-- Override with inline style -->
<span class="axicon render" style="color: #ef4444;" data-name="AlertTriangle"></span>

<!-- Or use semantic class -->
<span class="axicon render axicon-error" data-name="AlertTriangle"></span>
```

### Responsive Sizing

```css
/* CSS for responsive sizing */
.icon-label {
    display: flex;
    align-items: center;
    gap: var(--a-space-s);
}

.icon-label .axicon {
    width: 1.5em;
    height: 1.5em;
}

@media (max-width: 640px) {
    .icon-label .axicon {
        width: 1.25em;
        height: 1.25em;
    }
}
```

### Animation

```html
<!-- Spinning loader -->
<span class="axicon render axicon-spin" data-name="Loader"></span>

<!-- Pulsing attention -->
<span class="axicon render axicon-pulse" data-name="Bell"></span>
```

```css
/* Custom animation for emphasis */
@keyframes bounce-icon {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
}

.axicon.bounce {
    animation: bounce-icon 0.6s ease-in-out infinite;
}
```

---

## Dark Mode Support

Axicons automatically adapt to dark mode thanks to `currentColor`:

```html
<!-- Light mode: inherits dark text -->
<span class="axicon render" data-name="Search"></span>

<!-- Dark mode: automatically inherits light text -->
<!-- No CSS changes needed! -->
```

This works because `stroke: currentColor` makes icons inherit whatever text color is set by your theme.

---

## Accessibility

### Automatic ARIA

All injected SVGs automatically receive `aria-hidden="true"`:

```html
<!-- Automatically handled by JS -->
<svg viewBox="0 0 24 24" aria-hidden="true">
    <!-- icon content -->
</svg>
```

This ensures icons don't interfere with screen reader navigation.

### Semantic Context

Always use icons in semantic context:

```html
<!-- ✓ Good: Icon is context for semantic element -->
<button>
    <span class="axicon render" data-name="Download"></span>
    Download
</button>

<!-- ✓ Good: Icon is decorative with text label -->
<p>
    <span class="axicon render" data-name="Heart"></span>
    Favorite
</p>

<!-- ✗ Avoid: Icon alone with no context -->
<span class="axicon render" data-name="Heart"></span>
```

### Motion Preferences

Icons respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
    .axicon-spin,
    .axicon-pulse {
        animation: none;
    }
}
```

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome/Edge | ✓ Full support |
| Firefox | ✓ Full support |
| Safari | ✓ Full support |
| Opera | ✓ Full support |
| IE 11 | ✓ Works (no SVG animations) |

---

## Migration from Font Awesome

### Before (Font Awesome)

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/.../font-awesome.min.css">

<!-- Usage -->
<i class="fas fa-search" aria-hidden="true"></i>
<i class="fas fa-heart"></i>
<i class="fas fa-star"></i>
```

### After (Axicons)

```html
<link rel="stylesheet" href="css/axicons.css">
<script src="js/axicons.js"></script>
<script>
    document.querySelectorAll('.axicon.render').forEach(el => {
        const name = el.getAttribute('data-name');
        const icon = axicons.find(i => i.name.toLowerCase() === name.toLowerCase());
        if (icon) {
            el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${icon.svgContent}</svg>`;
        }
    });
</script>

<!-- Usage -->
<span class="axicon render" data-name="Search"></span>
<span class="axicon render" data-name="Heart"></span>
<span class="axicon render" data-name="Star"></span>
```

### Benefits

- ✓ No external CDN dependency
- ✓ 3-4 KB smaller payload (no font file)
- ✓ Full control over icon system
- ✓ Better alignment with Axiom philosophy
- ✓ Easier customization via CSS variables
- ✓ Better accessibility defaults

---

## Extending Axicons

### Add Your Own Icons

Add custom icons to the `axicons` array in `js/axicons.js`:

```javascript
const axicons = [
    // ... existing icons
    { 
        id: 201, 
        name: "MyCustomIcon", 
        svgContent: '<circle cx="12" cy="12" r="10"/><path d="M12 6v12M6 12h12"/>' 
    },
];
```

Then use as normal:

```html
<span class="axicon render" data-name="MyCustomIcon"></span>
```

### Create Icon Variants

Use CSS classes to create variations:

```css
.icon-outline {
    stroke-width: 3;
}

.icon-filled {
    fill: currentColor;
    stroke: none;
}

.icon-gradient {
    /* Works with CSS gradients */
}
```

Usage:

```html
<span class="axicon render icon-filled" data-name="Heart"></span>
```

---

## Performance

### Bundle Size

- `axicons.js`: ~12 KB
- `axicons.css`: ~2 KB
- Total: ~14 KB (vs Font Awesome CDN: ~30+ KB)

### Loading

- No blocking external requests
- Local SVG injection
- Minimal JavaScript
- Instant rendering

---

## Support & Resources

- **Icon Browser**: `docs/axicons-browser.html`
- **Styling Guide**: `AXIOM01_STYLING_GUIDE.md#Icons`
- **GitHub**: `js/axicons.js`
- **License**: MIT (same as Axiom01)

---

## Feedback

Found an icon missing? Have a suggestion?

1. Check the `docs/axicons-browser.html` for all 200 icons
2. Open an issue on GitHub
3. Contribute your own custom icon!

---

## License

Axicons are part of Axiom01 and released under the **MIT License**.

Use freely in personal and commercial projects.

---

**Axiom01**: Built for developers who want control.  
**Axicons**: Built for Axiom01.

🎨 **Start using Axicons today!**

