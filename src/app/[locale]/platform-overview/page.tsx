import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import PageHeader, { ContentSection, BackLink } from "@/components/PageHeader";
import Section from "@/components/Section";
import PreflightAuditBadge from "@/components/PreflightAuditBadge";

export default async function PlatformOverviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations("platformOverview");
  const common = useTranslations("common");

  return (
    <>
      <PageHeader title={t("pageTitle")} intro={t("pageIntro")} />
      <Section>
        <ContentSection title={t("section1Title")} text={t("section1Text")} />
        <ContentSection title={t("section2Title")} text={t("section2Text")} />
        <ContentSection title={t("section3Title")} text={t("section3Text")} />
        <PreflightAuditBadge className="mt-2" />
        <BackLink label={common("backToHome")} />
      </Section>
    </>
  );
}
