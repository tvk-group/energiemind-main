import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EnergieMIND",
  description: "AI-powered energy intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
