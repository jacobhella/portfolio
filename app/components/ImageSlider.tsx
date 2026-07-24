"use client";

import { useEffect, useRef, useState } from "react";
import { SliderImage } from "@/app/portfolio-data";
import "@/app/components/components.css";

interface ImageSliderProps {
  slides: SliderImage[];
  background?: string; // shown behind (padded) images; falls back to each slide's own color
}

const SWIPE_THRESHOLD = 40;
const WHEEL_THRESHOLD = 10;
const WHEEL_COOLDOWN_MS = 500;

export function ImageSlider({ slides, background }: ImageSliderProps) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const touchStartX = useRef<number | null>(null);
  const wheelLocked = useRef(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goTo = (delta: number) => setIndex((i) => (i + delta + slides.length) % slides.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
    goTo(deltaX < 0 ? 1 : -1);
  };

  // Native (non-passive) listener: React's onWheel is passive by default, so
  // preventDefault() there can't stop the browser's swipe-to-navigate gesture.
  useEffect(() => {
    const el = sliderRef.current;
    if (!el || slides.length <= 1) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return; // vertical scroll, let the page handle it
      e.preventDefault();
      if (Math.abs(e.deltaX) < WHEEL_THRESHOLD || wheelLocked.current) return;
      wheelLocked.current = true;
      goTo(e.deltaX > 0 ? 1 : -1);
      setTimeout(() => { wheelLocked.current = false; }, WHEEL_COOLDOWN_MS);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [slides.length]);

  return (
    <div
      ref={sliderRef}
      className="image-slider"
      style={{ background: background ?? slide.color }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="image-slider-media">
        {slide.src ? (
          <img src={slide.src} alt={slide.label} className="image-slider-img" />
        ) : (
          <span className="image-slider-label">{slide.label}</span>
        )}
      </div>

      {slides.length > 1 && (
        <div className="image-slider-controls">
          <button
            onClick={() => goTo(-1)}
            className="btn-reset image-slider-arrow image-slider-arrow--prev"
            aria-label="Previous"
          >
            &lt;
          </button>

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

          <button
            onClick={() => goTo(1)}
            className="btn-reset image-slider-arrow image-slider-arrow--next"
            aria-label="Next"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
