import Link from "next/link";
import { PROJECTS, PAGE_PATHS, SERVICES } from "@/app/portfolio-data";
import { WorkCard } from "@/app/components/WorkCard";
import "@/app/home.css";

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding section-hero">
        <div className="layout-container">
          <p className="eyebrow home-hero-eyebrow text-highlight">
            Available for work
          </p>

          <div className="home-hero-grid">
            <h1 className="home-hero-title">
              Developer and Designer
            </h1>

            <p className="body-lede text-highlight">
              I'm a driven, creative and curious developer and designer with a master's degree in Interaction Technology and Design from Umeå University.
              I'm interested in creating beautiful and functional web applications and have experience in both frontend and backend development. 
            </p>

            <div className="home-services text-highlight">
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
          <div className="home-work-header">
            <p className="eyebrow text-highlight">Selected Work</p>
            <Link href={PAGE_PATHS.Work} className="home-view-all text-highlight">
              View all &gt;
            </Link>
          </div>

          <div className="card-grid">
            {PROJECTS.slice(0, 3).map((p) => (
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
                <h2 className="home-about-heading">
                  Solutions that are useful, not just something that looks good.
                </h2>

                <Link href={PAGE_PATHS.About} className="home-about-link">
                  Read more about me &gt;
                </Link>
              </div>
              <div className="home-about-copy">
                <p>
                  I'm from Umeå, Sweden and have studied interaction design and computer science for five years.
                  With my education and experience, I've developed the skills to design intuitive and user-centered applications. 
                </p>
                <p>
                  I have a passion for creating innovative solutions that combine aesthetics with functionality.
                  I also have a strong interest in AI, and I prioritize security and availability when developing applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
