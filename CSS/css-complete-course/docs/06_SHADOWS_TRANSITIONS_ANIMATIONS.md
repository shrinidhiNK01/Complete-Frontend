# 06. Shadows, Transitions, and Animations

## Box Shadow

```css
.card {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}
```

Values:

1. X offset.
2. Y offset.
3. Blur.
4. Color.

## Text Shadow

```css
h1 {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
```

Use text shadow carefully. Too much shadow makes text hard to read.

## Transitions

Transitions animate property changes.

```css
button {
  background: #111;
  transition: background 0.2s ease, transform 0.2s ease;
}

button:hover {
  background: #2563eb;
  transform: translateY(-2px);
}
```

Explanation:

- `transition` tells browser which properties to animate.
- `0.2s` is duration.
- `ease` is timing function.
- `:hover` triggers the change.

## Animations

Animations use `@keyframes`.

```css
@keyframes float {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-12px);
  }
}

.icon {
  animation: float 1s ease-in-out infinite alternate;
}
```

Explanation:

- `@keyframes float` defines animation steps.
- `from` is start.
- `to` is end.
- `animation` applies it.
- `infinite` repeats forever.
- `alternate` moves forward then backward.

## Animation Properties

```css
animation-name: float;
animation-duration: 1s;
animation-timing-function: ease-in-out;
animation-delay: 0.2s;
animation-iteration-count: infinite;
animation-direction: alternate;
```

## Reduced Motion

Some users prefer less motion.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

This improves accessibility.

