import type { Metadata } from "next";
import { Fraunces, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Radwan Eldaly — Shopify Developer | Custom Storefronts & UI",
  description:
    "Shopify Developer building custom storefront experiences with a focus on responsive UI, usability, and thoughtful theme customization.",
  metadataBase: new URL("https://noil-delta.vercel.app"),
  alternates: {
    canonical: "https://noil-delta.vercel.app",
  },
  openGraph: {
    title: "Radwan Eldaly — Shopify Developer",
    description:
      "Building custom Shopify storefront experiences with a focus on responsive UI, usability, and thoughtful theme customization.",
    url: "https://noil-delta.vercel.app",
    siteName: "Radwan Eldaly Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/radwan-eldaly.jpg",
        width: 800,
        height: 1000,
        alt: "Radwan Eldaly — Shopify Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radwan Eldaly — Shopify Developer",
    description:
      "Building custom Shopify storefront experiences with a focus on responsive UI, usability, and thoughtful theme customization.",
    creator: "@EldalyRadwan",
    images: ["/images/radwan-eldaly.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Radwan Eldaly",
  jobTitle: "Shopify Developer",
  url: "https://noil-delta.vercel.app",
  image: "https://noil-delta.vercel.app/images/radwan-eldaly.jpg",
  email: "mailto:radwaneldaly14@gmail.com",
  sameAs: [
    "https://linkedin.com/in/radwan-eldaly-a0b079353",
    "https://x.com/EldalyRadwan",
    "https://instagram.com/radwan.eldaly.1",
  ],
  description:
    "Shopify Developer building custom storefront experiences with a focus on responsive UI, usability, and thoughtful theme customization.",
  knowsAbout: [
    "Shopify",
    "Shopify Liquid",
    "Theme Customization",
    "Custom Shopify Sections",
    "Responsive Design",
    "Storefront UI",
    "E-Commerce",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${archivo.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-stage text-bone antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-stage focus:px-4 focus:py-2 focus:font-mono focus:text-xs"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
