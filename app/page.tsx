import Hero from "@/components/Hero";
import Specialists from "@/components/Specialists";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import RequestCallback from "@/components/RequestCallback";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

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
