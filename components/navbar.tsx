"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

function Logo() {
  return (
    <a href="#home" className="group flex items-center gap-2.5">
      {/* Elegant geometric logo mark */}
      <div className="relative flex items-center justify-center w-9 h-9">
        <div className="absolute inset-0 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
        <div className="absolute inset-[3px] rounded-md border-2 border-primary/60 group-hover:border-primary transition-colors duration-300" />
        <span className="relative text-sm font-bold text-primary font-mono tracking-tight">
          GV
        </span>
      </div>
      <div className="hidden sm:flex flex-col leading-none">
        <span className="text-sm font-semibold text-foreground tracking-tight">
          Gargi Vanjara
        </span>
        <span className="text-[10px] font-medium text-muted-foreground tracking-widest uppercase">
          Developer
        </span>
      </div>
    </a>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9" />
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-card text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary/50 hover:shadow-md hover:shadow-primary/5"
      aria-label="Toggle theme"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
    </button>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 bg-background/80 backdrop-blur-xl shadow-lg shadow-background/20 border-b border-border/50"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6">
        <Logo />

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "")
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right side: theme toggle + mobile toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-border text-foreground transition-all hover:border-primary/50"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-xl border-t border-border/50 mt-2">
          <ul className="flex flex-col items-center gap-1 py-6 px-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "")
              return (
                <li key={link.href} className="w-full">
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-center py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
