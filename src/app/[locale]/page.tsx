import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import PillarCard from "@/components/PillarCard";
import EcosystemLayer from "@/components/EcosystemLayer";
import EnmPreview from "@/components/EnmPreview";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations();

  const problemItems = [
    t("problem.items.wastedEnergy"),
    t("problem.items.wastedHeat"),
    t("problem.items.noIntelligence"),
    t("problem.items.infrastructure"),
  ];

  const thesisOutputs = [
    t("thesis.outputs.hashPower"),
    t("thesis.outputs.heat"),
    t("thesis.outputs.data"),
    t("thesis.outputs.metrics"),
    t("thesis.outputs.optimization"),
  ];

  const pilotTargets = [
    t("pilot.targets.hotels"),
    t("pilot.targets.commercial"),
    t("pilot.targets.greenhouses"),
    t("pilot.targets.farms"),
    t("pilot.targets.solar"),
    t("pilot.targets.industrial"),
    t("pilot.targets.mining"),
    t("pilot.targets.datacenters"),
  ];

  const pillars = [
    { key: "energyIntelligence", icon: "⚡", color: "bg-energy-blue/10 text-energy-blue-dark" },
    { key: "miningHeatUtility", icon: "♨️", color: "bg-energy-green/15 text-energy-green-dark" },
    { key: "energyDashboard", icon: "📊", color: "bg-sage-100 text-forest-mid" },
    { key: "sustainableInfrastructure", icon: "🌿", color: "bg-energy-green/20 text-energy-green-dark" },
    { key: "enmUtilityLayer", icon: "🔗", color: "bg-sun-bg-deep text-navy-800" },
  ];

  const ecosystemLayers = ["tvk", "infrasphere", "sovra", "entelekron", "energiemind", "enm"];

  return (
    <>
      <Hero />

      <Section id="mission" className="bg-section-alt">
        <div className="text-center mb-12">
          <h2 className="section-title">{t("mission.title")}</h2>
          <p className="section-subtitle mx-auto">{t("mission.subtitle")}</p>
        </div>
        <p className="text-lg text-navy-700 max-w-3xl mx-auto text-center leading-relaxed">
          {t("mission.description")}
        </p>
        <div className="text-center mt-8">
          <Link href="/mission" className="btn-primary">
            {t("common.learnMore")}
          </Link>
        </div>
      </Section>

      <Section id="problem" className="bg-section-green">
        <div className="text-center mb-12">
          <h2 className="section-title">{t("problem.title")}</h2>
          <p className="section-subtitle mx-auto">{t("problem.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problemItems.map((item, i) => (
            <div key={i} className="card flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-energy-green/15 text-energy-green-dark flex items-center justify-center font-bold text-sm">
                !
              </span>
              <p className="text-navy-700">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="thesis" className="bg-thesis text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t("thesis.title")}</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">{t("thesis.subtitle")}</p>
        </div>
        <p className="text-lg text-white/80 max-w-3xl mx-auto text-center mb-10 leading-relaxed">
          {t("thesis.description")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {thesisOutputs.map((output, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-lg p-4 text-center"
            >
              <span className="text-energy-green-light text-xl mb-2 block">●</span>
              <p className="text-white/85">{output}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="pillars" className="bg-section-green">
        <div className="text-center mb-12">
          <h2 className="section-title">{t("pillars.title")}</h2>
          <p className="section-subtitle mx-auto">{t("pillars.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <PillarCard
              key={pillar.key}
              icon={pillar.icon}
              colorClass={pillar.color}
              title={t(`pillars.${pillar.key}.title`)}
              description={t(`pillars.${pillar.key}.description`)}
            />
          ))}
        </div>
      </Section>

      <Section id="pilot" className="bg-section-alt">
        <div className="text-center mb-12">
          <h2 className="section-title">{t("pilot.title")}</h2>
          <p className="section-subtitle mx-auto">{t("pilot.subtitle")}</p>
        </div>
        <p className="text-lg text-navy-700 max-w-3xl mx-auto text-center mb-10">
          {t("pilot.description")}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          {pilotTargets.map((target, i) => (
            <div
              key={i}
              className="bg-panel border border-silver-200 rounded-lg p-4 text-center text-navy-700 font-medium"
            >
              {target}
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/pilot-program" className="btn-primary">
            {t("pilot.cta")}
          </Link>
        </div>
      </Section>

      <Section id="ecosystem">
        <div className="text-center mb-12">
          <h2 className="section-title">{t("ecosystem.title")}</h2>
          <p className="section-subtitle mx-auto">{t("ecosystem.subtitle")}</p>
        </div>
        <p className="text-lg text-navy-700 max-w-3xl mx-auto text-center mb-10">
          {t("ecosystem.description")}
        </p>
        <div className="max-w-2xl mx-auto space-y-3">
          {ecosystemLayers.map((layer) => (
            <EcosystemLayer
              key={layer}
              name={t(`ecosystem.layers.${layer}.name`)}
              role={t(`ecosystem.layers.${layer}.role`)}
              highlight={layer === "energiemind"}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/ecosystem" className="btn-secondary">
            {t("common.learnMore")}
          </Link>
        </div>
      </Section>

      <Section id="enm" className="bg-enm-section">
        <EnmPreview />
      </Section>
    </>
  );
}
