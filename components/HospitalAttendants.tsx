"use client";

import { motion } from "motion/react";

const attendantInclusions = [
    {
        name: "Hospital Staff Coordination",
        desc: "Seamless communication with nurses & admins.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    },
    {
        name: "Doctor Coordination",
        desc: "Managing appointments and medical updates.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    },
    {
        name: "Guardian Coordination",
        desc: "Keeping family members informed 24/7.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
    },
    {
        name: "Emergency Response",
        desc: "Rapid intervention during unexpected events.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
        name: "Meal Feeding",
        desc: "Nutritional support and assistance during stays.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
    },
    {
        name: "Constant Supervision",
        desc: "Continuous bedside monitoring and care.",
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
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

export default function HospitalAttendants() {
    return (
        <section id="hospital-attendants" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 overflow-hidden relative">
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
                        Hospital Attendants
                    </h4>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                        Reliable Support <br />
                        <span className="text-teal-500 italic">During Stays.</span>
                    </h2>
                    <p className="text-base text-zinc-600 leading-relaxed mb-8">
                        Hospital stays can be overwhelming. Our professional hospital attendants provide constant bedside support, seamless coordination with medical staff, and keep family members updated throughout the recovery process.
                    </p>
                </motion.div>

                {/* Right Premium Grid */}
                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {attendantInclusions.map((item, index) => {
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
