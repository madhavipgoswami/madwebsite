import { FaGraduationCap, FaUsers, FaChalkboardTeacher, FaMicrophone, FaExternalLinkAlt } from 'react-icons/fa'

const Impact = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="impact" className="impact">
      <div className="container">
        <h2 className="section-title">Impact</h2>
        <p className="section-subtitle impact-intro">
          Beyond driving cloud and AI transformation at enterprise scale, I'm committed to empowering the next generation—mentoring youth, advancing women in technology, and democratizing AI education.
        </p>

        <div className="impact-content">
          {/* Section 1: Youth Mentorship */}
          <div className="impact-section">
            <div className="impact-section-header">
              <FaGraduationCap className="impact-section-icon" />
              <h3 className="impact-section-title">Youth Mentorship</h3>
            </div>
            
            <div className="impact-items">
              <div className="impact-item">
                <div className="impact-item-header">
                  <h4 className="impact-item-title">Student Mentor</h4>
                  <span className="impact-item-org">iMentor</span>
                </div>
                <div className="impact-item-meta">
                  <span className="impact-item-date">October 2018 - May 2019 (8 months)</span>
                  <span className="impact-item-focus">Focus: College Readiness</span>
                </div>
                <p className="impact-item-description">
                  Worked one-on-one with an 11th grader to help guide her through college decision-making, application processes, and academic planning. Provided consistent support during a critical year of educational transition.
                </p>
              </div>

              <div className="impact-item">
                <div className="impact-item-header">
                  <h4 className="impact-item-title">Student Mentor: Two Together Tutor</h4>
                  <span className="impact-item-org">JCCA (Jewish Child Care Association)</span>
                </div>
                <div className="impact-item-meta">
                  <span className="impact-item-date">September 2011 - May 2012 (9 months)</span>
                  <span className="impact-item-focus">Focus: Academic Support</span>
                </div>
                <p className="impact-item-description">
                  Helped a 5th grader with homework and school work, providing academic support and mentorship during formative elementary years.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Women in AI Leadership */}
          <div className="impact-section">
            <div className="impact-section-header">
              <FaUsers className="impact-section-icon" />
              <h3 className="impact-section-title">Women in AI Leadership</h3>
            </div>

            <div className="impact-item impact-item-featured">
              <div className="impact-item-header">
                <h4 className="impact-item-title">Founding Member | AI Instructor | Speaker</h4>
                <span className="impact-item-org">EmpressaAI</span>
              </div>
              <div className="impact-item-meta">
                <span className="impact-item-date">August 2025 - Present</span>
              </div>
              <p className="impact-item-description">
                Co-founding contributor to a global initiative empowering women through AI education. As an EmpressaAI Certified AI Instructor and speaker, I deliver educational workshops and keynotes on:
              </p>
              
              <ul className="impact-list">
                <li><FaChalkboardTeacher className="impact-list-icon" /> GenAI fundamentals for non-technical audiences</li>
                <li><FaChalkboardTeacher className="impact-list-icon" /> Responsible AI adoption in enterprise settings</li>
                <li><FaChalkboardTeacher className="impact-list-icon" /> Practical applications of AI tools for business growth</li>
                <li><FaChalkboardTeacher className="impact-list-icon" /> Building confidence in AI-powered decision making</li>
              </ul>

              <div className="impact-mission">
                <strong>Mission:</strong> Democratizing AI literacy and creating pathways for women to lead in the AI-driven economy through trusted, GPT-based tools and training programs built by women, for women.
              </div>

              <div className="impact-cta-buttons">
                <button
                  className="btn btn-primary"
                  onClick={() => scrollToSection('contact')}
                >
                  <FaMicrophone /> Invite Me to Speak
                </button>
                <a
                  href="https://empressaai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Learn More About EmpressaAI <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact
