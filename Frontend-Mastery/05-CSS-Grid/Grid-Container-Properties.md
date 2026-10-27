# 05-CSS-Grid - Grid Container Properties

Welcome to this comprehensive guide on **Grid Container Properties**. This module is designed to take you from a complete beginner to a world-class frontend engineer.

---

## 1. Theory
CSS Grid is a two-dimensional grid-based layout system that handles both columns and rows, making it simple to construct complex web layouts without nesting tables.

---

## 2. Syntax
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}
```

---

## 3. Diagrams
```
+----------------+----------------+----------------+
|   Col 1 (1fr)  |   Col 2 (1fr)  |   Col 3 (1fr)  |
+----------------+----------------+----------------+
|   Row 2 Col 1  |   Row 2 Col 2  |   Row 2 Col 3  |
+----------------+----------------+----------------+
```

---

## 4. Beginner Examples
```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
  <div>Grid Item A</div>
  <div>Grid Item B</div>
</div>
```

---

## 5. Intermediate Examples
```html
<div style="display: grid; grid-template-columns: 200px 1fr; gap: 15px;">
  <aside>Sidebar</aside>
  <main>Main Content</main>
</div>
```

---

## 6. Advanced Examples
```html
<div style="display: grid; grid-template-areas: 'header header' 'nav main' 'footer footer'; grid-template-columns: 150px 1fr; gap: 10px;">
  <header style="grid-area: header;">Header</header>
  <nav style="grid-area: nav;">Nav</nav>
  <main style="grid-area: main;">Main</main>
  <footer style="grid-area: footer;">Footer</footer>
</div>
```

---

## 7. Production Examples
```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
  <div class="p-6 bg-white shadow rounded-lg">Card 1</div>
  <div class="p-6 bg-white shadow rounded-lg">Card 2</div>
  <div class="p-6 bg-white shadow rounded-lg">Card 3</div>
  <div class="p-6 bg-white shadow rounded-lg">Card 4</div>
</div>
```

---

## 8. Exercises
- **Exercise:** Build a clean user interface implementing Grid Container Properties.
- **Exercise:** Correct alignment issues on smaller mobile viewports.

---

## 9. Solutions
- **Solution:** Use responsive grid classes or CSS flexbox alignments.

---

## 10. Interview Questions
- **Q1:** What is the 1fr unit in CSS Grid?
  *Answer:* 1fr represents one fraction of the remaining free space inside the grid container.

---

## 11. Best Practices
Use auto-fit or auto-fill with minmax to build responsive grid grids without media queries.

---

## 12. Common Mistakes
- **Mistake:** Forgetting to define gap settings, resulting in crammed layouts.

---

## 13. Performance Notes
Avoid animating grid track sizes because it triggers layout engine recalculations.

---

## 14. Accessibility Notes
Always ensure keyboard focus flows naturally through grid elements.

---

## 15. Summary
In this chapter, we explored Grid Container Properties, reviewing implementation patterns, common mistakes, and performance layouts.
