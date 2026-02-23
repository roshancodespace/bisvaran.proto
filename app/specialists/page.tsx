"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import type { SpecialistData } from "@/data/specialists";

export default function Specialists() {
    const [specialists, setSpecialists] = useState<SpecialistData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<"All" | "Doctor" | "Nurse">("All");
    const [selectedState, setSelectedState] = useState("All Locations");

    useEffect(() => {
        const fetchSpecialists = async () => {
            try {
                const response = await fetch('/api/specialists');
                if (response.ok) {
                    const data = await response.json();
                    setSpecialists(data);
                }
            } catch (error) {
                console.error("Failed to fetch specialists:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSpecialists();
    }, []);

    // Extract unique states for the filter based on category (if applicable) or all data
    const states = ["All Locations", ...Array.from(new Set(specialists.map(s => s.state)))].sort();

    const filteredData = specialists.filter(s => {
        const matchesCategory = selectedCategory === "All" || s.type === selectedCategory;
        const matchesState = selectedState === "All Locations" || s.state === selectedState;
        return matchesCategory && matchesState;
    });

    return (
        <div className="min-h-screen flex flex-col bg-zinc-50/30">
            <main className="grow flex flex-col w-full">

                {/* Hero Section */}
                <section className="w-full bg-teal-900 text-white pt-24 pb-16 lg:pt-28 lg:pb-20 px-6 lg:px-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>

                    <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
                        <h4 className="inline-block text-teal-100 font-semibold text-xs sm:text-sm tracking-widest uppercase bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/20">
                            Elite Medical Network
                        </h4>
                        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-medium tracking-tight mb-6 leading-[1.1]">
                            Expert Doctors & Nurses <br className="hidden sm:block" />
                            <span className="text-teal-300 italic font-light">Directly To You.</span>
                        </h1>
                        <p className="text-lg text-teal-100/80 max-w-2xl mx-auto leading-relaxed">
                            Connect with India's top-tier medical professionals. Whether you need a specialist consultation or critical care nursing, our vetted network ensures gold-standard care.
                        </p>
                    </div>
                </section>

                {/* Directory Section */}
                <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">

                    {/* Filters Container */}
                    <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-6 border-b border-zinc-200/60">
                        {/* Category Toggle */}
                        <div className="flex bg-zinc-100/80 p-1 rounded-full border border-zinc-200/50">
                            {(["All", "Doctor", "Nurse"] as const).map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${selectedCategory === cat
                                        ? "bg-white text-teal-700 shadow-sm"
                                        : "text-zinc-500 hover:text-zinc-800"
                                        }`}
                                >
                                    {cat === "All" ? "All Specialists" : `${cat}s`}
                                </button>
                            ))}
                        </div>

                        {/* Location Select (Dropdown approach for cleaner UI) */}
                        <div className="relative">
                            <select
                                value={selectedState}
                                onChange={(e) => setSelectedState(e.target.value)}
                                className="appearance-none bg-white border border-zinc-200 text-zinc-700 text-sm font-medium rounded-full px-5 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 cursor-pointer shadow-sm hover:border-teal-300 transition-colors"
                            >
                                {states.map(state => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Specialists Grid */}
                    {isLoading ? (
                        <div className="w-full flex justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                            {filteredData.length > 0 ? (
                                filteredData.map((person, index) => (
                                    <motion.div
                                        key={`${person.name}-${index}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        className="group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl hover:border-teal-100 transition-all duration-500 p-4 gap-5 items-center sm:items-stretch"
                                    >
                                        {/* Image Container */}
                                        <div className="relative w-full sm:w-40 md:w-48 shrink-0 h-48 sm:h-auto rounded-xl overflow-hidden bg-zinc-50">
                                            <div className="absolute inset-0 bg-teal-900/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={person.image}
                                                alt={person.name}
                                                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out object-top"
                                            />
                                            {/* Rating Badge */}
                                            {person.rating && (
                                                <div className="absolute top-3 left-3 z-20 flex items-center gap-1 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
                                                    <svg className="w-3.5 h-3.5 text-amber-500 fill-amber-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                    <span className="text-[11px] font-bold text-zinc-900">{person.rating}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Content Container */}
                                        <div className="flex flex-col grow justify-center py-2 min-w-0 w-full">
                                            <h3 className="text-xl font-bold tracking-tight text-zinc-900 group-hover:text-teal-600 transition-colors line-clamp-1 mb-1">
                                                {person.name}
                                            </h3>
                                            <p className="text-zinc-500 font-medium text-sm mb-4 truncate">{person.title}</p>

                                            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 font-medium mb-5">
                                                <div className="flex items-center gap-1.5">
                                                    <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                                    <span>Age {person.age || 40}</span>
                                                </div>
                                                <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div>
                                                <div className="flex items-center gap-1.5">
                                                    <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                                    <span>{person.experience} Yrs Exp</span>
                                                </div>
                                            </div>

                                            <div className="mt-auto">
                                                <Link href="/#request-callback" className="w-full sm:w-auto inline-flex px-6 py-2.5 bg-zinc-900 border border-zinc-900 text-white transition-colors duration-300 rounded-xl text-sm font-medium items-center justify-center gap-2 group/btn hover:bg-white hover:text-zinc-900 shadow-md">
                                                    <span>Enquire Now</span>
                                                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-full py-20 flex flex-col items-center justify-center bg-white rounded-3xl border border-dashed border-zinc-200">
                                    <span className="p-4 bg-zinc-50 rounded-full mb-4">
                                        <svg className="w-8 h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </span>
                                    <h3 className="text-xl font-semibold text-zinc-900 mb-2">No professionals found</h3>
                                    <p className="text-zinc-500 max-w-sm text-center text-sm">
                                        We couldn't find any {selectedCategory !== "All" ? selectedCategory.toLowerCase() + "s" : "specialists"} matching your filter criteria. We are continually expanding our network.
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </section>

                {/* Bottom CTA Overlay */}
                <section className="w-full bg-teal-50 py-16 lg:py-24 px-6 lg:px-8 border-t border-teal-100/50 mt-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900 mb-4">
                            Need a custom care plan?
                        </h2>
                        <p className="text-zinc-600 mb-8 leading-relaxed text-lg">
                            If you require a specific surgical expert or a tailored in-home nursing plan, our concierge desk can arrange a consultation with the nation's best.
                        </p>
                        <Link href="/#request-callback" className="inline-flex items-center gap-2 px-8 py-3.5 bg-zinc-900 hover:bg-teal-600 text-white rounded-full font-medium transition-all shadow-xl shadow-zinc-900/10 hover:-translate-y-0.5 group">
                            <span>Request Custom Match</span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    )
}
