"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, type Variants } from "motion/react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [phase, setPhase] = useState<"idle" | "covering" | "revealing">("idle");

    useEffect(() => {
        if (phase === "covering") {
            const hash = window.location.hash;
            if (hash) {
                const id = hash.substring(1);
                setTimeout(() => {
                    const el = document.getElementById(id);
                    if (el) {
                        el.scrollIntoView();
                    } else {
                        window.scrollTo(0, 0);
                    }
                }, 100);
            } else {
                window.scrollTo(0, 0);
            }
            setPhase("revealing");
        }
    }, [pathname]);

    useEffect(() => {
        if (phase === "revealing") {
            const timer = setTimeout(() => {
                setPhase("idle");
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [phase]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest("a");

            if (target && target.href && !target.target && !e.ctrlKey && !e.metaKey) {
                const url = new URL(target.href);

                if (url.origin === window.location.origin) {
                    if (url.pathname === window.location.pathname) {
                        return;
                    }

                    e.preventDefault();
                    setPhase("covering");

                    setTimeout(() => {
                        router.push(url.pathname + url.search + url.hash);
                    }, 600);
                }
            }
        };

        document.addEventListener("click", handleClick, true);
        return () => document.removeEventListener("click", handleClick, true);
    }, [router]);

    const variants: Variants = {
        idle: {
            left: "100%",
            right: "0%",
            transition: { duration: 0 }
        },
        covering: {
            left: "0%",
            right: "0%",
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
        },
        revealing: {
            left: "0%",
            right: "100%",
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <>
            <motion.div
                className="fixed top-0 bottom-0 z-100 bg-teal-800 pointer-events-none"
                variants={variants}
                initial="idle"
                animate={phase}
            />
            {children}
        </>
    );
}
