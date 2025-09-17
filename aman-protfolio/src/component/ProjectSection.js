"use client"
import research_image from "../Assets/Research.png"
import antique_image from "../Assets/antique_store.png"
import flashcart_image from "../Assets/flashcart_image.png"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Cybersecurity Research with Machine Learning",
      description:
        "Conducted research in cybersecurity focusing on DNS-over-HTTPS traffic detection using machine learning models in Python. Implemented hybrid ML models to identify malicious traffic with high accuracy, leveraging feature engineering, real-time traffic simulation, and performance optimization.",
      image: research_image,
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "DoH Dataset"],
      githubUrl: "#",
      category: "Research",
    },
    {
      title: "Antique Store – E-commerce Platform",
      description:
        "Developed a full-stack e-commerce web application for antiques, providing a seamless platform for browsing, managing, and purchasing rare items. Features included user authentication, product management, shopping cart, and secure payment integration.",
      image: antique_image,
      technologies: ["React.js", "Node.js", "Express", "MongoDB"],
      githubUrl: "#",
      category: "Full Stack",
    },
    {
      title: "FlashCart – Location-Based Marketplace",
      description:
        "Designed and built an Android app that connects buyers with nearby stores based on their location. Sellers can register, add products, and manage inventory, while buyers can browse and purchase from local shops. The system was powered by Firebase for real-time data sync, authentication, and scalability.",
      image: flashcart_image,
      technologies: ["Java", "Android Studio", "Firebase", "Google Maps API"],
      githubUrl: "#",
      category: "Mobile App",
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
