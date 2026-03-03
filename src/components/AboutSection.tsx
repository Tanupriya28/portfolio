import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="section-container">
      <FadeIn>
        <SectionHeading title="About Me" />
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="max-w-3xl mx-auto card-surface rounded-xl p-8 border border-border">
          <p className="text-secondary-foreground leading-relaxed text-base">
            Computer Science graduate with First Class with Distinction from Ramaiah Institute of Technology, Bangalore.
            I have a strong foundation in SQL, Power BI, and Python, with hands-on project experience spanning
            analytics dashboards, sales forecasting, predictive maintenance, and customer churn modeling.
            My research work has been published at IEEE CONECCT 2024 and presented at ICITIIT 2024, IIIT Kottayam.
            I am actively seeking entry-level opportunities in Data Analytics or Machine Learning where I can
            apply my technical skills to solve real-world business problems.
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default AboutSection;
