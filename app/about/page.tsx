"use client";

import { useState } from "react";
import { CLIENTS, TESTIMONIALS} from "@/app/portfolio-data";
import { SectionLabel } from "@/app/components/SectionLabel";
import { TestimonialCard } from "@/app/components/TestimonialCard";
import "@/app/globals.css";
import "@/app/pages.css";

export default function Page() {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const SLIDE_COLORS: string[] = ["#D9D4CB", "#C8D3CF", "#D0CBD9"];
  const SLIDE_LABELS: string[] = ["Studio", "Process", "Field"];

  return (
    <>
      {/* Hero */}
      <section className="section-padding section-hero">
        <div className="layout-container">
          <div className="grid-2col">
            <h1 className="heading-hero heading-hero--span">A bit about Jacob</h1>
            <div className="about-bio">
              <p>I'm Adrienne, a freelance product designer. I like blending creativity with practicality to make ideas come to life. I studied Industrial Design and have worked in many different industries. I make simple and intuitive designs that exceed expectations.</p>
              <p>I enjoy collaborating with clients, treating them as creative partners. Together, we work from the idea stage to making it real.</p>
              <p>In my work, I keep up with new trends and technologies. I create designs that are modern and timeless. I believe in being honest, clear, and making designs that are good for the environment.</p>
            </div>
            <div />
          </div>
        </div>
      </section>

      {/* Image slider */}
      <section className="about-slider-section">
        <div className="layout-container">
          <div className="about-slider" style={{ background: SLIDE_COLORS[slideIndex] }}>
            <span className="about-slider-label">{SLIDE_LABELS[slideIndex]}</span>
            {/* Arrows */}
            {([
              { dir: -1, label: "←" },
              { dir: 1, label: "→" },
            ] as const).map(({ dir, label }) => (
              <button
                key={dir}
                onClick={() => setSlideIndex((slideIndex + dir + 3) % 3)}
                className="btn-reset about-slider-arrow"
                style={{ [dir === -1 ? "left" : "right"]: 20 }}
                aria-label={dir === -1 ? "Previous" : "Next"}
              >
                {label}
              </button>
            ))}
            {/* Dots */}
            <div className="about-slider-dots">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  className={`btn-reset about-slider-dot ${i === slideIndex ? "about-slider-dot--active" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding">
        <div className="layout-container">
          <div className="about-clients-layout">
            <h2 className="heading-section">Clients</h2>
            <div className="about-clients-grid">
              {CLIENTS.map((c) => (
                <div key={c}>
                  {c}
                </div>
              ))}
            </div>
          </div>
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
