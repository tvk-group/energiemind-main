"use client";

import { useTranslations } from "next-intl";

const VERIFY_URL = "https://www.preflightaudit.com/verify/energiemind";

interface PreflightAuditBadgeProps {
  variant?: "compact" | "section";
  className?: string;
  dark?: boolean;
}

export default function PreflightAuditBadge({
  variant = "section",
  className = "",
  dark = false,
}: PreflightAuditBadgeProps) {
  const t = useTranslations("preflightAudit");

  const assessmentKeys = [
    "platformSecurity",
    "infrastructure",
    "operationalReadiness",
    "technologyArchitecture",
    "deploymentReadiness",
  ] as const;

  const seal = (
    <img
      src="/badges/preflight-audit.svg"
      alt={t("sealAlt")}
      width={variant === "compact" ? 48 : 72}
      height={variant === "compact" ? 48 : 72}
      className="shrink-0"
    />
  );

  if (variant === "compact") {
    return (
      <a
        href={VERIFY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity ${className}`}
        aria-label={t("verifyLink")}
      >
        {seal}
        <span className="text-left">
          <span className="block text-xs text-silver-300 group-hover:text-white transition-colors">
            {t("verifiedBy")}
          </span>
          <span className="block text-[11px] text-silver-400 leading-snug">
            {t("subtitle")}
          </span>
        </span>
      </a>
    );
  }

  const textPrimary = dark ? "text-white/90" : "text-navy-800";
  const textSecondary = dark ? "text-white/60" : "text-ink-muted";
  const textMuted = dark ? "text-white/50" : "text-silver-400";
  const borderClass = dark ? "border-white/10" : "border-silver-200";
  const bgClass = dark ? "bg-white/5" : "bg-panel-elevated";

  return (
    <aside
      className={`rounded-lg border ${borderClass} ${bgClass} p-5 sm:p-6 ${className}`}
      aria-label={t("verifiedBy")}
    >
      <div className="flex flex-col sm:flex-row items-start gap-5">
        <a
          href={VERIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 opacity-90 hover:opacity-100 transition-opacity"
          aria-label={t("verifyLink")}
        >
          {seal}
        </a>
        <div className="min-w-0 flex-1">
          <p className={`text-sm font-medium ${textPrimary}`}>{t("verifiedBy")}</p>
          <p className={`text-sm mt-0.5 ${textSecondary}`}>{t("subtitle")}</p>
          <p className={`text-xs mt-3 mb-2 ${textMuted}`}>{t("coversLabel")}</p>
          <ul className={`grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs ${textSecondary}`}>
            {assessmentKeys.map((key) => (
              <li key={key} className="flex items-center gap-2">
                <span className={`w-1 h-1 rounded-full shrink-0 ${dark ? "bg-white/40" : "bg-silver-300"}`} />
                {t(`areas.${key}`)}
              </li>
            ))}
          </ul>
          <a
            href={VERIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block mt-4 text-xs ${dark ? "text-silver-300 hover:text-white" : "text-navy-700 hover:text-energy-green-dark"} transition-colors`}
          >
            {t("verifyLink")} ↗
          </a>
        </div>
      </div>
    </aside>
  );
}
