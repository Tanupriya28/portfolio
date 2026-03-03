import { Database, Brain, Wrench } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    title: "Data Analytics",
    icon: Database,
    skills: ["SQL", "Power BI", "Excel", "Data Visualization", "Dashboard Development", "DAX"],
  },
  {
    title: "Machine Learning",
    icon: Brain,
    skills: ["Python", "Scikit-learn", "LSTM", "ARIMA", "XGBoost", "ANN"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["MySQL", "Flask", "Git & GitHub", "Google Colab", "ESP32 (IoT)"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-secondary/30">
    <div className="section-container">
      <FadeIn>
        <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />
      </FadeIn>
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <FadeIn key={group.title} delay={i * 0.1}>
            <div className="card-surface card-surface-hover rounded-xl border border-border p-6 h-full transition-shadow duration-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <group.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
