# Prannav's Portfolio - React + Vite

A modern, responsive portfolio website built with **React 19** and **Vite 7** showcasing all of my GitHub projects and work experience.

## 🚀 Features

- **Modern Design**: Clean, professional UI with gradient accents and smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Project Showcase**: Display all 10+ GitHub projects with filtering and tags
- **Skills Section**: Organized skills by categories (Frontend, Backend, Other)
- **Contact Form**: Direct messaging capability
- **Fast Performance**: Built with Vite for rapid development and optimized builds
- **Smooth Navigation**: Sticky header and smooth scroll behavior

## 📋 Included Sections

- **Hero Section**: Eye-catching introduction with social links
- **Projects**: Showcase of 10+ projects with featured projects highlighted
- **About Me**: Personal introduction and technical skills
- **Contact**: Contact information and inquiry form
- **Footer**: Quick navigation and social links

## 🎯 Projects Featured

1. **Electro Store** - Full-stack e-commerce platform
2. **AI Chat Intelligence** - AI-powered chatbot application
3. **Incrivia Tourist App** - Tourism management system
4. **Docart - Flipkart Clone** - E-commerce platform
5. **Shop App** - Mobile shopping application
6. **Nutz Login Page** - Modern authentication UI
7. **Text Converter** - Text manipulation utility
8. **Hostel Management System** - Flutter mobile app
9. **Face Detection IOT** - Computer vision IoT project
10. **Jaimaruthi Electrical Store** - E-commerce for hardware

...and more on GitHub!

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **CSS3** - Modern styling with CSS variables
- **JavaScript ES6+** - Latest JavaScript features
- **HTML5** - Semantic markup

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Clone or navigate to the project:**
   ```bash
   cd portfolio-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   The portfolio will be available at `http://localhost:5173/`

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

This generates a `dist/` folder with optimized files ready for deployment.

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio-react/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/              # CSS stylesheets
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── Projects.css
│   │   ├── ProjectCard.css
│   │   ├── About.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.jsx              # Main application component
│   ├── App.css              # Global app styles
│   ├── index.css            # Base styles
│   └── main.jsx             # React entry point
├── public/                  # Static assets
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Update Social Links
Edit the social links in each component (Header.jsx, Hero.jsx, Footer.jsx):
```jsx
<a href="https://your-link" target="_blank" rel="noopener noreferrer">
  Platform Name
</a>
```

### Add/Edit Projects
Open `src/components/Projects.jsx` and modify the `PROJECTS` array:
```jsx
{
  id: 11,
  title: 'Your Project Title',
  description: 'Project description',
  tags: ['Tag1', 'Tag2'],
  github: 'https://github.com/your-repo',
  link: 'https://live-demo-link.com',
  featured: true
}
```

### Change Color Theme
Modify CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... other colors ... */
}
```

## 🚀 Deployment

### Deploy to Netlify

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Connect to Netlify:**
   - Push code to GitHub
   - Connect repository in Netlify dashboard
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### Deploy to Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

### Deploy to GitHub Pages

1. **Update `vite.config.js`:**
   ```js
   export default {
     base: '/repository-name/',
     // ... rest of config
   }
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   git add dist -f
   git commit -m "Deploy"
   git push origin main
   ```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

## 🌐 Live Demo

Your portfolio will be live at:
- **Development**: http://localhost:5173/
- **Production**: [Your deployed URL]

## 📞 Contact & Links

- **GitHub**: [github.com/Prannav-7](https://github.com/Prannav-7)
- **Previous Portfolio**: [prannavsportfolio.netlify.app](https://prannavsportfolio.netlify.app/)

## 📄 License

This project is open source and available under the MIT License.

## 🎓 About

Hi! I'm Prannav, a full-stack developer from Kongu Engineering College. I'm passionate about building beautiful and functional web applications. Check out my projects and feel free to reach out!

---

**Built with ❤️ using React + Vite**
