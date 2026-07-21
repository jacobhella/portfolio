import React from "react";
import "@/app/components/components.css";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow divider-bottom section-label">
      {children}
    </p>
  );
}