import { Github, Linkedin, Mail, Download } from "lucide-react";
import FadeIn from "./FadeIn";

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center"
    style={{ background: "var(--gradient-hero)" }}
  >
    <div className="section-container text-center pt-16">
      <FadeIn>
        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
          Welcome to my portfolio
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
          Tanupriya R
        </h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="mt-4 text-xl sm:text-2xl font-display font-medium text-gradient">
          Aspiring Data Analyst | Machine Learning & Analytics
        </p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Computer Science graduate passionate about data analytics and machine
          learning. I build structured, data-driven solutions that transform raw
          data into meaningful insights and predictive models.
        </p>
      </FadeIn>
      <FadeIn delay={0.4}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
          >
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1LFZ6oMT0kADIopsnqf5IyoF-gsSexn6Q/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors duration-200 hover:bg-secondary/80"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </FadeIn>
      <FadeIn delay={0.5}>
        <div className="mt-8 flex items-center justify-center gap-5">
          <a
            href="https://github.com/Tanupriya28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/tanupriya-r/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:tanu.priya28042@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default HeroSection;
