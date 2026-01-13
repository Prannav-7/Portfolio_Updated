import { motion } from 'framer-motion'
import '../styles/About.css'
import { scrollVariants, fadeInLeft, fadeInRight, staggerContainer } from '../hooks/useScrollAnimation'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scrollVariants}
        >
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
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
              <motion.div
                className="skills-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                <motion.div className="skill-category" variants={scrollVariants}>
                  <h4>Frontend</h4>
                  <ul>
                    <li>React.js</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML5 & CSS3</li>
                    <li>Responsive Design</li>
                  </ul>
                </motion.div>
                <motion.div className="skill-category" variants={scrollVariants}>
                  <h4>Backend</h4>
                  <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>RESTful APIs</li>
                  </ul>
                </motion.div>
                <motion.div className="skill-category" variants={scrollVariants}>
                  <h4>Other</h4>
                  <ul>
                    <li>Flutter & Dart</li>
                    <li>Python</li>
                    <li>Git & GitHub</li>
                    <li>Vite</li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="stat" variants={scrollVariants} whileHover={{ scale: 1.05 }}>
              <h3>10+</h3>
              <p>Projects Completed</p>
            </motion.div>
            <motion.div className="stat" variants={scrollVariants} whileHover={{ scale: 1.05 }}>
              <h3>17+</h3>
              <p>GitHub Repositories</p>
            </motion.div>
            <motion.div className="stat" variants={scrollVariants} whileHover={{ scale: 1.05 }}>
              <h3>2+</h3>
              <p>Years of Experience</p>
            </motion.div>
            <motion.div className="stat" variants={scrollVariants} whileHover={{ scale: 1.05 }}>
              <h3>∞</h3>
              <p>Always Learning</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
