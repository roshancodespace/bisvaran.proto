"use client";
import { useState } from "react";
import Link from "next/link";

const nurses = [
    {
        name: "Sister Kavita Nair",
        title: "Critical Care Specialist",
        location: "Mumbai",
        state: "Maharashtra",
        image: "/nurse-1.png",
        specialties: ["ICU Care", "Post-Op Recovery", "Ventilator Support"],
        description: "Specialized in intensive home care for patients recovering from major surgeries.",
        experience: "14 Years"
    },
    {
        name: "Brother Amit Patel",
        title: "Senior Home Nurse",
        location: "Ahmedabad",
        state: "Gujarat",
        image: "/nurse-2.png",
        specialties: ["Elder Care", "Wound Management", "Palliative Care"],
        description: "Compassionate care dedicated to improving the quality of life for seniors.",
        experience: "9 Years"
    },
    {
        name: "Sister Meera Joshi",
        title: "Pediatric Nurse",
        location: "New Delhi",
        state: "Delhi",
        image: "/nurse-1.png",
        specialties: ["Newborn Care", " वैक्सीनेशन Support", "Special Needs"],
        description: "Expert in providing gentle, specialized care for infants and young children at home.",
        experience: "11 Years"
    },
    {
        name: "Brother Santosh Kumar",
        title: "Rehabilitation Nurse",
        location: "Bengaluru",
        state: "Karnataka",
        image: "/nurse-2.png",
        specialties: ["Stroke Rehab", "Mobility Assistance", "Orthopedic Care"],
        description: "Focused on helping patients regain independence through targeted physical support.",
        experience: "7 Years"
    },
    {
        name: "Sister Priya Menon",
        title: "Registered General Nurse",
        location: "Chennai",
        state: "Tamil Nadu",
        image: "/nurse-1.png",
        specialties: ["IV Therapy", "Medication Management", "Diabetic Care"],
        description: "Providing reliable, clinical-grade nursing interventions in the comfort of your home.",
        experience: "16 Years"
    },
    {
        name: "Brother Rahul Singh",
        title: "Psychiatric Nurse",
        location: "Hyderabad",
        state: "Telangana",
        image: "/nurse-2.png",
        specialties: ["Dementia Care", "Mental Health Support", "Behavioral Therapy"],
        description: "Trained in providing empathetic support for patients with cognitive and mental health conditions.",
        experience: "10 Years"
    }
];

export default function Nurses() {
    const [selectedState, setSelectedState] = useState("All States");

    // Extract unique states for the filter
    const states = ["All States", ...Array.from(new Set(nurses.map(n => n.state)))].sort();

    const filteredNurses = nurses.filter(nurse =>
        selectedState === "All States" || nurse.state === selectedState
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
                            Home Care
                        </h4>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6 leading-[1.1]">
                            Compassionate Support <br className="hidden sm:block" />
                            <span className="text-teal-300 italic font-light">At Your Doorstep.</span>
                        </h1>
                        <p className="text-lg text-teal-100/80 max-w-2xl mx-auto leading-relaxed">
                            Our network of certified, highly-trained nurses provides hospital-grade care in the comfort and safety of your own home.
                        </p>
                    </div>
                </section>

                {/* Nurses Grid & Filters */}
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
                        {filteredNurses.length > 0 ? (
                            filteredNurses.map((nurse, index) => (
                                <div key={index} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                                    {/* Image Container */}
                                    <div className="relative w-full h-40 overflow-hidden bg-zinc-100">
                                        <div className="absolute inset-0 bg-teal-900/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                        <img
                                            src={nurse.image}
                                            alt={nurse.name}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out object-top"
                                        />
                                        {/* Experience Badge */}
                                        <div className="absolute top-3 right-3 z-20 flex items-center bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
                                            <span className="text-[10px] font-bold text-teal-700">{nurse.experience} Exp</span>
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-5 flex flex-col grow">
                                        <div className="flex items-start justify-between gap-2 mb-1">
                                            <h3 className="text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-teal-600 transition-colors line-clamp-1">
                                                {nurse.name}
                                            </h3>
                                        </div>
                                        <p className="text-teal-600 font-medium text-[10px] mb-2 uppercase tracking-wider">{nurse.title}</p>

                                        <div className="flex items-center gap-1.5 text-zinc-500 mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,39.08,8,8,0,0,0,9.1,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm36.22,173.05A238.4,238.4,0,0,1,128,223.6a238.4,238.4,0,0,1-36.22-34.55c-24-27.59-35.78-56.16-35.78-85a72,72,0,0,1,144,0C200,132.89,188.23,161.46,164.22,189.05Z"></path></svg>
                                            <span className="text-xs">{nurse.location}, {nurse.state}</span>
                                        </div>

                                        <p className="text-zinc-500 text-xs leading-relaxed mb-4 line-clamp-2">
                                            {nurse.description}
                                        </p>

                                        {/* Specialties Tags */}
                                        <div className="flex flex-wrap gap-1.5 mt-auto mb-5">
                                            {nurse.specialties.map((specialty, idx) => (
                                                <span key={idx} className="bg-zinc-50 text-zinc-600 text-[10px] font-medium px-2 py-0.5 rounded border border-zinc-200/60">
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>

                                        <Link href="/#request-callback" className="mt-auto w-full py-2.5 bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white transition-colors duration-300 rounded-xl text-sm font-medium flex items-center justify-center gap-2 group/btn">
                                            <span>Request Nurse</span>
                                            <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-12 text-center text-zinc-500">
                                No nursing staff found in this state currently. We are continually expanding our network.
                            </div>
                        )}
                    </div>
                </section>

                {/* Bottom CTA Overlay */}
                <section className="w-full bg-teal-50 py-16 px-6 lg:px-8 border-t border-teal-100/50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900 mb-4">
                            Need a specialized care plan?
                        </h2>
                        <p className="text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Talk to our medical coordinators to design a custom in-home care plan tailored exactly to your loved one's needs.
                        </p>
                        <Link href="/#request-callback" className="inline-flex px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-medium transition-all shadow-md hover:-translate-y-0.5">
                            Speak to an Advisor
                        </Link>
                    </div>
                </section>

            </main>
        </div>
    )
}
