import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Services() {
  const router = useRouter();
  const [activeService, setActiveService] = useState('carpet');
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedService, setDisplayedService] = useState('carpet');
  const [pageLoaded, setPageLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  const differenceRef = useRef(null);
  const ctaRef = useRef(null);

  // Page entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Scroll-triggered animations
  useEffect(() => {
    const observers = [];
    const sections = [
      { ref: differenceRef, id: 'difference' },
      { ref: ctaRef, id: 'cta' }
    ];

    sections.forEach(({ ref, id }) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => ({ ...prev, [id]: true }));
            }
          },
          { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
        );
        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  const handleServiceChange = (serviceId) => {
    if (serviceId === activeService) return;
    setIsAnimating(true);
    setActiveService(serviceId);

    setTimeout(() => {
      setDisplayedService(serviceId);
      setIsAnimating(false);
    }, 500);
  };

  const services = [
    {
      id: 'carpet',
      title: 'Carpet Cleaning',
      subtitle: 'Deep Steam Cleaning',
      image: '/images/carpetCleaning.jpeg',
      color: 'rgba(0, 168, 227, 1)',
      colorLight: 'rgba(0, 168, 227, 0.1)',
      description: 'State-of-the-art, truck-mounted steam cleaning designed to restore your carpets to like-new condition. Using the BridgePoint system — the highest quality equipment in the industry — our advanced cleaning process removes deep-seated dirt, allergens, and stains.',
      features: [
        'Deep steam extraction',
        'BridgePoint system equipment',
        'Fast drying (2-4 hours)',
        'Pet odor elimination',
        'Stain protection available',
        'Truck-mounted equipment'
      ]
    },
    {
      id: 'upholstery',
      title: 'Upholstery Cleaning',
      subtitle: 'Furniture & Fabric Care',
      image: '/images/upholsteryCleaning.jpeg',
      color: 'rgba(198, 25, 73, 1)',
      colorLight: 'rgba(198, 25, 73, 0.1)',
      description: 'Professional upholstery cleaning that removes allergens and protects your family\'s health. Our state-of-the-art BridgePoint system tackles even the most ground-in dirt and grime, extending furniture life.',
      features: [
        'Allergen removal',
        'Deep fabric cleaning',
        'Color restoration',
        'Fabric protection',
        'Odor elimination',
        'Gentle care process'
      ]
    },
    {
      id: 'airduct',
      title: 'Air Duct Cleaning',
      subtitle: 'Improved Air Quality',
      image: '/images/airDuctCleaning.jpeg',
      color: 'rgba(247, 167, 25, 1)',
      colorLight: 'rgba(247, 167, 25, 0.1)',
      description: 'Professional air duct cleaning with two service levels: advanced and maintenance cleanings. Our industrial equipment cleans vents, branches, and trunk lines for cleaner indoor air.',
      features: [
        'Industrial vacuum systems',
        'High-pressure air cleaning',
        'Complete system cleaning',
        'Improved air quality',
        'Energy efficiency boost',
        'Allergen reduction'
      ]
    },
    {
      id: 'additional',
      title: 'Additional Services',
      subtitle: 'Specialized Solutions',
      image: '/images/otherServices.jpeg',
      color: 'rgba(111, 89, 141, 1)',
      colorLight: 'rgba(247, 167, 25, 0.1)',
      description: 'Comprehensive cleaning solutions for specialized needs. From area rugs to emergency water removal, we handle it all with professional expertise.',
      features: [
        'Area rug cleaning',
        'Pet stain & odor removal',
        'Water damage restoration',
        'Tile floor cleaning',
        'Move-in/out cleaning',
        'Emergency services'
      ]
    }
  ];

  const currentService = services.find(s => s.id === displayedService);

  const handleCall = () => {
    window.location.href = "tel:6514722736";
  };

  const differenceFeatures = [
    {
      title: "BridgePoint System",
      description: "We exclusively use BridgePoint equipment — the highest quality system in the industry for superior cleaning results",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      color: 'bg-blue-50 text-blue-600',
      accent: 'bg-blue-500'
    },
    {
      title: "Eco-Friendly Process",
      description: "Safe for your family and pets while still delivering exceptional cleaning results",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      color: 'bg-emerald-50 text-emerald-600',
      accent: 'bg-emerald-500'
    },
    {
      title: "100% Satisfaction Guarantee",
      description: "We stand behind our work with a complete satisfaction guarantee on every job",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      color: 'bg-amber-50 text-amber-600',
      accent: 'bg-amber-500'
    }
  ];

  return (
    <>
      <Head>
        <title>Professional Cleaning Services | Spiess Carpet Cleaning</title>
        <meta name="description" content="Expert carpet, upholstery, and air duct cleaning services in the Twin Cities. 50+ years of experience, state-of-the-art BridgePoint equipment, 100% satisfaction guaranteed." />
        <meta name="keywords" content="carpet cleaning, upholstery cleaning, air duct cleaning, Twin Cities, professional cleaning services" />
      </Head>

      <div className="bg-gradient-to-b from-stone-50 via-slate-50/80 to-stone-50 min-h-screen">
        {/* Hero Section */}
        <section className="pb-16 md:pb-20 pt-8 md:pt-12 relative overflow-hidden">
          <div className="container-wide relative z-10">
            {/* Header with entrance animation */}
            <div className={`max-w-3xl mx-auto text-center mb-14 transition-all duration-1000 ease-out ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-sm font-semibold text-secondary-600 uppercase tracking-wider mb-4">
                Professional Services Since 1972
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Complete Cleaning Solutions
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Five decades of expertise with the industry's highest quality equipment.
              </p>
            </div>

            {/* Service Tabs with staggered entrance */}
            <div className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-1000 ease-out delay-150 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceChange(service.id)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeService === service.id
                      ? 'text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    ...(activeService === service.id && { backgroundColor: service.color, boxShadow: `0 10px 15px -3px ${service.color.replace('1)', '0.3)')}` })
                  }}
                >
                  {service.title}
                </button>
              ))}
            </div>

            {/* Service Content with entrance animation */}
            <div className={`max-w-6xl mx-auto transition-all duration-1000 ease-out delay-300 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Outer glow wrapper for depth */}
              <div
                className="rounded-3xl p-[1px] transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, ${currentService.color.replace('1)', '0.15)')}, transparent 60%, ${currentService.color.replace('1)', '0.08)')})`,
                  boxShadow: `0 20px 40px -15px ${currentService.color.replace('1)', '0.1)')}, 0 4px 20px -5px rgba(0,0,0,0.08)`
                }}
              >
                <div className="relative rounded-3xl overflow-hidden bg-white lg:h-[580px]">
                  {/* Decorative corner accents */}
                  <div
                    className="absolute top-0 right-0 w-48 h-48 opacity-[0.08] transition-all duration-500"
                    style={{ background: `radial-gradient(circle at top right, ${currentService.color}, transparent 70%)` }}
                  ></div>
                  <div
                    className="absolute bottom-0 left-0 w-32 h-32 opacity-[0.05] transition-all duration-500"
                    style={{ background: `radial-gradient(circle at bottom left, ${currentService.color}, transparent 70%)` }}
                  ></div>

                  {/* Subtle inner border for depth */}
                  <div className="absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.05)] pointer-events-none"></div>

                  {/* Content Grid */}
                  <div className={`grid grid-cols-1 lg:grid-cols-5 lg:h-full transition-all duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    {/* Left - Image Panel */}
                    <div className="relative h-64 lg:h-full lg:col-span-2 overflow-hidden group/image">
                      <Image
                        src={currentService.image}
                        alt={currentService.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover/image:scale-105"
                      />

                      {/* Shadow casting from content side for depth */}
                      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/[0.08] to-transparent pointer-events-none"></div>

                      {/* Bottom accent bar - uses service color */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 transition-colors duration-300" style={{ backgroundColor: currentService.color }}></div>
                    </div>

                  {/* Right - Details */}
                  <div className={`lg:col-span-3 p-8 pb-12 lg:p-12 lg:pb-16 flex flex-col justify-center transition-all duration-500 ${isAnimating ? 'opacity-0 translate-x-2' : 'opacity-100 translate-x-0'}`}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
                      {currentService.title}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                      {currentService.description}
                    </p>

                    {/* Features - Pill style with service color */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {currentService.features.map((feature, index) => (
                        <div
                          key={index}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
                        >
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentService.color }}></span>
                          <span className="text-sm font-medium text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTAs - button uses service color */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleCall}
                        className="group px-7 py-4 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                        style={{ backgroundColor: currentService.color }}
                      >
                        <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call (651) 472-2736
                      </button>
                      <button
                        onClick={() => router.push('/contact')}
                        className="px-7 py-4 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Get a Free Quote
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* The Spiess Difference - Colorful and playful */}
        <section ref={differenceRef} className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-stone-50">
          {/* Colorful depth orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-emerald-100/30 rounded-full blur-3xl transform -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-100/40 rounded-full blur-3xl transform translate-x-1/4"></div>
          </div>

          <div className="container-wide relative z-10">
            {/* Header */}
            <div className={`text-center mb-16 transition-all duration-1000 ease-out ${visibleSections.difference ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="inline-flex items-center gap-2 bg-secondary-50 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium border border-secondary-100 mb-6">
                <span className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></span>
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
                The Spiess Difference
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                Five decades of innovation and expertise sets us apart
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {differenceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`group transition-all duration-1000 ease-out ${visibleSections.difference ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  <div className="relative h-full bg-white rounded-2xl p-8 border border-slate-200/80 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:shadow-slate-300/40 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                    {/* Colored accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-1 ${feature.accent}`}></div>

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Card - More vibrant */}
            <div ref={ctaRef} className={`transition-all duration-1000 ease-out ${visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="relative bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl p-8 md:p-10 shadow-xl shadow-secondary-500/20 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform -translate-x-8 translate-y-8"></div>

                <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Ready to Transform Your Space?
                    </h3>
                    <p className="text-white/80 text-lg">
                      Get a free quote today. No obligation, no pressure.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:flex-shrink-0">
                    <a href="tel:6514722736">
                      <button className="w-full sm:w-auto bg-white text-secondary-600 font-semibold py-3.5 px-6 rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        (651) 472-2736
                      </button>
                    </a>
                    <button
                      onClick={() => router.push('/contact')}
                      className="w-full sm:w-auto bg-white/20 text-white font-semibold py-3.5 px-6 rounded-xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
                    >
                      Get a Free Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
