import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import PageHeader, { BackLink } from "@/components/PageHeader";
import Section from "@/components/Section";
import EcosystemLayer from "@/components/EcosystemLayer";

export default async function EcosystemPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations("ecosystem");
  const common = useTranslations("common");

  const layers = ["tvk", "infrasphere", "sovra", "entelekron", "energiemind", "enm"] as const;

  return (
    <>
      <PageHeader title={t("pageTitle")} intro={t("pageIntro")} />
      <Section>
        <p className="text-lg text-navy-700 mb-8 leading-relaxed">{t("description")}</p>
        <div className="max-w-2xl mx-auto space-y-3">
          {layers.map((layer) => (
            <EcosystemLayer
              key={layer}
              name={t(`layers.${layer}.name`)}
              role={t(`layers.${layer}.role`)}
              highlight={layer === "energiemind"}
            />
          ))}
        </div>
        <BackLink label={common("backToHome")} />
      </Section>
    </>
  );
}
