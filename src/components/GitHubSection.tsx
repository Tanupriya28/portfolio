import { Github, Star, ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const repos = [
  {
    name: "sql-projects",
    description: "SQL analytics projects including e-commerce data modeling and insights",
    tech: ["MySQL", "SQL"],
  },
  {
    name: "powerbi-dashboards",
    description: "Interactive Power BI dashboards for supply chain and revenue analytics",
    tech: ["Power BI", "DAX"],
  },
  {
    name: "applied-ai-ml-systems",
    description: "Applied ML systems including sales forecasting and predictive maintenance",
    tech: ["Python", "TensorFlow", "Flask"],
  },
];

const GitHubSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="section-container">
      <FadeIn>
        <SectionHeading
          title="Explore My Code on GitHub"
          subtitle="Browse additional repositories, experiments, and implementation details"
        />
      </FadeIn>
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        {repos.map((r, i) => (
          <FadeIn key={r.name} delay={i * 0.1}>
            <div className="card-surface rounded-xl border border-border p-5 h-full">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Github size={16} className="text-muted-foreground" />
                  <span className="font-medium text-sm text-primary">{r.name}</span>
                </div>
                <Star size={14} className="text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed mb-3">{r.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {r.tech.map((t) => (
                  <span key={t} className="rounded bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.3}>
        <div className="text-center">
          <a
            href="https://github.com/Tanupriya28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
          >
            <Github size={16} />
            Visit GitHub Profile
            <ExternalLink size={14} />
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default GitHubSection;
