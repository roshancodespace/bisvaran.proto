"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

export type PricingCategory = "home-nursing" | "elderly-care" | "hospital-attendants" | "travel-assistance" | "doctor-consulting";

interface PricingTier {
    id: string;
    title: string;
    desc: string;
    features: string[];
    featured?: boolean;
    price10h: string;
    price24h: string;
    duration10h?: string;
    duration24h?: string;
}

const pricingData: Record<PricingCategory, { title: string; subtitle: string; tiers: PricingTier[] }> = {
    "home-nursing": {
        title: "Home Nursing Rates",
        subtitle: "Professional Medical Care",
        tiers: [
            {
                id: "nurse-visit",
                title: "Nurse Visit",
                desc: "Professional nursing care at home for quick procedures.",
                price10h: "₹650 - ₹1100",
                price24h: "₹650 - ₹1100",
                duration10h: "Visit",
                duration24h: "Visit",
                features: [
                    "Injection or Intravenous (IV) Medication",
                    "Assisting With Catheters, Oxygen Equipment, or Feeding Tubes",
                    "Home Assessment",
                    "Wound Care",
                    "Nebulization"
                ]
            },
            {
                id: "critical-care",
                title: "Critical Care Nursing",
                desc: "Intensive monitoring and life support management.",
                featured: true,
                price10h: "₹1850",
                price24h: "₹2550",
                features: [
                    "Post Operative Care",
                    "Patient Monitoring and Assessment",
                    "Managing Life Support Equipment",
                    "Emergency Response and Intervention",
                    "Ensuring Patient Safety"
                ]
            },
            {
                id: "home-nursing-care",
                title: "Home Nursing Care",
                desc: "Comprehensive day-to-day nursing aid and rehab.",
                price10h: "₹1450",
                price24h: "₹1650",
                features: [
                    "Nursing Caregiving",
                    "Medicine Administration",
                    "Mobility Support",
                    "Vital Monitoring",
                    "Urinary Catheterisation Care",
                    "Palliative & Hospice Care At Home",
                    "Wound Care",
                    "Stroke Rehabilitation at Home"
                ]
            }
        ]
    },
    "elderly-care": {
        title: "Elderly Care Pricing",
        subtitle: "Compassionate Support",
        tiers: [
            {
                id: "personal-caregiver",
                title: "Personal Caregiver",
                desc: "Dedicated caring and daily living assistance.",
                featured: true,
                price10h: "₹1350",
                price24h: "₹1600",
                features: [
                    "Personal Hygiene and Grooming",
                    "Diaper Change",
                    "Meal Feeding Assistance",
                    "Medication Reminder",
                    "Toileting Support",
                    "Elder's Room Housekeeping",
                    "Companionship"
                ]
            },
            {
                id: "add-ons",
                title: "Additional Add-Ons",
                desc: "Extra support for household needs.",
                price10h: "Custom",
                price24h: "Custom",
                duration10h: "Per Requirement",
                duration24h: "Per Requirement",
                features: [
                    "Cooking",
                    "Light housekeeping",
                    "Additional elder support",
                    "Cloth washing"
                ]
            }
        ]
    },
    "hospital-attendants": {
        title: "Hospital Attendants",
        subtitle: "Reliable Support",
        tiers: [
            {
                id: "hospital-attendants-tier",
                title: "Hospital Attendants",
                desc: "Reliable support during hospital stays.",
                featured: true,
                price10h: "₹1100",
                price24h: "₹1500",
                features: [
                    "Co-ordinating With Hospital Staff",
                    "Co-ordinating With Doctors",
                    "Co-ordinating With Guardians",
                    "Emergency Response and Intervention",
                    "Meal Feeding Assistance"
                ]
            }
        ]
    },
    "travel-assistance": {
        title: "Travel Assistance",
        subtitle: "Safe Transit Details",
        tiers: [
            {
                id: "travel-assistance-tier",
                title: "Travel Assistance",
                desc: "Safe and comfortable transit support.",
                featured: true,
                price10h: "₹1200",
                price24h: "₹2000",
                features: [
                    "Making Travel Arrangements",
                    "Co-ordinating With Guardians",
                    "Mobility Assistance",
                    "Meal Feeding Assistance",
                    "Medication Reminder",
                    "Ensuring Comfort at all Times"
                ]
            }
        ]
    },
    "doctor-consulting": {
        title: "Consulting Charges",
        subtitle: "Transparent Specialist Pricing",
        tiers: [
            {
                id: "online-consult",
                title: "Online Consultation",
                desc: "Quick virtual guidance from home.",
                price10h: "₹500",
                price24h: "₹500",
                duration10h: "Session",
                duration24h: "Session",
                features: [
                    "24/7 Virtual Availability",
                    "Video & Audio Calls",
                    "Digital Prescriptions",
                    "Follow-up Guidance"
                ]
            },
            {
                id: "home-visit",
                title: "Home Visit Doctor",
                desc: "Comprehensive physical exams at home.",
                featured: true,
                price10h: "₹1500",
                price24h: "₹1500",
                duration10h: "Visit",
                duration24h: "Visit",
                features: [
                    "Comprehensive Physical Exam",
                    "Vitals Monitoring",
                    "Immediate Diagnosis",
                    "Post-Hospitalization Checks"
                ]
            },
            {
                id: "specialist-consult",
                title: "Specialist Consultation",
                desc: "Expert guidance for specific needs.",
                price10h: "₹2000",
                price24h: "₹2000",
                duration10h: "Visit",
                duration24h: "Visit",
                features: [
                    "Cardiologists & Orthopedists",
                    "Pediatricians",
                    "Chronic Disease Management",
                    "Second Opinion Service"
                ]
            }
        ]
    }
};

