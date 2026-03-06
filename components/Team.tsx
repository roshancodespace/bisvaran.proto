"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { TeamMember } from "@/data/team";

const AUTO_INTERVAL = 4000;

export default function Team() {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(2);
    const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await fetch('/api/team');
                if (response.ok) {
                    const data = await response.json();
                    setTeamMembers(data);
                    // Start roughly in the middle if possible
                    setActiveIndex(Math.floor(data.length / 2));
                }
            } catch (error) {
                console.error("Failed to fetch team:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTeam();
    }, []);

    const handleUserInteraction = (newIndex: number) => {
        setActiveIndex(newIndex);
        setLastInteractionTime(Date.now());
    };

    const next = () => {
        if (teamMembers.length === 0) return;
        handleUserInteraction((activeIndex + 1) % teamMembers.length);
    };

    const prev = () => {
        if (teamMembers.length === 0) return;
        handleUserInteraction((activeIndex - 1 + teamMembers.length) % teamMembers.length);
    };

    useEffect(() => {
        if (isLoading || teamMembers.length <= 1) return;

        // Use a standard interval for auto-scrolling
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % teamMembers.length);
        }, AUTO_INTERVAL);

        return () => clearInterval(interval);
    }, [isLoading, teamMembers.length, lastInteractionTime]);

    const activeMember = teamMembers[activeIndex];

    return (
        <section id="team" className="py-16 lg:py-24 overflow-hidden relative w-full bg-teal-50 max-w-[100vw]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
            >
                <h4 className="inline-block text-teal-600 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full mb-4">
                    Our Leadership
                </h4>
                <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-zinc-900 mb-6 leading-tight">
                    The experts behind <br className="hidden sm:block" />
                    <span className="text-teal-500 italic">your care orchestration.</span>
                </h2>
                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto px-4">
                    Our team brings together decades of experience in medicine, technology, and patient advocacy to redefine healthcare standards.
                </p>
            </motion.div>

            {isLoading ? (
                <div className="w-full flex justify-center py-24">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-teal-600"></div>
                </div>
            ) : (
                <div className="w-full relative pb-12">
                    {/* Carousel Container */}
                    <div className="relative h-[480px] sm:h-[500px] flex items-center justify-center max-w-7xl mx-auto w-full">
                        {teamMembers.map((member, index) => {
                            let offset = index - activeIndex;
                            if (offset > teamMembers.length / 2) offset -= teamMembers.length;
                            if (offset < -teamMembers.length / 2) offset += teamMembers.length;

                            // Adjust visibility limits based on screen size (roughly 2 cards on each side visible)
                            const isVisible = Math.abs(offset) <= 2;
                            const isActiveObj = offset === 0;

                            // Base card width & spacing 
                            const cardWidthClassName = "w-[240px] sm:w-[280px]";
                            // Set a standardized gap we want between the edges of the scaled cards
                            const targetGap = typeof window !== 'undefined' && window.innerWidth < 640 ? 16 : 32;
                            const baseWidth = typeof window !== 'undefined' && window.innerWidth < 640 ? 240 : 280;

                            const baseScale = 1;
                            const scaleStep = 0.15;
                            const currentScale = Math.max(0.5, baseScale - (Math.abs(offset) * scaleStep));

                            let calculatedX = 0;
                            if (offset !== 0) {
                                const sign = Math.sign(offset);
                                const absOffset = Math.abs(offset);
                                calculatedX = (baseWidth / 2) + targetGap;

                                // Add the space for all fully intervening cards
                                for (let i = 1; i < absOffset; i++) {
                                    const intermediateScale = Math.max(0.5, baseScale - (i * scaleStep));
                                    calculatedX += (baseWidth * intermediateScale) + targetGap;
                                }

                                // Finally, add half the width of THIS card so its center is in the right place
                                calculatedX += (baseWidth * currentScale) / 2;

                                calculatedX *= sign;
                            }

                            return (
                                <motion.div
                                    key={member.name}
                                    className={`absolute shrink-0 ${cardWidthClassName} h-[360px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl bg-white cursor-pointer ${isActiveObj ? 'shadow-2xl shadow-zinc-900/15 z-20' : 'shadow-md z-10'
                                        }`}
                                    animate={{
                                        x: calculatedX,
                                        scale: currentScale,
                                        opacity: isVisible ? (isActiveObj ? 1 : 0.6) : 0,
                                        zIndex: 10 - Math.abs(offset),
                                        filter: isActiveObj ? 'grayscale(0%) blur(0px)' : 'grayscale(100%) blur(1px)' // using animate to smoothly tween filter
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 120,
                                        damping: 18,
                                    }}
                                    onClick={() => handleUserInteraction(index)}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                        draggable="false"
                                    />

                                    <div className={`absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${isActiveObj ? 'opacity-100' : 'opacity-0'}`}>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm font-medium text-teal-300">
                                            {member.role}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Active Member Details below carousel */}
                    <div className="mt-8 text-center max-w-xl mx-auto px-6">
                        <AnimatePresence mode="wait">
                            {activeMember && (
                                <motion.p
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-zinc-600 leading-relaxed min-h-[72px] text-base sm:text-lg"
                                >
                                    {activeMember.bio}
                                </motion.p>
                            )}
                        </AnimatePresence>

                        {/* Controls */}
                        <div className="mt-6 flex justify-center gap-6">
                            <button
                                onClick={prev}
                                className="size-12 rounded-full border border-zinc-200 bg-white text-zinc-500 hover:text-teal-600 hover:bg-zinc-50 hover:border-teal-200 flex items-center justify-center transition-all duration-300 shadow-sm"
                                aria-label="Previous team member"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
                            </button>
                            <button
                                onClick={next}
                                className="size-12 rounded-full border border-zinc-200 bg-white text-zinc-500 hover:text-teal-600 hover:bg-zinc-50 hover:border-teal-200 flex items-center justify-center transition-all duration-300 shadow-sm"
                                aria-label="Next team member"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
