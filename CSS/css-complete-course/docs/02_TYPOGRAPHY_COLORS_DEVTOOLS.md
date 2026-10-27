# 02. Typography, Colors, and Developer Tools

## Typography Aim

Typography makes text readable, scannable, and beautiful.

Important properties:

```css
body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #222;
}
```

Explanation:

- `font-family` chooses the font.
- `font-size` controls text size.
- `line-height` controls vertical spacing between lines.
- `color` controls text color.

## Font Families

```css
h1 {
  font-family: Georgia, serif;
}
```

Font fallback:

- Browser tries `Georgia`.
- If unavailable, it uses any `serif` font.

## Font Weight

```css
h1 {
  font-weight: 700;
}
```

Common values:

- `400`: normal.
- `600`: semi-bold.
- `700`: bold.

## Text Alignment

```css
.hero {
  text-align: center;
}
```

Values:

- `left`
- `center`
- `right`
- `justify`

## Colors

CSS supports:

```css
.named {
  color: red;
}

.hex {
  color: #e63946;
}

.rgb {
  color: rgb(230, 57, 70);
}

.hsl {
  color: hsl(355, 78%, 56%);
}
```

## Background Color

```css
body {
  background-color: #f8f9fa;
}
```

## Gradients

```css
.banner {
  background: linear-gradient(135deg, #1d3557, #457b9d);
}
```

Use gradients carefully. Do not make text hard to read.

## Contrast

Good contrast helps everyone read.

Bad:

```css
color: #aaa;
background: #fff;
```

Better:

```css
color: #222;
background: #fff;
```

## Developer Tools

Open browser DevTools:

- Chrome/Edge: `F12` or right click Inspect.

Use DevTools to:

- Inspect HTML.
- Change CSS live.
- See box model.
- Test responsive sizes.
- Debug specificity.
- Check computed styles.

## Debugging CSS

Common process:

1. Inspect the element.
2. Check which rule applies.
3. Check whether another rule overrides it.
4. Check computed styles.
5. Check box model sizes.
6. Toggle rules on/off.

