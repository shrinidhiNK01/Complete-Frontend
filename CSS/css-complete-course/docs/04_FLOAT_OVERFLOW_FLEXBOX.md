# 04. Float, Clear, Overflow, and Flexbox

## Float

Float was originally created for wrapping text around images.

```css
img {
  float: left;
  margin-right: 16px;
}
```

Do not use float for modern page layouts. Use Flexbox or Grid.

## Clear

Clear prevents an element from wrapping around floats.

```css
.footer {
  clear: both;
}
```

## Overflow

Overflow controls what happens when content is bigger than its box.

```css
.panel {
  height: 200px;
  overflow: auto;
}
```

Values:

- `visible`
- `hidden`
- `scroll`
- `auto`

## Flexbox Aim

Flexbox is for one-dimensional layout: row or column.

```css
.container {
  display: flex;
}
```

## Main Axis and Cross Axis

If direction is row:

- Main axis: left to right.
- Cross axis: top to bottom.

If direction is column:

- Main axis: top to bottom.
- Cross axis: left to right.

## Flex Direction

```css
.container {
  display: flex;
  flex-direction: row;
}
```

Values:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

## Justify Content

Controls main axis alignment.

```css
.container {
  justify-content: center;
}
```

Values:

- `flex-start`
- `center`
- `flex-end`
- `space-between`
- `space-around`
- `space-evenly`

## Align Items

Controls cross axis alignment.

```css
.container {
  align-items: center;
}
```

## Gap

```css
.container {
  gap: 24px;
}
```

Use `gap` instead of manually adding margins between flex children.

## Flex Wrap

```css
.container {
  flex-wrap: wrap;
}
```

Allows items to move to the next line.

## Flex Item Growth

```css
.card {
  flex: 1;
}
```

This means the item can grow and share available space.

## When to Use Flexbox

Use Flexbox for:

- Navigation bars.
- Buttons in a row.
- Centering.
- Card rows.
- Simple columns.
- Toolbars.

