"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";

const faqs = [
    {
        question: "How does Bisvaran verify its medical professionals?",
        answer: "Every doctor, nurse, and specialist in our network undergoes a rigorous vetting process. We verify their medical licenses, review their clinical experience, and conduct background checks. We also continuously monitor patient feedback to ensure the highest standard of care."
    },
    {
        question: "How fast can I get an emergency ambulance?",
        answer: "Our 24/7 emergency orchestration platform instantly pings the nearest fully-equipped ambulances in our network. In most urban areas, we aim for a dispatch and arrival time of under 15 minutes, prioritizing life-saving speed."
    },
    {
        question: "Do you offer in-home nursing for chronic conditions?",
        answer: "Yes, we provide specialized in-home nursing care for a variety of chronic conditions, post-operative recovery, and elder care. Our tailored care plans are designed by senior doctors to ensure your loved ones get hospital-grade care at home."
    },
    {
        question: "Can I choose my preferred doctor or hospital?",
        answer: "Absolutely. While our intelligent system recommends the best specialists based on your specific medical needs and location, you always have the final say in selecting your preferred doctor or hospital from our premium network."
    },
    {
        question: "Is telehealth consultation available for all specialities?",
        answer: "Telehealth is available for a wide range of specialties including general medicine, dermatology, psychology, and follow-up consultations. However, for conditions requiring physical exams or immediate interventions, we will facilitate an in-person visit."
    }
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                {/* Left Side: Heading */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="lg:w-1/3 flex flex-col items-start text-left"
                >
                    <h4 className="inline-block text-teal-600 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full mb-4">
                        Got Questions?
                    </h4>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                        Frequently <br className="hidden lg:block" />
                        <span className="text-teal-500 italic">Asked.</span>
                    </h2>
                    <p className="text-base text-zinc-600 leading-relaxed mb-8">
                        Everything you need to know about the product and billing. For anything else, our concierge team is available 24/7.
                    </p>
                    <a href="#request-callback" className="text-teal-600 font-medium hover:text-teal-700 flex items-center gap-2 group transition-colors">
                        <span>Contact Support</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                </motion.div>

                {/* Right Side: Accordion */}
                <div className="lg:w-2/3 flex flex-col gap-4 w-full">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`w-full overflow-hidden transition-colors duration-300 rounded-2xl border ${isOpen ? 'border-teal-200 bg-teal-50/30 shadow-sm' : 'border-zinc-200 bg-white hover:border-zinc-300'}`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                                >
                                    <h3 className={`text-base sm:text-lg font-medium pr-8 transition-colors ${isOpen ? 'text-teal-800' : 'text-zinc-900'}`}>
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className={`shrink-0 size-8 rounded-full border flex items-center justify-center ${isOpen ? 'border-teal-200 bg-teal-50 text-teal-600' : 'border-zinc-200 text-zinc-400 bg-white'}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                                            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                        </svg>
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                                                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
