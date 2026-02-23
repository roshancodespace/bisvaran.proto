"use client";
import { motion } from "motion/react";
import Link from "next/link";

const steps = [
    {
        id: '01',
        title: 'Browse Hospitals',
        description: 'Explore our curated list of top-rated healthcare facilities equipped with modern amenities.'
    },
    {
        id: '02',
        title: 'Find Care',
        description: 'Check detailed profiles of expert doctors or verified nurses available for home visits.'
    },
    {
        id: '03',
        title: 'Connect Instantly',
        description: 'Request a callback or connect directly via WhatsApp to get immediate assistance'
    }
];

export default function HowItWorks() {
    return (
        <section id="how_it_works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 min-h-screen flex flex-col justify-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h4 className="text-teal-500 font-medium text-base sm:text-lg tracking-tight">HOW IT WORKS</h4>
                <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mt-2">
                    <span>Simple, Transparent,</span> <br className="hidden sm:block" />
                    <span>Effective.</span>
                </h2>
                <p className="text-base sm:text-lg mt-4 max-w-2xl text-zinc-800">
                    Navigating healthcare should be simple. We've designed a seamless, step-by-step process to connect you with the right care at the right time.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {steps.map((step, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                        key={step.id}
                        className="relative md:p-6 group space-y-4 rounded-2xl hover:bg-zinc-50 transition-colors duration-300"
                    >
                        <h3 className="text-teal-500 text-base sm:text-lg font-medium">Step {step.id}</h3>
                        <p className="font-medium text-lg sm:text-xl">{step.title}</p>
                        <p className="text-sm sm:text-base text-zinc-600 relative z-10">{step.description}</p>
                        <Link href={`/how-it-works/step-${step.id}`} className="opacity-0 cursor-pointer flex items-center gap-1 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all font-medium mt-8 text-teal-600 z-20 relative w-fit">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
                        </Link>
                        <div className="absolute bottom-0 right-4 font-bold tracking-tighter text-8xl sm:text-9xl opacity-5 pointer-events-none transition-transform group-hover:scale-110 duration-500">{step.id}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
