import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import PageHeader, { ContentSection, BackLink } from "@/components/PageHeader";
import Section from "@/components/Section";

export default async function EnergyIntelligencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations("energyIntelligence");
  const common = useTranslations("common");

  return (
    <>
      <PageHeader title={t("pageTitle")} intro={t("pageIntro")} />
      <Section>
        <ContentSection title={t("section1Title")} text={t("section1Text")} />
        <ContentSection title={t("section2Title")} text={t("section2Text")} />
        <ContentSection title={t("section3Title")} text={t("section3Text")} />
        <BackLink label={common("backToHome")} />
      </Section>
    </>
  );
}
