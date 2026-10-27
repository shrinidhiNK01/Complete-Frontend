# 07. CSS 2D and 3D Transforms

## Transform Aim

Transforms move, rotate, scale, and skew elements without changing normal document flow.

## 2D Translate

```css
.box {
  transform: translateX(40px);
}
```

Moves the element visually 40px to the right.

## Translate Y

```css
.box {
  transform: translateY(-20px);
}
```

Negative value moves up.

## Scale

```css
.box:hover {
  transform: scale(1.05);
}
```

Makes the element 5% bigger.

## Rotate

```css
.box {
  transform: rotate(12deg);
}
```

Rotates clockwise.

## Skew

```css
.box {
  transform: skewX(10deg);
}
```

Slants the element.

## Combining Transforms

```css
.box:hover {
  transform: translateY(-8px) scale(1.03) rotate(1deg);
}
```

Order matters. The browser applies transforms in the order written.

## 3D Transform

3D needs perspective.

```css
.scene {
  perspective: 800px;
}

.card {
  transform: rotateY(30deg);
}
```

## Preserve 3D

```css
.card {
  transform-style: preserve-3d;
}
```

This lets children exist in 3D space.

## Backface Visibility

```css
.face {
  backface-visibility: hidden;
}
```

Hides the back side of a rotated element.

## Flip Card Pattern

```css
.card:hover {
  transform: rotateY(180deg);
}
```

Use this for interactive cards, but keep accessibility in mind. Important information should not be hover-only on mobile.

