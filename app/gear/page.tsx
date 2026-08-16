import type { Metadata } from "next";
import GearsPage from "@/components/gear/Gear";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devygram.com";

export const metadata: Metadata = {
  title: "Gears & Development Setup",
  description: "A detailed breakdown of hardware, desk setup, software, developer tools, and extensions used by Devender Papani (DevyGram).",
  alternates: {
    canonical: `${siteUrl}/gear`,
  },
  openGraph: {
    title: "Gears & Development Setup — Devender Papani (DevyGram)",
    description: "A detailed breakdown of hardware, desk setup, software, developer tools, and extensions used by Devender Papani (DevyGram).",
    url: `${siteUrl}/gear`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Devender Papani (DevyGram) | Gear & Software Setup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gears & Development Setup — Devender Papani (DevyGram)",
    description: "A detailed breakdown of hardware, desk setup, software, developer tools, and extensions used by Devender Papani (DevyGram).",
    images: [`${siteUrl}/og-image.webp`],
    creator: "@devygram",
  },
};

export default function GearPage() {
  return <GearsPage />;
}
