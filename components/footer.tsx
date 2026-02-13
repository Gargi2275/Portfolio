import { Github, Linkedin, Twitter, Heart } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

const socials = [
  { icon: Github, href: "https://github.com/Gargi2275", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-card/50 backdrop-blur-sm py-12 px-6">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 right-0 section-line opacity-30" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-2.5">
            <div className="relative flex items-center justify-center w-9 h-9">
              <div className="absolute inset-0 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
              <div className="absolute inset-[3px] rounded-md border-2 border-primary/60 group-hover:border-primary transition-colors duration-300" />
              <span className="relative text-sm font-bold text-primary font-mono tracking-tight">
                GV
              </span>
            </div>
            <span className="text-sm font-semibold text-foreground tracking-tight">
              Gargi Vanjara
            </span>
          </a>

          {/* Nav links */}
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social links */}
          <div className="flex items-center gap-2.5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-border text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary/50 hover:shadow-md hover:shadow-primary/5"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
            {"Made with"}
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
            {"by Gargi Vanjara"}
          </p>
        </div>
      </div>
    </footer>
  )
}
