"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsServicesOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Handle Navbar visibility on scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
                // Scrolling down
                setHidden(true);
                // Also close dropdowns when scrolling down
                setIsServicesOpen(false);
            } else {
                // Scrolling up
                setHidden(false);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        {
            name: "Services",
            type: "dropdown",
            children: [
                { name: "Home Nursing", href: "/services/home-nursing" },
                { name: "Elderly Care", href: "/services/elderly-care" },
                { name: "Doctor Consulting", href: "/services/doctor-consulting" },
                { name: "Doctor Visit at Home", href: "/#request-callback" },
                { name: "Hospital Attendants", href: "/services/hospital-attendants" },
                { name: "Travel Assistance", href: "/services/travel-assistance" },
                { name: "Blood Sampling", href: "/#request-callback" }
            ]
        },
        { name: "Specialists", href: "/specialists" },
        { name: "About", href: "/about" },
    ];

    return (
        <header className="relative z-60">
            {/* The outer nav container conditionally toggles translation physics depending on user scroll */}
            <div className={`fixed top-0 left-0 right-0 w-full flex justify-center pt-4 px-4 pointer-events-none transition-transform duration-500 ease-in-out ${hidden ? '-translate-y-[150%]' : 'translate-y-0'}`}>
                <nav className="pointer-events-auto backdrop-blur-md bg-white/80 border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full py-2.5 px-4 lg:px-6 w-full max-w-5xl flex items-center justify-between transition-all duration-300">
                    <Link href="/" id="brand_logo" className="flex items-end leading-none font-bold text-xl tracking-tight text-teal-900 group">
                        <Image src="/brand_logo.png" alt="Logo" width={24} height={24} className="group-hover:scale-105 transition-transform" />
                        <span style={{ fontFamily: "var(--font-grotesk)" }}>ISVARAN</span>
                        <div className="size-1.5 bg-teal-500 mb-1 ml-0.5 rounded-full"></div>
                    </Link>

                    {/* Desktop Nav */}
                    <div id="nav_links" className="items-center font-medium text-sm hidden lg:flex space-x-1">
                        {navLinks.map((link) => {
                            if (link.type === 'dropdown') {
                                const isChildActive = link.children?.some(child => pathname === child.href);
                                return (
                                    <div
                                        key={link.name}
                                        className="relative"
                                        ref={dropdownRef}
                                        onMouseEnter={() => setIsServicesOpen(true)}
                                        onMouseLeave={() => setIsServicesOpen(false)}
                                    >
                                        <button
                                            className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-all duration-200 ${isServicesOpen || isChildActive ? "text-teal-700 bg-teal-50/80" : "text-zinc-600 hover:text-teal-700 hover:bg-zinc-100/80"}`}
                                        >
                                            <span>{link.name}</span>
                                            <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-teal-600' : 'text-zinc-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                                        </button>

                                        <AnimatePresence>
                                            {isServicesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 w-[240px] pt-4 z-70 origin-top"
                                                >
                                                    <div className="bg-white/95 backdrop-blur-xl border border-zinc-100 rounded-3xl shadow-2xl shadow-zinc-200/40 p-2 flex flex-col gap-1 ring-1 ring-black/5">
                                                        {link.children?.map(child => (
                                                            <Link
                                                                key={child.name}
                                                                href={child.href}
                                                                onClick={() => setIsServicesOpen(false)}
                                                                className={`px-4 py-3 rounded-2xl text-sm transition-all flex items-center gap-3 group ${pathname === child.href ? 'bg-teal-50 text-teal-800 font-semibold' : 'text-zinc-600 hover:bg-zinc-50 hover:text-teal-700'}`}
                                                            >
                                                                <div className={`w-1.5 h-1.5 rounded-full transition-all ${pathname === child.href ? 'bg-teal-500 scale-100' : 'bg-teal-400 scale-0 group-hover:scale-100'}`}></div>
                                                                {child.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )
                            }

                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href!}
                                    className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive ? "text-teal-700 bg-teal-50/80 font-semibold" : "text-zinc-600 hover:text-teal-700 hover:bg-zinc-100/80"}`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-3">
                        <Link href="/#request-callback" className="hidden sm:flex px-5 py-2.5 bg-zinc-900 text-white cursor-pointer hover:bg-teal-600 transition-all duration-300 rounded-full items-center gap-2 text-sm font-medium shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(13,148,136,0.23)] hover:-translate-y-0.5 active:translate-y-0">
                            <span>Request Callback</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="transform transition-transform group-hover:translate-x-0.5"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-zinc-600 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-65 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-white z-70 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="p-5 border-b border-zinc-100 flex justify-between items-center">
                    <div id="brand_logo_mobile" className="flex items-end leading-none font-bold text-xl tracking-tight text-teal-900">
                        <span style={{ fontFamily: "var(--font-grotesk)" }}>BISVARAN</span>
                        <div className="size-1.5 bg-teal-500 mb-1 ml-0.5 rounded-full"></div>
                    </div>
                    <button
                        className="p-2 text-zinc-500 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col p-4 space-y-2 font-medium overflow-y-auto">
                    {navLinks.map((link) => {
                        if (link.type === 'dropdown') {
                            const isChildActive = link.children?.some(child => pathname === child.href);
                            return (
                                <div key={link.name} className="flex flex-col">
                                    <button
                                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${isChildActive ? "text-teal-600 bg-teal-50" : "text-zinc-700 hover:bg-zinc-50"}`}
                                    >
                                        <span>{link.name}</span>
                                        <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                                    </button>
                                    <AnimatePresence>
                                        {isMobileServicesOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="flex flex-col gap-1 ml-4 mt-1 border-l-2 border-zinc-100 pl-2 overflow-hidden"
                                            >
                                                {link.children?.map(child => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className={`px-4 py-2.5 rounded-xl transition-colors ${pathname === child.href ? 'text-teal-700 font-semibold' : 'text-zinc-500 hover:text-teal-600'}`}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        }

                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href!}
                                className={`px-4 py-3 rounded-xl transition-colors ${isActive ? "text-teal-600 bg-teal-50" : "text-zinc-700 hover:text-teal-600 hover:bg-teal-50"}`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="mt-auto p-5 border-t border-zinc-100">
                    <Link href="#request-callback" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 bg-teal-600 cursor-pointer text-white hover:bg-teal-700 transition-colors rounded-xl flex items-center justify-center gap-2 text-sm font-medium shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg>
                        <span>Request Callback</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}
