import { Testimonial } from "@/app/portfolio-data";
import "@/app/components/components.css";

interface TestimonialCardProps {
  t: Testimonial;
}

export function TestimonialCard({ t }: TestimonialCardProps) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-quote">"{t.quote}"</p>
      <div className="testimonial-meta">
        <div className="testimonial-avatar" style={{ background: t.bg }}>{t.initials}</div>
        <div>
          <p className="testimonial-name">{t.name}</p>
          <p className="testimonial-role">{t.role}</p>
        </div>
      </div>
    </div>
  );
}