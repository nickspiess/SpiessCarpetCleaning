import { useRouter } from "next/router";
import React from 'react';
import Image from 'next/image';

const FirstLanding = () => {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/quote');
    };

    const handleContactClick = () => {
        window.location.href = "tel:6514722736";
    };

    const features = [
        {
            image: "/images/AngiesHome.jpg",
            title: "Angie's List",
            rating: "99% 'A' Ratings",
            reviews: "400+ Reviews",
            badge: "Super Service Award"
        },
        {
            image: "/images/NextDoor.jpg",
            title: "NextDoor",
            rating: "100% Satisfied",
            reviews: "Customers",
            badge: "Neighborhood Fave"
        },
        {
            image: "/images/BBB.jpg",
            title: "Better Business Bureau",
            rating: "'A+' Rating",
            reviews: "Accredited Business",
            badge: "Trusted Partner"
        }
    ];

    const whyChooseUs = [
        { number: "40+", text: "Years Experience", subtext: "Serving Twin Cities since 1983" },
        { number: "10K+", text: "Happy Customers", subtext: "Families trust our service" },
        { number: "99%", text: "Satisfaction Rate", subtext: "Guaranteed quality results" },
        { number: "24/7", text: "Emergency Service", subtext: "Available when you need us" }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-20 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-100/40 rounded-full blur-3xl transform translate-x-1/2"></div>
                    <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary-100/40 rounded-full blur-3xl transform -translate-x-1/2"></div>
                </div>
                
                <div className="container-wide relative z-10 py-16">
                    {/* Main Hero Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Left Column - Text Content */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium">
                                🏆 Most Awarded in Twin Cities
                            </div>
                            
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                                <span className="block">40+ Years in the</span>
                                <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
                                    Cleaning Industry
                                </span>
                                <span className="block text-4xl md:text-5xl lg:text-6xl text-slate-600 font-medium">
                                    Transform Your Living Space
                                </span>
                            </h1>
                            
                            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-xl">
                                Four decades of carpet cleaning excellence. We don't just clean—we restore, protect, and enhance your home's comfort.
                            </p>

                            {/* Contact Info */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                                        📞
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-600">Call or Text for Free Quote</p>
                                        <a href="tel:6514722736" className="text-xl font-bold text-secondary-600 hover:text-secondary-700 transition-colors">
                                            (651) 472-2736
                                        </a>
                                    </div>
                                </div>
                                <div className="hidden sm:block w-px h-12 bg-slate-300"></div>
                                <div className="flex items-center gap-2 text-green-600">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="font-medium">Available Now</span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleButtonClick}
                                    className="group px-8 py-4 bg-secondary-500 text-white font-bold rounded-xl hover:bg-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    Get Free Instant Quote
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                                <button
                                    onClick={handleContactClick}
                                    className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    📞 Call Now
                                </button>
                            </div>
                        </div>

                        {/* Right Column - Special Offer Card */}
                        <div className="relative">
                            <div className="relative bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                                {/* Decorative Elements */}
                                <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                                <div className="absolute bottom-4 left-4 w-16 h-16 bg-yellow-300/30 rounded-full blur-lg"></div>
                                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-orange-300/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
                                
                                <div className="relative z-10 text-center text-white">
                                    <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                                        ☀️ Summer Special
                                    </div>
                                    
                                    <h2 className="text-3xl font-bold mb-4 text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]">
                                        Summer Special
                                    </h2>
                                    
                                    <div className="relative mb-6">
                                        <div className="text-6xl md:text-7xl font-black text-white leading-none [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]">
                                            30%
                                        </div>
                                        <div className="text-2xl font-bold text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]">OFF</div>
                                        <div className="absolute -top-2 -right-0 bg-white text-orange-600 text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                                            SAVE BIG
                                        </div>
                                    </div>
                                    
                                    <p className="text-lg mb-12 opacity-95 text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]">
                                        All Professional Cleaning Services
                                    </p>
                                    
                                    <ul className="text-left space-y-2 mb-8">
                                        <li className="flex items-center gap-2">
                                            <span className="text-white text-lg font-bold">✓</span>
                                            <span className="text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]">Carpet & Upholstery Cleaning</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-white text-lg font-bold">✓</span>
                                            <span className="text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]">Air Duct & Dryer Vent Service</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-white text-lg font-bold">✓</span>
                                            <span className="text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]">Pet Odor & Stain Removal</span>
                                        </li>
                                    </ul>
                                    
                                    <button
                                        onClick={handleButtonClick}
                                        className="w-full bg-white text-secondary-600 font-bold py-4 px-8 rounded-xl hover:bg-accent-50 transition-all duration-300 mt-4 shadow-lg hover:shadow-xl"
                                    >
                                        Claim This Deal Now
                                    </button>
                                    
                                    <p className="text-sm mt-6 opacity-80 text-white">
                                        *Valid through end of month. Cannot be combined with other offers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {whyChooseUs.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group-hover:border-primary-200">
                                    <div className="text-4xl md:text-5xl font-black text-secondary-600 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-lg font-bold text-slate-800 mb-1">
                                        {stat.text}
                                    </div>
                                    <div className="text-sm text-slate-600">
                                        {stat.subtext}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="group">
                                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 group-hover:border-secondary-200 group-hover:-translate-y-2">
                                    <div className="relative mb-6">
                                        <div className="h-24 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl">
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                width={100}
                                                height={60}
                                                className="object-contain group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                            {feature.badge}
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                                        {feature.title}
                                    </h3>
                                    
                                    <div className="text-center space-y-2">
                                        <div className="text-2xl font-bold text-secondary-600">
                                            {feature.rating}
                                        </div>
                                        <div className="text-slate-700 font-medium text-lg">
                                            {feature.reviews}
                                        </div>
                                        <div className="flex justify-center">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className="text-accent-400 text-lg">★</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg className="w-full h-24 fill-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
                        <path d="M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z" />
                    </svg>
                </div>
            </section>
        </>
    );
};

export default FirstLanding;