"use client"

import {
  ArrowDown,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
  Download,
  PlayCircle,
} from "lucide-react"
import { useParallax, useFadeUp } from "@/hooks/use-parallax"
import { useState, useEffect } from "react"

function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="glow-orb glow-orb-primary animate-pulse-glow w-[500px] h-[500px] -top-32 -left-32" />
      <div
        className="glow-orb glow-orb-accent animate-pulse-glow w-[400px] h-[400px] bottom-0 right-0"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="glow-orb glow-orb-primary animate-pulse-glow w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ animationDelay: "1s" }}
      />

      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 noise-overlay" />
    </div>
  )
}

export function Hero() {
  const parallaxOffset = useParallax(0.15)
  const [ref, visible] = useFadeUp()

  const roles = ["Python Developer", "Full Stack Developer"]

  const [text, setText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typingSpeed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
      setText(currentRole.substring(0, charIndex))

      if (!isDeleting && charIndex < currentRole.length) {
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1200)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 py-16"
    >
      <FloatingParticles />

      <div
        ref={ref}
        className={`relative z-10 text-center max-w-3xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
      >
        {/* Welcome Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-primary font-mono text-xs tracking-wider">
            Welcome to my portfolio
          </span>
        </div>

        {/* Profile */}
        <div className="flex justify-center mb-8">
          <img
            src="/profile.png"
            alt="Gargi Vanjara"
            className="w-36 h-36 rounded-full object-cover border-4 border-primary/40 shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
          Hi, I'm{" "}
          <span className="relative inline-block text-primary">
            Gargi Vanjara
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full" />
          </span>
        </h1>

        {/* Typing Role */}
        <p className="text-xl md:text-2xl text-primary font-semibold mb-10">
          {text}
          <span className="animate-pulse">|</span>
        </p>

      {/* Primary CTAs */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
  {/* View My Work – refined primary */}
  <a
    href="#projects"
    className="group inline-flex items-center justify-center gap-2.5
    px-8 py-3.5 rounded-xl text-sm font-semibold
    border border-primary/50 text-primary
    bg-primary/5
    transition-all duration-300
    hover:bg-primary/10 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg"
  >
    View My Work
    <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
  </a>

  {/* Contact Me */}
  <a
    href="#contact"
    className="group inline-flex items-center justify-center gap-2.5
    px-8 py-3.5 rounded-xl text-sm font-semibold
    border border-border text-foreground
    bg-card/60 backdrop-blur-sm
    transition-all duration-300
    hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-lg"
  >
    Contact Me
  </a>
</div>

{/* Resume Section */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-sm">
  <a
    href="/Gargi_Vanjara_Resume.pdf"
    download
    className="group inline-flex items-center gap-2
    text-foreground font-medium
    transition-all duration-300 hover:text-primary hover:gap-3"
  >
    <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
    Download Resume
  </a>

  <span className="hidden sm:block w-px h-4 bg-border" />

<a 
   href="https://drive.google.com/file/d/1WW8OoTzcNP7qJ8QveNcaMWXF5CW748zj/view?usp=sharing" 
   target="_blank" rel="noopener noreferrer" 
   className="group inline-flex items-center gap-2 text-foreground font-medium transition-all duration-300 hover:text-primary hover:gap-3" > 
   <PlayCircle className="h-4 w-4 transition-transform group-hover:scale-110" /> Watch Video Resume </a>
</div>
        {/* Social Links */}
        <div className="flex items-center justify-center gap-5">
          {[
            { icon: Github, href: "https://github.com/Gargi2275" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/gargi-vanjara-b81056306" },
            // { icon: Twitter, href: "#" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-11 h-11 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5"
            >
              <social.icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
