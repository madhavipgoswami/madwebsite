import { useState, useEffect, useRef } from 'react'
import { FaBuilding, FaMapMarkerAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa'

const Journey = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const timelineRef = useRef(null)
  const journeyItemsRef = useRef([])

  const journeyItems = [
    {
      id: 1,
      year: 'Early Years',
      location: 'Mumbai, India',
      title: 'Born & Raised',
      description: 'Born in Mumbai, India. A gymnast, classical singer, and dancer. Completed Bachelor of Commerce in Accounting/Economics from University of Mumbai.',
      icon: FaMapMarkerAlt,
      type: 'location',
      country: 'India',
    },
    {
      id: 2,
      year: '2000-2002',
      location: 'Mumbai, India',
      title: 'MBA - University of Mumbai',
      description: 'Pursued Master of Business Administration, building foundation in business strategy and management.',
      icon: FaGraduationCap,
      type: 'education',
      country: 'India',
    },
    {
      id: 3,
      year: '2002-2003',
      location: 'Mumbai, India',
      title: 'Research/Management Trainee',
      company: 'Crossword Bookstores',
      description: 'Started career in research and management, learning fundamentals of business operations.',
      icon: FaBriefcase,
      type: 'work',
      country: 'India',
    },
    {
      id: 4,
      year: '2003-2005',
      location: 'Mumbai, India',
      title: 'Research Manager',
      company: 'Inter Public Group (Lintas)',
      description: 'Led research initiatives in media and advertising, developing strategic insights for campaigns.',
      icon: FaBriefcase,
      type: 'work',
      country: 'India',
    },
    {
      id: 5,
      year: '2005-2006',
      location: 'Mumbai, India',
      title: 'Senior Analyst/Planner',
      company: 'Aegis',
      description: 'Advanced to senior role in media planning and strategy, analyzing market trends and consumer behavior.',
      icon: FaBriefcase,
      type: 'work',
      country: 'India',
    },
    {
      id: 6,
      year: '2006-2007',
      location: 'Pune, India',
      title: 'Key Account Manager - Sales',
      company: 'Clickjobs.com',
      description: 'Transitioned to sales, managing key accounts and driving business growth in Pune.',
      icon: FaBriefcase,
      type: 'work',
      country: 'India',
    },
    {
      id: 7,
      year: '2009-2011',
      location: 'USA',
      title: 'Technical Product/Project Lead',
      company: 'Cavalier IT',
      description: 'Entered technology sector, leading product development and project management initiatives.',
      icon: FaBuilding,
      type: 'work',
      country: 'USA',
      companyLogo: 'Cavalier IT',
    },
    {
      id: 8,
      year: '2011-2015',
      location: 'New York, USA',
      title: 'Technical Program Manager',
      company: 'Citibank',
      description: 'Joined global banking, leading enterprise tech migrations and full-stack risk and finance system revamps.',
      icon: FaBuilding,
      type: 'work',
      country: 'USA',
      companyLogo: 'Citibank',
    },
    {
      id: 9,
      year: '2015-2019',
      location: 'New York, USA',
      title: 'Vice President - Lead Technical Program Manager',
      company: 'Deutsche Bank',
      description: 'Advanced to VP role, delivering 75% cost savings through Prime Brokerage modernization and managing global teams.',
      icon: FaBuilding,
      type: 'work',
      country: 'USA',
      companyLogo: 'Deutsche Bank',
    },
    {
      id: 10,
      year: '2016-2018',
      location: 'USA',
      title: 'CFA Charter Holder',
      description: 'Earned Chartered Financial Analyst designation, demonstrating commitment to financial expertise.',
      icon: FaGraduationCap,
      type: 'achievement',
      country: 'USA',
    },
    {
      id: 11,
      year: '2019-2022',
      location: 'New York, USA',
      title: 'Senior Customer Solutions Manager',
      company: 'Amazon Web Services (AWS)',
      description: 'Transitioned to cloud technology, achieving 118% YoY cloud adoption growth and leading ML beta programs.',
      icon: FaBuilding,
      type: 'work',
      country: 'USA',
      companyLogo: 'AWS',
    },
    {
      id: 12,
      year: '2022-2025',
      location: 'New York, USA',
      title: 'Managing Director - Capital Markets Customer Success',
      company: 'Microsoft',
      description: 'Leading GenAI and multi-agent system adoption, driving 116% YoY growth in Azure, M365 Copilot, and GenAI.',
      icon: FaBuilding,
      type: 'work',
      country: 'USA',
      companyLogo: 'Microsoft',
    },
    {
      id: 13,
      year: '2025 - Present',
      location: 'New York, USA',
      title: 'Founding Member',
      company: 'EmpressaAI',
      description: 'Developing global AI literacy programs for women, empowering them to turn insights into income.',
      icon: FaBuilding,
      type: 'work',
      country: 'USA',
      companyLogo: 'EmpressaAI',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const timeline = timelineRef.current
      const timelineRect = timeline.getBoundingClientRect()
      const scrollPosition = window.scrollY + window.innerHeight / 2

      journeyItemsRef.current.forEach((item, index) => {
        if (item) {
          const itemRect = item.getBoundingClientRect()
          const itemTop = itemRect.top + window.scrollY
          const itemCenter = itemTop + itemRect.height / 2

          if (scrollPosition >= itemCenter - 200 && scrollPosition < itemCenter + 200) {
            setActiveIndex(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getCountryColor = (country) => {
    const colors = {
      India: '#FF6B6B',
      Canada: '#4ECDC4',
      USA: '#45B7D1',
    }
    return colors[country] || '#6366f1'
  }

  return (
    <section id="journey" className="journey">
      <div className="container">
        <h2 className="section-title">My Journey</h2>
        <p className="section-subtitle">
          Career progression from media and strategy to cloud technology and AI leadership
        </p>

        <div className="journey-container" ref={timelineRef}>
          {/* Timeline Line */}
          <div className="timeline-line">
            <div
              className="timeline-progress"
              style={{
                height: `${((activeIndex + 1) / journeyItems.length) * 100}%`,
              }}
            ></div>
          </div>

          {/* Journey Items - Clean Timeline */}
          <div className="journey-items">
            {journeyItems.map((item, index) => {
              const IconComponent = item.icon
              const isActive = index === activeIndex
              const countryColor = getCountryColor(item.country)

              return (
                <div
                    key={item.id}
                    ref={(el) => (journeyItemsRef.current[index] = el)}
                    className={`journey-item ${isActive ? 'active' : ''} ${item.type}`}
                  >
                  {/* Timeline Dot */}
                  <div className="timeline-dot-container">
                    <div
                      className={`timeline-dot ${isActive ? 'active' : ''}`}
                      style={{ borderColor: countryColor }}
                    >
                      <IconComponent className="timeline-icon" style={{ color: countryColor }} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="journey-content">
                    <div className="journey-header">
                      <span className="journey-year">{item.year}</span>
                      <span className="journey-location" style={{ color: countryColor }}>
                        {item.location}
                      </span>
                    </div>
                    <h3 className="journey-title">{item.title}</h3>
                    {item.company && (
                      <div className="journey-company">
                        <FaBuilding className="company-icon" />
                        <span>{item.company}</span>
                        {item.companyLogo && (
                          <div className="company-logo-placeholder">{item.companyLogo}</div>
                        )}
                      </div>
                    )}
                    <p className="journey-description">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
