import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { href: '/about', label: 'About Us', icon: '👥' },
        { href: '/services', label: 'Services', icon: '🧽' },
        { href: '/quote', label: 'Get Quote', icon: '💰' },
        { href: '/contact', label: 'Contact', icon: '📞' },
        { href: '/testimonials', label: 'Reviews', icon: '⭐' }
    ];

    const services = [
        { name: 'Carpet Cleaning', icon: '🏠' },
        { name: 'Air Duct Cleaning', icon: '💨' },
        { name: 'Upholstery Cleaning', icon: '🛋️' },
        { name: 'Pet Odor Removal', icon: '🐕' },
        { name: 'Stain Protection', icon: '🛡️' },
        { name: 'Emergency Service', icon: '🚨' }
    ];

    return (
        <footer className="bg-gradient-to-br from-slate-100 via-blue-50 to-accent-50/30 border-t border-slate-200">
            <div className="container-wide py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="mb-8">
                            <Image
                                src={logo}
                                alt="Spiess Carpet Cleaning"
                                width={200}
                                height={70}
                                className="h-auto"
                            />
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6 max-w-md">
                            Twin Cities' most trusted carpet cleaning service with over 40 years of excellence. 
                            Family-owned, locally operated, and 100% satisfaction guaranteed.
                        </p>
                        
                        {/* Contact Highlights */}
                        <div className="space-y-4 mb-8">
                            <a 
                                href="tel:6514722736"
                                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group max-w-sm"
                            >
                                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                    📞
                                </div>
                                <div>
                                    <p className="font-bold text-secondary-600 text-lg">(651) 472-2736</p>
                                    <p className="text-slate-500 text-sm">Call for free quote</p>
                                </div>
                            </a>
                            
                            <a 
                                href="mailto:sales@spiesscarpet.com"
                                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group max-w-sm"
                            >
                                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                    ✉️
                                </div>
                                <div>
                                    <p className="font-bold text-accent-600 text-lg">Email Us</p>
                                    <p className="text-slate-500 text-sm">sales@spiesscarpet.com</p>
                                </div>
                            </a>
                        </div>

                        {/* CTA Button */}
                        <Link href="/quote">
                            <button className="px-8 py-4 bg-gradient-to-r from-secondary-500 to-accent-500 text-white font-bold text-lg rounded-xl hover:from-secondary-600 hover:to-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                🚀 Get Free Quote Today
                            </button>
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-slate-800 flex items-center gap-2">
                            🔗 Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link 
                                        href={link.href}
                                        className="flex items-center gap-3 text-slate-600 hover:text-secondary-600 transition-colors duration-200 group"
                                    >
                                        <span className="text-lg group-hover:scale-110 transition-transform duration-200">{link.icon}</span>
                                        <span className="font-medium">{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-slate-800 flex items-center gap-2">
                            🧽 Our Services
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name} className="flex items-center gap-3 text-slate-600">
                                    <span className="text-lg">{service.icon}</span>
                                    <span className="font-medium">{service.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Service Areas */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-12">
                    <h4 className="text-xl font-bold mb-10 text-slate-800 flex items-center gap-2">
                        📍 Serving the Twin Cities Metro Area
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[
                            'Minneapolis', 'St. Paul', 'Bloomington', 'Eden Prairie', 
                            'Minnetonka', 'Woodbury', 'Lakeville', 'Burnsville', 
                            'Apple Valley', 'Eagan', 'St. Louis Park', 'Maplewood'
                        ].map((city) => (
                            <div key={city} className="flex items-center gap-2 text-slate-600">
                                <span className="text-secondary-500">•</span>
                                <span className="font-medium text-sm">{city}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 text-sm mt-10 text-center">
                        Don't see your city? We likely service your area - give us a call!
                    </p>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-300 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <p className="text-slate-600 font-medium">
                                © {currentYear} Spiess Carpet Cleaning. All Rights Reserved.
                            </p>
                            <p className="text-slate-500 text-sm mt-1">
                                Licensed • Insured • 40+ Years Experience • 100% Satisfaction Guaranteed
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
                                <span className="text-green-600">✅</span>
                                <span className="text-green-700 font-medium text-sm">A+ BBB Rating</span>
                            </div>
                            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
                                <span className="text-blue-600">🏆</span>
                                <span className="text-blue-700 font-medium text-sm">Award Winning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;