import { useState } from 'react'
import ProjectCard from './ProjectCard'
import '../styles/Projects.css'

const PROJECTS = [
  {
    id: 1,
    title: 'Electro Store',
    description: 'Full-stack e-commerce application for electronics. Built with React frontend and Node.js backend with MongoDB.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/Prannav-7/JaimaruthiElectricalandHardwaresStore-ElectroStore.git',
    featured: true
  },
  {
    id: 2,
    title: 'AI Chat Intelligence',
    description: 'AI-powered chatbot application using modern JavaScript and machine learning integration for intelligent conversations.',
    tags: ['JavaScript', 'AI/ML', 'React'],
    github: 'https://github.com/Prannav-7/Ai_Chat_Intelligence',
    featured: true
  },
  {
    id: 3,
    title: 'Incrivia Tourist App',
    description: 'Tourism management application connecting travelers with local attractions, hotels, and tour guides.',
    tags: ['JavaScript', 'React', 'Node.js'],
    github: 'https://github.com/Prannav-7/Incrivia-Touristapp'
  },
  {
    id: 4,
    title: 'Docart - Flipkart Clone',
    description: 'E-commerce platform clone with product catalog, shopping cart, and checkout functionality.',
    tags: ['JavaScript', 'React', 'Responsive Design'],
    github: 'https://github.com/Prannav-7/Docart-Flipkart_Clone'
  },
  {
    id: 5,
    title: 'Shop App',
    description: 'Mobile-friendly shopping application with product filtering and dynamic cart management.',
    tags: ['JavaScript', 'React', 'CSS'],
    github: 'https://github.com/Prannav-7/shop-app'
  },
  {
    id: 6,
    title: 'Nutz Login Page',
    description: 'Modern authentication UI with validation, responsive design, and smooth animations.',
    tags: ['JavaScript', 'HTML/CSS', 'Form Validation'],
    github: 'https://github.com/Prannav-7/Nutz_LoginPage'
  },
  {
    id: 7,
    title: 'Text Converter',
    description: 'Utility tool for text manipulation, conversion, and formatting with multiple options.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Prannav-7/Text_Convertor'
  },
  {
    id: 8,
    title: 'Hostel Management System',
    description: 'Flutter-based hostel management application for room allocation and student records.',
    tags: ['Flutter', 'Dart', 'Mobile'],
    github: 'https://github.com/Prannav-7/Hostel_Management_usingFlutter'
  },
  {
    id: 9,
    title: 'Face Detection IOT',
    description: 'IoT project implementing face detection and recognition using computer vision.',
    tags: ['Python', 'IoT', 'Computer Vision'],
    github: 'https://github.com/Prannav-7/FaceDetectionUsingIOT'
  },
  {
    id: 10,
    title: 'Jaimaruthi Electrical Store',
    description: 'E-commerce platform for electrical and hardware products with complete shopping workflow.',
    tags: ['JavaScript', 'React', 'E-commerce'],
    github: 'https://github.com/Prannav-7/JaimaruthiElectricalandHardwaresStore-ElectroStore'
  }
]

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [selectedTag, setSelectedTag] = useState(null)

  const allTags = [...new Set(PROJECTS.flatMap(p => p.tags))]

  const filteredProjects = PROJECTS.filter(project => {
    if (filter !== 'all') {
      const featured = filter === 'featured' ? project.featured : !project.featured
      if (!featured) return false
    }
    if (selectedTag && !project.tags.includes(selectedTag)) return false
    return true
  })

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p>A collection of my recent work and personal projects</p>
        </div>

        <div className="projects-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
            onClick={() => setFilter('featured')}
          >
            Featured
          </button>
        </div>

        <div className="tags-filter">
          {allTags.map(tag => (
            <button
              key={tag}
              className={`tag ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="no-projects">No projects found matching your filters</p>
          )}
        </div>
      </div>
    </section>
  )
}
