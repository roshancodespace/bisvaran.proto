"use client";

import { motion } from "motion/react";

const transitInclusions = [
    {
        name: "Travel Arrangements",
        desc: "End-to-end planning and booking support.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    },
    {
        name: "Guardian Coordination",
        desc: "Continuous updates to family members.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
    },
    {
        name: "Mobility Assistance",
        desc: "Help with boarding, alighting, and moving.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    },
    {
        name: "Meal Feeding Support",
        desc: "Nutritional assistance during the journey.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
    },
    {
        name: "Medication Reminders",
        desc: "Timely administration of prescribed medicines.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    },
    {
        name: "Continuous Comfort",
        desc: "Ensuring well-being and safety at all times.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    },
];

const colorPalettes = [
    "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
    "bg-purple-50 text-purple-600 group-hover:bg-purple-100",
    "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100",
    "bg-amber-50 text-amber-600 group-hover:bg-amber-100",
    "bg-rose-50 text-rose-600 group-hover:bg-rose-100",
    "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100",
    "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100",
    "bg-fuchsia-50 text-fuchsia-600 group-hover:bg-fuchsia-100",
];

export default function TravelAssistance() {
    return (
        <section id="travel-assistance" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 overflow-hidden relative">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

                {/* Left Intro Panel */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="lg:w-1/3 text-left"
                >
                    <h4 className="inline-block text-teal-600 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full mb-4">
                        Travel Assistance
                    </h4>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                        Safe Transit <br />
                        <span className="text-teal-500 italic">For Loved Ones.</span>
                    </h2>
                    <p className="text-base text-zinc-600 leading-relaxed mb-8">
                        Whether it's a doctor's appointment or a long-distance journey, our trained travel assistants ensure a safe, comfortable, and well-managed transit experience with continuous support.
                    </p>
                </motion.div>

                {/* Right Premium Grid */}
                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {transitInclusions.map((item, index) => {
                        const iconColor = colorPalettes[index % colorPalettes.length];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group flex gap-4 p-5 rounded-2xl border border-zinc-100 bg-white hover:border-teal-100 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${iconColor}`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-zinc-900 text-base mb-1 group-hover:text-teal-700 transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-600 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-teal-50/50 blur-3xl -z-10 rounded-full pointer-events-none"></div>
        </section>
    );
}
