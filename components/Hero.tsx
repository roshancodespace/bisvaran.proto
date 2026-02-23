"use client";
import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
    return (
        <div className='relative min-h-[95vh] pt-24 pb-12 flex flex-col items-center justify-center bg-[url("/hero-bg.png")] bg-cover bg-center overflow-hidden'>
            <div className="absolute inset-0 bg-linear-to-r from-teal-500/5 via-teal-500/5 to-transparent pointer-events-none"></div>

            <div className="bg-[linear-gradient(to_bottom,transparent_40%,#fff_100%)] pointer-events-none w-full h-full absolute top-0 left-0 z-10"></div>

            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 flex flex-col items-center mt-12">

                {/* Intro Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex items-center gap-2 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full border border-teal-500/20 text-teal-800 text-sm font-medium tracking-tight mb-8 shadow-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                    </span>
                    24/7 Patient Concierge Active
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="lg:text-7xl md:text-6xl sm:text-5xl text-5xl text-center font-medium tracking-tight text-zinc-900 leading-[1.1] mb-6"
                >
                    Premium Healthcare & <br className="hidden sm:block" />
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-teal-600 to-teal-400">Certified Specialists.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-center text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-10"
                >
                    Your direct provider of world-class doctors and highly-trained nurses in India. Enjoy hospital-grade care, elderly support, and rapid emergency response directly in the comfort of your home.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
                >
                    <Link href="#request-callback" className="w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-full flex justify-center items-center gap-2 transition-all duration-300 font-medium shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-lg">
                        <span>Get Started Now</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                    <Link href="#services" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-zinc-50 text-zinc-800 hover:border-zinc-300 rounded-full flex justify-center items-center gap-2 transition-all duration-300 font-medium hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-lg group">
                        <span>Explore Services</span>
                        <svg className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </Link>
                </motion.div>

            </div>
        </div>
    )
}
