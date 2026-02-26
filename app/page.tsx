import Hero from "@/components/Hero";
import Specialists from "@/components/Specialists";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import RequestCallback from "@/components/RequestCallback";
import Faq from "@/components/Faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bisvaran | Professional Home Healthcare Services",
  description: "Bisvaran offers compassionate, professional home healthcare services including nursing, elderly care, doctor consulting, and hospital attendants.",
  alternates: {
    canonical: "/",
  }
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Specialists />
      <Services />
      <HowItWorks />
      <Team />
      <Testimonials />
      <RequestCallback />
      <Faq />
    </main>
  );
}
