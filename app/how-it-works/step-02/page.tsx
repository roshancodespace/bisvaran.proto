import Link from 'next/link';

export default function StepTwo() {
    return (
        <main className="min-h-screen bg-zinc-50 flex flex-col font-grotesk">
            <div className="grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 w-full flex flex-col">
                <div className="max-w-3xl">
                    <Link href="/#how_it_works" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium mb-8 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
                        Back to Overview
                    </Link>

                    <h4 className="text-teal-600 font-semibold text-sm tracking-widest uppercase mb-4">Step 02</h4>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 mb-6 leading-tight">
                        Find expert <br className="hidden sm:block" />
                        <span className="text-teal-500 italic">Care Providers.</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed mb-8">
                        Browse through our verified network of experienced doctors and nurses. We take the guesswork out of finding the right specialist for your specific needs.
                    </p>

                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
                        <div className="text-center sm:text-left">
                            <h3 className="text-xl font-medium text-zinc-900 mb-2">Looking for a specific specialist?</h3>
                            <p className="text-zinc-600">Find doctors by specialty or request home nursing support.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <Link href="/doctors" className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-medium shadow-sm transition-colors text-center text-nowrap">
                                Browse Doctors
                            </Link>
                            <Link href="/nurses" className="px-6 py-3 bg-white hover:bg-zinc-50 text-teal-700 border border-teal-200 hover:border-teal-300 rounded-xl font-medium transition-colors text-center text-nowrap">
                                Request Nurse
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-zinc-100/50 p-6 rounded-2xl border border-zinc-200/50">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-teal-600 shadow-sm mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M216,136v40H40V136Z" opacity="0.2"></path><path d="M216,128H144V88a16,16,0,0,0-32,0v40H40a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V144A16,16,0,0,0,216,128ZM128,88v40Zm88,96H40V144H88v16a8,8,0,0,0,16,0V144h48v16a8,8,0,0,0,16,0V144h48ZM140,52V48a12,12,0,0,0-24,0v4a8,8,0,0,1-16,0V48a28,28,0,0,1,56,0v4A8,8,0,0,1,140,52Z"></path></svg>
                            </div>
                            <h3 className="text-lg font-medium text-zinc-900 mb-2">Verified Specialists</h3>
                            <p className="text-zinc-600 text-sm leading-relaxed">Every doctor on our platform is thoroughly vetted, including verification of their medical degrees, licenses, and years of clinical experience.</p>
                        </div>
                        <div className="bg-zinc-100/50 p-6 rounded-2xl border border-zinc-200/50">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-teal-600 shadow-sm mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM88.75,213.9a87.69,87.69,0,0,1-46.65-46.65l38.28-38.28A8,8,0,0,1,86,126l22,22Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM128,40a88.1,88.1,0,0,1,88,88,87.69,87.69,0,0,1-46.65,46.65l-38.28-38.28a8,8,0,0,1,5.66-13.66l22,22ZM88.75,213.9a87.69,87.69,0,0,1-46.65-46.65l38.28-38.28a8,8,0,0,1,5.66,13.66l-22-22Z"></path></svg>
                            </div>
                            <h3 className="text-lg font-medium text-zinc-900 mb-2">Home Support Teams</h3>
                            <p className="text-zinc-600 text-sm leading-relaxed">Our nursing staff is ready to provide hospital-grade care directly in the comfort and safety of your own home, tailored to your recovery needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
