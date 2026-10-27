# 01. CSS Foundations, Stylesheets, Cascade, and Selectors

## Aim

CSS controls how HTML looks. HTML gives structure; CSS gives presentation.

HTML says:

```html
<button>Buy Now</button>
```

CSS says:

```css
button {
  background: black;
  color: white;
  padding: 12px 20px;
}
```

## Three Ways to Add CSS

### 1. Inline CSS

```html
<p style="color: red;">This text is red.</p>
```

Line-by-line:

- `<p>` creates a paragraph.
- `style="..."` applies CSS directly to that element.
- `color: red;` changes text color.

Use inline CSS rarely. It is hard to maintain.

### 2. Internal CSS

```html
<style>
  p {
    color: red;
  }
</style>
```

This CSS lives inside the HTML file. Good for small demos, not best for large websites.

### 3. External CSS

```html
<link rel="stylesheet" href="styles.css">
```

This links a separate CSS file. This is the best normal approach.

## Basic CSS Syntax

```css
selector {
  property: value;
}
```

Example:

```css
h1 {
  color: navy;
  font-size: 48px;
}
```

Explanation:

- `h1` is the selector.
- `color` is the property.
- `navy` is the value.
- `font-size` controls text size.
- `48px` means 48 pixels.

## Selectors

### Element Selector

```css
p {
  line-height: 1.6;
}
```

Targets all `<p>` tags.

### Class Selector

```css
.card {
  border: 1px solid #ddd;
}
```

Targets elements with `class="card"`.

### ID Selector

```css
#main-title {
  color: purple;
}
```

Targets one element with `id="main-title"`.

Prefer classes for styling. IDs are too specific and make CSS harder to override.

## Cascade

Cascade means CSS rules can compete. The browser decides which rule wins.

Order of importance:

1. Importance: `!important`.
2. Specificity.
3. Source order.

## Specificity

Simple ranking:

- Inline style: strongest.
- ID selector.
- Class selector.
- Element selector.

Example:

```css
p {
  color: blue;
}

.intro {
  color: green;
}
```

HTML:

```html
<p class="intro">Hello</p>
```

The text becomes green because class selector is more specific than element selector.

## Inheritance

Some CSS properties pass from parent to child.

Inherited:

- `color`
- `font-family`
- `line-height`

Not usually inherited:

- `margin`
- `padding`
- `border`
- `width`

## CSS Reset

Browsers have default styles. A reset makes styling predictable.

Simple reset:

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
```

Line-by-line:

- `*` selects all elements.
- `box-sizing: border-box;` makes width calculations easier.
- `body { margin: 0; }` removes browser default page margin.

