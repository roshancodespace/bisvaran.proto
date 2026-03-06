"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const coreServices = [
    {
        id: "nursing",
        title: "In-Home Nursing",
        description: "Post-operative recovery, ICU-level care, and chronic illness management delivered by certified nurses.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
        color: "bg-teal-50 text-teal-700",
        bgDefault: "bg-teal-50",
        bgHover: "hover:bg-teal-100/50",
        href: "/services/home-nursing"
    },
    {
        id: "elderly",
        title: "Elderly Care",
        description: "Compassionate daily assistance, mobility support, and companionship for your loved ones.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        color: "bg-orange-50 text-orange-700",
        bgDefault: "bg-orange-50",
        bgHover: "hover:bg-orange-100/50",
        href: "/services/elderly-care"
    },
    {
        id: "doctor",
        title: "Doctor Consulting",
        description: "Instant video consultations or home visits from top-tier general physicians and specialists.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
        color: "bg-blue-50 text-blue-700",
        bgDefault: "bg-blue-50",
        bgHover: "hover:bg-blue-100/50",
        href: "/services/doctor-consulting"
    },
    {
        id: "doctor_visit",
        title: "Doctor Visit at Home",
        description: "Personalized, direct-to-home physical checkups from certified medical professionals.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        color: "bg-purple-50 text-purple-700",
        bgDefault: "bg-purple-50",
        bgHover: "hover:bg-purple-100/50",
        href: "/#request-callback"
    },
    {
        id: "attendants",
        title: "Hospital Attendants",
        description: "Dedicated 12-hour or 24-hour bedside attendants to assist patients during hospital stays.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
        color: "bg-rose-50 text-rose-700",
        bgDefault: "bg-rose-50",
        bgHover: "hover:bg-rose-100/50",
        href: "/services/hospital-attendants"
    },
    {
        id: "travel",
        title: "Travel Assistance",
        description: "Professional caregivers to accompany and assist patients during local transit or long flights.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: "bg-emerald-50 text-emerald-700",
        bgDefault: "bg-emerald-50",
        bgHover: "hover:bg-emerald-100/50",
        href: "/services/travel-assistance"
    },
    {
        id: "blood_sampling",
        title: "Blood Sampling",
        description: "Safe, hygienic, and convenient lab sample collections directly from your home.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        color: "bg-fuchsia-50 text-fuchsia-700",
        bgDefault: "bg-fuchsia-50",
        bgHover: "hover:bg-fuchsia-100/50",
        href: "/#request-callback"
    },
    {
        id: "specialized",
        title: "Specialized Therapies",
        description: "In-home physiotherapy, speech therapy, and palliative care tailored to individual needs.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        color: "bg-indigo-50 text-indigo-700",
        bgDefault: "bg-indigo-50",
        bgHover: "hover:bg-indigo-100/50",
        href: "#request-callback"
    }
];

export default function Services() {
    return (
        <section id="services" className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 overflow-hidden relative">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="inline-block text-teal-600 font-semibold text-xs tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full mb-3"
                >
                    Core Services
                </motion.h4>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900 leading-[1.1]"
                >
                    Compassionate care, <span className="text-teal-500 italic">where you need it.</span>
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
                {coreServices.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                    >
                        <Link href={service.href} className="block group h-full">
                            <div className={`p-6 rounded-2xl h-full border border-zinc-100 transition-all duration-300 ${service.bgDefault} ${service.bgHover} hover:shadow-lg hover:-translate-y-1 relative overflow-hidden flex flex-col`}>
                                {/* Soft background circle for material feel */}
                                <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-30 transition-transform duration-500 group-hover:scale-150 ${service.color}`}></div>

                                <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm ${service.color}`}>
                                    {service.icon}
                                </div>
                                <h3 className="relative z-10 text-xl font-bold text-zinc-900 mb-2 tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="relative z-10 text-zinc-600 text-sm leading-relaxed mb-4 grow">
                                    {service.description}
                                </p>
                                <div className="relative z-10 flex items-center gap-1.5 text-xs font-semibold text-zinc-900 group-hover:text-teal-600 transition-colors mt-auto uppercase tracking-wide">
                                    <span>Learn more</span>
                                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-10">
                <Link href="#request-callback" className="inline-flex items-center gap-2 px-6 py-2.5 bg-zinc-900 text-white hover:bg-teal-600 font-medium text-sm rounded-full transition-colors shadow-md shadow-zinc-900/10">
                    <span>Discuss Your Needs</span>
                </Link>
            </div>
        </section>
    );
}
