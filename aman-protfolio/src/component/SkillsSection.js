"use client"

import { useState } from "react"
// React Icons
import { FaJava, FaPython, FaReact, FaNodeJs, FaDocker } from "react-icons/fa"
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiC,
  SiKubernetes,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
} from "react-icons/si"
import { TbApi } from "react-icons/tb"
import { VscVscode,VscAzure  } from "react-icons/vsc";
// AWS official icon
import AwsIcon from "react-aws-icons/dist/aws/logo/AWS"

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("Programming Languages")

  const skillCategories = {
    "Programming Languages": [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Java", icon: <FaJava className="text-red-600" /> },
      { name: "Python", icon: <FaPython className="text-yellow-300" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "C", icon: <SiC className="text-cyan-500" /> },
    ],
    "Cloud & DevOps": [
      { name: "AWS", icon: <AwsIcon className="w-10 h-10" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
    ],
    "Frameworks & Libraries": [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-gray-400" /> },
    ],
    Databases: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-orange-600" /> },
    ],
    "API Technologies": [
      { name: "REST APIs", icon: <TbApi className="text-purple-500" /> },
    ],
    Tools: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
    ],
    "Software Methodologies": [
      { name: "Agile", icon: <VscAzure  className="text-green-500" /> },
      { name: "Scrum", icon: "🏃" }, // fallback emoji
    ],
  }

  const tabs = Object.keys(skillCategories)

  return (
    <section id="skills" className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Skills & Expertise</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full border transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-105"
                  : "bg-transparent text-gray-400 border-gray-600 hover:border-white hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
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
