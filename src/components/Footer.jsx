import '../styles/Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Prannav</h3>
            <p>Full Stack Developer & Web Enthusiast</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="https://github.com/Prannav-7" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/prannav-p-73a252313/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
           <a href="https://instagram.com/_im_prannav" target="_blank" rel="noopener noreferrer" title="Instagram">
  Instagram
</a>

            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Prannav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
