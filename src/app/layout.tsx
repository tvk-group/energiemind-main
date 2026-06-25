import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EnergieMIND",
  description: "AI-powered energy intelligence",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
