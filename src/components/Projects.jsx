import { useState } from 'react'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'GenAI & Multi-Agent Transformation',
      description:
        'Led secure GenAI and multi-agent system adoption at Microsoft, driving 116% YoY growth in Azure, M365 Copilot, and GenAI adoption across global Financial Services clients.',
      image: '🤖',
      tags: ['Azure OpenAI', 'M365 Copilot', 'GenAI Strategy', 'Multi-Agent Systems'],
      category: 'transformation',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Cloud Migration & Modernization',
      description:
        'Achieved 118% YoY cloud adoption growth at AWS, leading ML beta programs and authoring internal FinServ playbooks for enterprise transformations.',
      image: '☁️',
      tags: ['AWS', 'Cloud Migration', 'ML Programs', 'Enterprise Strategy'],
      category: 'cloud',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Prime Brokerage Modernization',
      description:
        'Delivered 75% cost savings through Prime Brokerage modernization at Deutsche Bank, managing global teams and complex enterprise-scale implementations.',
      image: '💼',
      tags: ['Program Leadership', 'Cost Optimization', 'Legacy Modernization', 'Global Delivery'],
      category: 'transformation',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'EmpressaAI - AI Literacy Programs',
      description:
        'Founding member developing global AI literacy programs for women, empowering them to turn insights into income through trusted GPT-based tools.',
      image: '🌟',
      tags: ['AI Education', 'Women Empowerment', 'GPT Tools', 'Global Programs'],
      category: 'leadership',
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Enterprise Tech Migrations',
      description:
        'Executed enterprise tech migrations at Citibank with 20% productivity lift, leading full-stack risk and finance system revamps across trading entities.',
      image: '📊',
      tags: ['Enterprise Migration', 'Risk Systems', 'Finance Systems', 'Productivity'],
      category: 'transformation',
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'GTM Strategy & Partner Ecosystem',
      description:
        'Built Capital Markets-focused GenAI solution playbooks, evaluated partner build/buy motions, and scaled delivery through ecosystem partnerships.',
      image: '🤝',
      tags: ['GTM Strategy', 'Partner Ecosystem', 'Solution Playbooks', 'Market Activation'],
      category: 'leadership',
      link: '#',
      github: '#',
    },
  ]

  const categories = ['all', 'transformation', 'cloud', 'leadership']
  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter)

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
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.image}</div>
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
                <div className="project-links">
                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
