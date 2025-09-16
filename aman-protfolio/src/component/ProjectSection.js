"use client"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Code Pulse",
      description:
        "CodePulse is a web-based code execution platform that allows users to write, execute, and manage code files seamlessly, with features like file management, syntax highlighting, and real-time output.",
      image: "/code-editor-interface-dark-theme.jpg",
      technologies: ["AWS (Auto scaling, RDS, SGS, EC2, S3)", "Terraform", "Docker", "React.js", "Node.js"],
      githubUrl: "#",
      category: "Full Stack",
    },
    {
      title: "Urban Assist",
      description:
        "Urban Assist streamlines the process of finding, booking, and paying for various urban services through a unified, secure, and user-friendly interface.",
      image: "/urban-services-booking-app-interface.jpg",
      technologies: ["Microservices", "Kubernetes", "Docker", "RabbitMQ", "Java", "Node.js", "React", "NGINX"],
      githubUrl: "#",
      category: "Microservices",
    },
    {
      title: "Trendflix",
      description:
        "A modern streaming platform for movies and TV series with advanced search and recommendation features.",
      image: "/streaming-platform-interface-netflix-style.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "#",
      category: "Web App",
    },
  ]

  return (
    <section id="projects" className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-gray-700 ml-6">
          {projects.map((project, index) => (
            <div key={index} className="mb-16 ml-8 relative">
              {/* Dot on the timeline */}
              <div className="absolute -left-[33px] w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-black"></div>

              {/* Project Card */}
              <div
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Project Image */}
                <div className="relative group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-sm rounded-full border border-gray-600 hover:bg-purple-600/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition-colors"
                  >
                    GITHUB ↗
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
