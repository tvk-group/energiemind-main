import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import PageHeader, { BackLink } from "@/components/PageHeader";
import Section from "@/components/Section";

export default async function PilotProgramPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations("pilot");
  const common = useTranslations("common");

  const targets = [
    "hotels", "commercial", "greenhouses", "farms",
    "solar", "industrial", "mining", "datacenters",
  ] as const;

  return (
    <>
      <PageHeader title={t("pageTitle")} intro={t("pageIntro")} />
      <Section>
        <p className="text-lg text-navy-700 mb-8 leading-relaxed">{t("description")}</p>
        <h2 className="text-2xl font-semibold text-navy-900 mb-6">{t("subtitle")}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {targets.map((key) => (
            <div
              key={key}
              className="card text-center font-medium text-navy-700"
            >
              {t(`targets.${key}`)}
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/contact" className="btn-primary">
            {t("cta")}
          </Link>
        </div>
        <BackLink label={common("backToHome")} />
      </Section>
    </>
  );
}
