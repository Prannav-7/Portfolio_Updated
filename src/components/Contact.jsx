import { useState } from 'react'
import '../styles/Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      // Create Gmail compose link with pre-filled fields
      const gmailLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=prannav2511@gmail.com&su=${encodeURIComponent(
        `Portfolio Contact from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      
      // Try to send via web3forms first
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'dc8e7a9d-4e8f-4b8e-9b8a-8c7b6a5d4e3f',
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        // Fallback to Gmail
        window.open(gmailLink, '_blank')
      }
    } catch (error) {
      console.error('Error:', error)
      // Final fallback to Gmail
      const gmailLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=prannav2511@gmail.com&su=${encodeURIComponent(
        `Portfolio Contact from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      window.open(gmailLink, '_blank')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Let's connect and discuss your next project</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info-3d">
            {/* Email Card */}
            <div className="info-card card-3d email-card">
              <div className="card-content">
                <div className="card-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h3>Email</h3>
                <a href="mailto:prannav2511@gmail.com" className="card-link">
                  prannav2511@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="info-card card-3d whatsapp-card">
              <div className="card-content">
                <div className="card-icon whatsapp-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.905 0-3.68-.604-5.159-1.738L2.5 3.31l1.614 4.783c-1.213 1.506-1.914 3.423-1.914 5.471 0 5.36 4.365 9.725 9.725 9.725 2.604 0 5.05-.997 6.9-2.794 1.849-1.798 2.869-4.217 2.869-6.9 0-5.36-4.365-9.725-9.725-9.725z"/>
                  </svg>
                </div>
                <h3>WhatsApp</h3>
                <a href="https://wa.me/918838686407" target="_blank" rel="noopener noreferrer" className="card-link">
                  +91 8838686407
                </a>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="info-card card-3d social-card">
              <div className="card-content">
                <h3>Connect With Me</h3>
                <div className="social-icons-grid">
                  <a href="https://github.com/Prannav-7" target="_blank" rel="noopener noreferrer" title="GitHub" className="social-icon-badge github-badge">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/prannav-p-73a252313/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-icon-badge linkedin-badge">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com/_im_prannav" target="_blank" rel="noopener noreferrer" title="Instagram" className="social-icon-badge instagram-badge">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form card-3d" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Thank you! Message sent successfully. I'll get back to you soon!
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="form-input"
              />
              <div className="input-underline"></div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="form-input"
              />
              <div className="input-underline"></div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                rows="5"
                className="form-input"
              ></textarea>
              <div className="input-underline"></div>
            </div>

            <button type="submit" className="btn-submit" disabled={loading}>
              <span className="btn-text">{loading ? 'Sending...' : 'Send Message'}</span>
              <span className="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

