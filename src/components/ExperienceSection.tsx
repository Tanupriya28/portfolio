import { Briefcase } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Front-End Developer Intern",
    company: "Josys",
    period: "December 2024 – May 2025",
    description:
      "Improved UI responsiveness and implemented feature updates in a SaaS product using React, HTML, and JavaScript.",
  },
  {
    role: "Web Development Intern",
    company: "MachIT",
    period: "January 2024 – April 2024",
    description:
      "Developed interactive frontend pages using HTML, CSS, and JavaScript for a quiz-based web app.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-secondary/30">
    <div className="section-container">
      <FadeIn>
        <SectionHeading title="Internship Experience" />
      </FadeIn>
      <div className="max-w-3xl mx-auto space-y-4">
        {experiences.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="card-surface rounded-xl border border-border p-6">
              <div className="flex items-start gap-3">
                <Briefcase size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-display font-semibold text-foreground text-sm">
                    {exp.role}
                  </h3>
                  <p className="text-primary text-xs font-medium mt-0.5">{exp.company}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{exp.period}</p>
                  <p className="text-secondary-foreground text-sm mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
