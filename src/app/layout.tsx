// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa";
import "./globals.css";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Homepage/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Viewport settings (replaces the old metadata viewport and themeColor)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    default: "Corporate Solutions | Business Registration & Advisory Services",
    template: "%s | Corporate Solutions"
  },
  description: "Professional business registration, VAT & taxation, legal services, and corporate advisory in Bangladesh. 13+ years of industry experience serving 50,000+ clients.",
  keywords: [
    "Business registration Bangladesh",
    "VAT consultancy Chittagong",
    "Trade license services",
    "Company formation Bangladesh",
    "Tax advisory services",
    "Corporate solutions",
    "Business legal services",
    "Accounting services Bangladesh",
    "Export import license",
    "Company audit services",
    "Chittagong business consultants",
    "Bangladesh corporate law"
  ],
  authors: [{ name: "Corporate Solutions Team", url: "https://corporatesolutionctg.com" }],
  metadataBase: new URL("https://corporatesolutionctg.com"),
  icons: {
    icon: "/favicon.ico", // Only using favicon.ico
  },
  openGraph: {
    title: "Corporate Solutions | Business Registration & Advisory Services",
    description: "Professional business registration, VAT & taxation, legal services, and corporate advisory in Bangladesh.",
    url: "https://corporatesolutionctg.com",
    siteName: "Corporate Solutions",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Solutions Office",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Solutions | Business Registration & Advisory Services",
    description: "Professional business registration, VAT & taxation, legal services in Chittagong, Bangladesh.",
    images: ["/images/twitter-card.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="white">
      <body className={`${inter.variable} ${inter.className} bg-white text-gray-900`}>
        <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" /> 
        </head>
        <Header />
        <main className="min-h-[calc(100vh-140px)]">
          {children}
        </main>
        <Footer />

        <a
          href="https://wa.me/8801909221707"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 transition-transform duration-200 hover:scale-105"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </body>
    </html>
  );
}