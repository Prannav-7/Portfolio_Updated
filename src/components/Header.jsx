import { useState, useEffect } from 'react'
import '../styles/Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0

      setScrolled(scrollY > 20)
      setScrollProgress(progress)

      // Determine active section
      const sections = ['home', 'projects', 'about', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Scroll progress bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      <div className="container header-content">
        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          Prannav&nbsp;<span className="logo-dot">P</span>
        </a>

        {/* Desktop Nav */}
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          {['home', 'projects', 'about', 'contact'].map(section => (
            <a
              key={section}
              href={`#${section}`}
              className={activeSection === section ? 'active' : ''}
              onClick={closeMenu}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && <div className="nav-overlay" onClick={closeMenu} />}
    </header>
  )
}
