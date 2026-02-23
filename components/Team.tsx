"use client";
import { motion } from "motion/react";

const teamMembers = [
    {
        name: "Dr. Sarah Jenkins",
        role: "Chief Medical Officer",
        image: "https://api.dicebear.com/7.x/notionists/svg?seed=sarah",
        bio: "Former Head of Surgery at Metro Hospital with 15+ years of experience in patient care excellence."
    },
    {
        name: "Michael Chen",
        role: "Head of Care Operations",
        image: "https://api.dicebear.com/9.x/notionists/svg?seed=michael",
        bio: "Specializes in healthcare logistics and ensuring seamless service delivery for our patients."
    },
    {
        name: "Dr. Emily Rodriguez",
        role: "Lead Patient Advocate",
        image: "https://api.dicebear.com/9.x/notionists/svg?seed=emily",
        bio: "Championing patient rights and ensuring transparent communication between doctors and families."
    },
    {
        name: "James Wilson",
        role: "Director of Provider Network",
        image: "https://api.dicebear.com/9.x/notionists/svg?seed=james",
        bio: "Building relationships with top-tier hospitals and specialists to expand our curated network."
    }
];

export default function Team() {
    return (
        <section id="team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
            >
                <h4 className="inline-block text-teal-600 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full mb-4">
                    Our Leadership
                </h4>
                <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-zinc-900 mb-6 leading-tight">
                    The experts behind <br className="hidden sm:block" />
                    <span className="text-teal-500 italic">your care orchestration.</span>
                </h2>
                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                    Our team brings together decades of experience in medicine, technology, and patient advocacy to redefine healthcare standards.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                        className="group flex flex-col items-center text-center"
                    >
                        <div className="relative w-48 h-48 mb-6 mx-auto">
                            <div className="absolute inset-0 bg-teal-500/10 rounded-full transform translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
                            <img
                                src={member.image}
                                alt={member.name}
                                className="relative w-full h-full object-cover rounded-full shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                        <h3 className="text-xl font-medium tracking-tight text-zinc-900 group-hover:text-teal-600 transition-colors duration-300">
                            {member.name}
                        </h3>
                        <p className="text-sm font-medium text-teal-600 mt-1 mb-3">
                            {member.role}
                        </p>
                        <p className="text-sm text-zinc-600 leading-relaxed px-2">
                            {member.bio}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
