import { PROJECTS, PageName, SERVICES, TESTIMONIALS } from "../portfolio-data";
import { WorkCard } from "@/app/components/WorkCard";
import { TestimonialCard } from "@/app/components/TestimonialCard";
import { SectionLabel } from "@/app/components/SectionLabel";
import "@/app/pages/pages.css";

interface PageProps {
  navigate: (page: PageName) => void;
}

export function HomePage({ navigate }: PageProps) {
  return (
    <>
      {/* Hero */}
      <section className="section-padding section-hero">
        <div className="layout-container">
          <p className="eyebrow home-hero-eyebrow">
            Available for work · 2026
          </p>

          <div className="home-hero-grid">
            <h1 className="home-hero-title">
              Interaction designer and developer
            </h1>

            <p className="body-lede">
              I have experienced something cool!
            </p>

            <div className="home-services">
              {SERVICES.map((s) => (
                <div key={s.num} className="home-services-row">
                  <span className="home-service-num">{s.num}</span>
                  <span className="home-service-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="section-padding">
        <div className="layout-container">
          <div className="divider-bottom home-work-header">
            <p className="eyebrow">Selected Work</p>
            <button onClick={() => navigate("Work")} className="btn-reset home-view-all">View all →</button>
          </div>

          <div className="card-grid">
            {PROJECTS.slice(0, 4).map((p) => (
              <WorkCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="home-about-section">
        <div className="panel-dark home-about-panel">
          <div className="home-about-grid">
            <div>
              <p className="eyebrow eyebrow--on-dark home-about-eyebrow">About</p>

              <h2 className="home-about-heading">
                Design that does something — not just something that looks good.
              </h2>

              <button onClick={() => navigate("About")} className="btn-reset home-about-link">
                Read more about me →
              </button>
            </div>
            <div className="home-about-copy">
              <p>I'm based in London, working with founders and product teams across Europe and the US. My practice sits at the intersection of research, systems thinking, and craft.</p>

              <p>Before going independent, I led design at two VC-backed startups and a consultancy. I believe the best products are the ones you don't have to think about.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="layout-container">
          <SectionLabel>Kind Words</SectionLabel>
          
          <div className="card-grid">
            {TESTIMONIALS.slice(0, 2).map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}