interface PillarCardProps {
  icon: string;
  colorClass: string;
  title: string;
  description: string;
}

export default function PillarCard({ icon, colorClass, title, description }: PillarCardProps) {
  return (
    <div className="card group">
      <div className={`pillar-icon ${colorClass}`}>{icon}</div>
      <h3 className="text-xl font-semibold text-navy-900 mb-2">{title}</h3>
      <p className="text-silver-400 leading-relaxed">{description}</p>
    </div>
  );
}
