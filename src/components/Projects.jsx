import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import '../styles/Projects.css'
import { scrollVariants, staggerContainer } from '../hooks/useScrollAnimation'

const PROJECTS = [
  {
    id: 0,
    title: 'Portfolio',
    description: 'My personal developer portfolio showcasing projects, skills, and experience. Built with React and modern animations.',
    tags: ['React', 'Framer Motion', 'Web Design'],
    github: 'https://github.com/Prannav-7/portfolio-react',
    featured: true
  },
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
    title: 'Noble Bites',
    description: 'A premium e-commerce platform for food and snacks, featuring a modern UI and seamless ordering experience.',
    tags: ['React', 'Node.js', 'Firebase'],
    github: 'https://github.com/Prannav-7/noble-bites-frontend',
    link: 'https://noble-bites.vercel.app/',
    featured: true
  },
  {
    id: 4,
    title: 'NVG8 Clone',
    description: 'A high-fidelity clone of the nvg8.io website, featuring complex scroll animations and organic SVG shapes.',
    tags: ['React', 'SVG', 'GSAP'],
    github: 'https://github.com/Prannav-7/nvg8.io-clone',
    featured: true
  },
  {
    id: 5,
    title: 'Fresh Flow',
    description: 'A modern e-commerce application focusing on fresh produce and seamless delivery tracking.',
    tags: ['React'],
    github: 'https://github.com/Prannav-7/freshflow-frontend',
    link: 'https://fleshflow.vercel.app/',
    featured: true
  },
  {
    id: 6,
    title: 'Standup Comedy App',
    description: 'A platform for discovering and booking standup comedy shows with a vibrant and energetic UI.',
    tags: ['React', 'API Integration', 'Responsive Design'],
    github: 'https://github.com/Prannav-7/standup_comedy',
    featured: true
  },
  {
    id: 7,
    title: 'Incrivia Tourist App',
    description: 'Tourism management application connecting travelers with local attractions, hotels, and tour guides.',
    tags: ['JavaScript', 'React', 'Node.js'],
    github: 'https://github.com/Prannav-7/Incrivia-Touristapp'
  },
  {
    id: 8,
    title: 'Docart - Flipkart Clone',
    description: 'E-commerce platform clone with product catalog, shopping cart, and checkout functionality.',
    tags: ['JavaScript', 'React', 'Responsive Design'],
    github: 'https://github.com/Prannav-7/Docart-Flipkart_Clone'
  },
  {
    id: 9,
    title: 'Shop App',
    description: 'Mobile-friendly shopping application with product filtering and dynamic cart management.',
    tags: ['JavaScript', 'React'],
    github: 'https://github.com/Prannav-7/shop-app'
  },
  {
    id: 10,
    title: 'Nutz Login Page',
    description: 'Modern authentication UI with validation, responsive design, and smooth animations.',
    tags: ['JavaScript'],
    github: 'https://github.com/Prannav-7/Nutz_LoginPage'
  },
  {
    id: 11,
    title: 'Text Converter',
    description: 'Utility tool for text manipulation, conversion, and formatting with multiple options.',
    tags: ['JavaScript'],
    github: 'https://github.com/Prannav-7/Text_Convertor'
  },
  {
    id: 12,
    title: 'Hostel Management System',
    description: 'Flutter-based hostel management application for room allocation and student records.',
    tags: ['Flutter', 'Dart', 'Mobile'],
    github: 'https://github.com/Prannav-7/Hostel_Management_usingFlutter',
    featured: true
  },
  {
    id: 13,
    title: 'Face Detection IOT',
    description: 'IoT project implementing face detection and recognition using computer vision.',
    tags: ['Python', 'IoT'],
    github: 'https://github.com/Prannav-7/FaceDetectionUsingIOT',
    featured: true
  },
  {
    id: 14,
    title: 'Omegaa',
    description: 'A modern landing page showcase featuring smooth transitions and a clean aesthetic.',
    tags: ['JavaScript', 'Web Design'],
    github: 'https://github.com/Prannav-7/Omegaa',
    featured: true
  }
]

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [selectedTag, setSelectedTag] = useState(null)

  // Only show tags that have projects in the current filter category
  const availableTags = [...new Set(PROJECTS
    .filter(p => filter === 'all' || p.featured)
    .flatMap(p => p.tags)
  )]

  const filteredProjects = PROJECTS.filter(project => {
    if (filter !== 'all') {
      if (!project.featured) return false
    }
    if (selectedTag && !project.tags.includes(selectedTag)) return false
    return true
  }).sort((a, b) => (b.link ? 1 : 0) - (a.link ? 1 : 0))

  // Helper to handle tag clicking
  const handleTagClick = (tag) => {
    setSelectedTag(selectedTag === tag ? null : tag)
  }

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scrollVariants}
        >
          <h2>My Projects</h2>
          <p>A collection of my recent work and personal projects</p>
        </motion.div>

        <motion.div
          className="projects-filters"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scrollVariants}
        >
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
        </motion.div>

        <motion.div
          className="tags-filter"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {availableTags.map(tag => (
            <motion.button
              key={tag}
              className={`tag ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => handleTagClick(tag)}
              variants={scrollVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          key={`${filter}-${selectedTag}`}
          className="projects-grid"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={scrollVariants}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))
          ) : (
            <p className="no-projects">No projects found matching your filters</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
