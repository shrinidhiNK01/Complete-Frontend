# 09. Deployment and Production Checklist

## Static Website Deployment

HTML/CSS projects can be deployed easily because they do not need a backend.

## Before Deployment

Checklist:

- All links work.
- Images load.
- Text is readable on mobile.
- Layout does not overflow.
- Contrast is good.
- Keyboard focus is visible.
- CSS file is linked correctly.
- File names are lowercase and simple.

## GitHub Pages

Steps:

1. Create GitHub repository.
2. Add files.
3. Push code.
4. Go to repository Settings.
5. Open Pages section.
6. Choose branch and folder.
7. Save.
8. Open generated URL.

## Netlify

Steps:

1. Create Netlify account.
2. Drag and drop project folder, or connect GitHub.
3. Set publish directory to project folder.
4. Deploy.

## Vercel

Steps:

1. Create Vercel account.
2. Import GitHub repository.
3. Choose static project.
4. Deploy.

## Firebase Hosting

Steps:

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## S3-Style Static Hosting

Steps:

1. Create bucket.
2. Upload files.
3. Enable static website hosting.
4. Configure permissions.
5. Add CDN for production.

## Deployment Folder Rule

For each project, deploy the folder containing:

```text
index.html
styles.css
```

Do not deploy only the CSS file.

## Production CSS Checklist

- Use external CSS.
- Remove unused CSS if possible.
- Minify CSS for large projects.
- Use responsive layout.
- Use `alt` text for images.
- Respect reduced motion.
- Test in multiple browsers.
- Test at mobile, tablet, desktop widths.

