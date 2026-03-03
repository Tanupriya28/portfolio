import { Github, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="border-t border-border bg-secondary/20 py-8">
    <div className="section-container">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <p className="text-muted-foreground text-sm">
          © 2026 Tanupriya R. All rights reserved.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-4">
          {footerLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Tanupriya28" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/tanupriya-r/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:tanu.priya28042@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
