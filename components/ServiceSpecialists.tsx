"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

interface Specialist {
    type: "Doctor" | "Nurse" | "Caregiver";
    name: string;
    title: string;
    location: string;
    state: string;
    image: string;
    specialties: string[];
    description: string;
    experience: string;
    age?: number;
    rating?: number;
}

interface ServiceSpecialistsProps {
    title: string;
    subtitle: string;
    specialists: Specialist[];
    theme?: "teal" | "orange";
}

export default function ServiceSpecialists({ title, subtitle, specialists, theme = "teal" }: ServiceSpecialistsProps) {
    const isTeal = theme === "teal";

    return (
        <section className={`w-full py-16 lg:py-24 bg-white relative overflow-hidden border-b border-zinc-100`}>
            {/* Background elements */}
            <div className={`absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full opacity-20 pointer-events-none -z-10 ${isTeal ? 'bg-teal-50' : 'bg-orange-50'}`}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-8 items-end justify-between mb-16">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-900 leading-[1.1] mb-4"
                        >
                            {title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg text-zinc-600 leading-relaxed"
                        >
                            {subtitle}
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="shrink-0"
                    >
                        <Link href="/specialists" className={`inline-flex items-center gap-2 font-medium transition-colors ${isTeal ? 'text-teal-600 hover:text-teal-700' : 'text-orange-600 hover:text-orange-700'}`}>
                            View all specialists
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {specialists.map((person, index) => (
                        <motion.div
                            key={`${person.name}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 p-4 gap-5 items-center sm:items-stretch"
                        >
                            {/* Image Container */}
                            <div className="relative w-full sm:w-40 md:w-48 shrink-0 h-48 sm:h-auto rounded-xl overflow-hidden bg-zinc-50">
                                <div className={`absolute inset-0 ${isTeal ? 'bg-teal-900/5' : 'bg-orange-900/5'} group-hover:bg-transparent transition-colors duration-500 z-10`}></div>
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
                                <h3 className={`text-xl font-bold tracking-tight text-zinc-900 transition-colors line-clamp-1 mb-1 ${isTeal ? 'group-hover:text-teal-600' : 'group-hover:text-orange-600'}`}>
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
                                    <Link href="#request-callback" className="w-full sm:w-auto inline-flex px-6 py-2.5 bg-zinc-900 border border-zinc-900 text-white transition-colors duration-300 rounded-xl text-sm font-medium items-center justify-center gap-2 group/btn hover:bg-white hover:text-zinc-900 shadow-md">
                                        <span>Enquire Now</span>
                                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
