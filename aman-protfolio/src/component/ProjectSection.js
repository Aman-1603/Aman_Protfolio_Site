"use client"
import research_image from "../Assets/Research.png"
import antique_image from "../Assets/antique_store.png"
import flashcart_image from "../Assets/flashcart_image.png"
import HopeSpring_image from "../Assets/hopespring.png"

export default function ProjectsSection() {
  const projects = [
    {
      title: "High-Throughput Distributed Order Analytics Platform",
      description:
        "Architected a fault-tolerant, event-driven distributed platform processing 500K+ events/day using Kafka streaming pipelines and microservices. Engineered for sub-50ms latency with dead-letter queue handling, automated retry logic, and full SRE observability stack including Prometheus metrics, Grafana dashboards, and structured alerting. Deployed on AWS via Docker and Kubernetes with GitHub Actions CI/CD.",
      image: HopeSpring_image,
      technologies: ["Java", "Python", "Kafka", "Docker", "Kubernetes", "AWS", "Prometheus", "Grafana", "PostgreSQL", "Redis"],
      githubUrl: "https://github.com/Aman-1603/order-analytics-platform",
      category: "Distributed Systems",
    },
    {
      title: "Cybersecurity Research — DoH/HTTPS Classification System",
      description:
        "Engineered a distributed real-time classification pipeline in Python processing 2M+ network records to detect DNS-over-HTTPS malicious traffic using machine learning. Achieved 95.1% accuracy vs 71% baseline using hybrid ML models with feature engineering, real-time traffic simulation, and OpenTelemetry observability.",
      image: research_image,
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "OpenTelemetry", "DoH Dataset"],
      githubUrl: "https://github.com/Aman-1603/CyberSecurity_DOH_HTTPS_Research_ML",
      category: "ML / Research",
    },
    {
      title: "HopeSpring – Cancer Support Digital Platform",
      description:
        "Developed a full-stack digital platform for HopeSpring Cancer Support Centre to modernize program bookings, member management, and staff operations. Built with React, Node.js, and PostgreSQL with secure authentication, role-based access control, real-time dashboards, and CI/CD pipelines via GitHub Actions.",
      image: HopeSpring_image,
      technologies: ["React", "Node.js", "JavaScript", "PostgreSQL", "Tailwind CSS", "GitHub Actions", "Docker"],
      githubUrl: "#",
      category: "Full Stack",
    },
    {
      title: "Antique Store – Full Stack E-Commerce Platform",
      description:
        "Developed a full-stack e-commerce web application for antiques with user authentication, product management, shopping cart, and secure payment integration. Built with React frontend and Node.js/Express backend with MongoDB for data persistence.",
      image: antique_image,
      technologies: ["React.js", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/Aman-1603/antique-store",
      category: "Full Stack",
    },
    {
      title: "FlashCart – Location-Based Mobile Marketplace",
      description:
        "Designed and built an Android app connecting buyers with nearby stores based on location. Sellers can register, add products, and manage inventory while buyers browse and purchase from local shops. Powered by Firebase for real-time data sync, authentication, and scalability.",
      image: flashcart_image,
      technologies: ["Java", "Android Studio", "Firebase", "Google Maps API"],
      githubUrl: "https://github.com/Aman-1603/Flashcart",
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

        <div className="relative border-l border-gray-700 ml-6">
          {projects.map((project, index) => (
            <div key={index} className="mb-16 ml-8 relative">
              <div className="absolute -left-[33px] w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-black"></div>

              {/* Featured badge for top project */}
              {index === 0 && (
                <div className="inline-block mb-3 px-3 py-1 text-xs font-semibold bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white">
                  ⭐ Featured Project
                </div>
              )}

              <div className={`grid md:grid-cols-2 gap-8 items-center`}>
                <div className="relative group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 rounded text-xs text-purple-400 border border-purple-500/30">
                    {project.category}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-xs rounded-full border border-gray-600 hover:bg-purple-600/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.githubUrl !== "#" && (
                    <button
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition-colors text-sm"
                    >
                      GITHUB ↗
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}