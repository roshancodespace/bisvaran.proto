"use client";
import { useState } from "react";
import Link from "next/link";

const doctors = [
    {
        name: "Dr. Rajesh Sharma",
        title: "Senior Cardiologist",
        location: "Mumbai",
        state: "Maharashtra",
        image: "/doctor-1.png",
        specialties: ["Interventional Cardiology", "Heart Failure", "Echo"],
        description: "Over 20 years of experience in complex angioplasties and preventative heart care.",
        experience: "22 Years"
    },
    {
        name: "Dr. Anjali Desai",
        title: "Consultant Neurologist",
        location: "New Delhi",
        state: "Delhi",
        image: "/doctor-2.png",
        specialties: ["Stroke Management", "Epilepsy", "Headache"],
        description: "Specializes in comprehensive stroke care and advanced electroencephalography.",
        experience: "15 Years"
    },
    {
        name: "Dr. Vikram Reddy",
        title: "Chief Orthopedic Surgeon",
        location: "Bengaluru",
        state: "Karnataka",
        image: "/doctor-1.png",
        specialties: ["Joint Replacement", "Sports Injuries", "Spine"],
        description: "Pioneer in minimally invasive robotic joint replacement surgeries.",
        experience: "18 Years"
    },
    {
        name: "Dr. Sneha Patel",
        title: "Pediatrician",
        location: "Ahmedabad",
        state: "Gujarat",
        image: "/doctor-2.png",
        specialties: ["Neonatology", "Childhood Asthma", "Vaccinations"],
        description: "Dedicated to holistic child wellness and early developmental tracking.",
        experience: "12 Years"
    },
    {
        name: "Dr. Arvind Kumar",
        title: "Oncologist",
        location: "Chennai",
        state: "Tamil Nadu",
        image: "/doctor-1.png",
        specialties: ["Medical Oncology", "Immunotherapy", "Breast Cancer"],
        description: "Leading research and personalized treatment plans for advanced-stage combat.",
        experience: "25 Years"
    },
    {
        name: "Dr. Priya Singh",
        title: "Dermatologist & Cosmetologist",
        location: "Hyderabad",
        state: "Telangana",
        image: "/doctor-2.png",
        specialties: ["Acne Treatment", "Laser Therapy", "Anti-Aging"],
        description: "Expert in clinical dermatology and non-invasive aesthetic procedures.",
        experience: "14 Years"
    }
];

export default function Doctors() {
    const [selectedState, setSelectedState] = useState("All States");

    // Extract unique states for the filter
    const states = ["All States", ...Array.from(new Set(doctors.map(d => d.state)))].sort();

    const filteredDoctors = doctors.filter(doctor =>
        selectedState === "All States" || doctor.state === selectedState
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
                            Our Specialists
                        </h4>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6 leading-[1.1]">
                            Expert Care <br className="hidden sm:block" />
                            <span className="text-teal-300 italic font-light">By Leading Minds.</span>
                        </h1>
                        <p className="text-lg text-teal-100/80 max-w-2xl mx-auto leading-relaxed">
                            Connect with top-tier specialists and distinguished doctors across the country. Our vetted network ensures you receive the highest standard of medical expertise.
                        </p>
                    </div>
                </section>

                {/* Doctors Grid & Filters */}
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
                        {filteredDoctors.length > 0 ? (
                            filteredDoctors.map((doctor, index) => (
                                <div key={index} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                                    {/* Image Container */}
                                    <div className="relative w-full h-40 overflow-hidden bg-zinc-100">
                                        <div className="absolute inset-0 bg-teal-900/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                        <img
                                            src={doctor.image}
                                            alt={doctor.name}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out object-top"
                                        />
                                        {/* Experience Badge */}
                                        <div className="absolute top-3 right-3 z-20 flex items-center bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
                                            <span className="text-[10px] font-bold text-teal-700">{doctor.experience} Exp</span>
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-5 flex flex-col grow">
                                        <div className="flex items-start justify-between gap-2 mb-1">
                                            <h3 className="text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-teal-600 transition-colors line-clamp-1">
                                                {doctor.name}
                                            </h3>
                                        </div>
                                        <p className="text-teal-600 font-medium text-[10px] mb-2 uppercase tracking-wider">{doctor.title}</p>

                                        <div className="flex items-center gap-1.5 text-zinc-500 mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,39.08,8,8,0,0,0,9.1,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm36.22,173.05A238.4,238.4,0,0,1,128,223.6a238.4,238.4,0,0,1-36.22-34.55c-24-27.59-35.78-56.16-35.78-85a72,72,0,0,1,144,0C200,132.89,188.23,161.46,164.22,189.05Z"></path></svg>
                                            <span className="text-xs">{doctor.location}, {doctor.state}</span>
                                        </div>

                                        <p className="text-zinc-500 text-xs leading-relaxed mb-4 line-clamp-2">
                                            {doctor.description}
                                        </p>

                                        {/* Specialties Tags */}
                                        <div className="flex flex-wrap gap-1.5 mt-auto mb-5">
                                            {doctor.specialties.map((specialty, idx) => (
                                                <span key={idx} className="bg-zinc-50 text-zinc-600 text-[10px] font-medium px-2 py-0.5 rounded border border-zinc-200/60">
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>

                                        <Link href="/#request-callback" className="mt-auto w-full py-2.5 bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white transition-colors duration-300 rounded-xl text-sm font-medium flex items-center justify-center gap-2 group/btn">
                                            <span>Book Appointment</span>
                                            <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-12 text-center text-zinc-500">
                                No specialists found in this state currently. We are continually expanding our network.
                            </div>
                        )}
                    </div>
                </section>

                {/* Bottom CTA Overlay */}
                <section className="w-full bg-teal-50 py-16 px-6 lg:px-8 border-t border-teal-100/50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900 mb-4">
                            Need a specific specialist?
                        </h2>
                        <p className="text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                            If you require a highly specific surgical or medical expert not listed here, our concierge desk can arrange a consultation with the nation's best.
                        </p>
                        <Link href="/#request-callback" className="inline-flex px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-medium transition-all shadow-md hover:-translate-y-0.5">
                            Request Custom Match
                        </Link>
                    </div>
                </section>

            </main>
        </div>
    )
}
