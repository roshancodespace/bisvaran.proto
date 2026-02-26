import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Bisvaran",
    description: "Read Bisvaran's terms of service. By accessing and using our platform, you agree to abide by these terms.",
    alternates: {
        canonical: "/terms",
    },
    robots: {
        index: false,
    }
}

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-zinc-50 flex flex-col font-grotesk">
            <div className="grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full flex flex-col">
                <div className="text-center mb-16">
                    <h4 className="text-teal-600 font-semibold text-sm tracking-widest uppercase mb-4">Legal Info</h4>
                    <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-zinc-900 mb-6">Terms of Service</h1>
                    <p className="text-zinc-500">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>

                <div className="prose prose-zinc prose-teal max-w-none prose-headings:font-medium prose-p:text-zinc-600 space-y-8 bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-zinc-100">

                    <section>
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using Bisvaran ("the Platform"), you agree to abide by these Terms of Service. If you do not agree with any part of these terms, you must not use our services. We reserve the right to modify these terms at any time without prior notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">2. Description of Services</h2>
                        <p>
                            Bisvaran acts as a facilitator connecting patients with healthcare providers, including hospitals, doctors, and home nursing staff. We are not a medical provider and do not provide medical advice, diagnosis, or treatment directly. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">3. User Responsibilities</h2>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-zinc-600">
                            <li>You must provide accurate, current, and complete information during registration or service request.</li>
                            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                            <li>You agree not to use the Platform for any unlawful purpose or in any way that interrupts, damages, or impairs the service.</li>
                            <li>You accept that medical emergencies should be directed to your local emergency services (e.g., dialing emergency numbers) and not solely relied upon through this Platform.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">4. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, Bisvaran shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
                        </p>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-zinc-600">
                            <li>Your use or inability to use the Platform.</li>
                            <li>Any conduct or content of any third-party healthcare provider on the Platform.</li>
                            <li>Unauthorized access, use or alteration of your transmissions or content.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">5. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms of Service, please contact us at:
                        </p>
                        <p className="mt-2 text-teal-600 font-medium">legal@bisvaran.com</p>
                    </section>

                </div>
            </div>
        </main>
    )
}
