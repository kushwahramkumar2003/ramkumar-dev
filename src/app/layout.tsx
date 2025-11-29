import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ramkumar Kushwah - Full-Stack Developer",
  description:
    "Portfolio of Ramkumar Kushwah, a full-stack developer specializing in scalable web applications, Solana blockchain solutions, and open source.",
  keywords:
    "Ramkumar Kushwah, Full-Stack Developer, Solana, Rust, React, Next.js, Portfolio",
  authors: [{ name: "Ramkumar Kushwah", url: "https://ram0x.in" }],
  creator: "Ramkumar Kushwah",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Ramkumar Kushwah",
    description: "Full-Stack Developer & Blockchain Enthusiast.",
    url: "https://ram0x.in",
    siteName: "Ramkumar Kushwah",
    images: [
      {
        url: "https://ram0x.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ramkumar Kushwah Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramkumar Kushwah",
    description: "Full-Stack Developer & Blockchain Enthusiast.",
    images: ["https://ram0x.in/og-image.jpg"],
    site: "@ramkumar_9301",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
