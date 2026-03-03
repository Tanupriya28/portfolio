import { Award, BookOpen } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const items = [
  {
    icon: BookOpen,
    title:
      "Enhance Fault Identification in Rotary Equipment Using Machine Learning Algorithms",
    venue: "Presented at ICITIIT 2024, IIIT Kottayam",
  },
  {
    icon: BookOpen,
    title:
      "Anomaly Detection in Rotary Equipment Using Hybrid Model with HGSO Optimization",
    venue: "Published at IEEE CONECCT 2024",
  },
  {
    icon: Award,
    title: "Top 3 – National Level Data Science Blogathon",
    venue: "Imarticus Learning",
    articleTitle:
      "Justice One Step Closer: Using Data Science to Detect Anomalies in Forensic Cases",
    link: "https://medium.com/@tanu.priya28042/justice-one-step-closer-using-data-science-to-detect-anomalies-in-forensic-cases-4a3dfa1975a7",
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

                  {/* Show article title if present */}
                  {item.articleTitle && (
                    <p className="text-muted-foreground text-xs italic mt-1">
                      {item.articleTitle}
                    </p>
                  )}

                  {/* Show link if present */}
                  {item.link && (
                    <div className="mt-2">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-xs underline hover:opacity-80 transition"
                      >
                        Read Article →
                      </a>
                    </div>
                  )}
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
