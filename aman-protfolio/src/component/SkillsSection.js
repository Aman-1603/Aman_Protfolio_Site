"use client"

import { useState } from "react"
import { FaJava, FaPython, FaReact, FaNodeJs, FaDocker, FaAws, FaGithub } from "react-icons/fa"
import {
  SiJavascript,
  SiTypescript,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiApachekafka,
  SiRedis,
  SiGooglecloud,
  SiJenkins,
  SiLinux,
  SiNextdotjs,
} from "react-icons/si"
import { TbApi, TbBrandOpenai } from "react-icons/tb"
import { VscVscode } from "react-icons/vsc"

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("Languages")

  const skillCategories = {
    Languages: [
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "Python", icon: <FaPython className="text-yellow-300" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "SQL", icon: <SiPostgresql className="text-sky-400" /> },
      { name: "Bash", icon: <SiLinux className="text-gray-300" /> },
    ],

    "Cloud & DevOps": [
      { name: "AWS", icon: <FaAws className="text-orange-400" /> },
      { name: "GCP", icon: <SiGooglecloud className="text-blue-400" /> },
      { name: "Azure", icon: <span className="text-2xl font-bold text-blue-500">Az</span> },
      { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
      { name: "Terraform", icon: <SiTerraform className="text-purple-400" /> },
    ],

    "CI/CD & Tools": [
      { name: "GitHub Actions", icon: <FaGithub className="text-white" /> },
      { name: "Jenkins", icon: <SiJenkins className="text-red-400" /> },
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "Linux", icon: <SiLinux className="text-yellow-300" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
      { name: "Jira", icon: <span className="text-2xl font-bold text-blue-400">J</span> },
    ],

    Observability: [
      { name: "Prometheus", icon: <SiPrometheus className="text-orange-500" /> },
      { name: "Grafana", icon: <SiGrafana className="text-orange-400" /> },
      { name: "OpenTelemetry", icon: <span className="text-2xl">🔭</span> },
    ],

    Frameworks: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "REST APIs", icon: <TbApi className="text-purple-400" /> },
    ],

    Databases: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-orange-600" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      { name: "Kafka", icon: <SiApachekafka className="text-white" /> },
    ],

    "AI & Dev Tools": [
      { name: "Claude Code", icon: <TbBrandOpenai className="text-purple-400" /> },
      { name: "GitHub Copilot", icon: <FaGithub className="text-gray-300" /> },
      { name: "AI Dev", icon: <span className="text-2xl">🤖</span> },
    ],
  }

  const tabs = Object.keys(skillCategories)

  return (
    <section id="skills" className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full border transition-all text-sm ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-105 border-transparent"
                  : "bg-transparent text-gray-400 border-gray-600 hover:border-white hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 max-w-6xl mx-auto">
          {skillCategories[activeTab].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center mb-4
                group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/40
                transition-all duration-300"
              >
                <div className="text-4xl">{skill.icon}</div>
              </div>

              <span className="text-center text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}