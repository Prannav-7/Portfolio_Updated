import '../styles/ProjectCard.css'

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {project.featured && <div className="featured-badge">Featured</div>}
      <div className="project-header">
        <h3>{project.title}</h3>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn github">
          GitHub
        </a>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-btn live">
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}
