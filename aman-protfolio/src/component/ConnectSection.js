import { FaGithub, FaLinkedin, FaHackerrank,  } from "react-icons/fa"
import { SiCodechef, SiGeeksforgeeks} from "react-icons/si"


function Example() {
  return (
    <div className="flex gap-4 text-3xl text-white">
      <FaGithub />
      <FaLinkedin />
      <FaHackerrank />
    </div>
  )
}


export default function ConnectSection() {
  const socialLinks = [
    {
      name: "GitHub",
      description: "Open source contributions & projects",
      icon: <FaGithub/>,
      url: "https://github.com/Aman-1603",
    },
    {
      name: "LinkedIn",
      description: "Professional network & experience",
      icon: <FaLinkedin />,
      url: "www.linkedin.com/in/aman--ansari",
    },
    {
      name: "CodeChef",
      description: "Problem solving & algorithms",
      icon: <SiCodechef/>,
      url: "https://www.codechef.com/users/aman_8249",
    },
    {
      name: "HackerRank",
      description: "Coding challenges & competitions",
      icon: <FaHackerrank/>,
      url: "https://www.hackerrank.com/profile/ansariaman1603",
    },
  
  ]

  return (
    <section id="connect" className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <div className="text-sm text-gray-400 mb-4 uppercase tracking-wider">CONNECT WITH ME</div>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 text-balance">
            Let's build something <em className="italic">exceptional</em> together
          </h2>
        </div>
        

        {/* Social Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} className="text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto mb-4 text-4xl flex items-center justify-center bg-gray-900 rounded-full group-hover:bg-gray-800 transition-colors">
                {link.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{link.name}</h3>
              <p className="text-sm text-gray-400">{link.description}</p>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="font-bold">AMAN ANSARI®</span>
              <span className="text-gray-400 ml-2">/ Creative Developer</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <span>© 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
