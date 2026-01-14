import { useState } from 'react'
import { FaRobot, FaCloud, FaUsers, FaHandshake, FaUniversity, FaChartBar, FaServer, FaStar } from 'react-icons/fa'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [flippedCards, setFlippedCards] = useState(new Set())

  const projects = [
    {
      id: 1,
      title: 'GenAI & Multi-Agent Transformation',
      description:
        'Led secure GenAI and multi-agent system adoption at Microsoft, driving 116% YoY growth in Azure, M365 Copilot, and GenAI services through strategic customer success and partner co-sell execution.',
      icon: FaRobot,
      tags: ['Azure OpenAI', 'M365 Copilot', 'GenAI Strategy', 'Multi-Agent Systems'],
      category: 'transformation',
    },
    {
      id: 2,
      title: 'M365 Copilot Enterprise Adoption',
      description:
        'Architected and led enterprise-wide M365 Copilot rollout strategy for global financial institutions, establishing governance frameworks, security protocols, and change management programs for secure AI adoption.',
      icon: FaUsers,
      tags: ['Copilot Rollout', 'Change Management', 'Governance Framework', 'Enterprise Strategy'],
      category: 'transformation',
    },
    {
      id: 3,
      title: 'Cloud Migration & Modernization',
      description:
        'Achieved 118% YoY cloud adoption growth at AWS, leading multi-year migration programs and ML beta initiatives. Authored internal FinServ playbooks and shaped product roadmaps through customer insights.',
      icon: FaCloud,
      tags: ['AWS', 'Cloud Migration', 'ML Programs', 'Enterprise Strategy'],
      category: 'cloud',
    },
    {
      id: 4,
      title: 'Partner Ecosystem & GTM Strategy',
      description:
        'Built Capital Markets-focused GenAI solution playbooks and scaled delivery through partner ecosystem. Evaluated partner build/buy motions and drove market activation through ECIF alignment and Marketplace strategies.',
      icon: FaHandshake,
      tags: ['GTM Strategy', 'Partner Ecosystem', 'Solution Playbooks', 'Market Activation'],
      category: 'leadership',
    },
    {
      id: 5,
      title: 'Prime Brokerage Modernization',
      description:
        'Delivered 75% cost savings through Prime Brokerage modernization at Deutsche Bank, managing global teams and complex, mission-critical platforms across Cash Management, Trade Processing, and Payments.',
      icon: FaUniversity,
      tags: ['Program Leadership', 'Cost Optimization', 'Legacy Modernization', 'Global Delivery'],
      category: 'transformation',
    },
    {
      id: 6,
      title: 'Enterprise Customer Success Programs',
      description:
        'Drove consulting delivery optimization across 10+ programs at Microsoft, improving resource utilization and profitability through proactive governance, executive steering committees, and cross-functional stakeholder alignment.',
      icon: FaChartBar,
      tags: ['Customer Success', 'Program Management', 'Executive Engagement', 'Delivery Optimization'],
      category: 'leadership',
    },
    {
      id: 7,
      title: 'Enterprise Tech Migrations',
      description:
        'Executed enterprise tech migrations at Citibank with 20% productivity lift, leading full-stack risk and finance system revamps. Orchestrated collaboration across Product Controllers, Operations, and Technology teams.',
      icon: FaServer,
      tags: ['Enterprise Migration', 'Risk Systems', 'Productivity Gains', 'Cross-Functional Leadership'],
      category: 'transformation',
    },
    {
      id: 8,
      title: 'EmpressaAI - AI Literacy Programs',
      description:
        'Founding member developing global AI literacy programs for women, empowering them to turn insights into income through trusted GPT-based tools. Certified AI Instructor delivering workshops and keynotes.',
      icon: FaStar,
      tags: ['AI Education', 'Women Empowerment', 'GPT Tools', 'Global Programs'],
      category: 'leadership',
    },
  ]

  const categories = ['all', 'transformation', 'cloud', 'leadership']
  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter)

  const toggleCard = (projectId) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(projectId)) {
        newSet.delete(projectId)
      } else {
        newSet.add(projectId)
      }
      return newSet
    })
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Career Highlights & Initiatives</h2>
        <p className="section-subtitle">
          Key transformations and strategic programs across Microsoft, AWS, and Global Banks
        </p>
        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => {
            const isFlipped = flippedCards.has(project.id)
            return (
              <div
                key={project.id}
                className={`project-card-container ${isFlipped ? 'flipped' : ''}`}
              >
                <div className="project-card">
                  {/* Front of card */}
                  <div className="project-card-front">
                    <div className="project-image">
                      <project.icon className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        className="project-details-btn"
                        onClick={() => toggleCard(project.id)}
                      >
                        See More
                      </button>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="project-card-back">
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-deep-dive">
                        {/* Deep dive content will go here */}
                        <p className="deep-dive-placeholder">
                          Deep dive content coming soon...
                        </p>
                      </div>
                      <button
                        className="project-details-btn"
                        onClick={() => toggleCard(project.id)}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
