"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSelector from "./LanguageSelector";

const navItems = [
  { key: "home", href: "/" },
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

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-silver-200">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-energy-blue to-energy-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EM</span>
            </div>
            <span className="font-bold text-navy-900 text-lg hidden sm:block">
              EnergieMIND
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`px-2.5 py-2 text-sm rounded-md transition-colors ${
                  pathname === item.href
                    ? "text-energy-blue font-medium"
                    : "text-navy-700 hover:text-energy-blue"
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSelector />
            <button
              className="xl:hidden p-2 text-navy-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden border-t border-silver-200 bg-white">
          <nav className="container-max px-4 py-4 grid grid-cols-2 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 text-sm rounded-md ${
                  pathname === item.href
                    ? "text-energy-blue font-medium bg-blue-50"
                    : "text-navy-700 hover:bg-silver-100"
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
