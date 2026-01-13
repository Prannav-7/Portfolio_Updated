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
            const gmailLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=prannav2511@gmail.com&su=${encodeURIComponent(
                `Portfolio Contact from ${formData.name}`
            )}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            )}`

            window.open(gmailLink, '_blank')
            setSubmitted(true)
            setFormData({ name: '', email: '', message: '' })
            setTimeout(() => setSubmitted(false), 5000)
        } catch (error) {
            console.error('Error:', error)
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

                <div className="contact-wrapper">
                    <div className="contact-info">
                        <div className="info-card">
                            <h3>📧 Email</h3>
                            <a href="mailto:prannav2511@gmail.com">prannav2511@gmail.com</a>
                        </div>
                        <div className="info-card">
                            <h3>💬 WhatsApp</h3>
                            <a href="https://wa.me/918838686407" target="_blank" rel="noopener noreferrer">
                                +91 8838686407
                            </a>
                        </div>
                        <div className="info-card">
                            <h3>🌐 Social Links</h3>
                            <div className="social-links">
                                <a href="https://github.com/Prannav-7" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="https://www.linkedin.com/in/prannav-p-73a252313/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href="https://instagram.com/_im_prannav" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        {submitted && (
                            <div className="success-message">
                                ✓ Thank you! Message sent successfully!
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
                            />
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
                            />
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
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
