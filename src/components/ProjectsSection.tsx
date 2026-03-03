import { ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Olist E-Commerce SQL Analytics & Data Modeling",
    description:
      "Comprehensive SQL analysis of Brazilian e-commerce data using advanced queries, CTEs, and window functions to derive actionable business insights.",
    tech: ["MySQL", "Data Modeling", "CTEs", "Window Functions"],
    github: "https://github.com/Tanupriya28/sql-projects/tree/main/olist-sql-analytics",
  },
  {
    title: "Supply Chain Analytics Dashboard",
    description:
      "Interactive Power BI dashboard providing end-to-end visibility into supply chain performance with data modeling and DAX measures.",
    tech: ["Power BI", "DAX", "Data Modeling"],
    github: "https://github.com/Tanupriya28/powerbi-dashboards/tree/main/supply-chain-analytics",
  },
  {
    title: "Customer Retention & Revenue Analytics",
    description:
      "Combined SQL and Power BI solution analyzing customer retention patterns and revenue trends to support data-driven decision-making.",
    tech: ["SQL", "Power BI", "DAX"],
    github: "https://github.com/Tanupriya28/powerbi-dashboards/tree/main/Customer-Retention-Revenue-Dashboard",
  },
  {
    title: "Sales Forecasting using LSTM & ARIMA",
    description:
      "Time-series forecasting application leveraging deep learning (LSTM) and statistical models (ARIMA) with a Flask web interface.",
    tech: ["Python", "TensorFlow", "ARIMA", "Flask"],
    github: "https://github.com/Tanupriya28/applied-ai-ml-systems/tree/main/sales-forecasting-app",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Machine learning pipeline predicting customer churn using Scikit-learn and Artificial Neural Networks for proactive retention strategies.",
    tech: ["Python", "Scikit-learn", "ANN"],
    github: "https://github.com/Tanupriya28/ml-projects/tree/main/customer-churn-prediction",
  },
  {
    title: "Predictive Maintenance System",
    description:
      "IoT-integrated predictive maintenance solution using ESP32 sensor data and ML models to detect equipment anomalies before failure.",
    tech: ["ESP32", "Python", "Machine Learning"],
    github: "https://github.com/Tanupriya28/applied-ai-ml-systems/tree/main/Predictive-Maintenance-System",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="section-container">
      <FadeIn>
        <SectionHeading
          title="Projects"
          subtitle="Hands-on projects in data analytics and machine learning"
        />
      </FadeIn>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.05}>
            <div className="card-surface card-surface-hover rounded-xl border border-border p-6 h-full flex flex-col transition-shadow duration-200">
              <h3 className="font-display font-semibold text-foreground text-base leading-snug mb-2">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-primary/10 px-2 py-1 text-[11px] font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                View on GitHub <ExternalLink size={14} />
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
