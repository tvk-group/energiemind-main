import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import PageHeader, { BackLink } from "@/components/PageHeader";
import Section from "@/components/Section";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations("contact");
  const common = useTranslations("common");

  return (
    <>
      <PageHeader title={t("pageTitle")} intro={t("pageIntro")} />
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="card">
            <h2 className="text-lg font-semibold text-navy-900 mb-2">{t("pilotInquiry")}</h2>
            <p className="text-navy-700 text-sm leading-relaxed">{t("pilotText")}</p>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold text-navy-900 mb-2">{t("partnershipInquiry")}</h2>
            <p className="text-navy-700 text-sm leading-relaxed">{t("partnershipText")}</p>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold text-navy-900 mb-2">{t("generalInquiry")}</h2>
            <p className="text-navy-700 text-sm leading-relaxed">{t("generalText")}</p>
          </div>
        </div>
        <div className="card max-w-lg mx-auto text-center">
          <p className="text-sm text-silver-400 mb-2">Email</p>
          <a
            href={`mailto:${t("email")}`}
            className="text-xl font-semibold text-energy-blue hover:text-energy-blue-light transition-colors"
          >
            {t("email")}
          </a>
        </div>
        <p className="text-center text-sm text-silver-400 mt-6">{t("tokenNote")}</p>
        <BackLink label={common("backToHome")} />
      </Section>
    </>
  );
}
