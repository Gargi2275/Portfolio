"use client"

import { Code2, Server, Layers, Rocket, Sprout, Users } from "lucide-react"
import { useFadeUp, useMouseGlow } from "@/hooks/use-parallax"

const services = [
  {
    icon: Code2,
    title: "Front--end Development",
    description:
      "Creating responsive and interactive user interfaces with modern frameworks and libraries.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Building robust server-side applications and APIs to power your web applications.",
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    description:
      "End-to-end development solutions from database design to user interface implementation.",
  },
]

const journey = [
  {
    icon: Rocket,
    title: "Frontend and Backend Development",
    description:
      "Working on creating complete web solutions from UI design to server implementation.",
  },
  {
    icon: Sprout,
    title: "Learning TypeScript and Next.js",
    description:
      "Expanding my skill set with modern technologies for better development workflows.",
  },
  {
    icon: Users,
    title: "Looking to Collaborate",
    description:
      "Interested in working on web development projects and open source contributions.",
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const cardRef = useMouseGlow()

  return (
    <div
      ref={cardRef}
      className="spotlight-card group glass-card rounded-2xl p-8 text-center transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6 transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-110">
        <service.icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-3">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {service.description}
      </p>
    </div>
  )
}

export function About() {
  const [ref, visible] = useFadeUp()

  return (
    <section id="about" className="parallax-section relative py-28 px-6">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="glow-orb glow-orb-primary w-[400px] h-[400px] top-0 right-0 animate-pulse-glow" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-6xl transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono text-primary tracking-widest uppercase mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance tracking-tight">
            Crafting Digital Experiences
          </h2>
          <div className="section-line w-24 mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-base">
            A passionate Web Developer from India with expertise in frontend and
            backend technologies. I enjoy building web applications and
            contributing to open source projects.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* My Journey */}
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 rounded-full bg-primary" />
            <h3 className="text-2xl font-bold text-foreground tracking-tight">
              My Journey
            </h3>
          </div>
          <div className="space-y-4 mb-10 max-w-3xl">
            <p className="text-muted-foreground leading-relaxed">
              {
                "I'm currently working on both frontend and backend development, with a focus on creating seamless user experiences and robust application architectures."
              }
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {
                "I'm learning TypeScript and Next.js to enhance my development skills and build more efficient and type-safe applications."
              }
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {
                "I'm passionate about open source contribution and looking to collaborate on web development projects. Feel free to reach out if you have an interesting project in mind!"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {journey.map((item, i) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-xl bg-background/50 border border-border/50 transition-all duration-300 hover:border-primary/30 hover:bg-background/80"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
