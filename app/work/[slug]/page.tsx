import Link from "next/link";
import { notFound } from "next/navigation";
import { PAGE_PATHS, PROJECTS } from "@/app/portfolio-data";
import "@/app/work/work.css";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <section className="section-padding section-hero">
      <div className="layout-container">
        <Link href={PAGE_PATHS.Work} className="work-detail-back">← Back to work</Link>

        <div style={{ background: project.color }} className="work-detail-media" />

        <div className="work-detail-header">
          <h1 className="heading-hero">{project.title}</h1>
          <span className="work-detail-year">{project.year}</span>
        </div>

        <span className="work-card-tag">{project.category}</span>

        <p className="work-detail-desc">{project.desc}</p>
      </div>
    </section>
  );
}
