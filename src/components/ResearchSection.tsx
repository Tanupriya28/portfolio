import { Award, BookOpen } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const items = [
  {
    icon: BookOpen,
    title: "Enhance Fault Identification in Rotary Equipment Using Machine Learning Algorithms",
    venue: "Presented at ICITIIT 2024, IIIT Kottayam",
  },
  {
    icon: BookOpen,
    title: "Anomaly Detection in Rotary Equipment Using Hybrid Model with HGSO Optimization",
    venue: "Published at IEEE CONECCT 2024",
  },
  {
    icon: Award,
    title: "Top 3 – National Level Data Science Blogathon",
    venue: "Imarticus Learning",
  },
];

const ResearchSection = () => (
  <section id="research" className="section-padding">
    <div className="section-container">
      <FadeIn>
        <SectionHeading title="Research & Achievements" />
      </FadeIn>
      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-6">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex gap-4 md:pl-12 relative">
                <div className="hidden md:flex absolute left-0 h-10 w-10 items-center justify-center rounded-full bg-primary/10 border border-border z-10">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div className="md:hidden flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 border border-border">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div className="card-surface rounded-xl border border-border p-5 flex-1">
                  <h3 className="font-display font-semibold text-foreground text-sm leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">{item.venue}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ResearchSection;
