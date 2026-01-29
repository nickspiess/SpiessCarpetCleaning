import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { href: '/about', label: 'About Us' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
        { href: '/testimonials', label: 'Reviews' }
    ];

    const services = [
        { name: 'Carpet Cleaning' },
        { name: 'Air Duct Cleaning' },
        { name: 'Upholstery Cleaning' },
        { name: 'Pet Odor Removal' },
        { name: 'Stain Protection' },
        { name: 'Emergency Service' }
    ];

    return (
        <footer className="bg-gradient-to-br from-slate-50 via-white to-stone-50 border-t border-slate-200">
            <div className="container-wide py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="mb-6 md:mb-8">
                            <Image
                                src={logo}
                                alt="Spiess Carpet Cleaning"
                                width={160}
                                height={56}
                                className="h-auto w-[140px] md:w-[200px]"
                            />
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6 max-w-md">
                            Twin Cities' most trusted carpet cleaning service with over 50 years of excellence.
                            Family-owned, locally operated, and 100% satisfaction guaranteed.
                        </p>

                        {/* Contact Highlights */}
                        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                            <a
                                href="tel:6514722736"
                                className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group max-w-sm border border-slate-100"
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'rgba(0,168,227,0.1)' }}>
                                    <svg className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'rgba(0,168,227,1)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-base md:text-lg" style={{ color: 'rgba(0,168,227,1)' }}>(651) 472-2736</p>
                                    <p className="text-slate-500 text-xs md:text-sm">Call for free quote</p>
                                </div>
                            </a>

                            <a
                                href="mailto:sales@spiesscarpet.com"
                                className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group max-w-sm border border-slate-100"
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'rgba(198,25,73,0.1)' }}>
                                    <svg className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'rgba(198,25,73,1)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-base md:text-lg" style={{ color: 'rgba(198,25,73,1)' }}>Email Us</p>
                                    <p className="text-slate-500 text-xs md:text-sm">sales@spiesscarpet.com</p>
                                </div>
                            </a>
                        </div>

                        {/* CTA Button */}
                        <a href="tel:6514722736">
                            <button className="px-6 md:px-8 py-3 md:py-4 text-white font-bold text-base md:text-lg rounded-lg md:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:opacity-90" style={{ backgroundColor: 'rgba(198,25,73,1)' }}>
                                Call for Free Quote
                            </button>
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-slate-800">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors duration-200 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full transition-transform duration-200 group-hover:scale-150" style={{ backgroundColor: 'rgba(0,168,227,1)' }}></span>
                                        <span className="font-medium">{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-slate-800">
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name} className="flex items-center gap-3 text-slate-600">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                    <span className="font-medium">{service.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Service Areas */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-12 border border-slate-100">
                    <h4 className="text-xl font-bold mb-10 text-slate-800">
                        Serving the Twin Cities Metro Area
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[
                            'Minneapolis', 'St. Paul', 'Bloomington', 'Eden Prairie',
                            'Minnetonka', 'Woodbury', 'Lakeville', 'Burnsville',
                            'Apple Valley', 'Eagan', 'St. Louis Park', 'Maplewood'
                        ].map((city) => (
                            <div key={city} className="flex items-center gap-2 text-slate-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                <span className="font-medium text-sm">{city}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 text-sm mt-10 text-center">
                        Don't see your city? We likely service your area - give us a call!
                    </p>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <p className="text-slate-600 font-medium">
                                © {currentYear} Spiess Carpet Cleaning. All Rights Reserved.
                            </p>
                            <p className="text-slate-500 text-sm mt-1">
                                Licensed · Insured · 50+ Years Experience · 100% Satisfaction Guaranteed
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ backgroundColor: 'rgba(0,168,227,0.1)' }}>
                                <svg className="w-4 h-4" style={{ color: 'rgba(0,168,227,1)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>
                                <span className="font-medium text-sm" style={{ color: 'rgba(0,168,227,1)' }}>A+ BBB Rating</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ backgroundColor: 'rgba(247,167,25,0.1)' }}>
                                <svg className="w-4 h-4" style={{ color: 'rgba(247,167,25,1)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                                </svg>
                                <span className="font-medium text-sm" style={{ color: 'rgba(247,167,25,1)' }}>Award Winning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
