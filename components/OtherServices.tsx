"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const otherServices = [
    "Travel Assistant",
    "Post Operative Care",
    "Nurse for Injection At Home",
    "Wound Dressing At Home",
    "Dementia Care",
    "Long Term Nursing Care",
    "Hospital Attendant Services",
    "Nurse for IV Infusion At Home",
    "Short Term Nursing Care",
    "Critical Care Nursing At Home"
];

export default function OtherServices() {
    const [activeTab, setActiveTab] = useState("Other Services");

    return (
        <section id="other-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32 relative">
            <div className="bg-zinc-900 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-zinc-900/20 relative">

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-full h-full bg-linear-to-bl from-teal-900/20 to-transparent pointer-events-none"></div>

                <div className="flex flex-col lg:flex-row">

                    {/* Left: Headers & Context */}
                    <div className="lg:w-1/3 p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col justify-center relative z-10">
                        <motion.h4
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                            className="inline-block text-teal-400 font-semibold text-xs sm:text-sm tracking-wider uppercase mb-4"
                        >
                            Complete Coverage
                        </motion.h4>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-10"
                        >
                            More Than Just <br /> <span className="text-teal-400 italic">Basic Care.</span>
                        </motion.h2>

                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => setActiveTab("Other Services")}
                                className={`text-left px-6 py-4 rounded-xl text-lg font-medium transition-all ${activeTab === 'Other Services' ? 'bg-zinc-800 text-white shadow-inner' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
                            >
                                Specialized Services
                            </button>
                            <button
                                onClick={() => setActiveTab("Join Us")}
                                className={`text-left px-6 py-4 rounded-xl text-lg font-medium transition-all ${activeTab === 'Join Us' ? 'bg-zinc-800 text-white shadow-inner' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
                            >
                                Join Our Network
                            </button>
                        </div>
                    </div>

                    {/* Right: Content List */}
                    <div className="lg:w-2/3 p-10 lg:p-16 relative z-10 min-h-[500px] flex items-center">
                        <AnimatePresence mode="wait">
                            {activeTab === "Other Services" ? (
                                <motion.div
                                    key="services"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 w-full"
                                >
                                    {otherServices.map((service, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            className="group flex items-center gap-4 text-zinc-300 hover:text-white transition-colors cursor-pointer py-2 border-b border-zinc-800/50"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors text-zinc-500">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <span className="font-medium text-lg lg:text-xl">{service}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="join"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col items-start justify-center w-full"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-8">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    </div>
                                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">Become a Certified Specialist</h3>
                                    <p className="text-zinc-400 text-lg mb-10 max-w-xl leading-relaxed">
                                        Join Bisvaran&apos;s elite network of medical professionals. We provide competitive compensation, flexible hours, and top-tier support infrastructure for both Doctors and Nurses across India.
                                    </p>
                                    <Link href="#contact" className="px-8 py-4 bg-teal-500 text-white rounded-full font-bold hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20 tracking-wide">
                                        Apply Now
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
