"use client"

import { useEffect, useRef, useState } from "react"
import { useFadeUp } from "@/hooks/use-parallax"

interface Skill {
  name: string
  percentage: number
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML/CSS", percentage: 90 },
      { name: "JavaScript", percentage: 85 },
      { name: "React", percentage: 80 },
      { name: "TypeScript", percentage: 70 },
      { name: "Next.js", percentage: 75 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", percentage: 85 },
      { name: "Express", percentage: 80 },
      { name: "MongoDB", percentage: 75 },
      { name: "SQL", percentage: 70 },
      { name: "Python", percentage: 65 },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { name: "Git/GitHub", percentage: 85 },
      { name: "RESTful APIs", percentage: 80 },
      { name: "Data Structures", percentage: 75 },
      { name: "Algorithms", percentage: 70 },
      { name: "Docker", percentage: 60 },
    ],
  },
]

const tools = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "MongoDB",
  "HTML5",
  "CSS3",
  "Python",
]

function SkillBar({ name, percentage }: Skill) {
  const [width, setWidth] = useState(0)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(percentage), 200)
        }
      },
      { threshold: 0.3 },
    )

    if (barRef.current) {
      observer.observe(barRef.current)
    }

    return () => observer.disconnect()
  }, [percentage])

  return (
    <div ref={barRef} className="mb-5 last:mb-0">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-primary font-mono font-medium">
          {percentage}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="shimmer-bar h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  const [ref, visible] = useFadeUp()

  return (
    <section id="skills" className="parallax-section relative py-28 px-6">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="glow-orb glow-orb-primary w-[350px] h-[350px] top-1/4 -right-20 animate-pulse-glow" />
        <div className="glow-orb glow-orb-accent w-[300px] h-[300px] bottom-1/4 -left-20 animate-pulse-glow" style={{ animationDelay: "2s" }} />
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
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance tracking-tight">
            My Skills
          </h2>
          <div className="section-line w-24 mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-base">
            {
              "Here are the technologies and tools I work with. I'm constantly learning and expanding my skill set."
            }
          </p>
        </div>

        {/* Skill Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-7 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-base font-semibold text-foreground mb-6 flex items-center gap-2.5">
                <div className="w-1 h-5 rounded-full bg-primary" />
                {category.title}
              </h3>
              {category.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Languages & Tools */}
        <div className="glass-card rounded-2xl p-8 md:p-10">
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center tracking-tight">
            {"Languages & Tools"}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {tools.map((tool, i) => (
              <div
                key={tool}
                className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-background/60 border border-border/60 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
