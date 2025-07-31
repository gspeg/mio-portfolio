function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white text-black rounded-xl p-4 shadow-lg cursor-pointer hover:scale-[1.02] transition"
    >
      <img
        src={project.images[0]}
        alt={project.title}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h3 className="text-xl font-subtitle font-semibold mb-2">{project.title}</h3>
      <span className="text-sm px-2 py-1 bg-gray-800 text-white rounded-full inline-block mb-2 font-body">
        {project.type}
      </span>
      <p className="text-sm opacity-80 line-clamp-3">{project.description}</p>
    </div>
  )
}

export default ProjectCard
