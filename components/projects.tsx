"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { useFadeUp, useMouseGlow } from "@/hooks/use-parallax"
import Link from "next/link"

type ProjectCategory = "All" | "Machine Learning" | "Full Stack"

interface Project {
  title: string
  description: string
  slug: string
  tags: string[]
  category: ProjectCategory
  github: string
  demo?: string
  screenshots?: string[]   
}
// const projects: Project[] = [
//   {
//     title: "Flux",
//       slug: "flux",
//     description:
//       "Flux is a Django-based inventory and stock management system designed to manage products, warehouses, and branch-level stock operations. The system supports role-based access control, stock tally tracking, Excel uploads, and exportable reports in PDF and Excel formats. Built using Django REST Framework with support for MySQL databases.",
//     tags: [
//   "Python",
//   "Django",
//   "Django REST Framework",
//   "Inventory Management System",
//   "Stock Management",
//   "Role-Based Access Control",
//   "MySQL",
//   "REST API",
// ],
//     category: "Full Stack",

//     github: "https://github.com/Gargi2275/Flux",
//     demo:"https://drive.google.com/file/d/18cafOI_BKdvfV20spuPD3xcOW-BpxB4X/view?usp=sharing"
//   },
//   {
//     title: "Text To Speech Convertor",
//     slug:"text-to-speech-convertor",
//     description:
//       "A Python-based GUI tool built with Tkinter that converts user-entered text into speech using the pyttsx3 offline TTS engine. The tool supports adjustable speech rate, male/female voice selection, real-time playback, and saving generated audio files locally.",
//     tags: [
//   "Python",
//   "Tkinter",
//   "pyttsx3",
//   "Text-to-Speech",
//   "GUI",
 
// ],
//     category: "Machine Learning",

//     github: "https://github.com/Gargi2275/Text-to-speech-Convertor",
//   },
//   {
//     title: "Medical Chatbot",
//     slug:"medical-chatbot",
//     description:
//       "A medical chatbot trained on a medical book dataset containing disease names, symptoms, precautions, and treatments. It includes local code to run the bot and vector store to store embeddings (likely for information retrieval).",
//     tags: [
//   "AI",
//   "chatbot",
//   "NLP",
//   "medical-AI",
//   "Python",
//   "LLM",
//   "LangChain",
//   "FAISS",
//   "vector-database",
//   "retrieval-augmented-generation",
//   "machine-learning"
// ],
//     category: "Machine Learning",

//     github: "https://github.com/Gargi2275/Medical-chatbot",
//   },
//   {
//     title: "Eye Cursor",
//     slug:"eye-cursor",
//     description:"A real-time eye-controlled cursor system built using OpenCV and MediaPipe Face Landmarker. The system tracks iris movement to control mouse cursor position and detects eye blinks to trigger single and double-click actions. It implements movement smoothing, adaptive blink thresholding, and screen coordinate interpolation for stable and precise hands-free computer interaction.",
//     tags: [ "Python",
//   "OpenCV",
//   "MediaPipe",
//   "Computer Vision",
//   "Face Landmark Detection",
//   "Iris Tracking",
//   "Eye Tracking",
//   "Blink Detection",
//  ],
//     category: "All",

//     github: "https://github.com/Gargi2275/Eye-Cursor",
//   },
//   {
//     title: "Automation and Data Scraping",
//     slug:"data-scraping",
//     description:
//       "A web automation and data scraping system built using Selenium and BeautifulSoup to extract structured business data from Google Local Search results. The script automates browser interaction, navigates through paginated listings, clicks individual business entries, and collects detailed information. Extracted data is stored dynamically into CSV files for further analysis.",
//     tags: ["Python",
//   "Selenium",
//   "BeautifulSoup",
//   "Web Scraping",
//   "Browser Automation",
//   "Google Search Scraper",
//   "Data Extraction",
//   "WebDriver Manager",
//   "Automation Script"],
//     category: "Machine Learning",

//     github: "https://github.com/Gargi2275/Automation-and-Data-Scraping",
//   },
// ]



