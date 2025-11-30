# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser and go to: **http://localhost:5173/**

### 3. Make It Yours!

#### Update Your Information
- Open `src/components/Hero.jsx` and update the intro text
- Open `src/components/About.jsx` to add your bio

#### Update Social Links
Replace the placeholder links in:
- `src/components/Header.jsx`
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

Example:
```jsx
<a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
  LinkedIn
</a>
```

#### Add Your Projects
Edit `src/components/Projects.jsx` - modify the `PROJECTS` array:

```jsx
{
  id: 1,
  title: 'My Awesome Project',
  description: 'This is what my project does...',
  tags: ['React', 'Node.js'],
  github: 'https://github.com/yourusername/project',
  link: 'https://my-project.netlify.app',  // optional
  featured: true  // shows badge and appears first
}
```

#### Customize Colors
Open `src/index.css` and update the `:root` variables:
```css
:root {
  --primary-color: #6366f1;      /* Main accent color */
  --secondary-color: #8b5cf6;    /* Secondary accent */
  --text-dark: #1f2937;          /* Text color */
  --bg-light: #ffffff;           /* Background */
}
```

---

## 🏗️ Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Netlify (Recommended)
1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click Deploy!

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

---

## 📝 File Structure Reference

**Need to edit something?**

| What | Where |
|------|-------|
| Main intro text | `src/components/Hero.jsx` |
| Projects list | `src/components/Projects.jsx` |
| About/skills | `src/components/About.jsx` |
| Social links | `src/components/Header.jsx` |
| Contact info | `src/components/Contact.jsx` |
| Colors/theme | `src/index.css` |
| Hero styling | `src/styles/Hero.css` |
| Project cards | `src/styles/ProjectCard.css` |

---

## ❓ FAQ

**Q: How do I enable dark mode?**
A: It's already built in! Click the moon/sun icon in the header.

**Q: Can I change the project tags?**
A: Yes! Edit the `tags` array in each project object in `Projects.jsx`

**Q: How do I add a live demo link?**
A: Add a `link` property to any project:
```jsx
link: 'https://your-live-demo.com'
```

**Q: What's the featured badge for?**
A: Set `featured: true` on any project to show it first and with a badge.

---

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- Review component files - they have comments
- Visit [Vite docs](https://vite.dev)
- Check [React docs](https://react.dev)

---

**Happy coding! 🎉**
