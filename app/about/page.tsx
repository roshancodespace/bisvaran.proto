import Link from "next/link"
import Team from "@/components/Team"

export default function AboutUs() {
    return (
        <div className="min-h-screen flex flex-col pt-20 bg-zinc-50/30">
            <main className="grow flex flex-col items-center justify-start w-full">
                {/* Hero Section */}
                <section className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <h4 className="inline-block text-teal-600 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full mb-6 relative">
                            <span className="absolute inset-0 bg-teal-200/50 blur-sm rounded-full -z-10"></span>
                            Our Story
                        </h4>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                            Redefining the <br className="hidden sm:block" />
                            <span className="text-teal-600 bg-clip-text bg-linear-to-r from-teal-600 to-teal-400">Standard of Care</span>.
                        </h1>
                        <p className="text-lg text-zinc-600 mb-8 max-w-xl leading-relaxed">
                            Bisvaran was founded on a simple premise: navigating healthcare shouldn't be the hardest part of getting well. We are your dedicated patient advocates, seamlessly connecting you to the best hospitals, specialists, and in-home care.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/#request-callback" className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-medium transition-colors shadow-md hover:-translate-y-0.5 active:translate-y-0 duration-300">
                                Connect With Us
                            </Link>
                        </div>
                    </div>

                    <div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto">
                        <div className="absolute inset-0 bg-teal-500/10 rounded-full transform translate-y-6 translate-x-6"></div>
                        <img
                            src="/about-us.png"
                            alt="About Bisvaran"
                            className="relative w-full h-full object-cover rounded-3xl shadow-xl border border-zinc-100/50 bg-white"
                        />
                    </div>
                </section>

                {/* Values Section */}
                <section className="w-full bg-white py-20 border-y border-zinc-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            <div className="flex flex-col items-center">
                                <div className="size-16 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v40h16a8,8,0,0,1,0,16H120a8,8,0,0,1,0-16h8Z"></path></svg>
                                </div>
                                <h3 className="text-xl font-bold tracking-tight text-zinc-900 mb-3">Verified Excellence</h3>
                                <p className="text-zinc-600 leading-relaxed">Every medical professional and facility in our network undergoes rigorous vetting to ensure you only receive top-tier care.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="size-16 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                                </div>
                                <h3 className="text-xl font-bold tracking-tight text-zinc-900 mb-3">Patient-First Advocacy</h3>
                                <p className="text-zinc-600 leading-relaxed">We stand by your side. Our concierge team handles the logistics so you and your family can focus entirely on healing and recovery.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="size-16 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128ZM128,48a80,80,0,1,0,80,80A80.09,80.09,0,0,0,128,48Z"></path></svg>
                                </div>
                                <h3 className="text-xl font-bold tracking-tight text-zinc-900 mb-3">Seamless Operations</h3>
                                <p className="text-zinc-600 leading-relaxed">From booking an ambulance to securing a room and scheduling post-op physical therapy, we orchestrate the entire timeline.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <div className="w-full">
                    <Team />
                </div>

            </main>
        </div>
    )
}
