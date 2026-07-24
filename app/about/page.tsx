import { ABOUT_SLIDES, EXPERIENCES, Experience, TESTIMONIALS, formatExperienceRange } from "@/app/portfolio-data";
import { SectionLabel } from "@/app/components/SectionLabel";
import { TestimonialCard } from "@/app/components/TestimonialCard";
import { ImageSlider } from "@/app/components/ImageSlider";
import "@/app/globals.css";
import "@/app/about/about.css";

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding section-hero">
        <div className="layout-container">
          <div className="grid-2col">
            <h1 className="heading-hero heading-hero--span">A bit about Jacob</h1>
            <div className="about-bio">
              <p>I'm Adrienne, a freelance product designer. I like blending creativity with practicality to make ideas come to life. I studied Industrial Design and have worked in many different industries. I make simple and intuitive designs that exceed expectations.</p>
              <p>I enjoy collaborating with clients, treating them as creative partners. Together, we work from the idea stage to making it real.</p>
              <p>In my work, I keep up with new trends and technologies. I create designs that are modern and timeless. I believe in being honest, clear, and making designs that are good for the environment.</p>
            </div>
            <div />
          </div>
        </div>
      </section>

      {/* Image slider */}
      <section className="about-slider-section">
        <div className="layout-container">
          <ImageSlider slides={ABOUT_SLIDES} />
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding">
        <div className="layout-container">
          <SectionLabel>Experience</SectionLabel>
          <div>
            {EXPERIENCES.map((e, i) => (
              <ExperienceRow key={e.id} experience={e} last={i === EXPERIENCES.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="layout-container">
          <SectionLabel>Testimonials</SectionLabel>
          <div className="card-grid">
            {TESTIMONIALS.map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>
      </section>
    </>
  );
}

interface ExperienceRowProps {
  experience: Experience;
  last: boolean;
}

function ExperienceRow({ experience: e, last }: ExperienceRowProps) {
  return (
    <div className={`experience-row ${last ? "experience-row--last" : ""}`}>
      <div className="experience-row-header">
        <div>
          <h3 className="experience-row-role">{e.role}</h3>
          <p className="experience-row-company">{e.company}</p>
        </div>
        <span className="experience-row-dates">{formatExperienceRange(e)}</span>
      </div>
      <p className="experience-row-description">{e.description}</p>
    </div>
  );
}
