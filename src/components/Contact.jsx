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
      // Send email directly using mailto with a backup service
      const mailtoLink = `mailto:prannav2511@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      
      // For better UX, try to send via a free service first
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
        // Fallback to mailto
        window.location.href = mailtoLink
      }
    } catch (error) {
      console.error('Error:', error)
      // Final fallback to mailto
      const mailtoLink = `mailto:prannav2511@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      window.location.href = mailtoLink
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Let's connect and discuss your next project</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>
                <a href="mailto:prannav2511@gmail.com">
                  prannav2511@gmail.com
                </a>
              </p>
            </div>
            <div className="info-item">
              <div className="info-icon">💬</div>
              <h3>WhatsApp</h3>
              <p>
                <a href="https://wa.me/918838686407" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                  +91 8838686407
                </a>
              </p>
              <a href="https://wa.me/918838686407" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                💬 Chat on WhatsApp
              </a>
            </div>
            <div className="info-item">
              <div className="info-icon">🔗</div>
              <h3>Social Links</h3>
              <div className="social-links">
                <a href="https://github.com/Prannav-7" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/prannav-p-73a252313/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://instagram.com/_im_prannav" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>  
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>India</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully. I'll get back to you soon!
              </div>
            )}
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                rows="6"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
