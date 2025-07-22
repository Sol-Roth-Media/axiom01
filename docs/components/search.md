# Search Component

Powerful search interfaces with autocomplete, filters, and accessible keyboard navigation.

## Basic Search

```html
<div class="search" role="search">
  <label for="search-input" class="sr-only">Search</label>
  <div class="search-input-wrapper">
    <i class="fas fa-search search-icon" aria-hidden="true"></i>
    <input type="search" id="search-input" class="search-input" placeholder="Search..." aria-describedby="search-help">
    <button class="search-clear" aria-label="Clear search" style="display: none;">
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>
  </div>
  <p id="search-help" class="sr-only">Enter keywords to search</p>
</div>
```

## Search with Button

```html
<form class="search" role="search">
  <div class="search-input-wrapper">
    <label for="main-search" class="sr-only">Search products</label>
    <input type="search" id="main-search" class="search-input" placeholder="Search products...">
    <button type="submit" class="search-button" aria-label="Submit search">
      <i class="fas fa-search" aria-hidden="true"></i>
    </button>
  </div>
</form>
```

## Search with Autocomplete

```html
<div class="search autocomplete" role="search">
  <label for="autocomplete-search">Search documentation</label>
  <div class="search-input-wrapper">
    <input type="search" id="autocomplete-search" class="search-input" 
           placeholder="Type to search..." 
           aria-expanded="false" 
           aria-haspopup="listbox"
           aria-autocomplete="list"
           aria-describedby="search-instructions">
    <div class="search-results" id="search-results" role="listbox" aria-label="Search suggestions" hidden>
      <!-- Results populated by JavaScript -->
    </div>
  </div>
  <p id="search-instructions" class="help-text">Use arrow keys to navigate suggestions</p>
</div>
```

## Search with Filters

```html
<div class="search advanced" role="search">
  <div class="search-header">
    <h3>Find Content</h3>
    <button class="search-toggle-filters" aria-expanded="false" aria-controls="search-filters">
      <i class="fas fa-filter" aria-hidden="true"></i>
      Filters
    </button>
  </div>
  
  <div class="search-input-wrapper">
    <input type="search" class="search-input" placeholder="Search...">
    <button type="submit" class="search-button">Search</button>
  </div>
  
  <div class="search-filters" id="search-filters" aria-hidden="true">
    <div class="filter-group">
      <label for="category-filter">Category</label>
      <select id="category-filter">
        <option value="">All Categories</option>
        <option value="articles">Articles</option>
        <option value="videos">Videos</option>
        <option value="tutorials">Tutorials</option>
      </select>
    </div>
    
    <div class="filter-group">
      <label for="date-filter">Date Range</label>
      <select id="date-filter">
        <option value="">Any Time</option>
        <option value="week">Past Week</option>
        <option value="month">Past Month</option>
        <option value="year">Past Year</option>
      </select>
    </div>
  </div>
  
  <div class="search-results-info" role="status" aria-live="polite">
    <span class="results-count">145 results found</span>
  </div>
</div>
```

## CSS Variables

```css
.search {
  --search-input-bg: var(--a-color-surface);
  --search-input-border: var(--a-color-outline);
  --search-focus-border: var(--a-color-primary);
  --search-button-bg: var(--a-color-primary);
  --search-results-bg: var(--a-color-surface);
  --search-results-shadow: var(--a-shadow-medium);
}
```

## Accessibility Features

- Proper `role="search"` landmark
- Screen reader friendly labels and instructions
- ARIA attributes for autocomplete functionality
- Keyboard navigation for suggestions
- Live regions for result announcements
- Focus management and indicators

## JavaScript Integration

```javascript
class SearchComponent {
  constructor(element) {
    this.element = element;
    this.input = element.querySelector('.search-input');
    this.results = element.querySelector('.search-results');
    this.currentFocus = -1;
    
    this.init();
  }
  
  init() {
    this.input.addEventListener('input', this.handleInput.bind(this));
    this.input.addEventListener('keydown', this.handleKeydown.bind(this));
    this.input.addEventListener('focus', this.handleFocus.bind(this));
    this.input.addEventListener('blur', this.handleBlur.bind(this));
  }
  
  async handleInput(e) {
    const query = e.target.value.trim();
    
    if (query.length >= 2) {
      const suggestions = await this.fetchSuggestions(query);
      this.showSuggestions(suggestions);
    } else {
      this.hideSuggestions();
    }
  }
  
  async fetchSuggestions(query) {
    // Implement your search logic here
    return [];
  }
  
  showSuggestions(suggestions) {
    if (suggestions.length === 0) {
      this.hideSuggestions();
      return;
    }
    
    this.results.innerHTML = suggestions.map((suggestion, index) => `
      <div class="search-result" role="option" data-index="${index}">
        ${suggestion.title}
      </div>
    `).join('');
    
    this.results.hidden = false;
    this.input.setAttribute('aria-expanded', 'true');
  }
  
  hideSuggestions() {
    this.results.hidden = true;
    this.input.setAttribute('aria-expanded', 'false');
    this.currentFocus = -1;
  }
}
```
