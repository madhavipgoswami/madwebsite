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
            <span className="hero-title-elegant">The Guiding Force</span>
            <span className="hero-title-main"> in Enterprise Cloud Innovation, AI Transformation, and Women's Empowerment</span>
          </h1>
          <p className="hero-description">
            Strategic advisor to global financial institutions. With two decades of proven expertise and measurable results, I help organizations unlock their potential through secure, scalable cloud and GenAI adoption—while building pathways for women to lead in AI.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View Career Highlights →
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
          <div className="hero-image-wrapper">
            <div className="hero-avatar-bg"></div>
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
            <div className="hero-decorative-elements">
              <svg className="decorative-icon decorative-icon-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <svg className="decorative-icon decorative-icon-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              </svg>
              <svg className="decorative-icon decorative-icon-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
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
