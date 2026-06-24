import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-max">{children}</div>
    </section>
  );
}
