"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-72 h-72 bg-energy-blue rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sun rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-energy-green rounded-full blur-3xl opacity-40" />
      </div>
      <div className="container-max section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-sm text-silver-200 mb-8 border border-white/10">
            <span className="w-2 h-2 bg-energy-green rounded-full animate-pulse" />
            Energy Intelligence Platform
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            {t("headline")}
          </h1>
          <p className="text-xl sm:text-2xl text-silver-200 mb-4 leading-relaxed font-light">
            {t("subheadline")}
          </p>
          <p className="text-sm sm:text-base text-silver-400 mb-10 tracking-wide">
            {t("supporting")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link href="/mission" className="btn-primary text-lg px-8 py-4">
              {t("ctaExplore")}
            </Link>
            <Link href="/contact" className="btn-outline-light text-lg px-8 py-4">
              {t("ctaPilot")}
            </Link>
          </div>
          <Link
            href="/enm-token"
            className="text-silver-300 hover:text-white text-sm underline underline-offset-4 transition-colors"
          >
            {t("ctaToken")} →
          </Link>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-energy-blue via-energy-green to-sun" />
    </section>
  );
}
