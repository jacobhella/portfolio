import { ABOUT_SLIDES, EXPERIENCES, TESTIMONIALS } from "@/app/portfolio-data";
import { SectionLabel } from "@/app/components/SectionLabel";
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
          <div className="about-hero-grid">
            <h1 className="heading-hero heading-hero--span">A bit about me</h1>
            <div className="body-lede text-highlight">
              <p>I'm Jacob, a developer and designer with a master's degree in Interaction Technology and Design. I have a great interest in computer science, and during my thesis project at Oryx Simulations I have learned how to work efficiently in agile development teams.</p>
              <p>I enjoy working with others in a collaborative and social environment.</p>
              <p>In my work, I keep up with new trends and technologies to create smart and engaging user experiences. I'm excited to build on what I have already learned and continue growing professionally!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="about-carousel-section">
        <div className="layout-container">
          <Carousel slides={ABOUT_SLIDES} autoplay />
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding">
        <div className="layout-container">
          <SectionLabel>Experience</SectionLabel>
          <ExperienceList experiences={EXPERIENCES} />
        </div>
      </section>
    </>
  );
}
