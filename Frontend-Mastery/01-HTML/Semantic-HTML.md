# 01-HTML - Semantic HTML

Welcome to this comprehensive guide on **Semantic HTML**. This module is designed to take you from a complete beginner to a world-class frontend engineer.

---

## 1. Theory
Semantic HTML elements clearly describe their meaning to both the browser and the developer (e.g., <article> vs. <div>).

---

## 2. Syntax
```css
<header></header>
<nav></nav>
<main>
  <article></article>
</main>
<footer></footer>
```

---

## 3. Diagrams
```
+-------------------------------------+
|               <header>              |
+-------------------------------------+
|                <nav>                |
+-------------------------------------+
|                <main>               |
|   +-----------------------------+   |
|   |          <article>          |   |
|   +-----------------------------+   |
+-------------------------------------+
|               <footer>              |
+-------------------------------------+
```

---

## 4. Beginner Examples
```html
<main>
  <h1>Page Subject</h1>
  <p>Details here</p>
</main>
```

---

## 5. Intermediate Examples
```html
<article>
  <header>
    <h2>Blog Title</h2>
    <p>By Shrinidhi</p>
  </header>
  <section>
    <p>Body paragraphs of the article...</p>
  </section>
  <footer>Published in D:\Notes</footer>
</article>
```

---

## 6. Advanced Examples
```html
<header>
  <nav aria-label="Primary Navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>
  </nav>
</header>
```

---

## 7. Production Examples
```html
<article class="prose dark:prose-invert max-w-4xl mx-auto">
  <time datetime="2026-06-11">June 11, 2026</time>
  <h1>Writing Clean Semantic HTML Markup</h1>
  <p>Semantic layouts serve as the foundation of frontend engineering.</p>
</article>
```

---

## 8. Exercises
- **Exercise:** Build a clean user interface implementing Semantic HTML.
- **Exercise:** Correct alignment issues on smaller mobile viewports.

---

## 9. Solutions
- **Solution:** Use responsive grid classes or CSS flexbox alignments.

---

## 10. Interview Questions
- **Q1:** Why are semantic elements important?
  *Answer:* They improve search engine optimization (SEO), readability, and accessibility for screen readers.

---

## 11. Best Practices
Use a single <h1> per page. Use sectioning tags appropriately.

---

## 12. Common Mistakes
- **Mistake:** Using <div> tags for headers, footers, and sidebars instead of <header>, <footer>, and <aside>.

---

## 13. Performance Notes
Browsers parse clean semantic elements faster.

---

## 14. Accessibility Notes
Semantic elements automatically define ARIA landmark roles.

---

## 15. Summary
In this chapter, we explored Semantic HTML, reviewing implementation patterns, common mistakes, and performance layouts.
