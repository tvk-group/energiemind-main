import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import PageHeader, { ContentSection, BackLink } from "@/components/PageHeader";
import Section from "@/components/Section";

export default async function MissionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MissionContent />;
}

function MissionContent() {
  const t = useTranslations("mission");
  const common = useTranslations("common");

  return (
    <>
      <PageHeader title={t("pageTitle")} intro={t("pageIntro")} />
      <Section>
        <ContentSection title={t("visionTitle")} text={t("visionText")} />
        <ContentSection title={t("approachTitle")} text={t("approachText")} />
        <ContentSection title={t("title")} text={t("description")} />
        <BackLink label={common("backToHome")} />
      </Section>
    </>
  );
}
