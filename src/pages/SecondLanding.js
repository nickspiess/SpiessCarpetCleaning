import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CarpetLogo from '../../public/images/final_carpet.png';
import AirVent from '../../public/images/final_vent.png';
import Couch from '../../public/images/couch.png';

const SecondLanding = () => {
    const [visibleSection, setVisibleSection] = useState(false);
    const sectionRef = useRef(null);

    // Scroll-triggered animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisibleSection(true);
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const services = [
        {
            icon: CarpetLogo,
            title: 'Carpet Cleaning',
            description: 'State-of-the-art, portable steam cleaning designed to restore your carpets to like-new condition. Since 1972, we\'ve perfected our deep extraction process.',
            features: ['Deep Steam Extraction', 'Fast Drying', 'Pet Odor Removal', 'Stain Protection'],
            color: 'rgba(198,25,73,1)',
            colorLight: 'rgba(198,25,73,0.1)'
        },
        {
            icon: AirVent,
            title: 'Air Duct Cleaning',
            description: 'Breathe easier with our comprehensive air system cleaning. Since 1972, we\'ve helped thousands improve their home\'s air quality and efficiency.',
            features: ['Improved Air Quality', 'Energy Efficiency', 'Allergen Reduction', 'Fire Prevention'],
            color: 'rgba(0,168,227,1)',
            colorLight: 'rgba(0,168,227,0.1)'
        },
        {
            icon: Couch,
            title: 'Upholstery Cleaning',
            description: 'Revitalize your furniture with gentle yet effective cleaning methods. Our 50+ years of expertise in all types of materials ensures your investment is protected.',
            features: ['Fabric Protection', 'Color Restoration', 'Deep Sanitization', 'Gentle Care'],
            color: 'rgba(247,167,25,1)',
            colorLight: 'rgba(247,167,25,0.1)'
        }
    ];

    const handleCall = () => {
        window.location.href = "tel:6514722736";
    };

    return (
        <section ref={sectionRef} className="py-24 lg:py-32 bg-gradient-to-b from-neutral-100 via-white to-white relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-stone-100/40 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="container-wide relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ease-out ${visibleSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-5">
                        Professional Cleaning Solutions
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Five decades of expertise in transforming homes across the Twin Cities.
                        From deep carpet cleaning to comprehensive air duct services.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-1000 ease-out ${visibleSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            style={{ transitionDelay: `${200 + index * 150}ms` }}
                        >
                            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg h-full flex flex-col overflow-hidden group relative">
                                {/* Top border accent */}
                                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: service.color }}></div>

                                <div className="p-7 lg:p-8 flex flex-col h-full">
                                    {/* Icon */}
                                    <div className="mb-6 pt-2">
                                        <div
                                            className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                                            style={{ backgroundColor: service.colorLight }}
                                        >
                                            <Image
                                                src={service.icon}
                                                width={40}
                                                height={40}
                                                alt={service.title}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Features - 2x2 grid with checkmarks */}
                                    <div className="mb-7 flex-grow flex items-center justify-center">
                                        <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-2.5 w-full">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 min-w-0">
                                                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: service.color }} fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-xs text-slate-600">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="space-y-3 mt-auto">
                                        <button
                                            onClick={handleCall}
                                            className="w-full py-3.5 px-6 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                            style={{ backgroundColor: service.color }}
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            Call or Text
                                        </button>
                                        <Link href="/contact" className="block">
                                            <button className="w-full py-3 px-6 text-slate-600 font-medium rounded-xl hover:bg-slate-50 transition-all duration-300 text-sm border border-slate-200">
                                                Contact Us
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecondLanding;
