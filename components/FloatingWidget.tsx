"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from "lucide-react";

export default function FloatingWidget() {
    const phoneNumber1 = "918097836033"; // Primary
    const phoneNumber2 = "919142476033"; // Alternative
    const message = "Hello, I would like to know more about the healthcare services.";
    const whatsappUrl = `https://wa.me/${phoneNumber1}?text=${encodeURIComponent(message)}`;

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Check initially
        toggleVisibility();

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 pointer-events-none grid grid-cols-2 gap-3">
            {/* Top Left: Scroll To Top Button */}
            <div className="flex justify-center items-center">
                <AnimatePresence>
                    {isVisible && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.5, x: 20 }}
                            transition={{ duration: 0.3 }}
                            onClick={scrollToTop}
                            className="pointer-events-auto size-12 rounded-full bg-teal-600 text-white shadow-[0_8px_30px_rgb(13,148,136,0.3)] hover:bg-teal-700 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer relative group"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp strokeWidth={2.5} size={20} />

                            {/* Tooltip on Hover */}
                            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-zinc-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-md flex items-center">
                                Scroll to Top
                                <div className="absolute top-1/2 -right-1 w-2 h-2 bg-zinc-900 rotate-45 -translate-y-1/2"></div>
                            </div>
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            {/* Top Right: Phone Button 2 */}
            <div className="flex justify-center items-center pointer-events-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}
                >
                    <Link
                        href={`tel:+${phoneNumber2}`}
                        className="group flex items-center justify-center size-12 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg shadow-teal-600/30 hover:shadow-xl hover:shadow-teal-600/40 hover:-translate-y-1 transition-all duration-300 relative"
                        aria-label="Call Alternative Number"
                    >
                        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[11px] font-bold text-white shadow-sm ring-2 ring-white z-10">2</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg>

                        {/* Tooltip on Hover */}
                        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-zinc-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-md flex items-center">
                            Call +91 91424 76033
                            <div className="absolute top-1/2 -right-1 w-2 h-2 bg-zinc-900 rotate-45 -translate-y-1/2"></div>
                        </div>
                    </Link>
                </motion.div>
            </div>

            {/* Bottom Left: Phone Button 1 */}
            <div className="flex justify-center items-center pointer-events-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
                >
                    <Link
                        href={`tel:+${phoneNumber1}`}
                        className="group flex items-center justify-center size-12 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg shadow-teal-600/30 hover:shadow-xl hover:shadow-teal-600/40 hover:-translate-y-1 transition-all duration-300 relative"
                        aria-label="Call Us Primary"
                    >
                        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[11px] font-bold text-white shadow-sm ring-2 ring-white z-10">1</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg>

                        {/* Tooltip on Hover */}
                        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-zinc-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-md flex items-center">
                            Call +91 80978 36033
                            <div className="absolute top-1/2 -right-1 w-2 h-2 bg-zinc-900 rotate-45 -translate-y-1/2"></div>
                        </div>
                    </Link>
                </motion.div>
            </div>

            {/* Bottom Right: WhatsApp Button */}
            <div className="flex justify-center items-center pointer-events-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
                >
                    <Link
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center size-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-1 transition-all duration-300 relative"
                        aria-label="Chat on WhatsApp"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 256 256"><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path></svg>

                        {/* Tooltip on Hover */}
                        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-zinc-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-md">
                            Chat with us
                            <div className="absolute top-1/2 -right-1 w-2 h-2 bg-zinc-900 rotate-45 -translate-y-1/2"></div>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
