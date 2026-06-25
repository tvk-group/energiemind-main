import { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

interface PageHeaderProps {
  title: string;
  intro: string;
  children?: ReactNode;
}

export default function PageHeader({ title, intro, children }: PageHeaderProps) {
  return (
    <section className="gradient-hero text-white">
      <div className="container-max section-padding">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-lg text-silver-200 leading-relaxed">{intro}</p>
          {children}
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-energy-blue via-energy-green to-sun" />
    </section>
  );
}

interface ContentSectionProps {
  title: string;
  text: string;
}

export function ContentSection({ title, text }: ContentSectionProps) {
  return (
    <div className="card mb-6">
      <h2 className="text-xl font-semibold text-navy-900 mb-3">{title}</h2>
      <p className="text-navy-700 leading-relaxed">{text}</p>
    </div>
  );
}

export function BackLink({ label }: { label: string }) {
  return (
    <div className="mt-10">
      <Link href="/" className="text-energy-blue hover:text-energy-blue-light transition-colors">
        ← {label}
      </Link>
    </div>
  );
}
