import '../styles/About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>I'm a passionate developer from India</h3>
            <p>
              I'm a student at Kongu Engineering College with a strong passion for web development and software engineering. 
              With experience in full-stack development, I've worked on various projects ranging from e-commerce platforms to IoT applications.
            </p>
            <p>
              I love learning new technologies and constantly improving my skills. My journey in programming has been 
              exciting, and I'm eager to contribute to innovative projects and solve real-world problems.
            </p>
            
            <div className="skills">
              <h3>Skills & Technologies</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Frontend</h4>
                  <ul>
                    <li>React.js</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML5 & CSS3</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Backend</h4>
                  <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>RESTful APIs</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Other</h4>
                  <ul>
                    <li>Flutter & Dart</li>
                    <li>Python</li>
                    <li>Git & GitHub</li>
                    <li>Vite</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>17+</h3>
              <p>GitHub Repositories</p>
            </div>
            <div className="stat">
              <h3>2+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat">
              <h3>∞</h3>
              <p>Always Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