const projects: Project[] = [
  {
    title: "Flux",
    slug: "flux",
    description:
      "Flux is a Django-based inventory and stock management system designed to manage products, warehouses, and branch-level stock operations. The system supports role-based access control, stock tally tracking, Excel uploads, and exportable reports in PDF and Excel formats. Built using Django REST Framework with support for MySQL databases.",
    tags: [
      "Python",
      "Django",
      "Django REST Framework",
      "Inventory Management System",
      "Stock Management",
      "Role-Based Access Control",
      "MySQL",
      "REST API",
    ],
    category: "Full Stack",
    github: "https://github.com/Gargi2275/Flux",
    demo:
      "https://drive.google.com/file/d/18cafOI_BKdvfV20spuPD3xcOW-BpxB4X/view?usp=sharing",
  },

  {
    title: "Text To Speech Convertor",
    slug: "text-to-speech-convertor",
    description:
      "A Python-based GUI tool built with Tkinter that converts user-entered text into speech using the pyttsx3 offline TTS engine. The tool supports adjustable speech rate, male/female voice selection, real-time playback, and saving generated audio files locally.",
    tags: [
      "Python",
      "Tkinter",
      "pyttsx3",
      "Text-to-Speech",
      "GUI",
    ],
    category: "Machine Learning",
    github:
      "https://github.com/Gargi2275/Text-to-speech-Convertor",

    // 🔴 REPLACE FILE_ID with your actual Drive video ID
    demo:
      "https://drive.google.com/file/d/18cafOI_BKdvfV20spuPD3xcOW-BpxB4X/view?usp=sharing",
  },

  {
    title: "Medical Chatbot",
    slug: "medical-chatbot",
    description:
      "A medical chatbot trained on a medical book dataset containing disease names, symptoms, precautions, and treatments. It includes local code to run the bot and vector store to store embeddings.",
    tags: [
      "AI",
      "chatbot",
      "NLP",
      "medical-AI",
      "Python",
      "LLM",
      "LangChain",
      "FAISS",
      "vector-database",
      "retrieval-augmented-generation",
      "machine-learning",
    ],
    category: "Machine Learning",
    github:
      "https://github.com/Gargi2275/Medical-chatbot",
  },

  {
    title: "Eye Cursor",
    slug: "eye-cursor",
    description:
      "A real-time eye-controlled cursor system built using OpenCV and MediaPipe Face Landmarker. The system tracks iris movement to control mouse cursor position and detects eye blinks to trigger single and double-click actions.",
    tags: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Computer Vision",
      "Face Landmark Detection",
      "Iris Tracking",
      "Eye Tracking",
      "Blink Detection",
    ],
    category: "Machine Learning",
    github:
      "https://github.com/Gargi2275/Eye-Cursor",

    // 🔴 REPLACE FILE_ID
    demo:
      "https://drive.google.com/file/d/1jc_k5td8yiyYNDiLu0LuuCAhkDrA75aC/view?usp=sharing",
  },

  {
    title: "Automation and Data Scraping",
    slug: "data-scraping",
    description:
      "A web automation and data scraping system built using Selenium and BeautifulSoup to extract structured business data from Google Local Search results.",
    tags: [
      "Python",
      "Selenium",
      "BeautifulSoup",
      "Web Scraping",
      "Browser Automation",
      "Google Search Scraper",
      "Data Extraction",
      "WebDriver Manager",
      "Automation Script",
    ],
    category: "Machine Learning",
    github:
      "https://github.com/Gargi2275/Automation-and-Data-Scraping",

    // 🔴 REPLACE FILE_ID
    demo:
      "https://drive.google.com/file/d/1sSrJXQ3NqbOmuebDkWr873Qnzwx3aiQy/view?usp=sharing",
  },
]


const categories: ProjectCategory[] = [
  "All",
  "Machine Learning",
  "Full Stack",
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useMouseGlow()

  return (
    <div
      ref={cardRef}
      className="spotlight-card group glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Project Header - gradient area */}
      <div className="relative h-44 bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center border-b border-border/40 overflow-hidden text-primary-foreground">
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-20 h-20 rounded-full border border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg border border-primary/10 rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <h3 className="text-xl font-bold text-white px-6 text-center relative z-10">
          {project.title}
        </h3>
      </div>

      {/* Project Body */}
      <div className="p-6">
        <p className="text-sm text-foreground/80 leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
            className="text-[11px] px-2.5 py-1 rounded-lg bg-primary/15 text-primary font-medium border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
<div className="flex items-center gap-4 pt-4 border-t border-border/50">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
  >
    <Github className="h-4 w-4" />
    Code
  </a>

  {/* Demo Link */}
{/* Demo Link */}
{project.slug && (
  <Link
    href={`/projects/${project.slug}`}
    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
  >
    <ExternalLink className="h-4 w-4" />
    Demo
  </Link>
)}
</div>
      </div>
    </div>
  )
}

export function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("All")
  const [ref, visible] = useFadeUp()

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="parallax-section relative py-28 px-6">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="glow-orb glow-orb-accent w-[500px] h-[500px] -bottom-32 left-1/4 animate-pulse-glow" />
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-6xl transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-4xl font-mono text-primary tracking-tight font-bold uppercase mb-4">
            Portfolio
          </span>
          <div className="section-line w-24 mx-auto mb-6" />

          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-5 text-balance tracking-tight">
            My Projects
          </h2>
          {/* <div className="section-line w-24 mx-auto mb-6" /> */}
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-base">
            Here are some of my recent projects. Feel free to explore them and
            check out the code on GitHub.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/Gargi2275"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 border border-border bg-card/50 backdrop-blur-sm text-foreground px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
          >
            <Github className="h-4 w-4" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
