"use client";

import { useState } from "react";
import { Experience, formatExperienceRange } from "@/app/portfolio-data";

interface ExperienceListProps {
  experiences: Experience[];
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="list-panel">
      {experiences.map((e, i) => (
        <ExperienceRow
          key={e.id}
          experience={e}
          last={i === experiences.length - 1}
          open={openId === e.id}
          onToggle={() => setOpenId((prev) => (prev === e.id ? null : e.id))}
        />
      ))}
    </div>
  );
}

interface ExperienceRowProps {
  experience: Experience;
  last: boolean;
  open: boolean;
  onToggle: () => void;
}

function ExperienceRow({ experience: e, open, onToggle }: ExperienceRowProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      className="btn-reset experience-row list-panel-row"
    >
      <div className="experience-row-header">
        <div>
          <h3 className="experience-row-role">{e.role}</h3>
          <p className="experience-row-company">{e.company}</p>
        </div>

        <div className="experience-row-meta">
          <span className="experience-row-dates">{formatExperienceRange(e)}</span>
          <span className={`experience-row-arrow ${open ? "experience-row-arrow--open" : ""}`}>&gt;</span>
        </div>
      </div>

      {open && <p className="experience-row-description">{e.description}</p>}
    </button>
  );
}
