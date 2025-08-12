import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OnePageStudioX - Professional Websites in 5 Days",
  description:
    "Get your professional website up and running in just 5 days. Choose a template, send your content, and go live with a clean, professional site. Perfect for small businesses.",
  keywords:
    "website design, professional websites, small business websites, website templates, fast website delivery, one-page websites",
  authors: [{ name: "OnePageStudioX", url: "https://onepagestudiox.com" }],
  creator: "OnePageStudioX",
  publisher: "OnePageStudioX",
  category: "Web Design & Development",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://onepagestudiox.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OnePageStudioX - Professional Websites in 5 Days",
    description:
      "Get your professional website up and running in just 5 days. Choose a template, send your content, and go live with a clean, professional site.",
    url: "https://onepagestudiox.com",
    siteName: "OnePageStudioX",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnePageStudioX - Professional Websites in 5 Days",
    description:
      "Get your professional website up and running in just 5 days. Choose a template, send your content, and go live.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  applicationName: "OnePageStudioX",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
