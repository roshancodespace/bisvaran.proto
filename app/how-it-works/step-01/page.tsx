import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "How It Works - Step 1 | Discover Care Plans",
    description: "Learn how to discover and choose the right home healthcare plan with Bisvaran. Explore our comprehensive services.",
    alternates: {
        canonical: "/how-it-works/step-01",
    }
}

export default function StepOne() {
    return (
        <main className="min-h-screen bg-zinc-50 flex flex-col font-grotesk">
            <div className="grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 w-full flex flex-col">
                <div className="max-w-3xl">
                    <Link href="/#how_it_works" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium mb-8 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
                        Back to Overview
                    </Link>

                    <h4 className="text-teal-600 font-semibold text-sm tracking-widest uppercase mb-4">Step 01</h4>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 mb-6 leading-tight">
                        Discover tailored <br className="hidden sm:block" />
                        <span className="text-teal-500 italic">Care Plans.</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed mb-8">
                        Whether you need specialized 24/7 Home Nursing, dedicated Elderly Care, or a swift Doctor Consultation at home, we have a comprehensive range of services designed for your peace of mind.
                    </p>

                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
                        <div>
                            <h3 className="text-xl font-medium text-zinc-900 mb-2">Ready to explore our services?</h3>
                            <p className="text-zinc-600">Discover premium caregiving and medical assistance.</p>
                        </div>
                        <Link href="/#services" className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-medium shadow-sm transition-colors text-nowrap">
                            Explore All Services
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-zinc-100/50 p-6 rounded-2xl border border-zinc-200/50">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-teal-600 shadow-sm mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,112V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V112a8,8,0,0,1,2.34-5.66l96-96a8,8,0,0,1,11.32,0l96,96A8,8,0,0,1,224,112Z" opacity="0.2"></path><path d="M227.32,101.66l-96-96a16,16,0,0,0-22.64,0l-96,96A8,8,0,0,0,24,115.31L32,107.31V216a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V107.31l8,8a8,8,0,0,0,11.32-11.32ZM208,216H48V91.31l80-80,80,80V216ZM144,120v40H104V120a8,8,0,0,1,8-8h24A8,8,0,0,1,144,120Z"></path></svg>
                            </div>
                            <h3 className="text-lg font-medium text-zinc-900 mb-2">Comprehensive Options</h3>
                            <p className="text-zinc-600 text-sm leading-relaxed">From basic mobility assistance to complex post-operative care, we offer a full spectrum of health services.</p>
                        </div>
                        <div className="bg-zinc-100/50 p-6 rounded-2xl border border-zinc-200/50">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-teal-600 shadow-sm mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.49a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" opacity="0.2"></path><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                            </div>
                            <h3 className="text-lg font-medium text-zinc-900 mb-2">Specialized Expertise</h3>
                            <p className="text-zinc-600 text-sm leading-relaxed">View detailed inclusions for each specialized plan to ensure it perfectly matches your loved one's requirements.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
