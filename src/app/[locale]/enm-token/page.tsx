import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import PageHeader, { ContentSection, BackLink } from "@/components/PageHeader";
import Section from "@/components/Section";

export default async function EnmTokenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations("enm");
  const common = useTranslations("common");

  return (
    <>
      <PageHeader title={t("pageTitle")} intro={t("pageIntro")} />
      <Section>
        <ContentSection title={t("utilityTitle")} text={t("utilityText")} />
        <div className="card mb-6">
          <h2 className="text-xl font-semibold text-navy-900 mb-3">{t("contract")}</h2>
          <div className="bg-silver-100 rounded-lg p-4 mb-4">
            <code className="text-sm text-navy-800 break-all font-mono">
              {t("contractAddress")}
            </code>
            <p className="text-sm text-silver-400 mt-2">{t("network")}</p>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
          <h2 className="font-semibold text-amber-800 mb-2">{t("riskNotice")}</h2>
          <p className="text-sm text-amber-700 leading-relaxed">{t("riskText")}</p>
        </div>
        <ContentSection title={t("disclaimerTitle")} text={t("disclaimerText")} />
        <div className="mt-6">
          <a
            href="https://enm.network"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t("cta")} ↗
          </a>
        </div>
        <BackLink label={common("backToHome")} />
      </Section>
    </>
  );
}
