"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Dummy pricing data based on state selection
const statePricingData: Record<string, any> = {
    "Delhi NCR": {
        hygiene: { price: "₹800", duration: "Per Shift" },
        basic: { price: "₹1,200", duration: "12 Hours" },
        personal: { price: "₹2,000", duration: "24 Hours" }
    },
    "Maharashtra": {
        hygiene: { price: "₹900", duration: "Per Shift" },
        basic: { price: "₹1,400", duration: "12 Hours" },
        personal: { price: "₹2,200", duration: "24 Hours" }
    },
    "Karnataka": {
        hygiene: { price: "₹850", duration: "Per Shift" },
        basic: { price: "₹1,300", duration: "12 Hours" },
        personal: { price: "₹2,100", duration: "24 Hours" }
    },
    "Tamil Nadu": {
        hygiene: { price: "₹750", duration: "Per Shift" },
        basic: { price: "₹1,100", duration: "12 Hours" },
        personal: { price: "₹1,900", duration: "24 Hours" }
    }
};

const careTiers = [
    {
        id: "hygiene",
        title: "Hygiene Services",
        desc: "Essential sanitation and grooming support.",
        features: [
            "Toileting Support",
            "Diaper Changing",
            "Bathing Assistance",
            "Personal Grooming",
            "Shaving & Nail Trimming"
        ]
    },
    {
        id: "basic",
        title: "Basic Caregiving",
        desc: "Comprehensive daily living assistance.",
        featured: true,
        features: [
            "Everything in Hygiene",
            "Mobility Assistance",
            "Medication Reminders",
            "Elder's Room Housekeeping",
            "Companionship & Meal Feeding"
        ]
    },
    {
        id: "personal",
        title: "Personal Caregiving",
        desc: "Round-the-clock dedicated oversight.",
        features: [
            "Everything in Basic",
            "24/7 Dedicated Support",
            "Vitals Monitoring",
            "Dietary Management",
            "Physical Therapy Assistance"
        ]
    }
];

export default function Pricing() {
    const [selectedState, setSelectedState] = useState("Delhi NCR");
    const currentPricing = statePricingData[selectedState];

    return (
        <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32 relative">
            <div className="absolute top-0 inset-x-0 h-px w-full bg-linear-to-r from-transparent via-zinc-200 to-transparent"></div>

            <div className="text-center mb-16 lg:mb-20">
                <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="inline-block text-teal-600 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full mb-4"
                >
                    Transparent Pricing
                </motion.h4>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-8"
                >
                    Caregiving <span className="text-teal-500 italic">Charges.</span>
                </motion.h2>

                {/* Sleek State Selector Dropdown */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="inline-flex items-center bg-white border border-zinc-200 rounded-full pl-5 pr-2 py-2 shadow-xs hover:shadow-md transition-shadow"
                >
                    <span className="text-zinc-500 text-sm font-medium">Region:</span>
                    <div className="relative ml-3">
                        <select
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                            className="bg-transparent text-zinc-900 font-bold focus:outline-none cursor-pointer appearance-none pr-8 py-1 rounded-full hover:bg-zinc-50 transition-colors"
                        >
                            {Object.keys(statePricingData).map((state) => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </select>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-teal-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                {careTiers.map((tier, index) => {
                    const isDark = tier.featured;

                    return (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`p-8 lg:p-10 rounded-3xl flex flex-col relative transition-all duration-300 ${isDark ? 'bg-zinc-900 text-white shadow-2xl shadow-zinc-900/10 py-12 lg:py-16' : 'bg-white border border-zinc-100 text-zinc-900 hover:border-zinc-300 hover:shadow-xl'}`}
                        >
                            {isDark && (
                                <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
                                    <span className="bg-teal-500 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-sm">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-8 border-b border-zinc-500/20 pb-8">
                                <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{tier.title}</h3>
                                <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>{tier.desc}</p>
                            </div>

                            <ul className="flex-1 space-y-4 mb-10">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx} className="flex gap-3 items-start">
                                        <div className={`mt-0.5 shrink-0 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className={`text-sm md:text-base leading-relaxed font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-6 border-t border-zinc-500/20 mb-8 overflow-hidden">
                                <AnimatePresence mode="popLayout">
                                    <motion.div
                                        key={currentPricing[tier.id].price}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col gap-1"
                                    >
                                        <div className="flex items-baseline gap-2">
                                            <span className={`text-4xl font-black ${isDark ? 'text-white' : 'text-zinc-900'}`}>{currentPricing[tier.id].price}</span>
                                        </div>
                                        <span className={`text-sm font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>{currentPricing[tier.id].duration}</span>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <button className={`w-full py-4 rounded-full font-bold transition-all tracking-wide ${isDark ? 'bg-teal-500 text-white hover:bg-teal-600 shadow-lg shadow-teal-500/30' : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'}`}>
                                Book {tier.title}
                            </button>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    );
}
