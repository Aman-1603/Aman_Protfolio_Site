"use client"

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a <span className="text-purple-400">Software Engineer</span> specializing in distributed systems,
              cloud infrastructure, and full-stack development. I build scalable, reliable, and production-ready
              applications using modern DevOps and cloud-native technologies.
            </p>

            <p className="text-gray-300 mb-10 leading-relaxed">
              My experience spans{" "}
              <span className="text-blue-400">Java, Python, Docker, Kubernetes, AWS, CI/CD,</span> and{" "}
              <span className="text-blue-400">SRE observability</span> with Prometheus and Grafana. I actively use
              AI-assisted development tools including Claude Code and GitHub Copilot as part of my daily workflow.
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gray-900 p-5 rounded-lg text-center shadow hover:shadow-purple-500/30 transition">
                <div className="text-3xl font-bold mb-2">3+</div>
                <div className="text-gray-400 text-xs uppercase">Years Experience</div>
              </div>
              <div className="bg-gray-900 p-5 rounded-lg text-center shadow hover:shadow-purple-500/30 transition">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-gray-400 text-xs uppercase">Projects Built</div>
              </div>
              <div className="bg-gray-900 p-5 rounded-lg text-center shadow hover:shadow-purple-500/30 transition">
                <div className="text-3xl font-bold mb-2">3.7</div>
                <div className="text-gray-400 text-xs uppercase">Master's GPA</div>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Experience */}
          <div className="space-y-10">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Education</h3>
              <div className="mb-6">
                <h4 className="text-xl font-medium">Master of Applied Computer Science</h4>
                <p className="text-blue-400">Wilfrid Laurier University, Canada · GPA 3.7/4.0</p>
                <p className="text-gray-500 text-sm">Sept 2024 – Jan 2026</p>
              </div>
              <div>
                <h4 className="text-xl font-medium">Bachelor of Computer Engineering</h4>
                <p className="text-blue-400">Ganpat University, India · GPA 3.75/4.0</p>
                <p className="text-gray-500 text-sm">July 2019 – July 2023</p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Experience</h3>

              <div className="relative pl-6 border-l border-gray-700 space-y-8">
                {/* HopeSpring */}
                <div className="relative">
                  <div className="absolute -left-[25px] w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                  <h4 className="text-xl font-medium">SDE · Internship</h4>
                  <p className="text-blue-400">HopeSpring Cancer Support Centre · Sep 2025 – Present</p>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                    Leading design and development of a full-stack digital platform using React, Node.js, and
                    PostgreSQL. Built CI/CD pipelines with GitHub Actions, implemented Docker containerization,
                    and deployed on AWS with observability via Prometheus and Grafana.
                  </p>
                </div>

                {/* Xipra */}
                <div className="relative">
                  <div className="absolute -left-[25px] w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                  <h4 className="text-xl font-medium">SDE</h4>
                  <p className="text-blue-400">Xipra Technology · Jun 2023 – Aug 2024</p>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                    Built high-throughput REST API services and backend systems in Java and Python.
                    Implemented CI/CD automation, Terraform IaC, and cloud deployments on AWS and Azure.
                    Reduced production incidents by 67% through structured observability and alerting.
                  </p>
                </div>

                {/* Maxgen */}
                <div className="relative">
                  <div className="absolute -left-[25px] w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                  <h4 className="text-xl font-medium">Software Engineer · Internship</h4>
                  <p className="text-blue-400">Maxgen Technologies Pvt. Ltd. · Jan 2023 – Jun 2023</p>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                    Developed backend services and contributed to CI/CD pipeline improvements.
                    Wrote technical documentation and runbooks, reducing team onboarding time by 40%.
                  </p>
                </div>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Relevant Coursework</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Distributed Systems · Cloud Computing · Cybersecurity · Data Structures & Algorithms ·
                Operating Systems · Artificial Intelligence · Data Warehousing · Software Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}