"use client";
import React from 'react';
import { motion } from "motion/react";

const features = [
    {
        title: "Verified Excellence",
        description: "Every hospital, doctor, and nurse undergoes a rigorous 5-step verification process.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0Z"></path></svg>
        )
    },
    {
        title: "Instant Response",
        description: "Connect with our care team instantly through call, WhatsApp, or our app.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"></path></svg>
        )
    },
    {
        title: "Patient Advocacy",
        description: "We champion your rights and well-being, ensuring your voice is heard and your needs are met at every stage of care.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>
        )
    },
    {
        title: "Seamless Network",
        description: "Access a curated ecosystem of hospitals, specialists, and home care providers, all unified on one platform.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>
        )
    }
];

export default function Standards() {
    return (
        <section id="standards" className="grid grid-cols-1 lg:grid-cols-2 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 gap-10 lg:gap-8 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="my-auto lg:pr-4"
            >
                <h4 className="inline-block text-teal-600 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full mb-4">
                    The Bisvaran Standard
                </h4>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-4 leading-tight">
                    We don't just list care.<br className="hidden sm:block" />
                    We <span className="text-teal-500 italic">orchestrate</span> it.
                </h2>
                <p className="text-base sm:text-lg text-zinc-600 mb-8 max-w-xl leading-relaxed">
                    In the complex world of healthcare, finding the right support shouldn't be a challenge. Biswaran was founded on a simple but powerful idea: to make exceptional care accessible, transparent, and seamless.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="flex flex-col gap-3 group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 group-hover:-translate-y-1 shadow-sm group-hover:shadow-md">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg font-medium tracking-tight text-zinc-900">{feature.title}</h3>
                                <p className="text-sm text-zinc-600 mt-1 leading-relaxed">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="my-auto w-full relative group lg:pl-4"
            >
                <div className="absolute inset-y-0 right-0 left-4 lg:left-8 bg-teal-500/10 rounded-3xl lg:rounded-4xl transform translate-x-2 translate-y-2 lg:translate-x-4 lg:translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                <img src="/standards.png" alt="Standards" className="relative w-full h-[400px] lg:h-auto max-h-[75vh] rounded-3xl lg:rounded-4xl object-cover shadow-xl group-hover:scale-[1.01] transition-transform duration-500" />
            </motion.div>
        </section>
    )
}
