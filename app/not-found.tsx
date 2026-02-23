import Link from 'next/link';
import { motion } from 'motion/react';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-100/50 blur-[100px] rounded-full pointer-events-none -z-10"></div>

            <div className="text-center max-w-2xl mx-auto">
                {/* 404 Visual */}
                <div className="relative inline-flex items-center justify-center mb-8">
                    <h1 className="text-[120px] sm:text-[180px] font-black text-transparent bg-clip-text bg-linear-to-b from-teal-500 to-teal-800 leading-none select-none drop-shadow-sm">
                        404
                    </h1>
                    <div className="absolute w-full h-full flex items-center justify-center pointer-events-none mix-blend-overlay opacity-30">
                        <svg className="w-40 sm:w-60 h-40 sm:h-60 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    </div>
                </div>

                {/* Text Content */}
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-6">
                    Looks like you've <span className="text-teal-600 italic">lost your way.</span>
                </h2>
                <p className="text-lg text-zinc-600 mb-10 leading-relaxed max-w-lg mx-auto">
                    Don't worry, even the best navigators sometimes find themselves exploring uncharted territories. Let's get you back to safe and familiar ground.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-8 py-3.5 bg-teal-600 text-white font-medium rounded-full shadow-lg shadow-teal-600/20 hover:bg-teal-700 hover:shadow-teal-700/30 transition-all flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        <span>Return to Home</span>
                    </Link>
                    <Link
                        href="/#services"
                        className="w-full sm:w-auto px-8 py-3.5 bg-white text-zinc-900 border border-zinc-200 font-medium rounded-full hover:bg-zinc-50 transition-colors flex items-center justify-center"
                    >
                        Explore Services
                    </Link>
                </div>

                {/* Bottom Support Text */}
                <p className="mt-16 text-sm text-zinc-500 flex items-center justify-center gap-2">
                    Need immediate assistance?
                    <a href="tel:+919876543210" className="text-teal-600 hover:underline font-medium">Call +91 98765 43210</a>
                </p>
            </div>
        </main>
    );
}
