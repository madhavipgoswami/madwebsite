import { useState, useEffect } from 'react'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const roles = ['Executive Leader', 'Digital Transformation Expert', 'Cloud & GenAI Strategist', 'Financial Services Leader']
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const currentRole = roles[currentRoleIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting && typedText.length < currentRole.length) {
        setTypedText(currentRole.substring(0, typedText.length + 1))
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(currentRole.substring(0, typedText.length - 1))
      } else if (!isDeleting && typedText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, currentRoleIndex])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Madhavi Goswami</span>
          </h1>
          <h2 className="hero-subtitle">
            <span className="typing-text">{typedText}|</span>
          </h2>
          <p className="hero-description">
            CFA Charter Holder | 20+ Years in Financial Services | Leading GenAI & Cloud Transformations
            at Microsoft, AWS, and Global Banks. Empowering women in AI through EmpressaAI.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View Career Highlights
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Connect With Me
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <img 
              src="/images/madhavi-photo.jpg" 
              alt="Madhavi Goswami, CFA"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="avatar-placeholder" style={{ display: 'none' }}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="currentColor" opacity="0.1"/>
                <circle cx="50" cy="35" r="15" fill="currentColor" opacity="0.3"/>
                <path d="M25 75 Q25 60 50 60 Q75 60 75 75" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Hero
