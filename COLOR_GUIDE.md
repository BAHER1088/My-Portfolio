# Color System Guide

This guide explains how to use the new color system in your portfolio project.

## Overview

The color system uses CSS Custom Properties (CSS Variables) that automatically adapt to light and dark themes. All colors are defined in `src/styles.scss` and can be used throughout your components.

## Available Color Variables

### Base Colors
- `--main-color`: Primary brand color (#0e2f1b)
- `--main-color-light`: Lighter version of main color
- `--main-color-dark`: Darker version of main color
- `--accent`: Accent color (#ab3020)
- `--accent-light`: Lighter version of accent color
- `--accent-dark`: Darker version of accent color

### Background Colors
- `--bg-primary`: Main background color
- `--bg-secondary`: Secondary background color
- `--bg-tertiary`: Tertiary background color
- `--bg-overlay`: Semi-transparent overlay background

### Text Colors
- `--text-primary`: Primary text color
- `--text-secondary`: Secondary text color
- `--text-muted`: Muted/subtle text color

### Border Colors
- `--border-color`: Default border color
- `--border-color-hover`: Border color on hover

### Status Colors
- `--success`: Success/green color
- `--warning`: Warning/yellow color
- `--error`: Error/red color
- `--info`: Info/blue color

## How to Use

### 1. In SCSS Files

```scss
.my-component {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  
  &:hover {
    background-color: var(--bg-secondary);
    border-color: var(--border-color-hover);
  }
  
  .button {
    background-color: var(--main-color);
    color: var(--text-primary);
    
    &:hover {
      background-color: var(--main-color-light);
    }
  }
}
```

### 2. Using Utility Classes

You can also use the predefined utility classes:

```html
<div class="bg-primary text-primary">
  <h1 class="text-main">Main Heading</h1>
  <p class="text-secondary">Secondary text</p>
  <button class="bg-accent text-primary">Accent Button</button>
</div>
```

### 3. Available Utility Classes

#### Background Classes
- `.bg-primary` - Primary background
- `.bg-secondary` - Secondary background
- `.bg-tertiary` - Tertiary background
- `.bg-main` - Main color background
- `.bg-accent` - Accent color background

#### Text Classes
- `.text-primary` - Primary text color
- `.text-secondary` - Secondary text color
- `.text-muted` - Muted text color
- `.text-main` - Main color text
- `.text-accent` - Accent color text

#### Border Classes
- `.border-color` - Default border color
- `.border-color-hover` - Hover border color

## Theme Switching

The color system automatically handles theme switching. When you toggle between light and dark themes:

1. **Dark Theme (Default)**: Uses dark backgrounds with light text
2. **Light Theme**: Uses light backgrounds with dark text

The theme is controlled by the `data-theme` attribute on the root element:
- `data-theme="dark"` or no attribute = Dark theme
- `data-theme="light"` = Light theme

## Best Practices

1. **Always use CSS variables** instead of hardcoded colors
2. **Use semantic color names** like `--text-primary` instead of specific colors
3. **Test both themes** to ensure good contrast and readability
4. **Use utility classes** for common color combinations
5. **Keep color usage consistent** across components

## Examples

### Navigation Component
```scss
nav {
  background-color: var(--bg-overlay);
  border: 1px solid var(--border-color);
  
  .nav-link {
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    
    &:hover {
      background-color: var(--main-color);
      border-color: var(--border-color-hover);
    }
  }
}
```

### Card Component
```scss
.card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  
  .card-title {
    color: var(--text-primary);
  }
  
  .card-text {
    color: var(--text-secondary);
  }
  
  .card-button {
    background-color: var(--accent);
    color: var(--text-primary);
    
    &:hover {
      background-color: var(--accent-light);
    }
  }
}
```

### Form Component
```scss
.form-input {
  background-color: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  
  &:focus {
    border-color: var(--main-color);
    outline: none;
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
}
```

## Troubleshooting

If colors aren't updating properly:

1. **Check the theme attribute**: Ensure `data-theme="light"` is set for light mode
2. **Verify CSS variable usage**: Make sure you're using `var(--variable-name)` syntax
3. **Check for specificity issues**: CSS variables can be overridden by more specific selectors
4. **Clear browser cache**: Sometimes cached styles can interfere with updates

## Adding New Colors

To add new colors to the system:

1. Add the SCSS variable in `src/styles.scss`
2. Add the CSS custom property in the `:root` selector
3. Add the light theme version in the `[data-theme="light"]` selector
4. Optionally add utility classes for common usage 