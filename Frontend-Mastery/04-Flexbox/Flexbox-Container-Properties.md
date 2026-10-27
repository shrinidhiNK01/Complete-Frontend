# 04-Flexbox - Flexbox Container Properties

Welcome to this comprehensive guide on **Flexbox Container Properties**. This module is designed to take you from a complete beginner to a world-class frontend engineer.

---

## 1. Theory
Flexbox (Flexible Box Layout) is a one-dimensional layout system designed to distribute space and align items inside a container along a main-axis and cross-axis.

---

## 2. Syntax
```css
.flex-container {
  display: flex;
  flex-direction: row | column;
  justify-content: flex-start | center | space-between;
  align-items: stretch | center | flex-end;
}
```

---

## 3. Diagrams
```
  =================== MAIN AXIS ===================>
  [ Flex Item 1 ]   [ Flex Item 2 ]   [ Flex Item 3 ]
  =================== CROSS AXIS (Down) ===========>
```

---

## 4. Beginner Examples
```html
<div style="display: flex; gap: 10px;">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

## 5. Intermediate Examples
```html
<div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; padding: 20px;">
  <div class="logo">MyLogo</div>
  <nav class="links">
    <a href="#">Home</a>
    <a href="#">Products</a>
  </nav>
</div>
```

---

## 6. Advanced Examples
```html
<div class="flex-container" style="display: flex; flex-wrap: wrap; justify-content: space-around; align-content: space-between; height: 400px;">
  <div style="flex: 1 1 200px;">Flexible Left Panel</div>
  <div style="flex: 2 1 400px;">Flexible Center Panel</div>
</div>
```

---

## 7. Production Examples
```html
<div class="flex flex-col md:flex-row items-center justify-between gap-6 p-6 border rounded-xl bg-slate-50 dark:bg-slate-800">
  <div class="flex-1">
    <h3 class="text-lg font-semibold">Flexible Container Widget</h3>
    <p class="text-sm text-slate-500">Description of product</p>
  </div>
  <button class="w-full md:w-auto px-6 py-2 bg-indigo-600 text-white rounded-lg">Action</button>
</div>
```

---

## 8. Exercises
- **Exercise:** Build a clean user interface implementing Flexbox Container Properties.
- **Exercise:** Correct alignment issues on smaller mobile viewports.

---

## 9. Solutions
- **Solution:** Use responsive grid classes or CSS flexbox alignments.

---

## 10. Interview Questions
- **Q1:** What is the difference between justify-content and align-items?
  *Answer:* Justify-content aligns flex items along the Main Axis (horizontal by default), while align-items aligns them along the Cross Axis (vertical by default).

---

## 11. Best Practices
Use the 'gap' property rather than margin-right on items to add gaps between elements.

---

## 12. Common Mistakes
- **Mistake:** Using display: flex and then floated margins internally, which breaks standard layouts.
  *Solution:* Use justify-content parameters.

---

## 13. Performance Notes
Flexbox layouts paint incredibly fast. Avoid excessive nestings of flex elements.

---

## 14. Accessibility Notes
Ensure flex order changes do not misalign tab keyboard order from visual order.

---

## 15. Summary
In this chapter, we explored Flexbox Container Properties, reviewing implementation patterns, common mistakes, and performance layouts.
