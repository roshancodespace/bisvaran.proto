import ElderlyCare from "@/components/ElderlyCare";
import Pricing from "@/components/Pricing";
import RequestCallback from "@/components/RequestCallback";
import Faq from "@/components/Faq";
import ServiceSpecialists from "@/components/ServiceSpecialists";
import { specialistsData } from "@/data/specialists";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Elderly Care Services | Compassionate Care at Home",
    description: "Give your loved ones the dignity, companionship, and professional daily assistance they deserve. Our certified caregivers provide personalized support.",
    alternates: {
        canonical: "/services/elderly-care",
    }
}

export default function ElderlyCarePage() {
    const specialists = specialistsData.filter(s => s.type === 'Caregiver' && s.featured);

    return (
        <main className="min-h-screen pt-20">
            {/* Elderly Care Hero */}
            <section className="w-full bg-linear-to-b from-orange-50/30 to-white py-16 lg:py-24 border-b border-zinc-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100/80 text-orange-700 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        Dedicated Caregivers
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 leading-[1.1] mb-6 max-w-4xl">
                        Compassionate <span className="text-orange-500 italic">Elderly Care</span> at Home.
                    </h1>
                    <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mb-10">
                        Give your loved ones the dignity, companionship, and professional daily assistance they deserve. Our certified caregivers provide personalized support tailored exactly to their needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
                        <a href="#request-callback" className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 text-white font-medium rounded-full shadow-lg shadow-zinc-900/20 hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                            <span>Book a Caregiver</span>
                        </a>
                        <a href="#pricing" className="w-full sm:w-auto px-8 py-3.5 bg-white text-zinc-900 font-medium rounded-full border border-zinc-200 hover:bg-zinc-50 transition-colors flex items-center justify-center">
                            View Pricing
                        </a>
                    </div>
                </div>
            </section>

            <ElderlyCare />

            <ServiceSpecialists
                title="Meet Our Caregivers"
                subtitle="Compassionate, vetted professionals dedicated to treating your loved ones like family."
                specialists={specialists as any}
                theme="orange"
            />

            <div id="pricing" className="w-full bg-zinc-50/50">
                <Pricing category="elderly-care" />
            </div>

            <RequestCallback />
            <Faq category="elderly-care" />
        </main>
    );
}
