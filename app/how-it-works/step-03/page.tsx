import Link from 'next/link';

export default function StepThree() {
    return (
        <main className="min-h-screen bg-zinc-50 flex flex-col font-grotesk">
            <div className="grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 w-full flex flex-col">
                <div className="max-w-3xl">
                    <Link href="/#how_it_works" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium mb-8 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
                        Back to Overview
                    </Link>

                    <h4 className="text-teal-600 font-semibold text-sm tracking-widest uppercase mb-4">Step 03</h4>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 mb-6 leading-tight">
                        Connect <br className="hidden sm:block" />
                        <span className="text-teal-500 italic">Instantly.</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed mb-8">
                        Our platform is designed for zero friction. No endless hold music or confusing phone trees. Connect directly with our patient advocacy team to arrange your care immediately.
                    </p>

                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
                        <div className="text-center sm:text-left">
                            <h3 className="text-xl font-medium text-zinc-900 mb-2">Need care right now?</h3>
                            <p className="text-zinc-600">Our concierge is standing by to coordinate your health requests.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <Link href="/#request-callback" className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-medium shadow-sm transition-colors text-center text-nowrap flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg>
                                Request Callback
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-zinc-100/50 p-6 rounded-2xl border border-zinc-200/50">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-teal-600 shadow-sm mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,192H120a8,8,0,0,0,0,16h78l-37.66,37.66a8,8,0,0,0,11.32,11.32l56-56A8,8,0,0,0,224,192Z"></path><path d="M120,72H40A16,16,0,0,0,24,88v96a16,16,0,0,0,16,16H104v16H40a32,32,0,0,1-32-32V88A32,32,0,0,1,40,56h80a8,8,0,0,1,0,16Zm128,16v56a8,8,0,0,1-16,0V88a16,16,0,0,0-16-16H136V56h80A32,32,0,0,1,248,88Z"></path></svg>
                            </div>
                            <h3 className="text-lg font-medium text-zinc-900 mb-2">Omnichannel Support</h3>
                            <p className="text-zinc-600 text-sm leading-relaxed">Reach out to us via phone, email, WhatsApp, or through our secure in-app messaging system. We meet you where you are.</p>
                        </div>
                        <div className="bg-zinc-100/50 p-6 rounded-2xl border border-zinc-200/50">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-teal-600 shadow-sm mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,104H136v40a8,8,0,0,1-16,0V128H80a8,8,0,0,1,0-16h40V72a8,8,0,0,1,16,0v40h48a8,8,0,0,1,0,16Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM184,120H136V72a8,8,0,0,0-16,0v48H80a8,8,0,0,0,0,16h40v48a8,8,0,0,0,16,0V136h48a8,8,0,0,0,0-16Z"></path></svg>
                            </div>
                            <h3 className="text-lg font-medium text-zinc-900 mb-2">Emergency Routing</h3>
                            <p className="text-zinc-600 text-sm leading-relaxed">In critical situations, our system circumvents normal channels and immediately pings the closest available emergency responders and facilities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
