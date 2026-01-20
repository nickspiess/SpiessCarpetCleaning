import { useState, useEffect, useRef } from 'react';
import ImageSlider from "./ImageSlider";
import Image from 'next/image';
import NextDoor from '../../public/images/NextDoor.jpg';

const ThirdLanding = () => {
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

    const images = [
        require("../../public/images/angie_2013.jpeg").default,
        require("../../public/images/angie_2014.jpeg").default,
        require("../../public/images/angie_2015.jpeg").default,
        require("../../public/images/angie_2017.jpeg").default,
    ];

    const certifications = [
        {
            title: "Better Business Bureau",
            subtitle: "A+ Accredited Business",
            description: "Maintaining the highest standards of business ethics and customer service",
            color: 'rgba(0,168,227,1)',
            colorLight: 'rgba(0,168,227,0.1)'
        },
        {
            title: "Certified Technicians",
            subtitle: "IICRC Certified",
            description: "All our technicians are trained and certified by industry standards",
            color: 'rgba(198,25,73,1)',
            colorLight: 'rgba(198,25,73,0.1)'
        },
        {
            title: "Fully Licensed & Insured",
            subtitle: "Complete Protection",
            description: "Your home and investment are protected with comprehensive coverage",
            color: 'rgba(247,167,25,1)',
            colorLight: 'rgba(247,167,25,0.1)'
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 lg:py-32 bg-gradient-to-b from-slate-100/80 via-stone-100/60 to-slate-100/80 relative overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl" style={{ backgroundColor: 'rgba(0,168,227,0.05)' }}></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-slate-200/40 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-3xl transform translate-x-1/2" style={{ backgroundColor: 'rgba(198,25,73,0.04)' }}></div>
            </div>

            <div className="container-wide relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ease-out ${visibleSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-5">
                        Award-Winning Carpet Cleaning
                        <span className="block text-2xl md:text-3xl text-slate-500 font-normal mt-2">
                            in the Twin Cities Metro Area
                        </span>
                    </h2>
                </div>

                {/* Awards Display */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-24">
                    {/* Angie's List Awards */}
                    <div className={`transition-all duration-1000 ease-out delay-200 ${visibleSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg h-full relative overflow-hidden group">
                            {/* Top border accent */}
                            <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: 'rgba(0,168,227,1)' }}></div>

                            <div className="p-6 lg:p-8 h-full flex flex-col">
                                <div className="text-center mb-6">
                                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">
                                        Angie's List Super Service Award
                                    </h3>
                                    <p className="text-slate-500 text-sm">
                                        Multi-year winner for outstanding service quality
                                    </p>
                                </div>

                                <div className="flex-grow flex items-center justify-center">
                                    <div className="h-56 lg:h-64 w-full rounded-xl overflow-hidden bg-slate-50">
                                        <ImageSlider images={images} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* NextDoor Award */}
                    <div className={`transition-all duration-1000 ease-out delay-300 ${visibleSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg h-full relative overflow-hidden group">
                            {/* Top border accent */}
                            <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: 'rgba(198,25,73,1)' }}></div>

                            <div className="p-6 lg:p-8 h-full flex flex-col">
                                <div className="text-center mb-6">
                                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">
                                        NextDoor Neighborhood Fave
                                    </h3>
                                    <p className="text-slate-500 text-sm">
                                        Voted by neighbors as the most trusted carpet cleaning service
                                    </p>
                                </div>

                                <div className="flex-grow flex items-center justify-center">
                                    <div className="h-56 lg:h-64 w-full rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center">
                                        <Image
                                            src={NextDoor}
                                            alt="NextDoor Neighborhood Fave Award"
                                            width={220}
                                            height={220}
                                            className="object-contain group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThirdLanding;
