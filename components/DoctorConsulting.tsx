"use client";

import React from "react";
import { motion } from "motion/react";

const consultationInclusions = [
    {
        name: "Virtual Consults",
        desc: "24/7 video and audio availability.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
    },
    {
        name: "Home Visit Doctor",
        desc: "Comprehensive physical exams at home.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    },
    {
        name: "Specialist Care",
        desc: "Cardiologists, pediatricians, and more.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    },
    {
        name: "Digital Prescriptions",
        desc: "Instant access to medical reports.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    },
    {
        name: "Chronic Disease",
        desc: "Management plans and follow-ups.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
    },
    {
        name: "Second Opinion",
        desc: "Expert guidance for critical cases.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    },
    {
        name: "Immediate Diagnosis",
        desc: "Rapid assessments and guidance.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" /></svg>
    },
    {
        name: "Post-Hospital Check",
        desc: "Smooth recovery monitoring from home.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
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

export default function DoctorConsulting() {
    return (
        <section id="doctor-consulting" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 overflow-hidden relative">
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
                        Qualified Specialists
                    </h4>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                        Expert <br />
                        <span className="text-teal-500 italic">Doctor Consultations.</span>
                    </h2>
                    <p className="text-base text-zinc-600 leading-relaxed mb-8">
                        Connect with highly qualified doctors through online virtual visits or comprehensive in-home checkups, tailored to your health needs. Ensure you get immediate specialist care on demand.
                    </p>
                </motion.div>

                {/* Right Premium Grid */}
                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {consultationInclusions.map((item, index) => {
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
