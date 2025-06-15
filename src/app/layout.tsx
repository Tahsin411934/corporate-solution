import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Homepage/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
  title: {
    template: "%s | Corporate Solutions",
    default: "Corporate Solutions | Business Registration & Advisory Services"
  },
  description: "Expert corporate solutions including company registration, compliance, tax advisory, and business consultancy services. Helping businesses grow since 2010.",
  keywords: [
    "company registration",
    "business advisory",
    "corporate compliance",
    "tax consultancy",
    "business solutions"
  ],
  authors: [{ name: "Corporate Solutions Team", url: "https://corporatesolutions.com" }],
  creator: "Corporate Solutions",
  publisher: "Corporate Solutions",
  metadataBase: new URL("https://corporatesolutions.com"),
  openGraph: {
    title: "Corporate Solutions | Business Registration & Advisory Services",
    description: "Expert corporate solutions including company registration, compliance, tax advisory, and business consultancy services.",
    url: "https://corporatesolutions.com",
    siteName: "Corporate Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Solutions - Business Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Solutions | Business Registration & Advisory Services",
    description: "Expert corporate solutions including company registration, compliance, tax advisory, and business consultancy services.",
    images: ["/twitter-image.jpg"],
    creator: "@corpsolutions",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: "https://corporatesolutions.com",
  },
  category: "business services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#005FA5" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={inter.className}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}