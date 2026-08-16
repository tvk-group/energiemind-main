import type { Metadata, Viewport } from "next";

const origin = "https://www.energiemind.com";
const title = "EnergieMIND | Energy Intelligence Platform";
const description =
  "EnergieMIND presents a development-stage energy intelligence platform for monitoring, analytics and workflow concepts across the TVK ecosystem.";

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title,
  description,
  applicationName: "EnergieMIND",
  alternates: {
    canonical: "/",
    languages: {
      "en": "https://www.energiemind.com/en/",
      "de": "https://www.energiemind.com/de/",
      "fr": "https://www.energiemind.com/fr/",
      "es": "https://www.energiemind.com/es/",
      "it": "https://www.energiemind.com/it/",
      "nl": "https://www.energiemind.com/nl/",
      "pt": "https://www.energiemind.com/pt/",
      "pl": "https://www.energiemind.com/pl/",
      "ru": "https://www.energiemind.com/ru/",
      "uk": "https://www.energiemind.com/uk/",
      "tr": "https://www.energiemind.com/tr/",
      "ar": "https://www.energiemind.com/ar/",
      "zh": "https://www.energiemind.com/zh/",
      "ja": "https://www.energiemind.com/ja/",
      "ko": "https://www.energiemind.com/ko/",
      "hi": "https://www.energiemind.com/hi/",
      "sv": "https://www.energiemind.com/sv/",
      "no": "https://www.energiemind.com/no/",
      "da": "https://www.energiemind.com/da/",
      "fi": "https://www.energiemind.com/fi/",
      "cs": "https://www.energiemind.com/cs/",
      "ro": "https://www.energiemind.com/ro/",
      "hu": "https://www.energiemind.com/hu/",
      "el": "https://www.energiemind.com/el/",
      "bg": "https://www.energiemind.com/bg/",
      "hr": "https://www.energiemind.com/hr/",
      "sk": "https://www.energiemind.com/sk/",
      "lt": "https://www.energiemind.com/lt/",
      "id": "https://www.energiemind.com/id/",
      "vi": "https://www.energiemind.com/vi/",
      "x-default": "https://www.energiemind.com/en/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName: "EnergieMIND",
    images: [{ url: "/assets/seo/social-card.svg", width: 1200, height: 630, alt: "EnergieMIND energy intelligence platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/seo/social-card.svg"],
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#087443",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
