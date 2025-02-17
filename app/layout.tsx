import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Bebas_Neue } from "next/font/google";
import Script from "next/script";
import NavComponent from "./components/ui/NavComponent";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

const notoSerifDisplay = Noto_Serif_Display({
  variable: "--font-noto-serif-display",
  subsets: ["latin"],
  weight: ["400"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sky Vip Aviation",
  description:
    "Ben gurion airport vip | fast track ben gurion | vip ben gurion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="z94M62gLKLwtaGSaH61W0LkqYqfn0ul5oCs1mjC6T4g"
        />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
        <link rel="preconnect" href="https://www.google.com" />
        <link
          rel="preconnect"
          href="https://www.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${notoSerifDisplay.variable} antialiased`}
      >
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="beforeInteractive"
        />
        <NavComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
