"use client";
import { motion } from "motion/react";

export default function RequestCallback() {
    return (
        <section id="request-callback" className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-16 lg:py-24 overflow-hidden">
            <div className="bg-teal-50 rounded-3xl lg:rounded-4xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-40 blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-teal-200 opacity-40 blur-2xl pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col justify-center"
                    >
                        <h4 className="inline-block text-teal-700 font-semibold text-xs sm:text-sm tracking-wider uppercase mb-4">
                            Connect With Us
                        </h4>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-6 leading-tight">
                            Ready to orchestrate <br className="hidden sm:block" />
                            <span className="text-teal-600 italic">your care?</span>
                        </h2>
                        <p className="text-base sm:text-lg text-teal-900/80 mb-10 max-w-xl leading-relaxed">
                            Leave your details below and our patient advocacy team will get back to you within 15 minutes to discuss your unique healthcare needs.
                        </p>

                        <div className="flex items-center gap-5 text-teal-900 font-medium bg-white/50 p-4 rounded-2xl w-fit backdrop-blur-sm border border-white/60">
                            <div className="size-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-teal-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg>
                            </div>
                            <div>
                                <p className="text-xs text-teal-700 font-bold uppercase tracking-widest mb-0.5">Urgent Help?</p>
                                <div className="flex flex-col">
                                    <a href="tel:+918097836033" className="text-lg tracking-tight hover:text-teal-700 transition-colors">+91 80978 36033</a>
                                    <a href="tel:+919142476033" className="text-lg tracking-tight hover:text-teal-700 transition-colors">+91 91424 76033</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-teal-900/5 relative"
                    >
                        <form className="flex flex-col gap-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-zinc-700 ml-1">First Name</label>
                                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all bg-zinc-50/50" placeholder="John" />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="lastName" className="block text-sm font-medium text-zinc-700 ml-1">Last Name</label>
                                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all bg-zinc-50/50" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 ml-1">Phone Number</label>
                                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all bg-zinc-50/50" placeholder="+1 (555) 000-0000" />
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="service" className="block text-sm font-medium text-zinc-700 ml-1">Service Required</label>
                                <div className="relative">
                                    <select id="service" defaultValue="" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all bg-zinc-50/50 appearance-none text-zinc-700">
                                        <option value="" disabled>Select a service...</option>
                                        <option value="doctor">Doctor Consultation</option>
                                        <option value="nurse">Home Nursing</option>
                                        <option value="elderly">Elderly Care</option>
                                        <option value="hospital">Hospital Admission</option>
                                        <option value="therapy">Specialized Therapies</option>
                                        <option value="telehealth">Telehealth Consults</option>
                                        <option value="lab">Lab Tests & Diagnostics</option>
                                        <option value="ambulance">Ambulance Services</option>
                                        <option value="other">Other / Not Sure</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="w-full mt-4 py-3.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-medium shadow-sm hover:shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                                <span>Request Callback</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
                            </button>
                            <p className="text-xs text-center text-zinc-500 mt-2">
                                By submitting, you agree to our Privacy Policy. Your information is securely handled.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