interface PricingProps {
    category?: PricingCategory;
}

export default function Pricing({ category = "home-nursing" }: PricingProps) {
    const [duration, setDuration] = useState<"10h" | "24h">("10h");
    const data = pricingData[category] || pricingData["home-nursing"];

    return (
        <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative">
            <div className="absolute top-0 inset-x-0 h-px w-full bg-linear-to-r from-transparent via-zinc-200 to-transparent"></div>

            <div className="text-center mb-10 lg:mb-12">
                <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="inline-block text-teal-600 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full mb-4"
                >
                    {data.subtitle}
                </motion.h4>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-8"
                >
                    {data.title.split(' ').map((word, idx) =>
                        idx === data.title.split(' ').length - 1 ? (
                            <span key={idx} className="text-teal-500 italic"> {word}</span>
                        ) : (
                            word + ' '
                        )
                    )}
                </motion.h2>

                {/* Duration Toggle Switch */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="inline-flex bg-zinc-100 p-1 rounded-full relative shadow-inner mb-2"
                >
                    <button
                        onClick={() => setDuration("10h")}
                        className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-colors ${duration === "10h" ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-700"}`}
                    >
                        10 Hours
                    </button>
                    <button
                        onClick={() => setDuration("24h")}
                        className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-colors ${duration === "24h" ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-700"}`}
                    >
                        24 Hours
                    </button>

                    {/* Sliding active background */}
                    <div
                        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm transition-transform duration-300 ease-out`}
                        style={{
                            transform: duration === "10h" ? "translateX(0)" : "translateX(100%)",
                            left: "4px"
                        }}
                    ></div>
                </motion.div>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-${data.tiers.length === 1 ? '1 max-w-xl mx-auto' : data.tiers.length === 2 ? '2 max-w-4xl mx-auto' : '3 max-w-6xl mx-auto'} gap-6 items-stretch`}>
                {data.tiers.map((tier, index) => {
                    const isDark = tier.featured;
                    const price = duration === "10h" ? tier.price10h : tier.price24h;
                    const durationLabel = duration === "10h" ? (tier.duration10h || "10 Hours") : (tier.duration24h || "24 Hours");

                    return (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`p-6 lg:p-8 rounded-3xl flex flex-col relative transition-all duration-300 ${isDark ? 'bg-zinc-900 text-white shadow-2xl shadow-zinc-900/10 py-8 lg:py-10 top-0 lg:-top-2' : 'bg-white border border-zinc-100 text-zinc-900 hover:border-zinc-300 hover:shadow-xl'}`}
                        >
                            {isDark && (
                                <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
                                    <span className="bg-teal-500 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-sm">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-8 border-b border-zinc-500/20 pb-8">
                                <h3 className={`text-2xl font-bold mb-2 tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>{tier.title}</h3>
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
                                        key={price + durationLabel}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col gap-1"
                                    >
                                        <div className="flex items-baseline gap-2">
                                            <span className={`text-4xl font-black tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>{price}</span>
                                        </div>
                                        <span className={`text-sm font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                            {tier.price10h === "Custom" ? "Contact Us" : `Onwards / ${durationLabel}`}
                                        </span>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <Link
                                href="#request-callback"
                                className={`block text-center w-full py-4 rounded-full font-bold transition-all tracking-wide ${isDark ? 'bg-teal-500 text-white hover:bg-teal-600 shadow-lg shadow-teal-500/30' : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'}`}
                            >
                                Enquire Now
                            </Link>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    );
}
