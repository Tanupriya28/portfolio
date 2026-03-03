import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState, FormEvent } from "react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:tanu.priya28042@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <FadeIn>
          <SectionHeading title="Get in Touch" subtitle="Feel free to reach out for opportunities or collaboration" />
        </FadeIn>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <h3 className="font-display font-semibold text-foreground text-lg">Contact Info</h3>
              <div className="space-y-4">
                <a
                  href="mailto:tanu.priya28042@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail size={18} />
                  tanu.priya28042@gmail.com
                </a>
                <a
                  href="https://github.com/Tanupriya28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Github size={18} />
                  github.com/Tanupriya28
                </a>
                <a
                  href="https://www.linkedin.com/in/tanupriya-r/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Linkedin size={18} />
                  linkedin.com/tanupriya-r
                </a>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                className="w-full rounded-lg border border-border bg-muted px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                className="w-full rounded-lg border border-border bg-muted px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                className="w-full rounded-lg border border-border bg-muted px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
