# 08. Advanced CSS Architecture, Accessibility, and Production Thinking

## CSS Architecture

As websites grow, CSS can become messy.

Good CSS should be:

- Predictable.
- Reusable.
- Easy to override.
- Organized.
- Accessible.

## Naming

Use clear class names:

```css
.product-card {}
.product-card__title {}
.product-card__price {}
```

Avoid vague names:

```css
.big {}
.blue {}
.thing {}
```

## Component Thinking

Build reusable pieces:

- Button.
- Card.
- Navbar.
- Form field.
- Badge.
- Layout wrapper.

## Utility Classes

Small single-purpose classes:

```css
.text-center {
  text-align: center;
}

.mt-4 {
  margin-top: 1rem;
}
```

Use utilities carefully. Too many can make HTML noisy.

## Accessibility

CSS affects accessibility.

Important:

- Use readable contrast.
- Keep focus outlines.
- Do not rely only on color.
- Avoid tiny text.
- Respect reduced motion.
- Do not hide important content visually only.

## Focus States

```css
a:focus-visible,
button:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 3px;
}
```

Keyboard users need visible focus.

## Responsive Images

```css
img {
  max-width: 100%;
  height: auto;
}
```

Prevents images from overflowing containers.

## Performance

Prefer animating:

- `transform`
- `opacity`

Avoid animating:

- `width`
- `height`
- `top`
- `left`

Transforms and opacity are usually smoother.

## Common CSS Bugs

| Problem | Cause | Fix |
| --- | --- | --- |
| Element too wide | Width plus padding | Use `box-sizing: border-box` |
| Absolute element in wrong place | No positioned parent | Add `position: relative` to parent |
| Sticky not working | Parent overflow issue | Check ancestor overflow |
| Grid overflow | Columns too wide | Use `minmax(0, 1fr)` or responsive grid |
| Animation annoying | Too much motion | Add reduced motion media query |

