import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const FirstLanding = () => {
    const router = useRouter();
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [pageLoaded, setPageLoaded] = useState(false);

    // Page entrance animation
    useEffect(() => {
        const timer = setTimeout(() => setPageLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleButtonClick = () => {
        router.push('/contact');
    };

    const handleContactClick = () => {
        window.location.href = "tel:6514722736";
    };

    const features = [
        {
            image: "/images/AngiesHome.jpg",
            title: "Angie's List",
            rating: "99% 'A' Ratings",
            reviews: "Over 400 verified reviews with multi-year Super Service Award recognition",
            badge: "Super Service Award",
            color: 'rgba(0,168,227,1)',
            colorLight: 'rgba(0,168,227,0.1)'
        },
        {
            image: "/images/NextDoor.jpg",
            title: "NextDoor",
            rating: "Neighborhood Fave",
            reviews: "Voted by your neighbors as the most trusted carpet cleaning service in the Twin Cities",
            badge: "Community Choice",
            color: 'rgba(198,25,73,1)',
            colorLight: 'rgba(198,25,73,0.1)'
        },
        {
            image: "/images/BBB.jpg",
            title: "Better Business Bureau",
            rating: "'A+' Rating",
            reviews: "Accredited business maintaining the highest standards of trust and customer service",
            badge: "Trusted Partner",
            color: 'rgba(247,167,25,1)',
            colorLight: 'rgba(247,167,25,0.1)'
        }
    ];

    const whyChooseUs = [
        { number: "53", text: "Years Experience", subtext: "Industry expertise since 1972", color: 'rgba(0,168,227,1)' },
        { number: "40K+", text: "Homes Cleaned", subtext: "Trusted by thousands of families", color: 'rgba(198,25,73,1)' },
        { number: "99%", text: "Satisfaction Rate", subtext: "Guaranteed quality results", color: 'rgba(247,167,25,1)' },
        { number: "24/7", text: "Emergency Service", subtext: "Available when you need us", color: 'rgba(111,89,141,1)' }
    ];

    const valueProps = [
        "Experience going back 50+ years",
        "Highest square footage capacity in the industry",
        "No additional charges for pretreating or spot removal",
        "Precise scheduling — no windows",
        "No travel charges",
        "Eco-friendly cleaning process"
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-b from-slate-50 via-stone-100/50 to-neutral-100 overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 pattern-dots opacity-40"></div>

                {/* Soft Gradient Orbs - Optimized for mobile */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-20 -right-20 md:top-20 md:right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-3xl" style={{ backgroundColor: 'rgba(198,25,73,0.06)' }}></div>
                    <div className="absolute bottom-20 -left-20 md:bottom-40 md:left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-stone-200/40 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/3 left-1/2 w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: 'rgba(0,168,227,0.05)' }}></div>
                </div>

                <div className="container-wide relative z-10 py-6 md:py-12 lg:py-20">
                    {/* Main Hero Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 lg:gap-20 items-center mb-12 md:mb-24">
                        {/* Left Column - Text Content */}
                        <div className={`space-y-5 md:space-y-8 transition-all duration-1000 ease-out ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                            {/* Location badge */}
                            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/80 backdrop-blur-sm border border-slate-200/50 text-slate-600 shadow-sm">
                                <span className="flex items-center gap-1.5">
                                    <svg className="w-3 h-3" style={{ color: 'rgba(198,25,73,1)' }} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    Based in Woodbury
                                </span>
                                <span className="w-px h-3 bg-slate-300"></span>
                                <span className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'rgba(0,168,227,1)' }}></span>
                                    Serving the Twin Cities Since 1972
                                </span>
                            </div>

                            {/* Hero Headline - Better mobile sizing */}
                            <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 tracking-tight">
                                <span className="block">50+ Years of</span>
                                <span className="block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text">Cleaning Excellence</span>
                                <span className="block text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-slate-500 font-medium mt-2 md:mt-3">
                                    Transform Your Living Space
                                </span>
                            </h1>

                            {/* Subheadline */}
                            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
                                Five decades of professional carpet cleaning experience. The Twin Cities' most trusted family-owned cleaning service since 1972.
                            </p>

                            {/* Mobile-optimized Contact Card */}
                            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
                                <div className="p-4 md:p-5">
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(0,168,227,0.1)' }}>
                                                <svg className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'rgba(0,168,227,1)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div className="leading-tight">
                                                <p className="text-xs md:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Call or Text</p>
                                                <a href="tel:6514722736" className="text-lg md:text-xl font-bold text-slate-900 hover:opacity-70 transition-opacity">
                                                    (651) 472-2736
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-green-50 border border-green-100">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <span className="text-xs font-semibold text-green-700">Available</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons - Mobile optimized */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleContactClick}
                                    className="group px-6 md:px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2 text-base"
                                    style={{ backgroundColor: 'rgba(198,25,73,1)' }}
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Call or Text Now
                                </button>
                                <button
                                    onClick={handleButtonClick}
                                    className="px-6 md:px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 text-base"
                                >
                                    Contact Us
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Right Column - Personal Message Video */}
                        <div className={`relative transition-all duration-1000 ease-out delay-200 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            {/* Card wrapper - Mobile optimized */}
                            <div className="bg-white rounded-2xl md:rounded-3xl border border-slate-200/80 shadow-lg p-4 md:p-6 lg:p-8">
                                {/* Header */}
                                <div className="mb-4 md:mb-6">
                                    <div className="inline-flex items-center gap-2 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold mb-2 md:mb-3 bg-slate-100 text-slate-600">
                                        A Personal Message
                                    </div>
                                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900">
                                        From Our Founder
                                    </h2>
                                </div>

                                {/* Video */}
                                <div className="rounded-lg md:rounded-xl overflow-hidden shadow-md md:shadow-lg mb-4 md:mb-6">
                                    <div className="aspect-video relative bg-slate-900">
                                        {/* Loading Spinner */}
                                        {!isVideoLoaded && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                                                <div className="w-8 h-8 md:w-10 md:h-10 border-2 md:border-3 border-white/20 border-t-white rounded-full animate-spin"></div>
                                            </div>
                                        )}
                                        <iframe
                                            className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                                            src="https://www.youtube.com/embed/RRZq3E61kFY"
                                            title="About Spiess Carpet Cleaning"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            onLoad={() => setIsVideoLoaded(true)}
                                        />
                                    </div>
                                </div>

                                {/* Value Props - Mobile optimized grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-2.5">
                                    {valueProps.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2.5 p-2 md:p-2.5 rounded-lg bg-slate-50/80 hover:bg-slate-100/80 transition-colors">
                                            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(0,168,227,0.1)' }}>
                                                <svg className="w-3 h-3" style={{ color: 'rgba(0,168,227,1)' }} fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-slate-700 text-xs md:text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trust Indicators - All visible */}
                    <div className={`mb-10 md:mb-20 transition-all duration-1000 ease-out delay-300 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div
                                        className="rounded-xl md:rounded-2xl p-[1px] h-full transition-all duration-500 md:hover:-translate-y-2"
                                        style={{
                                            background: `linear-gradient(135deg, ${feature.color.replace('1)', '0.15)')}, transparent 60%, ${feature.color.replace('1)', '0.08)')})`
                                        }}
                                    >
                                        <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 h-full flex flex-col relative overflow-hidden">
                                            {/* Top border accent */}
                                            <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: feature.color }}></div>

                                            {/* Corner accent */}
                                            <div
                                                className="absolute top-0 right-0 w-20 md:w-32 h-20 md:h-32 opacity-[0.05]"
                                                style={{ background: `radial-gradient(circle at top right, ${feature.color}, transparent 70%)` }}
                                            ></div>

                                            {/* Mobile: Horizontal layout, Desktop: Vertical */}
                                            <div className="flex sm:flex-col items-center sm:items-stretch gap-3 sm:gap-0">
                                                {/* Image Container */}
                                                <div className="relative sm:mb-4 md:mb-5 sm:pt-1 md:pt-2 flex-shrink-0">
                                                    <div className="h-14 w-14 sm:h-16 md:h-20 sm:w-auto flex items-center justify-center rounded-lg md:rounded-xl">
                                                        <Image
                                                            src={feature.image}
                                                            alt={feature.title}
                                                            width={100}
                                                            height={64}
                                                            className="object-contain md:group-hover:scale-105 transition-transform duration-300 w-auto h-10 sm:h-12 md:h-16"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Text Content */}
                                                <div className="flex-1 sm:text-center">
                                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-0.5 sm:mb-1">
                                                        {feature.title}
                                                    </h3>

                                                    <div className="sm:space-y-1 sm:mt-1 md:mt-2">
                                                        <div className="text-base sm:text-lg md:text-xl font-bold sm:mb-2 md:mb-3" style={{ color: feature.color }}>
                                                            {feature.rating}
                                                        </div>
                                                        <div className="text-slate-600 font-medium text-xs md:text-sm leading-relaxed hidden sm:block">
                                                            {feature.reviews}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Section - Mobile optimized */}
                    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 transition-all duration-1000 ease-out delay-500 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {whyChooseUs.map((stat, index) => (
                            <div
                                key={index}
                                className="group text-center h-full"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div
                                    className="rounded-xl md:rounded-2xl p-[1px] h-full"
                                    style={{
                                        background: `linear-gradient(135deg, ${stat.color.replace('1)', '0.15)')}, transparent 60%, ${stat.color.replace('1)', '0.08)')})`,
                                    }}
                                >
                                    <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 h-full flex flex-col justify-center relative overflow-hidden">
                                        {/* Top border accent */}
                                        <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: stat.color }}></div>
                                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-0.5 md:mb-1" style={{ color: stat.color }}>
                                            {stat.number}
                                        </div>
                                        <div className="text-sm md:text-base font-semibold text-slate-800 mb-0.5 md:mb-1">
                                            {stat.text}
                                        </div>
                                        <div className="text-[11px] md:text-sm text-slate-500 leading-tight">
                                            {stat.subtext}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* Floating Mobile CTA - Only visible on mobile when scrolled */}
            <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-white via-white to-transparent md:hidden pointer-events-none">
                <a
                    href="tel:6514722736"
                    className="pointer-events-auto flex items-center justify-center gap-2 w-full py-4 text-white font-bold text-base rounded-xl shadow-xl transition-all active:scale-[0.98]"
                    style={{ backgroundColor: 'rgba(198,25,73,1)' }}
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (651) 472-2736
                </a>
            </div>
        </>
    );
};

export default FirstLanding;
