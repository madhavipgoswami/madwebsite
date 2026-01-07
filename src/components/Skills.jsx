const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      skills: [
        { name: 'Microsoft Azure', level: 95 },
        { name: 'Amazon Web Services (AWS)', level: 90 },
        { name: 'Google Cloud Platform (GCP)', level: 75 },
        { name: 'Hybrid Cloud Architecture', level: 90 },
      ],
    },
    {
      title: 'AI & GenAI',
      skills: [
        { name: 'GenAI Strategy & Adoption', level: 95 },
        { name: 'Multi-Agent Systems', level: 90 },
        { name: 'Azure OpenAI & M365 Copilot', level: 95 },
        { name: 'ML/AI Program Leadership', level: 90 },
      ],
    },
    {
      title: 'Financial Services & Leadership',
      skills: [
        { name: 'Capital Markets', level: 95 },
        { name: 'Trading & Risk Systems', level: 90 },
        { name: 'GTM Strategy & Execution', level: 95 },
        { name: 'Executive Engagement', level: 95 },
      ],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Expertise across cloud platforms, GenAI, and financial services transformation
        </p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
