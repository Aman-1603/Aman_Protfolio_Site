import dotgif from "../Assets/dot.gif"

export default function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 md:p-8">
        <div className="text-xl font-bold">AMAN ANSARI®</div>
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection("skills")} className="hover:text-gray-300 transition-colors">
            SKILLS
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-gray-300 transition-colors">
            PROJECTS
          </button>
          <button onClick={() => scrollToSection("certificates")} className="hover:text-gray-300 transition-colors">
            CERTIFICATES
          </button>
          <button onClick={() => scrollToSection("connect")} className="hover:text-gray-300 transition-colors">
            CONNECT
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-between px-6 md:px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          <div className="text-sm text-gray-400 mb-4 border border-gray-600 rounded-full px-4 py-2 inline-block">
            Software Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Crafting
            <br />
            Digital
            <br />
            Solutions
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            I'm passionate about developing practical solutions to real-world problems.
          </p>

          {/* Normal HTML button */}
          <button
            onClick={() => scrollToSection("projects")}
            className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition-colors"
          >
            VIEW PROJECTS →
          </button>
        </div>

       {/* Decorative Circle Pattern replaced with GIF */}
<div className="hidden lg:block relative">
  <div className="w-96 h-96 relative">
    <img
      src={dotgif}
      alt="Decorative GIF"
      className="w-full h-full rounded-full object-cover"
    />
  </div>
</div>

      </div>
    </section>
  )
}
