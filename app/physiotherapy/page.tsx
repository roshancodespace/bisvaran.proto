import Link from "next/link"

export default function Physiotherapy() {
    return (
        <div className="min-h-screen flex flex-col pt-20">
            <main className="grow flex items-center justify-center p-6 lg:p-12 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h4 className="inline-block text-teal-600 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full mb-6">
                            Physiotherapy
                        </h4>
                        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-6 leading-tight">
                            Rebuild your strength <br className="hidden sm:block" />
                            <span className="text-teal-500 italic">with expert guidance.</span>
                        </h1>
                        <p className="text-lg text-zinc-600 mb-8 max-w-xl leading-relaxed">
                            Our certified physiotherapists design customized rehabilitation programs to help you recover from injury, manage chronic pain, and improve your mobility right from your living room.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/#request-callback" className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-medium transition-colors shadow-md">
                                Schedule Session
                            </Link>
                            <Link href="/" className="px-6 py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 rounded-full font-medium transition-colors">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-teal-500/10 rounded-full transform translate-y-4 translate-x-4"></div>
                        <img
                            src="/physiotherapy.png"
                            alt="Physiotherapy Illustration"
                            className="relative w-full h-full object-cover rounded-3xl shadow-xl"
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}
