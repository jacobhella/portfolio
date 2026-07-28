import { PROJECTS } from "@/app/portfolio-data";
import { WorkCard } from "@/app/components/WorkCard";
import "@/app/work/work.css";

export default function Page() {
  return (
    <>
      <section className="section-padding section-hero">
        <div className="layout-container">
          <div className="grid-2col grid-2col--spaced">
            <h1 className="heading-hero">Work</h1>

            <p className="body-lede body-lede--end text-highlight">
              Here you can find detailed information about my work, side projects, and designs!
            </p>
          </div>

          <div className="work-grid">
            {PROJECTS.map((p) => <WorkCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
