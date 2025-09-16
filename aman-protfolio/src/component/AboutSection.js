"use client"

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I’m a passionate <span className="text-purple-400">Software Developer</span> who loves building scalable,
              efficient, and user-focused applications. I thrive on solving real-world problems with clean architecture
              and modern technologies.
            </p>

            <p className="text-gray-300 mb-10 leading-relaxed">
              My experience spans across <span className="text-blue-400">Full-Stack Development, Cloud Computing,</span>{" "}
              and <span className="text-blue-400">DevOps</span>, with a focus on performance, maintainability, and
              collaboration. Beyond coding, I enjoy contributing to open-source projects and mentoring peers.
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg text-center shadow hover:shadow-purple-500/30 transition">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-gray-400 text-sm uppercase">Projects Delivered</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center shadow hover:shadow-purple-500/30 transition">
                <div className="text-4xl font-bold mb-2">1.5+</div>
                <div className="text-gray-400 text-sm uppercase">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Experience */}
          <div className="space-y-10">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Education</h3>

              <div className="mb-6">
                <h4 className="text-xl font-medium">Master’s in Applied Computing</h4>
                <p className="text-blue-400">Wilfrid Laurier University, Canada (2024 – Present)</p>
              </div>

              <div>
                <h4 className="text-xl font-medium">Bachelor of Technology – Information Technology</h4>
                <p className="text-blue-400">Ganpat University, India (2019 – 2023)</p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Experience</h3>

              <div className="relative pl-6 border-l border-gray-700">
                <div className="absolute -left-[9px] w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                <div>
                  <h4 className="text-xl font-medium">Android Developer Intern</h4>
                  <p className="text-blue-400">Maxgen Technologies • Jan 2023 – May 2023</p>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                    Contributed to developing and testing Android-based e-commerce applications, enhancing user
                    experience with intuitive UI and optimized performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Relevant Coursework</h3>
              <p className="text-gray-300 leading-relaxed">
                Data Structures, Algorithms, Cloud Computing, Cybersecurity, Data Warehousing, Distributed Systems,
                Artificial Intelligence, Operating Systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
