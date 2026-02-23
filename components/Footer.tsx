import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Biswaran</h3>
                        <p className="text-zinc-400">Your trusted healthcare companion.</p>
                    </div>
                    <div>
                        <h4 className="font-medium mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Services</a></li>
                            <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><a href="/home-nursing" className="text-zinc-400 hover:text-white transition-colors">Home Nursing</a></li>
                            <li><a href="/doctor-consultations" className="text-zinc-400 hover:text-white transition-colors">Doctor Consultations</a></li>
                            <li><a href="/physiotherapy" className="text-zinc-400 hover:text-white transition-colors">Physiotherapy</a></li>
                            <li><a href="/emergency-support" className="text-zinc-400 hover:text-white transition-colors">Emergency Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium mb-4">Contact Us</h4>
                        <ul className="space-y-2">
                            <li className="text-zinc-400">[EMAIL_ADDRESS]</li>
                            <li className="text-zinc-400">+123 456 7890</li>
                            <li className="text-zinc-400">123 Healthcare St, Wellness City</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-zinc-500 text-sm mb-4 md:mb-0">© 2024 Biswaran. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-zinc-400 hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
