"use client";

import { useEffect, useRef, useState } from "react";
import { motion, PanInfo, useMotionValue, useTransform } from "motion/react";
import { CarouselImage } from "@/app/portfolio-data";
import "@/app/components/components.css";

interface CarouselProps {
  slides: CarouselImage[];
  background?: string; // shown behind (padded) images; falls back to each slide's own color
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
}

const DRAG_BUFFER = 40;
const VELOCITY_THRESHOLD = 500;
const SPRING_OPTIONS = { type: "spring" as const, stiffness: 300, damping: 30 };
const TILT_DEGREES = 30;
const WHEEL_THRESHOLD = 10;
const WHEEL_COOLDOWN_MS = 500;

interface SlideItemProps {
  slide: CarouselImage;
  index: number;
  itemWidth: number;
  x: any;
}

function SlideItem({ slide, index, itemWidth, x }: SlideItemProps) {
  const range = [-(index + 1) * itemWidth, -index * itemWidth, -(index - 1) * itemWidth];
  const rotateY = useTransform(x, range, [TILT_DEGREES, 0, -TILT_DEGREES], { clamp: false });

  return (
    <motion.div className="carousel-item" style={{ width: itemWidth, rotateY }} transition={SPRING_OPTIONS}>
      {slide.src ? (
        <img src={slide.src} alt={slide.label} className="carousel-img" />
      ) : (
        <span className="carousel-label">{slide.label}</span>
      )}
    </motion.div>
  );
}

export function Carousel({ slides, background, autoplay = false, autoplayDelay = 3500, pauseOnHover = true }: CarouselProps) {
  const hasMultiple = slides.length > 1;
  const lastIndex = slides.length - 1;

  const [position, setPosition] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const wheelLocked = useRef(false);
  const isAnimatingRef = useRef(false);

  const clamp = (p: number) => Math.max(0, Math.min(p, lastIndex));

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => setItemWidth(entry.contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoplay || !hasMultiple) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      if (isAnimatingRef.current) return;
      setPosition((p) => (p >= lastIndex ? 0 : p + 1));
    }, autoplayDelay);
    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, hasMultiple, lastIndex]);

  // Native (non-passive) listener: React's onWheel is passive by default, so
  // preventDefault() there can't stop the browser's swipe-to-navigate gesture.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !hasMultiple) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return; // vertical scroll, let the page handle it
      e.preventDefault();
      if (Math.abs(e.deltaX) < WHEEL_THRESHOLD || wheelLocked.current || isAnimatingRef.current) return;
      wheelLocked.current = true;
      setPosition((p) => clamp(p + (e.deltaX > 0 ? 1 : -1)));
      setTimeout(() => { wheelLocked.current = false; }, WHEEL_COOLDOWN_MS);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMultiple]);

  const stopAnimating = () => {
    isAnimatingRef.current = false;
    setIsAnimating(false);
  };

  const handleAnimationStart = () => {
    isAnimatingRef.current = true;
    setIsAnimating(true);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    if (isAnimatingRef.current) return;
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;
    setPosition((p) => clamp(p + direction));
  };

  const goPrev = () => {
    if (isAnimatingRef.current) return;
    setPosition((p) => clamp(p - 1));
  };

  const goNext = () => {
    if (isAnimatingRef.current) return;
    setPosition((p) => clamp(p + 1));
  };

  const currentSlide = slides[position];

  return (
    <div
      ref={containerRef}
      className="carousel"
      style={{ background: background ?? currentSlide.color }}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      <motion.div
        ref={trackRef}
        className="carousel-track"
        drag={hasMultiple && !isAnimating ? "x" : false}
        dragConstraints={{ left: -lastIndex * itemWidth, right: 0 }}
        dragElastic={0.2}
        style={{ x, perspective: 1000, perspectiveOrigin: `${position * itemWidth + itemWidth / 2}px 50%` }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * itemWidth) }}
        transition={SPRING_OPTIONS}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={stopAnimating}
      >
        {slides.map((slide, i) => (
          <SlideItem key={`${slide.label}-${i}`} slide={slide} index={i} itemWidth={itemWidth} x={x} />
        ))}
      </motion.div>

      {hasMultiple && (
        <div className="carousel-controls">
          <button
            onClick={goPrev}
            disabled={position === 0}
            className="btn-reset carousel-arrow carousel-arrow--prev"
            aria-label="Previous"
          >
            &lt;
          </button>

          <div className="carousel-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setPosition(i)}
                className={`btn-reset carousel-dot ${i === position ? "carousel-dot--active" : ""}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={position === lastIndex}
            className="btn-reset carousel-arrow carousel-arrow--next"
            aria-label="Next"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
