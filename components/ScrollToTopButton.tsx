"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
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
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    className="fixed bottom-24 right-6 z-50 p-3 rounded-full bg-teal-600 text-white shadow-[0_8px_30px_rgb(13,148,136,0.3)] hover:bg-teal-700 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer"
                    aria-label="Scroll to top"
                >
                    <ArrowUp strokeWidth={2.5} size={20} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
