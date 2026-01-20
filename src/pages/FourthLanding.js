import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import TestimonialsCarousel from './TestimonialsCarousel';

const FourthLanding = () => {
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
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const features = [
        "Fully Bonded & Insured",
        "100% Money-Back Guarantee",
        "Eco-Friendly Cleaning",
        "Best Equipment in Industry"
    ];

    return (
        <section ref={sectionRef} className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-stone-50/50 via-white to-slate-50/50"></div>
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl transform -translate-x-1/3 -translate-y-1/3" style={{ backgroundColor: 'rgba(198,25,73,0.05)' }}></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-stone-100/50 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
                <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: 'rgba(0,168,227,0.04)' }}></div>
            </div>

            <div className="container-wide relative z-10">
                {/* About Section */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-28 transition-all duration-1000 ease-out ${visibleSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    {/* Video */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-5 lg:p-6">
                            <div className="mb-4">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-2 bg-slate-100 text-slate-600">
                                    From Our Founder
                                </div>
                                <h3 className="text-xl lg:text-2xl font-semibold text-slate-900">
                                    A Personal Message
                                </h3>
                            </div>

                            <div className="rounded-xl overflow-hidden shadow-lg">
                                <div className="aspect-video relative bg-slate-900">
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src="https://www.youtube.com/embed/RRZq3E61kFY"
                                        title="About Spiess Carpet Cleaning"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2">
                        
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-5">
                            Five Decades of Excellence
                        </h3>

                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Since 1972, we've been the Twin Cities' most trusted carpet cleaning service.
                            Our commitment to innovation, quality, and customer satisfaction has made us
                            the preferred choice for thousands of homeowners.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-xl p-4 bg-slate-50 border border-slate-200"
                                >
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-slate-200">
                                        <svg className="w-3.5 h-3.5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="font-medium text-slate-700 text-sm">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="tel:6514722736" className="flex-1">
                                <button
                                    className="w-full py-4 px-8 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                    style={{ backgroundColor: 'rgba(0,168,227,1)' }}
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Call or Text Now
                                </button>
                            </a>
                            <Link href="/contact" className="flex-1">
                                <button className="w-full py-4 px-8 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all duration-300">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Testimonials Carousel */}
                <TestimonialsCarousel />

                {/* Bottom CTA */}
                <div className="mt-20 lg:mt-28">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 lg:p-12">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(0,168,227,0.5) 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }}></div>
                        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(198,25,73,0.5) 0%, transparent 70%)', transform: 'translate(30%, 30%)' }}></div>
                        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, rgba(247,167,25,0.5) 0%, transparent 70%)', transform: 'translate(-50%, -50%)' }}></div>

                        {/* Subtle line accents */}
                        <div className="absolute top-8 left-8 w-24 h-px" style={{ backgroundColor: 'rgba(0,168,227,0.3)' }}></div>
                        <div className="absolute top-8 left-8 w-px h-24" style={{ backgroundColor: 'rgba(0,168,227,0.3)' }}></div>
                        <div className="absolute bottom-8 right-8 w-24 h-px" style={{ backgroundColor: 'rgba(198,25,73,0.3)' }}></div>
                        <div className="absolute bottom-8 right-8 w-px h-24" style={{ backgroundColor: 'rgba(198,25,73,0.3)' }}></div>

                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            {/* Small accent badge */}
                            <div className="inline-flex items-center gap-3 mb-8">
                                <span className="w-8 h-px" style={{ backgroundColor: 'rgba(0,168,227,1)' }}></span>
                                <span className="text-sm font-medium tracking-wider uppercase text-slate-400">Longest Family-Owned in Twin Cities</span>
                                <span className="w-8 h-px" style={{ backgroundColor: 'rgba(198,25,73,1)' }}></span>
                            </div>

                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">
                                Ready to Transform Your Space?
                            </h3>

                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                Join 40,000+ satisfied customers who trust us with their most valuable spaces.
                                Your satisfaction is guaranteed.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-10">
                                <a href="tel:6514722736">
                                    <button
                                        className="px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                        style={{ backgroundColor: 'rgba(198,25,73,1)' }}
                                    >
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Call (651) 472-2736
                                    </button>
                                </a>
                                <Link href="/contact">
                                    <button className="px-8 py-4 bg-transparent border-2 border-slate-600 text-white font-bold rounded-xl hover:bg-white/5 hover:border-white transition-all duration-300">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>

                            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/70">
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4" style={{ color: 'rgba(247,167,25,1)' }} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    100% Money-Back Guarantee
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4" style={{ color: 'rgba(247,167,25,1)' }} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Fully Licensed & Insured
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4" style={{ color: 'rgba(247,167,25,1)' }} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    53 Years Experience
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FourthLanding;
