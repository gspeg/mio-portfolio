import { useState } from 'react'
import projects from './data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'

function Projects() {
  const [filter, setFilter] = useState("All")
  const [selected, setSelected] = useState(null)

  const filtered = filter === "All" ? projects : projects.filter(p => p.type === filter)

  return (
    <section className="py-16 px-6">
      <h2 className="text-4xl font-subtitle font-bold mb-8 text-center">Projects</h2>

      <div className="flex justify-center gap-4 mb-8">
        {["All", "Digital Strategy", "Sound Design"].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full border ${
              filter === type ? 'bg-white text-black' : 'border-white'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(project => (
          <ProjectCard key={project.id} project={project} onClick={() => setSelected(project)} />
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}

export default Projects
