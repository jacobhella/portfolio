"use client";

import { useState } from "react";
import { SliderImage } from "@/app/portfolio-data";
import "@/app/components/components.css";

interface ImageSliderProps {
  slides: SliderImage[];
  background?: string; // shown behind (padded) images; falls back to each slide's own color
}

export function ImageSlider({ slides, background }: ImageSliderProps) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  return (
    <div className="image-slider" style={{ background: background ?? slide.color }}>
      {slide.src ? (
        <img src={slide.src} alt={slide.label} className="image-slider-img" />
      ) : (
        <span className="image-slider-label">{slide.label}</span>
      )}

      {slides.length > 1 && (
        <>
          {([
            { dir: -1, label: "←" },
            { dir: 1, label: "→" },
          ] as const).map(({ dir, label }) => (
            <button
              key={dir}
              onClick={() => setIndex((index + dir + slides.length) % slides.length)}
              className="btn-reset image-slider-arrow"
              style={{ [dir === -1 ? "left" : "right"]: 20 }}
              aria-label={dir === -1 ? "Previous" : "Next"}
            >
              {label}
            </button>
          ))}

          <div className="image-slider-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`btn-reset image-slider-dot ${i === index ? "image-slider-dot--active" : ""}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
