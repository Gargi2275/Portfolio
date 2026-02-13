"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { useFadeUp, useMouseGlow } from "@/hooks/use-parallax"

type ProjectCategory = "All" | "Frontend" | "Backend" | "Full Stack"

interface Project {
  title: string
  description: string
  tags: string[]
  category: ProjectCategory
}

const projects: Project[] = [
  {
    title: "CustomCraze",
    description:
      "An item customization platform where users personalize products with templates, custom text, uploaded logos, and AI-generated images. Shopkeepers can manage stores, products, templates, orders, and track sales online.",
    tags: ["React", "Django", "Fabric.js", "Bootstrap", "JavaScript", "Python"],
    category: "Full Stack",
  },
  {
    title: "Diet Recommendation System",
    description:
      "A personalized diet recommendation system offering daily, weekly, and monthly plans. Includes recipe search, health tracking, and profile management for tailored nutrition experiences.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Bootstrap",
      "JavaScript",
    ],
    category: "Full Stack",
  },
  {
    title: "SmartFinance Advisor",
    description:
      "A personal finance management platform that provides onboarding insights, tracks and categorizes transactions, extracts bill amounts via OCR, and recommends investment strategies.",
    tags: [
      "React.js",
      "Django",
      "PostgreSQL",
      "RabbitMQ",
      "Kafka",
      "Redux Toolkit",
      "JavaScript",
      "Python",
    ],
    category: "Full Stack",
  },
  {
    title: "Pennywise",
    description:
      "A personal finance platform for tracking expenses and setting savings goals, built with React.js, Node.js, and Serverless APIs.",
    tags: ["React.js", "Node.js", "Serverless API", "Tailwind CSS"],
    category: "Full Stack",
  },
  {
    title: "Lead Management CRM",
    description:
      "A CRM platform designed to capture, track, and nurture sales leads across multiple channels with real-time reporting, email integration, and issue tracking.",
    tags: ["React", "Django", "JavaScript", "Python"],
    category: "Full Stack",
  },
  {
    title: "TastyTrail",
    description:
      "A comprehensive food delivery application with user authentication, order tracking, and an admin dashboard for restaurant management.",
    tags: [
      "React",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Bootstrap",
      "JavaScript",
    ],
    category: "Full Stack",
  },
  {
    title: "Startup-Diary",
    description:
      "Implemented a brand strategy project at Startup Diary focused on defining core values and market positioning through tailored inquiries and discussions.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "JSON"],
    category: "Frontend",
  },
]

const categories: ProjectCategory[] = [
  "All",
  "Frontend",
  "Backend",
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
      <div className="relative h-44 bg-gradient-to-br from-primary/8 via-primary/3 to-transparent flex items-center justify-center border-b border-border/50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-20 h-20 rounded-full border border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg border border-primary/10 rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <h3 className="text-xl font-bold text-foreground px-6 text-center relative z-10">
          {project.title}
        </h3>
      </div>

      {/* Project Body */}
      <div className="p-6">
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-primary/8 text-primary font-medium border border-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-border/50">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
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
          <span className="inline-block text-xs font-mono text-primary tracking-widest uppercase mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance tracking-tight">
            My Projects
          </h2>
          <div className="section-line w-24 mx-auto mb-6" />
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
