"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-10 w-80 h-80 bg-energy-green rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-energy-green-light rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-energy-blue rounded-full blur-3xl opacity-30" />
      </div>
      <div className="container-max section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-energy-green/20 rounded-full text-sm text-energy-green-muted mb-8 border border-energy-green/30">
            <span className="w-2 h-2 bg-energy-green-light rounded-full animate-pulse" />
            Sustainable Energy Intelligence
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            {t("headline")}
          </h1>
          <p className="text-xl sm:text-2xl text-white/85 mb-4 leading-relaxed font-light">
            {t("subheadline")}
          </p>
          <p className="text-sm sm:text-base text-white/60 mb-10 tracking-wide">
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
            className="text-white/50 hover:text-sun text-sm underline underline-offset-4 transition-colors"
          >
            {t("ctaToken")} →
          </Link>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-energy-green-dark via-energy-green to-energy-green-light" />
    </section>
  );
}
