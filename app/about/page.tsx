import { ABOUT_SLIDES, EXPERIENCES, TESTIMONIALS } from "@/app/portfolio-data";
import { SectionLabel } from "@/app/components/SectionLabel";
import { TestimonialCard } from "@/app/components/TestimonialCard";
import { Carousel } from "@/app/components/Carousel";
import { ExperienceList } from "@/app/about/ExperienceList";
import "@/app/globals.css";
import "@/app/about/about.css";

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding section-hero">
        <div className="layout-container">
          <div className="grid-2col">
            <h1 className="heading-hero heading-hero--span">A bit about me</h1>
            <div className="about-bio">
              <p>I'm Jacob, a... </p>
              <p>I enjoy working with...</p>
              <p>In my work, I keep up with new trends and technologies...</p>
            </div>
            <div />
          </div>
        </div>
      </section>

      {/* Image slider */}
      <section className="about-slider-section">
        <div className="layout-container">
          <Carousel slides={ABOUT_SLIDES} />
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding">
        <div className="layout-container">
          <SectionLabel>Experience</SectionLabel>
          <ExperienceList experiences={EXPERIENCES} />
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
