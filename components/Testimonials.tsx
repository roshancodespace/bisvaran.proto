"use client";

import { motion } from "motion/react";
import Image from "next/image";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Mother of Two",
        content: "When my father needed immediate care at 2 AM, Bisvaran's emergency team was at our door within 12 minutes. The paramedics were brilliant and the whole process was completely stress-free. Truly lifesaving service.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
        name: "Dr. Arvind Mehta",
        role: "Senior Cardiologist",
        content: "I recommend Bisvaran to all my post-op patients for their in-home nursing care. Their nurses are highly trained, professional, and compassionate. It provides me immense peace of mind knowing my patients are in good hands.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
        name: "Priya Sharma",
        role: "Software Executive",
        content: "The telehealth scheduling is flawless. I was able to consult a leading dermatologist within hours. No waiting rooms, no travel time—just high-quality medical advice from my living room. I can't imagine healthcare any other way now.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 overflow-hidden">
            <div className="flex flex-col items-center text-center mb-16">
                <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="inline-block text-teal-600 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full mb-4"
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
                    className="max-w-2xl text-base text-zinc-600 leading-relaxed"
                >
                    Don&apos;t just take our word for it. Here is what families and medical professionals have to say about their experience with our platform.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow relative"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                    >
                        {/* Quote Mark SVG Background */}
                        <div className="absolute top-6 right-6 text-teal-50 opacity-50 z-0">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                            </svg>
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-6 relative z-10 text-teal-400">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>

                        <p className="text-zinc-700 leading-relaxed mb-8 relative z-10">
                            &quot;{testimonial.content}&quot;
                        </p>

                        <div className="flex items-center gap-4 mt-auto relative z-10">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-zinc-100">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div>
                                <h5 className="font-semibold text-zinc-900">{testimonial.name}</h5>
                                <p className="text-sm text-zinc-500">{testimonial.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
