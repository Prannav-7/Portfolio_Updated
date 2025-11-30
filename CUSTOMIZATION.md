# Common Customizations Guide

Quick snippets to customize your portfolio.

---

## 🎨 Change Primary Colors

Open `src/index.css` and update:

```css
:root {
  --primary-color: #6366f1;        /* Change this */
  --secondary-color: #8b5cf6;      /* And this */
  --text-dark: #1f2937;
  --text-light: #6b7280;
  --bg-light: #ffffff;
  --bg-darker: #f9fafb;
}
```

**Popular color combinations:**

**Blue & Purple** (current)
```css
--primary-color: #6366f1;
--secondary-color: #8b5cf6;
```

**Pink & Orange**
```css
--primary-color: #ec4899;
--secondary-color: #f97316;
```

**Green & Teal**
```css
--primary-color: #10b981;
--secondary-color: #06b6d4;
```

**Red & Pink**
```css
--primary-color: #ef4444;
--secondary-color: #f43f5e;
```

---

## 👤 Update Your Name & Bio

### In `src/components/Hero.jsx`
```jsx
<h1>Hi, I'm [YOUR NAME]</h1>
<p className="subtitle">[YOUR TITLE/TAGLINE]</p>
<p className="description">
  [YOUR INTRODUCTION - 1-2 sentences about yourself]
</p>
```

### In `src/components/About.jsx`
```jsx
<h3>I'm [YOUR DESCRIPTION]</h3>
<p>
  [PARAGRAPH 1 - Your background and passion]
</p>
<p>
  [PARAGRAPH 2 - Your journey and aspirations]
</p>
```

---

## 🔗 Update Social Links

### GitHub
Find in: `Header.jsx`, `Hero.jsx`, `Footer.jsx`
```jsx
<a href="https://github.com/Prannav-7" target="_blank" rel="noopener noreferrer">
  GitHub
</a>
```
Change to your GitHub username:
```jsx
<a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
  GitHub
</a>
```

### LinkedIn
```jsx
<a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
  LinkedIn
</a>
```

### Twitter
```jsx
<a href="https://twitter.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
  Twitter
</a>
```

### Email
In `src/components/Contact.jsx`:
```jsx
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>
```

---

## ✏️ Add/Edit Projects

Open `src/components/Projects.jsx` and find the `PROJECTS` array.

### Add a New Project
```jsx
{
  id: 11,
  title: 'My New Project',
  description: 'A brief description of what this project does and its key features.',
  tags: ['React', 'Node.js', 'MongoDB'],
  github: 'https://github.com/YOUR_USERNAME/project-name',
  link: 'https://project-live-demo.netlify.app',  // optional
  featured: false  // set to true to show at top with badge
}
```

### Edit Existing Project
Find the project you want to change and update:
```jsx
{
  id: 1,
  title: 'Updated Title',
  description: 'Updated description',
  tags: ['New', 'Tags'],
  github: 'https://new-github-link',
  link: 'https://new-live-link',
  featured: true  // top priority projects
}
```

### Remove a Project
Delete the entire `{}` block for that project.

---

## 🛠️ Update Skills

Open `src/components/About.jsx` and find the skills section:

```jsx
<div className="skill-category">
  <h4>Frontend</h4>
  <ul>
    <li>React.js</li>
    <li>JavaScript (ES6+)</li>
    <li>HTML5 & CSS3</li>
    <li>Add more...</li>
  </ul>
</div>
```

Add or remove skills as needed in the `<li>` elements.

---

## 📱 Adjust Skills Grid Columns

In `src/styles/About.css`, find:

```css
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 columns */
  gap: 20px;
}
```

Change `repeat(3, 1fr)` to:
- `repeat(2, 1fr)` for 2 columns
- `repeat(4, 1fr)` for 4 columns
- `1fr` for single column

---

## 🎯 Change Featured Projects

In `src/components/Projects.jsx`, set `featured: true` on top projects:

```jsx
// These will appear first and have a badge
{
  id: 1,
  title: 'Electro Store',
  // ...
  featured: true  // ← Changes this to show
}
```

---

## 📝 Update Contact Form Email

The form currently shows a demo message. To make it functional:

### Option 1: Use Formspree
1. Go to [formspree.io](https://formspree.io)
2. Create account and form
3. Update form action in `src/components/Contact.jsx`:

```jsx
<form 
  className="contact-form" 
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
>
```

### Option 2: Use EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Integrate in Contact.jsx

---

## 🎬 Adjust Animation Speed

Find in `src/styles/Hero.css` (or other files):

```css
.hero-text h1 {
  animation: fadeInUp 0.6s ease forwards;  /* 0.6s is speed */
}
```

- `0.3s` = fast
- `0.6s` = medium (current)
- `1s` = slow
- `1.5s` = very slow

---

## 🌙 Customize Dark Mode

In `src/index.css`, edit the `.app.dark` section:

```css
.app.dark {
  --primary-color: #818cf8;      /* Bright purple for dark mode */
  --text-dark: #f3f4f6;          /* Light text */
  --text-light: #d1d5db;         /* Muted text */
  --bg-light: #1f2937;           /* Dark background */
  --bg-darker: #111827;          /* Darker background */
  --border-color: #374151;       /* Dark borders */
}
```

---

## 📐 Change Project Grid Columns

In `src/styles/Projects.css`:

```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));  /* 300px is card width */
  gap: 30px;
}
```

Adjust `300px` to:
- `250px` for smaller cards (more per row)
- `350px` for larger cards (fewer per row)

---

## 🔤 Change Font

In `src/index.css`, update:

```css
:root {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    /* ... add your font here ... */
    'Helvetica Neue', sans-serif;
}
```

**Popular fonts to add:**

```css
/* Google Fonts style */
font-family: 'Poppins', 'Roboto', 'Segoe UI', sans-serif;
```

Then add to `index.html` `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

---

## 🎨 Change Button Styles

In `src/App.css`:

```css
.btn {
  padding: 12px 28px;           /* Change padding */
  border-radius: 8px;           /* Change roundness */
  font-size: 1rem;              /* Change size */
}

.btn-primary {
  /* Current styling */
}

.btn-secondary {
  /* Current styling */
}
```

---

## 📊 Update About Stats

In `src/components/About.jsx`:

```jsx
<div className="about-stats">
  <div className="stat">
    <h3>10+</h3>
    <p>Projects Completed</p>
  </div>
  <!-- Add/edit more stats here -->
</div>
```

---

## 🏷️ Add Tags to Projects

In `src/components/Projects.jsx`:

```jsx
tags: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS3']
```

The more tags you add, the more filtering options appear!

---

## 🔍 Hide/Show Sections

To hide a section, in `src/App.jsx`:

```jsx
return (
  <div className={`app ${darkMode ? 'dark' : 'light'}`}>
    <Header darkMode={darkMode} setDarkMode={setDarkMode} />
    <main>
      <Hero />
      {/* <Projects /> */}        {/* Remove: Commented out */}
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
)
```

Comment out any `<Section />` to hide it.

---

## 🚀 Quick Deploy Commands

After making changes:

```bash
# Build for production
npm run build

# Deploy to Netlify (if you have CLI)
netlify deploy --prod --dir=dist

# Or deploy to Vercel
vercel --prod
```

---

## 📚 More Help

- See `QUICKSTART.md` for quick answers
- See `README.md` for detailed docs
- Check component files for comments
- Visit [React docs](https://react.dev)
- Visit [Vite docs](https://vite.dev)

---

**Happy customizing! 🎉**
