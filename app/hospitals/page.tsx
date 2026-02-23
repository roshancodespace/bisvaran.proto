"use client";
import { useState } from "react";
import Link from "next/link";

const hospitals = [
    {
        name: "Metro General Medical Center",
        location: "Mumbai",
        state: "Maharashtra",
        image: "/hospital-1.png",
        specialties: ["Cardiology", "Neurology", "Orthopedics"],
        description: "A state-of-the-art multi-specialty facility known for its advanced surgical units."
    },
    {
        name: "Horizon Boutique Clinic",
        location: "New Delhi",
        state: "Delhi",
        image: "/hospital-2.png",
        specialties: ["Pediatrics", "Maternity", "Dermatology"],
        description: "Providing personalized, luxury healthcare experiences with a focus on family medicine."
    },
    {
        name: "Summit Specialty Institute",
        location: "Bengaluru",
        state: "Karnataka",
        image: "/hospital-3.png",
        specialties: ["Oncology", "Advanced Imaging", "Rehabilitation"],
        description: "An internationally recognized center of excellence featuring cutting-edge treatments."
    },
    {
        name: "Apollo Genesis Hub",
        location: "Chennai",
        state: "Tamil Nadu",
        image: "/hospital-1.png",
        specialties: ["Gastroenterology", "Urology", "General Surgery"],
        description: "A leading regional healthcare provider equipped with modern robotic surgery tools."
    },
    {
        name: "CareMax Super Specialty",
        location: "Ahmedabad",
        state: "Gujarat",
        image: "/hospital-2.png",
        specialties: ["Endocrinology", "Pulmonology", "Nephrology"],
        description: "Dedicated to complete patient recovery and advanced internal medicine capabilities."
    },
    {
        name: "Lifeline Premium Care",
        location: "Hyderabad",
        state: "Telangana",
        image: "/hospital-3.png",
        specialties: ["Orthopedics", "Sports Medicine", "Physiotherapy"],
        description: "Pioneering comprehensive athletic and injury recovery for all ages."
    }
];

export default function Hospitals() {
    const [selectedState, setSelectedState] = useState("All States");

    // Extract unique states for the filter
    const states = ["All States", ...Array.from(new Set(hospitals.map(h => h.state)))].sort();

    const filteredHospitals = hospitals.filter(hospital =>
        selectedState === "All States" || hospital.state === selectedState
    );

    return (
        <div className="min-h-screen flex flex-col bg-zinc-50/30">
            <main className="grow flex flex-col w-full">

                {/* Header Section */}
                <section className="w-full bg-teal-900 text-white pt-20 pb-16 lg:pt-28 lg:pb-20 px-6 lg:px-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>

                    <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
                        <h4 className="inline-block text-teal-100 font-semibold text-xs sm:text-sm tracking-widest uppercase bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/20">
                            Our Network
                        </h4>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6 leading-[1.1]">
                            World-Class Facilities <br className="hidden sm:block" />
                            <span className="text-teal-300 italic font-light">At Your Fingertips.</span>
                        </h1>
                        <p className="text-lg text-teal-100/80 max-w-2xl mx-auto leading-relaxed">
                            Discover our curated selection of top-tier medical centers across India. Every facility is rigorously vetted for excellence in patient care, advanced technology, and superior outcomes.
                        </p>
                    </div>
                </section>

                {/* Hospitals Grid & Filters */}
                <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">

                    {/* Filters */}
                    <div className="mb-10 flex flex-nowrap overflow-x-auto pb-4 gap-2 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
                        {states.map((state) => (
                            <button
                                key={state}
                                onClick={() => setSelectedState(state)}
                                className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer ${selectedState === state
                                        ? "bg-teal-600 text-white border-teal-600 shadow-md"
                                        : "bg-white text-zinc-600 border-zinc-200 hover:border-teal-300 hover:bg-teal-50"
                                    }`}
                            >
                                {state}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredHospitals.length > 0 ? (
                            filteredHospitals.map((hospital, index) => (
                                <div key={index} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                                    {/* Image Container */}
                                    <div className="relative w-full h-40 overflow-hidden bg-zinc-100">
                                        <div className="absolute inset-0 bg-teal-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                        <img
                                            src={hospital.image}
                                            alt={hospital.name}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                        {/* Location Badge */}
                                        <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256" className="text-teal-600"><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,39.08,8,8,0,0,0,9.1,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm36.22,173.05A238.4,238.4,0,0,1,128,223.6a238.4,238.4,0,0,1-36.22-34.55c-24-27.59-35.78-56.16-35.78-85a72,72,0,0,1,144,0C200,132.89,188.23,161.46,164.22,189.05Z"></path></svg>
                                            <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-wider">{hospital.location}</span>
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-5 flex flex-col grow">
                                        <h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                                            {hospital.name}
                                        </h3>

                                        <p className="text-zinc-500 text-xs leading-relaxed mb-4 line-clamp-2">
                                            {hospital.description}
                                        </p>

                                        {/* Specialties Tags */}
                                        <div className="flex flex-wrap gap-1.5 mt-auto mb-5">
                                            {hospital.specialties.map((specialty, idx) => (
                                                <span key={idx} className="bg-zinc-50 text-zinc-600 text-[10px] font-medium px-2 py-0.5 rounded border border-zinc-200/60">
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>

                                        <Link href="/#request-callback" className="mt-auto w-full py-2.5 bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white transition-colors duration-300 rounded-xl text-sm font-medium flex items-center justify-center gap-2 group/btn">
                                            <span>Consult Here</span>
                                            <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-12 text-center text-zinc-500">
                                No hospitals found in this state currently. Our network is expanding rapidly!
                            </div>
                        )}
                    </div>
                </section>

                {/* Bottom CTA Overlay */}
                <section className="w-full bg-teal-50 py-16 px-6 lg:px-8 border-t border-teal-100/50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900 mb-4">
                            Don't see your preferred hospital?
                        </h2>
                        <p className="text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Our network is constantly expanding. Contact our care team and we will coordinate your care exactly where you want it.
                        </p>
                        <Link href="/#request-callback" className="inline-flex px-8 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full font-medium transition-all shadow-md hover:-translate-y-0.5">
                            Speak to an Advisor
                        </Link>
                    </div>
                </section>

            </main>
        </div>
    )
}
