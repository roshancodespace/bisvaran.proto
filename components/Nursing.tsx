"use client";

import { motion } from "motion/react";

const nursingInclusions = [
    {
        name: "IV Medication",
        desc: "Injection or Intravenous therapy.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    },
    {
        name: "Post-Op Care",
        desc: "Surgical wound management and recovery.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
        name: "Critical Monitoring",
        desc: "24/7 dedicated ICU-level tracking.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    },
    {
        name: "Nebulization Setup",
        desc: "Respiratory support and administration.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M12 12a1 1 0 100-2 1 1 0 000 2z" /></svg>
    },
    {
        name: "Palliative Care",
        desc: "Comfort-focused end-of-life care.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    },
    {
        name: "Catheter Assist",
        desc: "Safe urinary and feeding tube management.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    },
    {
        name: "Vital Monitoring",
        desc: "Routine health condition assessments.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    },
    {
        name: "Stroke Rehab",
        desc: "Specialized post-stroke support.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
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

export default function Nursing() {
    return (
        <section id="nursing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 overflow-hidden relative">
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
                        Expert Medical Staff
                    </h4>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                        Specialized <br />
                        <span className="text-teal-500 italic">In-Home Nursing.</span>
                    </h2>
                    <p className="text-base text-zinc-600 leading-relaxed mb-8">
                        From quick medical visits to 24/7 critical intensive care, our certified nurses deliver hospital-grade medical attention at your doorstep. We ensure precise medical administration and constant monitoring.
                    </p>
                </motion.div>

                {/* Right Premium Grid */}
                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {nursingInclusions.map((item, index) => {
                        const iconColor = colorPalettes[index % colorPalettes.length];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className={`group flex gap-4 p-5 rounded-2xl border border-zinc-100 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 ${iconColor.split(' ')[0]} ${iconColor.split(' ')[2]}`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors bg-white ${iconColor.split(' ')[1]}`}>
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
