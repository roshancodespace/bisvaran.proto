import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-zinc-300 py-16 lg:py-24 border-t border-zinc-900 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-teal-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <div id="brand_logo_footer" className="flex items-end leading-none font-bold text-2xl tracking-tight text-white mb-6">
                            <Image src="/brand_logo.png" alt="Logo" width={24} height={24} className='filter-[brightness(0)_invert(1)]' />
                            <span style={{ fontFamily: "var(--font-grotesk)" }}>ISVARAN</span>
                            <div className="size-2 bg-teal-500 mb-1.5 ml-1 rounded-full"></div>
                        </div>
                        <p className="text-zinc-400 leading-relaxed mb-8 max-w-sm">
                            Your trusted healthcare companion, providing premium medical and caregiving services right at your doorstep.
                        </p>
                        {/* Social Links placeholder or trust badges */}
                        <div className="flex gap-4 cursor-pointer text-zinc-400">
                            {/* Social icons */}
                            {/* <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all duration-300">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </a> */}
                            <a href="https://instagram.com/bisvaran" target='_blank' rel="noopener noreferrer"  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all duration-300">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                            </a>
                            {/* <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all duration-300">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a> */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
                        <ul className="space-y-3.5">
                            <li><Link href="/" className="text-zinc-400 hover:text-teal-400 transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-teal-400 transition-colors"></span>Home</Link></li>
                            <li><Link href="/about" className="text-zinc-400 hover:text-teal-400 transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-teal-400 transition-colors"></span>About Us</Link></li>
                            <li><Link href="/specialists" className="text-zinc-400 hover:text-teal-400 transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-teal-400 transition-colors"></span>Specialists</Link></li>
                            <li><Link href="/#faq" className="text-zinc-400 hover:text-teal-400 transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-teal-400 transition-colors"></span>Help & FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3">
                        <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Our Services</h4>
                        <ul className="space-y-3.5">
                            <li><Link href="/services/home-nursing" className="text-zinc-400 hover:text-teal-400 transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-teal-400 transition-colors"></span>Home Nursing</Link></li>
                            <li><Link href="/services/elderly-care" className="text-zinc-400 hover:text-teal-400 transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-teal-400 transition-colors"></span>Elderly Care</Link></li>
                            <li><Link href="/services/doctor-consulting" className="text-zinc-400 hover:text-teal-400 transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-teal-400 transition-colors"></span>Doctor Consulting</Link></li>
                            <li><Link href="/services/hospital-attendants" className="text-zinc-400 hover:text-teal-400 transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-teal-400 transition-colors"></span>Hospital Attendants</Link></li>
                            <li><Link href="/services/travel-assistance" className="text-zinc-400 hover:text-teal-400 transition-colors inline-flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-teal-400 transition-colors"></span>Travel Assistance</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
<<<<<<< HEAD
                                <a href="mailto:support@bisvaran.com" className="text-zinc-400 hover:text-white transition-colors cursor-pointer">support@bisvaran.com</a>
=======
                                <a href="mailto:bisvaran@gmail.com" className="text-zinc-400 hover:text-white transition-colors cursor-pointer">bisvaran@gmail.com</a>
>>>>>>> 41a2a87588ece0c42c3339fed8d360520987613a
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <div className="flex flex-col gap-1">
                                    <a href="tel:+918097836033" className="text-zinc-400 hover:text-white transition-colors cursor-pointer">+91 80978 36033</a>
                                    <a href="tel:+919142476033" className="text-zinc-400 hover:text-white transition-colors cursor-pointer">+91 91424 76033</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span className="text-zinc-400 leading-relaxed">Ambedakar Nagar, Appa Pada, Malad East Mumbai, Maharashtra 400091</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-800/80 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
                        <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Bisvaran. All rights reserved.</p>
                        <p className="text-zinc-600 text-sm hidden md:block">•</p>
                        <p className="text-zinc-500 text-sm">Created by <span className="text-zinc-400 font-medium tracking-wide">Pathixo Pvt Ltd</span></p>
                    </div>
                    <div className="flex space-x-6 text-sm">
                        <Link href="/privacy" className="text-zinc-500 hover:text-teal-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-zinc-500 hover:text-teal-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
