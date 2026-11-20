import type { Metadata, Viewport } from "next";
import { Spectral, Fragment_Mono } from "next/font/google";
import { asset } from "./asset";
import "./globals.css";

const f_spec = Spectral({ variable: "--f-spec", subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], display: "swap" });
const f_frag = Fragment_Mono({ variable: "--f-frag", subsets: ["latin"], weight: "400", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shizuka Luxury | Sell your luxury pieces privately in Dubai",
  description:
    "Get cash for your handbags, watches and jewellery within 72 hours. Shizuka collects, authenticates and gathers private offers on your behalf.",
  openGraph: {
    title: "Shizuka Luxury",
    description: "A private way to sell your handbags, watches and jewellery in Dubai. Cash within 72 hours.",
    images: [{ url: asset("/images/cat-watches.jpg"), width: 1067, height: 1600, alt: "A steel chronograph on a wrist resting on dark marble" }],
    locale: "en_GB",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#141312",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${f_spec.variable} ${f_frag.variable}`}>
      <body>{children}</body>
    </html>
  );
}
