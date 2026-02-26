import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "24/7 Emergency Support | Immediate Medical Response",
    description: "Get rapid emergency medical response. Our platform connects you with the nearest ambulances and priority hospital admissions.",
    alternates: {
        canonical: "/emergency-support",
    }
}

export default function EmergencySupport() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="grow flex items-center justify-center p-6 lg:p-12 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h4 className="inline-block text-red-600 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-red-50 px-3 py-1 rounded-full mb-6">
                            Emergency Support
                        </h4>
                        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-6 leading-tight">
                            Rapid response when <br className="hidden sm:block" />
                            <span className="text-red-500 italic">every second counts.</span>
                        </h1>
                        <p className="text-lg text-zinc-600 mb-8 max-w-xl leading-relaxed">
                            Our 24/7 emergency orchestration platform instantly connects you with the nearest equipped ambulances and priority hospital admissions, ensuring seamless critical care during crises.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/#request-callback" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-colors shadow-md">
                                Call Emergency Line
                            </Link>
                            <Link href="/" className="px-6 py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 rounded-full font-medium transition-colors">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-red-500/10 rounded-full transform translate-y-4 translate-x-4"></div>
                        <img
                            src="/emergency-support.png"
                            alt="Emergency Support Illustration"
                            className="relative w-full h-full object-cover rounded-3xl shadow-xl"
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}
