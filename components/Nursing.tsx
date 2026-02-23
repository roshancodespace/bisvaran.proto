"use client";

import React from "react";
import { motion } from "motion/react";

const nursingTypes = [
    {
        title: "Nurse Visit",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
        ),
        accent: "teal",
        features: [
            "Injection or Intravenous (IV) Medication",
            "Catheter & Feeding Tube Assistance",
            "Comprehensive Home Assessment",
            "Advanced Wound Care",
            "Nebulization Setup & Admin"
        ]
    },
    {
        title: "Critical Care Nursing",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        ),
        accent: "zinc",
        featured: true, // will make the background dark
        features: [
            "Post-Operative Recovery Care",
            "Continuous Patient Monitoring",
            "Life Support Equipment Management",
            "Rapid Emergency Intervention",
            "Strict Patient Safety Protocols"
        ]
    },
    {
        title: "Home Nursing Care",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        ),
        accent: "teal",
        features: [
            "Dedicated Nursing Caregiving",
            "Precise Medicine Administration",
            "Mobility & Vital Monitoring",
            "Palliative & Hospice Care",
            "Stroke Rehabilitation Support"
        ]
    }
];

export default function Nursing() {
    return (
        <section id="nursing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32 relative">
            <div className="text-center mb-16 lg:mb-24">
                <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="inline-block text-teal-600 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full mb-4"
                >
                    Expert Medical Staff
                </motion.h4>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-6"
                >
                    Specialized <span className="text-teal-500 italic">In-Home Nursing.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-zinc-600 max-w-2xl mx-auto text-lg"
                >
                    From quick medical visits to 24/7 critical intensive care, our certified nurses deliver hospital-grade medical attention at your doorstep.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                {nursingTypes.map((type, index) => {
                    const isDark = type.featured;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`p-8 lg:p-10 rounded-4xl flex flex-col transition-all duration-500 ${isDark ? 'bg-zinc-900 text-white shadow-2xl shadow-zinc-900/20 scale-[1.02] -translate-y-2' : 'bg-white border border-zinc-100 text-zinc-900 hover:border-zinc-300 hover:shadow-xl hover:-translate-y-1'}`}
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${isDark ? 'bg-white/10 text-white' : 'bg-zinc-50 text-teal-600'}`}>
                                {type.icon}
                            </div>

                            <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{type.title}</h3>

                            <ul className="flex-1 space-y-5 mb-10">
                                {type.features.map((feature, idx) => (
                                    <li key={idx} className="flex gap-4 items-start">
                                        <div className={`mt-1 shrink-0 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-semibold transition-all mt-auto tracking-wide ${isDark ? 'bg-white text-zinc-900 hover:bg-zinc-100' : 'bg-zinc-50 text-zinc-900 hover:bg-zinc-100 border border-zinc-200'}`}>
                                View Details & Charges
                            </button>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    );
}
