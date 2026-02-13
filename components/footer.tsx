import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
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
    <footer className="relative border-t border-border/50 bg-card/60 backdrop-blur-sm px-6 pt-16 pb-10">
      <div className="absolute top-0 left-0 right-0 section-line opacity-30" />

      <div className="mx-auto max-w-6xl">
        {/* Top footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-border/40">
          
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              Gargi Vanjara
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              A passionate Web Developer from India specializing in building modern,
              responsive and user-friendly web applications.
            </p>

            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-background/50 text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary/50 hover:shadow-md hover:shadow-primary/10"
                  aria-label={social.label}
                >
                  <social.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
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
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>vanjaragargi@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 XXXXXXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gargi Vanjara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
