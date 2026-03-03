import { GraduationCap, BadgeCheck } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const CertificationsSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="section-container">
      <FadeIn>
        <SectionHeading title="Certifications" />
      </FadeIn>
      <div className="max-w-3xl mx-auto grid gap-4 md:grid-cols-2">
        <FadeIn delay={0.1}>
          <div className="card-surface rounded-xl border border-border p-5 h-full">
            <div className="flex items-start gap-3">
              <BadgeCheck
                size={20}
                className="text-primary mt-0.5 flex-shrink-0"
              />
              <div>
                <h3 className="font-display font-semibold text-foreground text-sm">
                  Post Graduate Program in Data Science
                </h3>
                <p className="text-muted-foreground text-xs mt-1">
                  Imarticus Learning · 6-month program
                </p>
                <p className="text-muted-foreground text-xs">
                  Completed:February 2026
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="card-surface rounded-xl border border-border p-5 h-full">
            <div className="flex items-start gap-3">
              <BadgeCheck
                size={20}
                className="text-primary mt-0.5 flex-shrink-0"
              />
              <div>
                <h3 className="font-display font-semibold text-foreground text-sm">
                  Microsoft Power BI Data Analyst Professional Certificate
                </h3>
                <p className="text-muted-foreground text-xs mt-1">
                  Microsoft · Coursera, 2024
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const EducationSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <FadeIn>
        <SectionHeading title="Education" />
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="max-w-3xl mx-auto card-surface rounded-xl border border-border p-6">
          <div className="flex items-start gap-3">
            <GraduationCap
              size={22}
              className="text-primary mt-0.5 flex-shrink-0"
            />
            <div>
              <h3 className="font-display font-semibold text-foreground">
                B.E. in Computer Science & Engineering
              </h3>
              <p className="text-secondary-foreground text-sm mt-1">
                Ramaiah Institute of Technology, Bangalore
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                First Class with Distinction · 2020 – 2024
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export { CertificationsSection, EducationSection };
