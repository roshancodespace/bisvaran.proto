"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    wrap
} from "motion/react";
import Image from "next/image";
import { Globe } from "./ui/globe";

// Single Testimonial Card Component with DiceBear Lorelei avatars
function TestimonialCard({ testimonial }: { testimonial: { name: string; content: string } }) {
    const avatarUrl = `https://api.dicebear.com/9.x/lorelei/svg?seed=${encodeURIComponent(testimonial.name)}`;

    return (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-[300px] sm:w-[400px] shrink-0 relative flex flex-col h-full whitespace-normal">
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-6 sm:mb-8 grow">
                &quot;{testimonial.content}&quot;
            </p>

            <div className="flex items-center gap-3 sm:gap-4 mt-auto relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-zinc-100 shrink-0">
                    <img
                        src={avatarUrl}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <h5 className="font-semibold text-sm sm:text-base text-zinc-900">{testimonial.name}</h5>
            </div>
        </div>
    );
}

// Google reviews
const googleReviews = [
    { name: "Mubrak Kumar", content: "Care krne ke lia bahut sara dhanywad aap aise hi logo ka help krte rhe ❤️" },
    { name: "Mia Akash", content: "Best home care and provide all facility at time 🔥" },
    { name: "Ranjan Yadav", content: "This bureau provided me with a good nurse. The best care was provided by the nurse. Thanks 😊" },
    { name: "Antu Kumar", content: "Thank u for help and provide nursing survives in low price" },
    { name: "Krishna Kumar", content: "He work with good experience and provide best care" },
    { name: "Kamar Raza", content: "Good home care service" },
    { name: "Pawan Raj", content: "Good home care survices 😋" },
    { name: "Amjad Zaid", content: "Good facilities with good co-operation ❤️" },
    { name: "Najbul Mandal", content: "Good health care services" },
    { name: "Dabbu Yadav", content: "Best nursing services" },
    { name: "Zahid Khan", content: "Excellent service" },
];

// Split into two rows
const testimonialsRow1 = googleReviews.slice(0, Math.ceil(googleReviews.length / 2));
const testimonialsRow2 = googleReviews.slice(Math.ceil(googleReviews.length / 2));

// Parallax Row Component
interface ParallaxRowProps {
    items: { name: string; content: string }[];
    baseVelocity: number;
}

function ParallaxRow({ items, baseVelocity = 100 }: ParallaxRowProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
    const x = useTransform(baseX, (v) => `${wrap(-33.333, 0, v)}%`);
    const directionFactor = useRef<number>(1);
    const displayItems = [...items, ...items, ...items];

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        if (velocityFactor.get() < 0) directionFactor.current = -1;
        else if (velocityFactor.get() > 0) directionFactor.current = 1;
        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden whitespace-nowrap flex">
            <motion.div className="flex shrink-0 gap-4" style={{ x }}>
                {displayItems.map((item, index) => (
                    <TestimonialCard key={index} testimonial={item} />
                ))}
            </motion.div>
        </div>
    );
}

// Main Component
export default function Testimonials() {
    return (
        <section id="testimonials" className="w-full bg-teal-50 border-y border-zinc-100 py-20 lg:py-32 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 lg:mb-24 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="inline-block text-teal-600 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-teal-100/50 px-3 py-1 rounded-full mb-4"
                    >
                        Patient Stories
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]"
                    >
                        Trusted by <span className="text-teal-500 italic">Thousands.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-2xl text-base sm:text-lg text-zinc-600 leading-relaxed"
                    >
                        Don&apos;t just take our word for it. Here is what families and patients have to say about our services.
                    </motion.p>
                </div>
            </div>

            {/* Parallax Container with Globe */}
            <div className="w-full flex flex-col gap-4 relative z-0">
                <Globe className="-translate-y-1/4" />

                {/* Fading edges */}
                <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-linear-to-r from-teal-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-16 md=w-48 bg-linear-to-l from-teal-50 to-transparent z-10 pointer-events-none"></div>

                <div className="mt-20 relative z-10 space-y-4">
                    <ParallaxRow items={testimonialsRow1} baseVelocity={-1.5} />
                    <ParallaxRow items={testimonialsRow2} baseVelocity={1.5} />
                </div>
            </div>
        </section>
    );
}