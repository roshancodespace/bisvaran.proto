"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";

export type FaqCategory = "general" | "home-nursing" | "elderly-care" | "hospital-attendants" | "travel-assistance" | "doctor-consulting";

const faqData: Record<FaqCategory, { question: string, answer: string }[]> = {
    general: [
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
    ],
    "home-nursing": [
        {
            question: "What qualifications do your home nurses have?",
            answer: "All our home nurses are registered professionals with verified licenses. Depending on your needs, we provide Registered Nurses (RNs) for critical care and complex medical tasks, or trained nursing assistants for basic care and monitoring."
        },
        {
            question: "Can a nurse stay overnight or 24/7?",
            answer: "Yes, we offer flexible shift durations including 10-hour day/night shifts, 12-hour shifts, and complete 24/7 live-in nursing care depending on the patient's condition and requirements."
        },
        {
            question: "Do nurses bring their own medical equipment?",
            answer: "Nurses carry a basic nursing kit (stethoscope, BP monitor, thermometer). For specialized equipment like oxygen cylinders, hospital beds, or monitors, we can arrange rentals directly to your home before the service begins."
        },
        {
            question: "How quickly can a nurse be assigned?",
            answer: "In urgent scenarios, we can often deploy a qualified nurse within 4 to 6 hours in major metropolitan areas following a rapid clinical assessment."
        }
    ],
    "elderly-care": [
        {
            question: "How do you match a caregiver to a senior?",
            answer: "We assess the senior's medical needs, language preferences, and personality traits. We then handpick a caregiver whose experience and temperament are the best match to ensure a comfortable and harmonious environment."
        },
        {
            question: "Can caregivers help with specialized conditions like Dementia?",
            answer: "Yes, we have specialized caregivers trained specifically in Dementia and Alzheimer's care. They understand the nuances of memory loss, behavioral changes, and how to maintain safety and routine."
        },
        {
            question: "Are meals and housekeeping included?",
            answer: "Basic caregivers assist with meal feeding and keeping the elder's immediate room tidy. If you require full cooking, household laundry, or deep cleaning, these are available as Additional Add-Ons to your care plan."
        },
        {
            question: "What happens if a caregiver falls sick or takes leave?",
            answer: "Bisvaran guarantees continuity of care. If your primary caregiver is unavailable, we immediately arrange a qualified substitute to ensure there are no gaps in your loved one's care."
        }
    ],
    "doctor-consulting": [
        {
            question: "How do online doctor consultations work?",
            answer: "You can book a slot through our platform. At the scheduled time, you will connect with the doctor via a secure video or audio link. Digital prescriptions and notes are securely shared with you immediately after the session."
        },
        {
            question: "Can the doctor visit my home instead?",
            answer: "Yes! We offer a popular 'Home Visit Doctor' service where a general physician or specific specialist will visit your home for a comprehensive physical exam, vitals check, and diagnosis."
        },
        {
            question: "What specialities of doctors are available?",
            answer: "We cover a broad spectrum including General Physicians, Pediatricians, Cardiologists, Orthopedists, and more. Both online and in-person specialist consults are available."
        },
        {
            question: "Are home visit prescriptions valid at any pharmacy?",
            answer: "Absolutely. All prescriptions provided by our certified doctors—whether online or during a home visit—are legally valid and can be fulfilled at any registered pharmacy or via our medication delivery partners."
        }
    ],
    "hospital-attendants": [
        {
            question: "What exactly does a hospital attendant do?",
            answer: "A hospital attendant stays by the patient's bedside during their hospital admission. They assist with feeding, mobility, basic hygiene, alerting nurses in emergencies, and act as a communication bridge between the hospital staff and the family."
        },
        {
            question: "Do attendants handle medical procedures?",
            answer: "No, hospital attendants provide non-clinical support and personal care. All medical procedures, IV lines, and medication administration in the hospital are strictly handled by the hospital's own nursing staff."
        },
        {
            question: "Can an attendant stay 24 hours a day?",
            answer: "Yes, we offer both 12-hour and 24-hour attendant shifts for hospital stays to ensure your loved one always has a dedicated companion by their side, providing peace of mind for the family."
        },
        {
            question: "Is hospital permission required for an attendant?",
            answer: "Most private hospitals allow one dedicated attendant. We recommend confirming with your specific hospital's ward policies, though our attendants are familiar with most major hospital protocols."
        }
    ],
    "travel-assistance": [
        {
            question: "What types of travel do your assistants support?",
            answer: "We support local transit (like hospital appointments, family visits) as well as long-distance domestic or international travel via flights or trains, ensuring safety and continuous care throughout."
        },
        {
            question: "Do you arrange the transport vehicle or tickets?",
            answer: "Our primary service provides the professional travel caregiver. However, our concierge team can assist in booking wheelchair-accessible vehicles, ambulances, or managing flight arrangements as part of our end-to-end service."
        },
        {
            question: "Can a travel assistant administer medications during the trip?",
            answer: "Yes, if they are a registered nurse. If you require medical interventions during travel, we will assign a qualified nursing professional. For basic mobility and feeding assistance, a standard trained caregiver is assigned."
        },
        {
            question: "How do you handle emergencies during travel?",
            answer: "Our travel assistants are trained in basic life support and emergency protocols. They remain in constant contact with our 24/7 orchestration platform to immediately coordinate ambulances or fast-track medical help if an en-route emergency arises."
        }
    ]
};

interface FaqProps {
    category?: FaqCategory;
}

export default function Faq({ category = "general" }: FaqProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const faqs = faqData[category] || faqData["general"];

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
                        Everything you need to know about our {category === 'general' ? 'services' : 'specific care plans'}. For anything else, our concierge team is available 24/7.
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
