# 05. Media Queries, CSS Variables, and Grid

## Responsive Design

Responsive design means the layout adapts to screen size.

## Media Queries

```css
@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
```

Explanation:

- `@media` starts a conditional CSS block.
- `(max-width: 768px)` means apply when viewport is 768px or smaller.
- Inside, layout changes to one column.

## Mobile First

Write mobile styles first. Then add larger screens.

```css
.grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## CSS Variables

```css
:root {
  --color-brand: #2563eb;
  --space-4: 16px;
}

button {
  background: var(--color-brand);
  padding: var(--space-4);
}
```

Variables make design consistent.

## CSS Grid Aim

Grid is for two-dimensional layout: rows and columns.

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
}
```

## fr Unit

`fr` means fraction of available space.

```css
grid-template-columns: 1fr 2fr;
```

Second column is twice as wide as first.

## repeat

```css
grid-template-columns: repeat(3, 1fr);
```

Means three equal columns.

## minmax

```css
grid-template-columns: repeat(3, minmax(200px, 1fr));
```

Each column is at least 200px and can grow.

## auto-fit

```css
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
```

This automatically creates as many columns as fit.

## Template Areas

```css
.page {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

header {
  grid-area: header;
}
```

Template areas make page layout readable.

## Grid vs Flexbox

Use Flexbox for one dimension. Use Grid for two dimensions.

Examples:

- Navbar: Flexbox.
- Blog page layout: Grid.
- Card gallery: Grid.
- Button row: Flexbox.

