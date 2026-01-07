import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend or email service
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(''), 3000)
  }

  const socialLinks = [
    { name: 'Email', icon: '✉️', url: 'mailto:madhavi.goswami@me.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/madhavigoswami' },
    { name: 'Phone', icon: '📞', url: 'tel:+12017050883' },
    { name: 'EmpressaAI', icon: '🌟', url: 'https://empressaai.com' },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Open to discussing cloud transformations, GenAI strategies, and leadership opportunities
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              Feel free to reach out if you have any questions, want to
              collaborate, or just want to say hello!
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {status === 'success' && (
              <p className="form-status success">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
