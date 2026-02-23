export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-zinc-50 flex flex-col font-grotesk">
            <div className="grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full flex flex-col">
                <div className="text-center mb-16">
                    <h4 className="text-teal-600 font-semibold text-sm tracking-widest uppercase mb-4">Legal Info</h4>
                    <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-zinc-900 mb-6">Privacy Policy</h1>
                    <p className="text-zinc-500">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>

                <div className="prose prose-zinc prose-teal max-w-none prose-headings:font-medium prose-p:text-zinc-600 space-y-8 bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-zinc-100">

                    <section>
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">1. Introduction</h2>
                        <p>
                            Welcome to Bisvaran. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">2. The Data We Collect About You</h2>
                        <p>
                            Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                        </p>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-zinc-600">
                            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, marital status, title, date of birth and gender.</li>
                            <li><strong>Contact Data</strong> includes medical facility address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Health & Medical Data</strong> includes basic medical requirements required for matching you with appropriate care providers.</li>
                            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">3. How We Use Your Personal Data</h2>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-zinc-600">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., orchestrating care).</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal obligation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">4. Data Security</h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">5. Contact Us</h2>
                        <p>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at:
                        </p>
                        <p className="mt-2 text-teal-600 font-medium">privacy@bisvaran.com</p>
                    </section>

                </div>
            </div>
        </main>
    )
}
