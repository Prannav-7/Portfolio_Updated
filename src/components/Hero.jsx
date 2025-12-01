import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Prannav P</h1>
          <p className="subtitle">Full Stack Developer | Web Enthusiast</p>
          <p className="description">
            I'm passionate about building beautiful and functional web applications using modern technologies like React, JavaScript, and more.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/Prannav-7" target="_blank" rel="noopener noreferrer" title="GitHub">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/prannav-p-73a252313/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              LinkedIn
            </a>
           <a href="https://instagram.com/_im_prannav" target="_blank" rel="noopener noreferrer" title="Instagram">
  Instagram
</a>

          </div>
        </div>
        <div className="hero-image">
          <div className="profile-picture-container">
            <img src="src/assets/profile.jpg" alt="Prannav P - Full Stack Developer" className="profile-picture" />
            <div className="profile-glow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
