"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  const links = [
    { key: "mission", href: "/mission" },
    { key: "energyIntelligence", href: "/energy-intelligence" },
    { key: "miningHeatUtility", href: "/mining-heat-utility" },
    { key: "technology", href: "/technology" },
    { key: "pilotProgram", href: "/pilot-program" },
    { key: "ecosystem", href: "/ecosystem" },
    { key: "enmToken", href: "/enm-token" },
    { key: "roadmap", href: "/roadmap" },
    { key: "contact", href: "/contact" },
  ] as const;

  return (
    <footer className="bg-enm-deep text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-energy-blue to-energy-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EM</span>
              </div>
              <span className="font-bold text-lg">EnergieMIND</span>
            </div>
            <p className="text-silver-400 text-sm leading-relaxed">{t("tagline")}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-silver-200">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="text-sm text-silver-400 hover:text-white transition-colors"
                >
                  {nav(link.key)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-silver-200">Ecosystem</h4>
            <div className="space-y-2">
              <a
                href="https://enm.network"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-silver-400 hover:text-white transition-colors"
              >
                {t("enmNetwork")} ↗
              </a>
              <a
                href="https://tvk.group"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-silver-400 hover:text-white transition-colors"
              >
                {t("tvkGroup")} ↗
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-silver-400 mb-4 leading-relaxed">{t("legal")}</p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-sm text-silver-400">
              © {new Date().getFullYear()} {t("company")}. {t("rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
