import React from "react";
import TravelAssistance from "@/components/TravelAssistance";
import Pricing from "@/components/Pricing";
import RequestCallback from "@/components/RequestCallback";
import Faq from "@/components/Faq";
import ServiceSpecialists from "@/components/ServiceSpecialists";
import { specialistsData } from "@/data/specialists";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Medical Travel Assistance | Safe Transit Escort Services",
    description: "Experience stress-free transit with our professional medical escorts who ensure your loved ones are safely and comfortably transported.",
    alternates: {
        canonical: "/services/travel-assistance",
    }
}

export default function TravelAssistancePage() {
    const specialists = specialistsData.filter(s => s.type === 'Caregiver' && s.featured);

    return (
        <main className="min-h-screen pt-20">
            {/* Travel Assistance Hero */}
            <section className="w-full bg-linear-to-b from-teal-50/50 to-white py-16 lg:py-24 border-b border-zinc-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100/80 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Safe Transit Experts
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 leading-[1.1] mb-6 max-w-4xl">
                        Reliable <span className="text-teal-600 italic">Travel Assistance</span>.
                    </h1>
                    <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mb-10">
                        Experience stress-free transit with our professional caregivers who ensure your loved ones are safely and comfortably escorted to their destination.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
                        <a href="#request-callback" className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 text-white font-medium rounded-full shadow-lg shadow-zinc-900/20 hover:bg-teal-600 transition-colors flex items-center justify-center gap-2">
                            <span>Book Escort</span>
                        </a>
                        <a href="#pricing" className="w-full sm:w-auto px-8 py-3.5 bg-white text-zinc-900 font-medium rounded-full border border-zinc-200 hover:bg-zinc-50 transition-colors flex items-center justify-center">
                            View Pricing
                        </a>
                    </div>
                </div>
            </section>

            <div id="services" className="w-full bg-linear-to-b from-white to-zinc-50/50 pb-12">
                <TravelAssistance />
            </div>

            <div id="pricing" className="w-full bg-zinc-50/50">
                <Pricing category="travel-assistance" />
            </div>

            <div className="bg-zinc-50 pt-12 pb-24">
                <ServiceSpecialists
                    title="Meet Our Caregivers"
                    subtitle="Compassionate staff who ensure comfort and safety throughout the entire journey."
                    specialists={specialists as any}
                    theme="teal"
                />
            </div>

            <RequestCallback />
            <Faq category="travel-assistance" />
        </main>
    );
}
