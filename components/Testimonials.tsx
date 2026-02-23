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
import { COBEOptions } from "cobe";

// Extended mock data for two robust rows
const testimonialsRow1 = [
    {
        name: "Sarah Jenkins",
        role: "Mother of Two",
        content: "When my father needed immediate care at 2 AM, Bisvaran's emergency team was at our door within 12 minutes. Truly lifesaving service.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
        name: "Dr. Arvind Mehta",
        role: "Senior Cardiologist",
        content: "I recommend Bisvaran to all my post-op patients for their in-home nursing care. Their nurses are highly trained, professional, and compassionate.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
        name: "Priya Sharma",
        role: "Software Executive",
        content: "The telehealth scheduling is flawless. I consulted a leading dermatologist within hours. No waiting rooms, just high-quality medical advice.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
        name: "Rajiv Desai",
        role: "Business Owner",
        content: "Arranging an ICU at home for my grandfather felt impossible until I found Bisvaran. They handled the equipment, nurses, and doctor visits seamlessly.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    }
];

const testimonialsRow2 = [
    {
        name: "Anita Verma",
        role: "Teacher",
        content: "The pediatric care we received was exceptional. The nurse was so gentle with my newborn and patiently answered all my anxious questions.",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1b28ce?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
        name: "Dr. L. K. Rao",
        role: "Orthopedic Surgeon",
        content: "Bisvaran's rehabilitation networks ensure my patients get the best post-op physiotherapy at home, leading to significantly faster recovery times.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
        name: "Vikram Singh",
        role: "Retired Veteran",
        content: "The elderly care companion they assigned to my mother has become like family. The peace of mind knowing she is safe and happy is invaluable.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
        name: "Meera Patel",
        role: "Graphic Designer",
        content: "From booking the lab tests to getting the reports online within 12 hours, the entire diagnostic process was smooth, professional, and entirely at-home.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    }
];

// Single Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: any }) {
    return (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-[300px] sm:w-[400px] shrink-0 relative flex flex-col h-full whitespace-normal">
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-teal-50 opacity-60 z-0">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
            </div>
            <div className="flex gap-1 mb-4 sm:mb-6 relative z-10 text-teal-400">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-6 sm:mb-8 relative z-10 grow">
                &quot;{testimonial.content}&quot;
            </p>
            <div className="flex items-center gap-3 sm:gap-4 mt-auto relative z-10">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 bg-zinc-100">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 48px, 48px"
                    />
                </div>
                <div>
                    <h5 className="font-semibold text-sm sm:text-base text-zinc-900">{testimonial.name}</h5>
                    <p className="text-xs sm:text-sm text-zinc-500">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );
}

// Parallax Row Component
interface ParallaxRowProps {
    items: any[];
    baseVelocity: number;
}

function ParallaxRow({ items, baseVelocity = 100 }: ParallaxRowProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    // Assuming 4 items of ~432px width (400px + margins), total width is roughly ~1728px.
    // Wrap between -100% and 0%. Since we render 2 sets of items in the div, 
    // when we translate -50%, we've moved an entire exact set to the left.
    const x = useTransform(baseX, (v) => `${wrap(-33.333, 0, v)}%`);

    const directionFactor = useRef<number>(1);

    // Duplicate items to ensure smooth infinite wrap.
    // We triplicate the items array so we have enough content to seamlessly loop 33.333%
    const displayItems = [...items, ...items, ...items];

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

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
        <section id="testimonials" className="w-full bg-zinc-50 border-y border-zinc-100 py-20 lg:py-32 overflow-hidden relative">
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
                        Don&apos;t just take our word for it. Here is what families and medical professionals have to say about their experience with our platform.
                    </motion.p>
                </div>
            </div>
            {/* Parallax Container */}
            <div className="w-full flex flex-col gap-4 relative z-0">
                <Globe className="-translate-y-1/4"/>
                {/* Visual fading edges */}
                <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-linear-to-r from-zinc-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-16 md:w-48 bg-linear-to-l from-zinc-50 to-transparent z-10 pointer-events-none"></div>

              <div className="mt-20 bg-white relative z-10 space-y-4">
                <ParallaxRow items={testimonialsRow1} baseVelocity={-1.5} />
                <ParallaxRow items={testimonialsRow2} baseVelocity={1.5} />
              </div>    
            </div>
        </section>
    );
}
