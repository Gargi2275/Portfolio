"use client"

import React from "react"
import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react"
import { useFadeUp } from "@/hooks/use-parallax"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "bhattriya670@gmail.com",
    href: "mailto:bhattriya670@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 XXXXXXXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "India",
    href: null,
  },
]

const socials = [
  { icon: Github, href: "https://github.com/Gargi2275", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [ref, visible] = useFadeUp()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! I will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="parallax-section relative py-28 px-6">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="glow-orb glow-orb-primary w-[450px] h-[450px] top-0 left-1/3 animate-pulse-glow" />
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
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance tracking-tight">
            Get In Touch
          </h2>
          <div className="section-line w-24 mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-base">
            Have a project in mind or want to collaborate? Feel free to reach out
            to me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((item, i) => (
              <div
                key={item.title}
                className="glass-card flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Follow */}
            <div className="glass-card rounded-2xl p-5">
              <h3 className="font-semibold text-foreground text-sm mb-4">
                Follow Me
              </h3>
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-11 h-11 rounded-xl border border-border bg-background/50 text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary/50 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5"
                    aria-label={social.label}
                  >
                    <social.icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card rounded-2xl p-7 md:p-9 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/60 text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/60 text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/60 text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your message here..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/60 text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto justify-center"
            >
              Send Message
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
