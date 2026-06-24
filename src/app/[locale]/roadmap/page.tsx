import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import PageHeader, { BackLink } from "@/components/PageHeader";
import Section from "@/components/Section";

export default async function RoadmapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations("roadmap");
  const common = useTranslations("common");

  const phases = ["phase1", "phase2", "phase3", "phase4", "phase5"] as const;

  const statusColors: Record<string, string> = {
    "In Progress": "bg-blue-100 text-blue-700",
    "Developing": "bg-yellow-100 text-yellow-700",
    "Planned": "bg-purple-100 text-purple-700",
    "Future": "bg-silver-100 text-silver-400",
    "In Bearbeitung": "bg-blue-100 text-blue-700",
    "En Cours": "bg-blue-100 text-blue-700",
  };

  return (
    <>
      <PageHeader title={t("pageTitle")} intro={t("pageIntro")} />
      <Section>
        <div className="max-w-3xl mx-auto space-y-6">
          {phases.map((phase, index) => {
            const status = t(`phases.${phase}.status`);
            const colorClass = statusColors[status] || "bg-silver-100 text-silver-400";
            return (
              <div key={phase} className="card relative pl-8">
                <div className="absolute left-4 top-6 w-3 h-3 rounded-full bg-energy-blue" />
                {index < phases.length - 1 && (
                  <div className="absolute left-[1.35rem] top-9 w-0.5 h-full bg-silver-200" />
                )}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <h2 className="text-lg font-semibold text-navy-900">
                    {t(`phases.${phase}.title`)}
                  </h2>
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium w-fit ${colorClass}`}>
                    {status}
                  </span>
                </div>
                <p className="text-navy-700">{t(`phases.${phase}.items`)}</p>
              </div>
            );
          })}
        </div>
        <BackLink label={common("backToHome")} />
      </Section>
    </>
  );
}
