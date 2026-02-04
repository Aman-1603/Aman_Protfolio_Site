"use client"

import { useState } from "react"

export default function CertificationsSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const certifications = [
    {
      title: "Software Engineer Intern",
      platform: "Hacker Rank",
      issued: "Feb 2024",
      credentialId: "FE07EE671C53",
      credentialUrl: "https://www.hackerrank.com/certificates/fe07ee671c53",
      category: "Fullstack",
      logo: "HR",
    },


    {
      title: "Data Analytics Essentials",
      platform: "Cisco",
      issued: "March 2025",
      credentialId: "7255ad28e298",
      credentialUrl: "https://www.credly.com/badges/6bf76713-f1ef-4e88-b074-add1c03bbef8/public_url",
      category: "Data Analytics",
      logo: "CS",
    },
    {
      title: "JavaScript - Level(Intermidiate)",
      platform: "Hacker Rank",
      issued: "Oct 2025",
      credentialId: "b17be2ec5868",
      credentialUrl: "https://www.hackerrank.com/certificates/b17be2ec5868",
      category: "Fullstack",
      logo: "HR",
    },
    {
      title: "SQL Advance",
      platform: "HackerRank",
      issued: "December 2022",
      credentialId: "Fc6f9db85334",
      credentialUrl: "https://www.hackerrank.com/certificates/94ef00f05ff2",
      category: "Programming",
      logo: "HR",
    },

    {
      title: "Python for Everybody",
      platform: "University of Michigan",
      issued: "December 2022",
      credentialId: "Check here",
      credentialUrl: "https://coursera.org/share/0a0c9ffcd3528f2015b03842b69dba8d",
      category: "Programming",
      logo: "HR",
    },
  ]

  const filters = ["All", "Fullstack", "Programming", "Cloud"]

  const filteredCertifications =
    activeFilter === "All"
      ? certifications
      : certifications.filter((cert) => cert.category === activeFilter)

  return (
    <section id="certificates" className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="text-sm text-gray-400 mb-2 tracking-wide">CREDENTIALS</div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent shadow-lg scale-105"
                  : "bg-transparent text-gray-400 border-gray-600 hover:border-white hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCertifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-900/60 border border-gray-700 rounded-xl p-6 
                         hover:border-blue-400 hover:shadow-lg 
                         transform hover:scale-105 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 
                                rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  {cert.logo}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                  <p className="text-gray-400">{cert.platform}</p>
                </div>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-lg"
                >
                  ↗
                </a>
              </div>

              {/* Details */}
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-gray-400 mb-1">Platform</div>
                  <div className="text-blue-400">{cert.platform}</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Issued</div>
                  <div>{cert.issued}</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Credential ID</div>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {cert.credentialId} ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}




