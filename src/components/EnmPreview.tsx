"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function EnmPreview() {
  const t = useTranslations("enm");

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="section-title">{t("title")}</h2>
        <p className="section-subtitle mx-auto">{t("subtitle")}</p>
      </div>
      <div className="card">
        <p className="text-navy-700 mb-6 leading-relaxed">{t("description")}</p>
        <div className="bg-silver-100 rounded-lg p-4 mb-6">
          <p className="text-sm text-silver-400 mb-1">{t("contract")}</p>
          <code className="text-sm text-navy-800 break-all font-mono">
            {t("contractAddress")}
          </code>
          <p className="text-sm text-silver-400 mt-2">{t("network")}</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="font-semibold text-amber-800 mb-2">{t("riskNotice")}</p>
          <p className="text-sm text-amber-700 leading-relaxed">{t("riskText")}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://enm.network"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center"
          >
            {t("cta")}
          </a>
          <Link href="/enm-token" className="btn-secondary text-center">
            {t("pageTitle")}
          </Link>
        </div>
      </div>
    </div>
  );
}
