"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import type { SpecialistData } from "@/data/specialists";

export default function Specialists() {
    const [specialists, setSpecialists] = useState<SpecialistData[]>([]);

    useEffect(() => {
        const fetchSpecialists = async () => {
            try {
                const response = await fetch('/api/specialists?featured=true');
                if (response.ok) {
                    const data = await response.json();
                    setSpecialists(data);
                }
            } catch (error) {
                console.error("Failed to fetch specialists:", error);
            }
        };

        fetchSpecialists();
    }, []);

    // Duplicate the array so we can infinitely scroll it seamlessly
    const duplicatedSpecialists = specialists.length > 0 ? [...specialists, ...specialists] : [];

    return (
        <section id="specialists" className="w-full py-16 lg:py-24 overflow-hidden relative bg-zinc-50 border-y border-zinc-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="md:w-1/2 text-left"
                    >
                        <h4 className="inline-block text-teal-600 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full mb-4">
                            Elite Network
                        </h4>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 leading-[1.1]">
                            Meet Our <span className="text-teal-500 italic">Specialists.</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="md:w-1/2 text-base text-zinc-600 leading-relaxed max-w-lg"
                    >
                        We bring together India&apos;s finest doctors and highly trained nursing professionals, operating as one unified team to deliver hospital-grade care directly to you.
                    </motion.p>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden flex items-center mt-10">
                {/* Gradient Masks for fade effect on edges */}
                <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-linear-to-r from-zinc-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-linear-to-l from-zinc-50 to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    className="flex gap-8 px-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 35,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedSpecialists.map((person, idx) => (
                        <div
                            key={idx}
                            className="group flex flex-col items-center text-center shrink-0 w-56 md:w-64"
                        >
                            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden mb-6 shadow-sm ring-1 ring-zinc-200 group-hover:ring-teal-200 group-hover:shadow-xl transition-all duration-500">
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 70vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 tracking-tight">{person.name}</h3>
                            <p className="text-teal-600 font-medium text-sm mt-1">{person.specialties?.[0] || 'Specialist'}</p>
                            <p className="text-zinc-500 text-sm mt-0.5">{person.title}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
