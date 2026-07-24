import Link from "next/link";
import { PROJECTS, PAGE_PATHS, SERVICES, TESTIMONIALS } from "@/app/portfolio-data";
import { WorkCard } from "@/app/components/WorkCard";
import { TestimonialCard } from "@/app/components/TestimonialCard";
import { SectionLabel } from "@/app/components/SectionLabel";
import "@/app/home.css";

export default function Page() {
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
            <Link href={PAGE_PATHS.Work} className="home-view-all">View all →</Link>
          </div>

          <div className="card-grid">
            {PROJECTS.slice(0, 4).map((p) => (
              <WorkCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="section-padding">
        <div className="layout-container">
          <div className="panel-accent">
            <div className="home-about-grid">
              <div>
                <p className="eyebrow home-about-eyebrow">About</p>

                <h2 className="home-about-heading">
                  Design that does something — not just something that looks good.
                </h2>

                <Link href={PAGE_PATHS.About} className="home-about-link">
                  Read more about me →
                </Link>
              </div>
              <div className="home-about-copy">
                <p>I'm based in London, working with founders and product teams across Europe and the US. My practice sits at the intersection of research, systems thinking, and craft.</p>

                <p>Before going independent, I led design at two VC-backed startups and a consultancy. I believe the best products are the ones you don't have to think about.</p>
              </div>
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
