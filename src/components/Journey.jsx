import { useState, useEffect, useRef } from 'react'
import { FaPlane, FaCar, FaBuilding, FaMapMarkerAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa'

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
      travel: { from: 'Mumbai', to: 'Pune', mode: 'domestic' },
    },
    {
      id: 7,
      year: 'March 2007',
      location: 'New Jersey, USA',
      title: 'Husband Moves to USA',
      description: 'Husband relocated to New Jersey to establish our new life in America.',
      icon: FaPlane,
      type: 'travel',
      country: 'USA',
      travel: { from: 'India', to: 'USA', mode: 'plane' },
    },
    {
      id: 8,
      year: 'June 2007',
      location: 'Toronto, Canada',
      title: 'Being with Family in Toronto',
      description: 'Moved to Toronto to be with family while allowing time for husband to settle in New Jersey, preparing for our journey together.',
      icon: FaPlane,
      type: 'travel',
      country: 'Canada',
      travel: { from: 'India', to: 'Canada', mode: 'plane' },
    },
    {
      id: 9,
      year: 'October 2007',
      location: 'New Jersey, USA',
      title: 'Road Trip to New Jersey',
      description: 'Joined husband in New Jersey via road trip from Toronto, beginning our life together in America.',
      icon: FaCar,
      type: 'travel',
      country: 'USA',
      travel: { from: 'Canada', to: 'USA', mode: 'car' },
    },
    {
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
      year: '2016-2018',
      location: 'USA',
      title: 'CFA Charter Holder',
      description: 'Earned Chartered Financial Analyst designation, demonstrating commitment to financial expertise.',
      icon: FaGraduationCap,
      type: 'achievement',
      country: 'USA',
    },
    {
      id: 14,
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
      id: 15,
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
      id: 16,
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

  const getTravelIcon = (item) => {
    if (item.travel) {
      if (item.travel.mode === 'plane') return FaPlane
      if (item.travel.mode === 'car') return FaCar
    }
    return item.icon
  }

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
          From Mumbai to New York: A journey through media, banking, and cloud technology
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

          {/* Journey Items */}
          <div className="journey-items">
            {journeyItems.map((item, index) => {
              const IconComponent = getTravelIcon(item)
              const isActive = index === activeIndex
              const countryColor = getCountryColor(item.country)
              const prevItem = index > 0 ? journeyItems[index - 1] : null
              const showTravelAnimation = prevItem && prevItem.location !== item.location

              return (
                <>
                  {/* Travel Animation between locations */}
                  {showTravelAnimation && (
                    <div className="travel-animation active">
                      {/* Goodbye scene for husband's move */}
                      {prevItem.location.includes('Pune') && item.location.includes('New Jersey') && item.title.includes('Husband') && (
                        <div className="goodbye-scene">
                          <div className="goodbye-characters">
                            <div className="woman-character">👩</div>
                            <div className="kiss-animation">💋</div>
                            <div className="man-character">👨</div>
                          </div>
                          <div className="goodbye-text">Saying goodbye as husband moves to USA</div>
                        </div>
                      )}
                      
                      {/* Curved travel path with animated girl */}
                      <div className="travel-path-curved">
                        <svg className="travel-trail-svg" viewBox="0 0 400 100" preserveAspectRatio="none">
                          <path
                            className="trail-path"
                            d="M 20 80 Q 100 20, 200 30 T 380 40"
                            fill="none"
                            stroke="rgba(99, 102, 241, 0.3)"
                            strokeWidth="3"
                            strokeDasharray="5,5"
                          />
                        </svg>
                        
                        {/* Footprints for domestic/local travel */}
                        {prevItem.country === item.country && (
                          <div className="footprints">
                            <div className="footprint">👣</div>
                            <div className="footprint">👣</div>
                            <div className="footprint">👣</div>
                            <div className="footprint">👣</div>
                            <div className="footprint">👣</div>
                            <div className="footprint">👣</div>
                            <div className="footprint">👣</div>
                          </div>
                        )}

                        {/* Animated girl walking for domestic travel */}
                        {prevItem.location.includes('Mumbai') && item.location.includes('Pune') && (
                          <div className="traveling-girl walk-travel">
                            <svg className="girl-character" viewBox="0 0 100 150" width="60" height="90">
                              {/* Head */}
                              <circle cx="50" cy="25" r="15" fill="#fbbf24" stroke="#1f2937" strokeWidth="2"/>
                              {/* Eye */}
                              <circle cx="55" cy="23" r="2" fill="#1f2937"/>
                              {/* Smile */}
                              <path d="M 45 28 Q 50 32, 55 28" stroke="#1f2937" strokeWidth="2" fill="none"/>
                              {/* Hair */}
                              <path d="M 35 25 Q 30 15, 35 10 Q 40 5, 50 8 Q 60 5, 65 10 Q 70 15, 65 25" 
                                    fill="#6366f1" stroke="#1f2937" strokeWidth="1.5"/>
                              {/* Body/Top */}
                              <rect x="40" y="40" width="20" height="25" rx="5" fill="#f97316"/>
                              {/* Arms */}
                              <line x1="40" y1="50" x2="30" y2="45" stroke="#1f2937" strokeWidth="3" strokeLinecap="round"/>
                              <line x1="60" y1="50" x2="70" y2="55" stroke="#1f2937" strokeWidth="3" strokeLinecap="round"/>
                              {/* Hands */}
                              <circle cx="30" cy="45" r="4" fill="#1f2937"/>
                              <circle cx="70" cy="55" r="4" fill="#1f2937"/>
                              {/* Skirt */}
                              <path d="M 40 65 L 35 85 L 65 85 L 60 65 Z" fill="#fb7185" stroke="#1f2937" strokeWidth="2"/>
                              {/* Legs */}
                              <line x1="45" y1="85" x2="42" y2="110" stroke="#1f2937" strokeWidth="3" strokeLinecap="round"/>
                              <line x1="55" y1="85" x2="58" y2="120" stroke="#1f2937" strokeWidth="3" strokeLinecap="round"/>
                              {/* Feet/Shoes */}
                              <ellipse cx="42" cy="115" rx="6" ry="4" fill="#6366f1"/>
                              <ellipse cx="58" cy="125" rx="6" ry="4" fill="#6366f1"/>
                            </svg>
                          </div>
                        )}

                        {/* Plane for international travel */}
                        {(prevItem.location.includes('Pune') && item.location.includes('Toronto')) || 
                         (prevItem.location.includes('Pune') && item.location.includes('New Jersey') && item.title.includes('Husband')) ? (
                          <div className="traveling-girl plane-travel">
                            <div className="plane-animation">✈️</div>
                            <svg className="girl-in-plane" viewBox="0 0 100 100" width="50" height="50">
                              <circle cx="50" cy="30" r="12" fill="#fbbf24"/>
                              <circle cx="55" cy="28" r="2" fill="#1f2937"/>
                              <path d="M 45 32 Q 50 36, 55 32" stroke="#1f2937" strokeWidth="1.5" fill="none"/>
                              <path d="M 38 30 Q 30 20, 38 15 Q 45 10, 50 12 Q 55 10, 62 15 Q 70 20, 62 30" 
                                    fill="#6366f1" stroke="#1f2937" strokeWidth="1"/>
                              <rect x="42" y="42" width="16" height="18" rx="3" fill="#f97316"/>
                            </svg>
                          </div>
                        ) : null}

                        {/* Car for road trip */}
                        {prevItem.location.includes('Toronto') && item.location.includes('New Jersey') && (
                          <div className="traveling-girl car-travel">
                            <div className="car-animation">🚗</div>
                            <svg className="girl-in-car" viewBox="0 0 100 100" width="50" height="50">
                              <circle cx="50" cy="35" r="10" fill="#fbbf24"/>
                              <circle cx="53" cy="33" r="1.5" fill="#1f2937"/>
                              <path d="M 43 37 Q 50 40, 57 37" stroke="#1f2937" strokeWidth="1" fill="none"/>
                              <path d="M 40 35 Q 30 25, 40 20 Q 45 15, 50 17 Q 55 15, 60 20 Q 70 25, 60 35" 
                                    fill="#6366f1" stroke="#1f2937" strokeWidth="1"/>
                              <rect x="42" y="45" width="16" height="15" rx="2" fill="#f97316"/>
                            </svg>
                          </div>
                        )}

                        {/* Walking girl for other domestic moves */}
                        {prevItem.country === item.country && !prevItem.location.includes('Mumbai') && !item.location.includes('Pune') && (
                          <div className="traveling-girl walk-travel">
                            <svg className="girl-character" viewBox="0 0 100 150" width="60" height="90">
                              <circle cx="50" cy="25" r="15" fill="#fbbf24" stroke="#1f2937" strokeWidth="2"/>
                              <circle cx="55" cy="23" r="2" fill="#1f2937"/>
                              <path d="M 45 28 Q 50 32, 55 28" stroke="#1f2937" strokeWidth="2" fill="none"/>
                              <path d="M 35 25 Q 30 15, 35 10 Q 40 5, 50 8 Q 60 5, 65 10 Q 70 15, 65 25" 
                                    fill="#6366f1" stroke="#1f2937" strokeWidth="1.5"/>
                              <rect x="40" y="40" width="20" height="25" rx="5" fill="#f97316"/>
                              <line x1="40" y1="50" x2="30" y2="45" stroke="#1f2937" strokeWidth="3" strokeLinecap="round"/>
                              <line x1="60" y1="50" x2="70" y2="55" stroke="#1f2937" strokeWidth="3" strokeLinecap="round"/>
                              <circle cx="30" cy="45" r="4" fill="#1f2937"/>
                              <circle cx="70" cy="55" r="4" fill="#1f2937"/>
                              <path d="M 40 65 L 35 85 L 65 85 L 60 65 Z" fill="#fb7185" stroke="#1f2937" strokeWidth="2"/>
                              <line x1="45" y1="85" x2="42" y2="110" stroke="#1f2937" strokeWidth="3" strokeLinecap="round"/>
                              <line x1="55" y1="85" x2="58" y2="120" stroke="#1f2937" strokeWidth="3" strokeLinecap="round"/>
                              <ellipse cx="42" cy="115" rx="6" ry="4" fill="#6366f1"/>
                              <ellipse cx="58" cy="125" rx="6" ry="4" fill="#6366f1"/>
                            </svg>
                          </div>
                        )}
                      </div>
                      
                      <div className="travel-route">
                        {prevItem.location} → {item.location}
                      </div>
                    </div>
                  )}

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
                      {item.travel && (
                        <div className="travel-indicator">
                          {item.travel.mode === 'plane' && <FaPlane />}
                          {item.travel.mode === 'car' && <FaCar />}
                        </div>
                      )}
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
                    {item.travel && (
                      <div className="travel-info">
                        <IconComponent />
                        <span>
                          {item.travel.from} → {item.travel.to}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
