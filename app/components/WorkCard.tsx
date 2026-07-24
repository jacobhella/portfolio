import Link from "next/link";
import { Project } from "@/app/portfolio-data";
import "@/app/components/components.css";

interface WorkCardProps {
  project: Project;
}

export function WorkCard({ project: p }: WorkCardProps) {
  return (
    <Link href={`/work/${p.slug}`} className="work-card">

      <div style={{ background: p.color }} className="work-card-media">
        <span className="work-card-category-badge">
          {p.category}
        </span>

        <div className="work-card-badge">
          <span className="work-card-badge-arrow">↗</span>
        </div>
      </div>

      <div className="work-card-body">
        <div className="work-card-title-row">
          <h3 className="work-card-title">
            {p.title}
          </h3>
          <span className="work-card-year">
            {p.year}
          </span>
        </div>

        <p className="work-card-desc">
          {p.desc}
        </p>

        <span className="work-card-tag">
          {p.category}
        </span>
      </div>

    </Link>
  );
}