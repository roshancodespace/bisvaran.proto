import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import PageTransition from "@/components/PageTransition";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bisvaran.com"),
  title: {
    default: "Bisvaran | Professional Home Healthcare Services",
    template: "%s | Bisvaran",
  },
  description: "Bisvaran offers compassionate, professional home healthcare services including nursing, elderly care, doctor consulting, and hospital attendants.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bisvaran | Professional Home Healthcare Services",
    description: "Bisvaran offers compassionate, professional home healthcare services including nursing, elderly care, doctor consulting, and hospital attendants.",
    url: "https://bisvaran.com",
    siteName: "Bisvaran",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bisvaran Home Healthcare",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bisvaran | Professional Home Healthcare Services",
    description: "Bisvaran offers compassionate, professional home healthcare services including nursing, elderly care, doctor consulting, and hospital attendants.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${montserrat.className} antialiased`}
      >
        <PageTransition>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
          <ScrollToTopButton />
        </PageTransition>
      </body>
    </html>
  );
}
