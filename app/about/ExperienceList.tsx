"use client";

import { useState } from "react";
import { Experience, formatExperienceRange } from "@/app/portfolio-data";
import BorderGlow from "../components/reactbits/BorderGlow";

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
    <BorderGlow
      edgeSensitivity={30}
      glowColor="20 30 30"
      backgroundColor="var(--color60)"
      borderRadius={10}
      glowRadius={50}
      glowIntensity={1}
      coneSpread={10}
      animated={false}
      colors={['var(--color60)', 'var(--color60)', 'var(--color60)']}
    >
      <div className="experience-row">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="btn-reset experience-row-header"
        >
          <div className="experience-row-info">
            <h3 className="experience-row-role">{e.role}</h3>
            <p className="experience-row-company">{e.company}</p>
          </div>

          <span className="experience-row-dates">{formatExperienceRange(e)}</span>

          <span className={`experience-row-arrow row-arrow ${open ? "experience-row-arrow--open" : ""}`}>&gt;</span>
        </button>

        <div className={`experience-row-description-panel ${open ? "experience-row-description-panel--open" : ""}`}>
          <div className="experience-row-description-inner">
            <p className="experience-row-description">{e.description}</p>
          </div>
        </div>
      </div>
    </BorderGlow>
  );
}
