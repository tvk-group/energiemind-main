interface EcosystemLayerProps {
  name: string;
  role: string;
  highlight?: boolean;
}

export default function EcosystemLayer({ name, role, highlight }: EcosystemLayerProps) {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
        highlight
          ? "bg-energy-blue/5 border-energy-blue/30 shadow-sm"
          : "bg-white border-silver-200"
      }`}
    >
      <div className="flex items-center gap-3">
        {highlight && (
          <span className="w-2 h-2 bg-energy-blue rounded-full" />
        )}
        <span className={`font-semibold ${highlight ? "text-energy-blue" : "text-navy-800"}`}>
          {name}
        </span>
      </div>
      <span className="text-sm text-silver-400">{role}</span>
    </div>
  );
}
