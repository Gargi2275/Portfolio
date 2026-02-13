"use client"

import { ArrowDown, Github, Linkedin, Twitter, Sparkles } from "lucide-react"
import { useParallax, useFadeUp } from "@/hooks/use-parallax"
import { useState, useEffect } from "react"

function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Primary glow orbs with parallax feel */}
      <div className="glow-orb glow-orb-primary animate-pulse-glow w-[500px] h-[500px] -top-32 -left-32" />
      <div className="glow-orb glow-orb-accent animate-pulse-glow w-[400px] h-[400px] bottom-0 right-0" style={{ animationDelay: "2s" }} />
      <div className="glow-orb glow-orb-primary animate-pulse-glow w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: "1s" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Noise */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-[15%] w-3 h-3 rounded-full border border-primary/30 animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-40 right-[20%] w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-[25%] w-4 h-4 rounded-sm border border-primary/20 rotate-45 animate-float-slow" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-1/3 right-[10%] w-2.5 h-2.5 rounded-full bg-primary/15 animate-float-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-40 right-[30%] w-3 h-3 rounded-full border border-primary/25 animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-[60%] left-[8%] w-2 h-2 bg-primary/10 rotate-45 animate-float-slow" style={{ animationDelay: "3s" }} />
    </div>
  )
}

export function Hero() {
  const parallaxOffset = useParallax(0.15)
  const [ref, visible] = useFadeUp()
const roles = ["Python Developer", "MERN Stack Developer"]

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
    } 
    else if (isDeleting && charIndex > 0) {
      setCharIndex(charIndex - 1)
    } 
    else if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => setIsDeleting(true), 1000)
    } 
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }
  }, typingSpeed)

  return () => clearTimeout(timeout)
}, [charIndex, isDeleting, roleIndex])

  return (
    <section
      id="home"
      className="parallax-section relative min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <FloatingParticles />

      {/* Parallax-shifted content */}
      <div
        ref={ref}
        className={`relative z-10 text-center max-w-3xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
      >
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-primary font-mono text-xs tracking-wider">
            Welcome to my portfolio
          </span>
        </div>
        <div className="flex justify-center mb-6">
  <img
    src="/profile.png"
    alt="Profile"
    className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-xl"
  />
</div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-[1.1] tracking-tight">
          {"Hi, I'm "}
          <span className="relative inline-block">
            <span className="text-primary">Gargi Vanjara</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full" />
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-primary font-semibold mb-12">
  {text}
  <span className="animate-pulse">|</span>
</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            View My Work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 border border-border bg-card/50 backdrop-blur-sm text-foreground px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 active:translate-y-0"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3">
          {[
            { icon: Github, href: "https://github.com/Gargi2275", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Twitter, href: "#", label: "Twitter" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-11 h-11 rounded-xl border border-border bg-card/50 backdrop-blur-sm text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
              aria-label={social.label}
            >
              <social.icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
