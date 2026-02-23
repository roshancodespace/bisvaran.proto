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
                        Consult & <br className="hidden sm:block" />
                        <span className="text-teal-500 italic">Book with Ease.</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed mb-8">
                        Connect instantly with our dedicated care coordinators. We assess your unique medical requirements and instantly match you with the perfect care professional.
                    </p>

                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
                        <div>
                            <h3 className="text-xl font-medium text-zinc-900 mb-2">Need immediate assistance?</h3>
                            <p className="text-zinc-600">Our concierge team is available 24/7 to design your care plan.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <Link href="/#request-callback" className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-medium shadow-sm transition-colors text-center text-nowrap">
                                Request a Callback
                            </Link>
                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white hover:bg-zinc-50 text-teal-700 border border-teal-200 hover:border-teal-300 rounded-xl font-medium transition-colors text-center text-nowrap flex justify-center items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23-10.46,15.69a8,8,0,0,0-.49,8,56.54,56.54,0,0,0,23.36,23.36,8,8,0,0,0,8-.49l15.69-10.46,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path></svg>
                                WhatsApp Us
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-zinc-100/50 p-6 rounded-2xl border border-zinc-200/50">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-teal-600 shadow-sm mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M216,136v40H40V136Z" opacity="0.2"></path><path d="M216,128H144V88a16,16,0,0,0-32,0v40H40a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V144A16,16,0,0,0,216,128ZM128,88v40Zm88,96H40V144H88v16a8,8,0,0,0,16,0V144h48v16a8,8,0,0,0,16,0V144h48ZM140,52V48a12,12,0,0,0-24,0v4a8,8,0,0,1-16,0V48a28,28,0,0,1,56,0v4A8,8,0,0,1,140,52Z"></path></svg>
                            </div>
                            <h3 className="text-lg font-medium text-zinc-900 mb-2">Rapid Response</h3>
                            <p className="text-zinc-600 text-sm leading-relaxed">We understand that healthcare needs are often urgent. Our orchestration platform ensures you receive a customized care plan within hours of your request.</p>
                        </div>
                        <div className="bg-zinc-100/50 p-6 rounded-2xl border border-zinc-200/50">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-teal-600 shadow-sm mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM88.75,213.9a87.69,87.69,0,0,1-46.65-46.65l38.28-38.28A8,8,0,0,1,86,126l22,22Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM128,40a88.1,88.1,0,0,1,88,88,87.69,87.69,0,0,1-46.65,46.65l-38.28-38.28a8,8,0,0,1,5.66-13.66l22,22ZM88.75,213.9a87.69,87.69,0,0,1-46.65-46.65l38.28-38.28a8,8,0,0,1,5.66,13.66l-22-22Z"></path></svg>
                            </div>
                            <h3 className="text-lg font-medium text-zinc-900 mb-2">Perfect Matching</h3>
                            <p className="text-zinc-600 text-sm leading-relaxed">Our intelligent matching system considers medical requirements, location, language preference, and personality to pair you with the ideal caregiver or specialist.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
