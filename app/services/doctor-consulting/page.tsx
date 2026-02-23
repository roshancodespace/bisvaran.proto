"use client";
import { useState, useEffect } from "react";
import DoctorConsulting from "@/components/DoctorConsulting";
import Pricing from "@/components/Pricing";
import RequestCallback from "@/components/RequestCallback";
import Faq from "@/components/Faq";
import ServiceSpecialists from "@/components/ServiceSpecialists";
import type { SpecialistData } from "@/data/specialists";

export default function DoctorConsultingPage() {
    const [specialists, setSpecialists] = useState<SpecialistData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                // Fetching Doctor type specialsits if available, else generalized
                const response = await fetch('/api/specialists?type=Doctor&featured=true');
                if (response.ok) {
                    const data = await response.json();
                    setSpecialists(data);
                } else {
                    // fallback if api doesn't match
                    const fallbackResponse = await fetch('/api/specialists?featured=true');
                    if (fallbackResponse.ok) {
                        const data = await fallbackResponse.json();
                        setSpecialists(data);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch doctors:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDoctors();
    }, []);
    return (
        <main className="min-h-screen pt-20">
            {/* Doctor Consulting Hero */}
            <section className="w-full bg-linear-to-b from-teal-50/50 to-white py-16 lg:py-24 border-b border-zinc-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100/80 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        Certified IT Medical Professionals
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 leading-[1.1] mb-6 max-w-4xl">
                        Expert <span className="text-teal-600 italic">Doctor Consulting</span> Services.
                    </h1>
                    <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mb-10">
                        Get professional medical consultations online or schedule doctor home visits for personalized health care without leaving your home.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
                        <a href="#request-callback" className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 text-white font-medium rounded-full shadow-lg shadow-zinc-900/20 hover:bg-teal-600 transition-colors flex items-center justify-center gap-2">
                            <span>Book Consultation</span>
                        </a>
                        <a href="#services" className="w-full sm:w-auto px-8 py-3.5 bg-white text-zinc-900 font-medium rounded-full border border-zinc-200 hover:bg-zinc-50 transition-colors flex items-center justify-center">
                            Explore Options
                        </a>
                    </div>
                </div>
            </section>

            <div id="services" className="w-full bg-linear-to-b from-white to-zinc-50/50 pb-12">
                <DoctorConsulting />
            </div>

            <div id="pricing" className="w-full bg-zinc-50/50">
                <Pricing category="doctor-consulting" />
            </div>

            {isLoading ? (
                <div className="w-full flex justify-center py-24 bg-white">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-teal-600"></div>
                </div>
            ) : (
                <ServiceSpecialists
                    title="Meet Our Physicians"
                    subtitle="Highly trained doctors providing expert care, online and at your convenience."
                    specialists={specialists as any}
                    theme="teal"
                />
            )}
            <RequestCallback />
            <Faq category="doctor-consulting" />
        </main>
    );
}
