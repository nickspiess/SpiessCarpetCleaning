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

                {/* Soft Gradient Orbs */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full blur-3xl transform translate-x-1/4" style={{ backgroundColor: 'rgba(198,25,73,0.08)' }}></div>
                    <div className="absolute bottom-40 left-0 w-[500px] h-[500px] bg-stone-200/50 rounded-full blur-3xl transform -translate-x-1/4"></div>
                    <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: 'rgba(0,168,227,0.06)' }}></div>
                </div>

                <div className="container-wide relative z-10 py-12 lg:py-20">
                    {/* Main Hero Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-24">
                        {/* Left Column - Text Content */}
                        <div className={`space-y-8 transition-all duration-1000 ease-out ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                            {/* Hero Headline */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                                <span className="block">50+ Years of</span>
                                <span className="block">Cleaning Excellence</span>
                                <span className="block text-2xl sm:text-3xl lg:text-4xl text-slate-500 font-normal mt-3">
                                    Transform Your Living Space
                                </span>
                            </h1>

                            {/* Subheadline */}
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
                                Five decades of professional carpet cleaning experience. The Twin Cities' most trusted family-owned cleaning service since 1972.
                            </p>

                            {/* Contact Info Card */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-100">
                                        <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Call or Text for Free Quote</p>
                                        <a href="tel:6514722736" className="text-lg font-bold text-slate-900 hover:opacity-70 transition-opacity">
                                            (651) 472-2736
                                        </a>
                                    </div>
                                </div>
                                <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
                                <div className="flex items-center gap-2 text-green-600">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium">Available Now</span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleContactClick}
                                    className="group px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                    style={{ backgroundColor: 'rgba(198,25,73,1)' }}
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Call or Text Now
                                </button>
                                <button
                                    onClick={handleButtonClick}
                                    className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2"
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
                            {/* Card wrapper */}
                            <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 lg:p-8">
                                {/* Header */}
                                <div className="mb-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-3 bg-slate-100 text-slate-600">
                                        A Personal Message
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                                        From Our Founder
                                    </h2>
                                </div>

                                {/* Video */}
                                <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                                    <div className="aspect-video relative bg-slate-900">
                                        {/* Loading Spinner */}
                                        {!isVideoLoaded && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                                                <div className="w-10 h-10 border-3 border-white/20 border-t-white rounded-full animate-spin"></div>
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

                                {/* Value Props */}
                                <ul className="space-y-2.5">
                                    {valueProps.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-slate-100">
                                                <svg className="w-3 h-3 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-slate-700 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 transition-all duration-1000 ease-out delay-300 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {features.map((feature, index) => (
                            <div key={index} className="group">
                                <div
                                    className="rounded-2xl p-[1px] h-full transition-all duration-500 hover:-translate-y-2"
                                    style={{
                                        background: `linear-gradient(135deg, ${feature.color.replace('1)', '0.15)')}, transparent 60%, ${feature.color.replace('1)', '0.08)')})`
                                    }}
                                >
                                    <div className="bg-white rounded-2xl p-6 lg:p-8 h-full flex flex-col relative overflow-hidden">
                                        {/* Top border accent */}
                                        <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: feature.color }}></div>

                                        {/* Corner accent */}
                                        <div
                                            className="absolute top-0 right-0 w-32 h-32 opacity-[0.05]"
                                            style={{ background: `radial-gradient(circle at top right, ${feature.color}, transparent 70%)` }}
                                        ></div>

                                        {/* Image Container */}
                                        <div className="relative mb-5 pt-2">
                                            <div className="h-20 flex items-center justify-center rounded-xl">
                                                <Image
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    width={124}
                                                    height={80}
                                                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900 mb-1 text-center">
                                            {feature.title}
                                        </h3>

                                        <div className="text-center space-y-1 flex-grow mt-2">
                                            <div className="text-xl font-bold mb-3" style={{ color: feature.color }}>
                                                {feature.rating}
                                            </div>
                                            <div className="text-slate-600 font-medium text-sm">
                                                {feature.reviews}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-1000 ease-out delay-500 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {whyChooseUs.map((stat, index) => (
                            <div key={index} className="group text-center h-full">
                                <div
                                    className="rounded-2xl p-[1px] h-full transition-all duration-300 hover:-translate-y-1"
                                    style={{
                                        background: `linear-gradient(135deg, ${stat.color.replace('1)', '0.15)')}, transparent 60%, ${stat.color.replace('1)', '0.08)')})`,
                                    }}
                                >
                                    <div className="bg-white rounded-2xl p-6 h-full flex flex-col justify-center relative overflow-hidden">
                                        {/* Top border accent */}
                                        <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: stat.color }}></div>
                                        <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: stat.color }}>
                                            {stat.number}
                                        </div>
                                        <div className="text-base font-semibold text-slate-800 mb-1">
                                            {stat.text}
                                        </div>
                                        <div className="text-sm text-slate-500">
                                            {stat.subtext}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    );
};

export default FirstLanding;
