import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ramkumar Kushwah - Full-Stack Developer Portfolio",
  description:
    "Discover the portfolio of Ramkumar Kushwah, a skilled full-stack developer specializing in creating innovative web applications and scalable solutions.",
  keywords:
    "Ramkumar Kushwah, full-stack developer, portfolio, web developer, software engineer, React, Node.js, MERN stack, blockchain developer, Tailwind CSS",
  authors: [{ name: "Ramkumar Kushwah", url: "https://ramkumar-dev.me" }],
  creator: "Ramkumar Kushwah",
  openGraph: {
    title: "Ramkumar Kushwah - Full-Stack Developer Portfolio",
    description:
      "Explore the work and achievements of Ramkumar Kushwah, a full-stack developer passionate about building seamless and efficient web applications.",
    url: "https://ramkumar-dev.me",
    siteName: "Ramkumar Kushwah Portfolio",
    images: [
      {
        url: "https://ramkumar-dev.me/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ramkumar Kushwah Portfolio Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramkumar Kushwah - Full-Stack Developer Portfolio",
    description:
      "View the portfolio of Ramkumar Kushwah, a developer who brings ideas to life through innovative coding and design.",
    images: ["https://ramkumar-dev.me/og-image.jpg"],
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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
