import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function CarpetCleaningCottageGroveMN() {
  const router = useRouter();
  const [pageLoaded, setPageLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  const serviceRef = useRef(null);
  const whyRef = useRef(null);
  const localRef = useRef(null);
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
      { ref: serviceRef, id: 'service' },
      { ref: whyRef, id: 'why' },
      { ref: localRef, id: 'local' },
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

  const handleCall = () => {
    window.location.href = "tel:6514722736";
  };

  const features = [
    {
      title: "BridgePoint System Chemicals",
      description: "We rely on BridgePoint cleaning solutions — trusted across the industry for delivering thorough, deep-level results that standard products simply cannot match",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      color: 'bg-blue-50 text-blue-600',
      accent: 'bg-blue-500'
    },
    {
      title: "Safe for Families & Pets",
      description: "Our eco-conscious cleaning approach protects your household while still achieving outstanding stain and dirt removal",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      color: 'bg-emerald-50 text-emerald-600',
      accent: 'bg-emerald-500'
    },
    {
      title: "Satisfaction Guaranteed",
      description: "Every carpet cleaning job in Cottage Grove is backed by our 100% satisfaction promise — we don't consider the work done until you're completely happy",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      color: 'bg-amber-50 text-amber-600',
      accent: 'bg-amber-500'
    }
  ];

  const serviceHighlights = [
    'Deep steam extraction cleaning',
    'BridgePoint system chemicals',
    'Quick dry times',
    'Pet stain & odor treatment',
    'Stain protection application',
    'High-powered portable units'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Carpet Cleaning in Cottage Grove MN",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Spiess Carpet Cleaning",
      "image": "https://www.spiesscarpet.com/images/logo.png",
      "url": "https://www.spiesscarpet.com/",
      "telephone": "+1-651-472-2736",
      "email": "sales@spiesscarpet.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2042 Wooddale Dr Ste 145",
        "addressLocality": "Woodbury",
        "addressRegion": "MN",
        "postalCode": "55125",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Cottage Grove",
      "containedInPlace": {
        "@type": "State",
        "name": "Minnesota"
      }
    },
    "description": "Professional carpet cleaning services in Cottage Grove, MN. Over 53 years of experience with BridgePoint system cleaning solutions. Serving Kingston Village, Langdon Village, and all Cottage Grove neighborhoods.",
    "serviceType": "Carpet Cleaning"
  };

  return (
    <>
      <Head>
        <title>Carpet Cleaning in Cottage Grove MN - Spiess Carpet Cleaning</title>
        <meta name="description" content="Professional carpet cleaning in Cottage Grove, MN. Spiess Carpet Cleaning brings 53+ years of experience and BridgePoint system cleaning solutions to Kingston Village, Langdon Village, and all Cottage Grove neighborhoods. Call (651) 472-2736." />
        <meta name="keywords" content="carpet cleaning Cottage Grove MN, Cottage Grove carpet cleaner, professional carpet cleaning Cottage Grove, steam cleaning Cottage Grove Minnesota, carpet cleaning near me Cottage Grove" />
        <meta property="og:title" content="Carpet Cleaning in Cottage Grove MN - Spiess Carpet Cleaning" />
        <meta property="og:description" content="Trusted carpet cleaning for Cottage Grove homeowners. 53+ years experience, BridgePoint cleaning solutions, 100% satisfaction guaranteed." />
        <meta property="og:image" content="https://www.spiesscarpet.com/images/logo.png" />
        <meta property="og:url" content="https://www.spiesscarpet.com/carpet-cleaning-cottage-grove-mn" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.spiesscarpet.com/carpet-cleaning-cottage-grove-mn" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="bg-gradient-to-b from-stone-50 via-slate-50/80 to-stone-50 min-h-screen">
        {/* Hero Section */}
        <section className="pb-16 md:pb-20 pt-8 md:pt-12 relative overflow-hidden">
          <div className="container-wide relative z-10">
            {/* Header with entrance animation */}
            <div className={`max-w-3xl mx-auto text-center mb-14 transition-all duration-1000 ease-out ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-sm font-semibold text-secondary-600 uppercase tracking-wider mb-4">
                Woodbury-Based · Proudly Serving Cottage Grove, MN
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Professional Carpet Cleaning in Cottage Grove, MN
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Cottage Grove families deserve carpets that look and feel brand new. With over five decades of hands-on expertise and the industry's top-rated BridgePoint cleaning solutions, Spiess Carpet Cleaning delivers results that go beyond the surface — removing embedded dirt, allergens, and stubborn stains from every fiber.
              </p>
            </div>

            {/* Hero Image Card with entrance animation */}
            <div className={`max-w-6xl mx-auto transition-all duration-1000 ease-out delay-200 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div
                className="rounded-3xl p-[1px] transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 168, 227, 0.15), transparent 60%, rgba(0, 168, 227, 0.08))',
                  boxShadow: '0 20px 40px -15px rgba(0, 168, 227, 0.1), 0 4px 20px -5px rgba(0,0,0,0.08)'
                }}
              >
                <div className="relative rounded-3xl overflow-hidden bg-white lg:h-[520px]">
                  {/* Decorative corner accents */}
                  <div
                    className="absolute top-0 right-0 w-48 h-48 opacity-[0.08] transition-all duration-500"
                    style={{ background: 'radial-gradient(circle at top right, rgba(0, 168, 227, 1), transparent 70%)' }}
                  ></div>
                  <div
                    className="absolute bottom-0 left-0 w-32 h-32 opacity-[0.05] transition-all duration-500"
                    style={{ background: 'radial-gradient(circle at bottom left, rgba(0, 168, 227, 1), transparent 70%)' }}
                  ></div>

                  {/* Inner border for depth */}
                  <div className="absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.05)] pointer-events-none"></div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 lg:h-full">
                    {/* Left - Image Panel */}
                    <div className="relative h-64 lg:h-full lg:col-span-2 overflow-hidden">
                      <Image
                        src="/images/carpetCleaning.jpeg"
                        alt="Professional carpet cleaning service in Cottage Grove MN"
                        fill
                        priority
                        className="object-cover"
                      />
                      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/[0.08] to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: 'rgba(0, 168, 227, 1)' }}></div>
                    </div>

                    {/* Right - Details */}
                    <div className="lg:col-span-3 p-8 pb-12 lg:p-12 lg:pb-16 flex flex-col justify-center">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
                        Deep Steam Carpet Cleaning
                      </h2>
                      <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                        Our advanced portable steam cleaning equipment is specifically designed for the homes throughout Cottage Grove — from newer construction in Langdon Village to established residences near Pioneer Park. The BridgePoint cleaning solutions penetrate deep into carpet fibers, breaking down years of accumulated dirt and restoring the original vibrancy of your floors.
                      </p>

                      {/* Feature pills */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {serviceHighlights.map((feature, index) => (
                          <div
                            key={index}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
                          >
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgba(0, 168, 227, 1)' }}></span>
                            <span className="text-sm font-medium text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={handleCall}
                          className="group px-7 py-4 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                          style={{ backgroundColor: 'rgba(0, 168, 227, 1)' }}
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

        {/* Service Details Section */}
        <section ref={serviceRef} className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-stone-50">
          {/* Colorful depth orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-emerald-100/30 rounded-full blur-3xl transform -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-100/40 rounded-full blur-3xl transform translate-x-1/4"></div>
          </div>

          <div className="container-wide relative z-10">
            {/* Header */}
            <div className={`text-center mb-16 transition-all duration-1000 ease-out ${visibleSections.service ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
                What Makes Our Carpet Cleaning Different
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                Cottage Grove homeowners trust Spiess for a reason — our approach combines proven expertise with cutting-edge equipment
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group transition-all duration-1000 ease-out ${visibleSections.service ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  <div className="relative h-full bg-white rounded-2xl p-8 border border-slate-200/80 shadow-lg shadow-slate-200/30 overflow-hidden cursor-pointer">
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-1 ${feature.accent}`}></div>

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-500`}>
                      {feature.icon}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Bottom accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 group-hover:h-1.5 transition-all duration-500 ${feature.accent}`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Services Mention */}
            <div className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${visibleSections.service ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '650ms' }}>
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200/80 shadow-lg shadow-slate-200/30">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Beyond Carpet Cleaning in Cottage Grove
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  While carpet cleaning is our specialty, Cottage Grove residents can also count on us for a full range of professional cleaning services. Whether your furniture needs freshening up or your HVAC system is overdue for a deep clean, we bring the same level of care and expertise to every job.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { name: 'Upholstery Cleaning', color: 'rgba(198, 25, 73, 1)', bg: 'rgba(198, 25, 73, 0.1)' },
                    { name: 'Air Duct Cleaning', color: 'rgba(247, 167, 25, 1)', bg: 'rgba(247, 167, 25, 0.1)' },
                    { name: 'Pet Stain & Odor Removal', color: 'rgba(111, 89, 141, 1)', bg: 'rgba(111, 89, 141, 0.1)' }
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: service.bg }}>
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: service.color }}></div>
                      <span className="text-sm font-semibold text-slate-700">{service.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/services" className="inline-flex items-center gap-2 text-secondary-600 hover:text-secondary-700 font-semibold transition-colors">
                    View all our services
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Cottage Grove Homeowners Choose Us */}
        <section ref={whyRef} className="py-24 relative overflow-hidden">
          {/* Dark gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

          {/* Animated mesh gradient overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-secondary-500/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-500/30 via-transparent to-transparent"></div>
          </div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

          <div className="container-wide relative z-10">
            <div className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${visibleSections.why ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
                  Why Cottage Grove Homeowners Choose Us
                </h2>
                <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
                  Decades of proven results speak for themselves
                </p>
              </div>

              {/* Stats row */}
              <div className={`grid grid-cols-3 divide-x divide-white/20 mb-16 transition-all duration-1000 ease-out ${visibleSections.why ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
                <div className="text-center px-4 py-4">
                  <div className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: 'rgba(0,168,227,1)' }}>53</div>
                  <div className="text-sm text-white/60 mt-1">years in business</div>
                </div>
                <div className="text-center px-4 py-4">
                  <div className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: 'rgba(198,25,73,1)' }}>40K+</div>
                  <div className="text-sm text-white/60 mt-1">homes cleaned</div>
                </div>
                <div className="text-center px-4 py-4">
                  <div className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: 'rgba(247,167,25,1)' }}>99%</div>
                  <div className="text-sm text-white/60 mt-1">satisfaction rate</div>
                </div>
              </div>

              {/* Trust points */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 transition-all duration-1000 ease-out ${visibleSections.why ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '400ms' }}>
                {[
                  {
                    title: 'Locally Owned & Operated',
                    text: 'Based right next door in Woodbury, we understand the needs of Cottage Grove homeowners and deliver personalized service every time.',
                    color: 'rgba(0,168,227,1)'
                  },
                  {
                    title: 'Industry-Leading Cleaning Solutions',
                    text: 'The BridgePoint system is the gold standard in professional carpet cleaning chemicals, and it is the only product we trust to get the job done.',
                    color: 'rgba(198,25,73,1)'
                  },
                  {
                    title: 'Transparent, Honest Pricing',
                    text: 'No hidden fees or surprise charges. We provide upfront quotes so you know exactly what to expect before we begin any work.',
                    color: 'rgba(247,167,25,1)'
                  },
                  {
                    title: 'Fast Scheduling & Dry Times',
                    text: 'We respect your busy schedule with flexible appointments and rapid drying technology so your household gets back to normal quickly.',
                    color: 'rgba(111,89,141,1)'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-white/70 leading-relaxed text-sm">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ease-out ${visibleSections.why ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '600ms' }}>
                <a href="tel:6514722736">
                  <button className="w-full sm:w-auto bg-white text-slate-900 font-semibold py-4 px-8 rounded-xl hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (651) 472-2736
                  </button>
                </a>
                <button
                  onClick={() => router.push("/contact")}
                  className="w-full sm:w-auto bg-white/10 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Get a Free Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Cottage Grove Content */}
        <section ref={localRef} className="py-24 relative overflow-hidden">
          <div className="container-wide relative z-10">
            <div className={`transition-all duration-1000 ease-out ${visibleSections.local ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
                  Serving Every Corner of Cottage Grove
                </h2>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                  From the scenic trails of Cottage Grove Ravine Regional Park to the neighborhoods along the Mississippi River, we bring professional carpet cleaning to every part of this growing community
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Left - Local areas */}
                <div className={`transition-all duration-1000 ease-out ${visibleSections.local ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Cottage Grove Neighborhoods & Areas We Serve
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    Cottage Grove sits just south of our Woodbury headquarters, making it one of the most convenient communities we service. Whether you live near the wooded bluffs overlooking the Mississippi River or in one of the family-friendly neighborhoods throughout town, our team arrives promptly with everything needed for a complete carpet transformation.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      {
                        name: 'Kingston Village',
                        desc: 'Deep cleaning for homes in this well-established Cottage Grove neighborhood'
                      },
                      {
                        name: 'Langdon Village',
                        desc: 'Keeping newer carpet installations looking pristine for years to come'
                      },
                      {
                        name: 'Pioneer Park Area',
                        desc: 'Serving families near one of Cottage Grove\'s most popular community parks'
                      },
                      {
                        name: 'Cottage Grove Ravine Regional Park Area',
                        desc: 'Professional cleaning for homes near this beautiful natural preserve'
                      },
                      {
                        name: 'Mississippi River Corridor',
                        desc: 'Servicing residences along Cottage Grove\'s scenic eastern border'
                      }
                    ].map((area, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'rgba(0, 168, 227, 1)' }}></div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-1">{area.name}</h4>
                          <p className="text-sm text-slate-600">{area.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Why location matters + map hint */}
                <div className={`transition-all duration-1000 ease-out ${visibleSections.local ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '400ms' }}>
                  <div
                    className="rounded-2xl p-[1px] mb-8"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 168, 227, 0.15), transparent 60%, rgba(198, 25, 73, 0.1))',
                      boxShadow: '0 15px 30px -10px rgba(0, 168, 227, 0.08), 0 4px 15px -5px rgba(0,0,0,0.06)'
                    }}
                  >
                    <div className="bg-white rounded-2xl p-8 relative overflow-hidden">
                      {/* Corner accent */}
                      <div
                        className="absolute top-0 right-0 w-32 h-32 opacity-[0.08]"
                        style={{ background: 'radial-gradient(circle at top right, rgba(0, 168, 227, 1), transparent 70%)' }}
                      ></div>

                      <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 px-3 py-1.5 rounded-full text-xs font-bold mb-4 border border-cyan-100">
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                        Just Minutes Away
                      </div>

                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
                        Your Woodbury Neighbor
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        Our office at 2042 Wooddale Dr in Woodbury is just a short drive from Cottage Grove. This proximity means faster response times, lower travel overhead, and a team that genuinely knows your community. We've been cleaning carpets for Cottage Grove families for decades and consider it part of our home territory.
                      </p>

                      <div className="space-y-3">
                        {[
                          { text: 'Based in Woodbury — your neighbor', bg: 'rgba(0,168,227,0.1)', color: 'rgba(0,168,227,1)' },
                          { text: 'Serving Cottage Grove for 50+ years', bg: 'rgba(198,25,73,0.1)', color: 'rgba(198,25,73,1)' },
                          { text: 'Same-week availability for most jobs', bg: 'rgba(247,167,25,0.1)', color: 'rgba(247,167,25,1)' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.bg }}>
                              <svg className="w-3 h-3" style={{ color: item.color }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-slate-700 font-medium">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Common Carpet Issues */}
                  <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      Common Carpet Concerns in Cottage Grove
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      Minnesota's seasonal changes take a toll on carpets. From winter salt and mud tracked in from snowy sidewalks to summer pollen and pet activity, Cottage Grove homes face unique carpet challenges throughout the year.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        'Winter salt residue',
                        'Pet stains & dander',
                        'Seasonal allergens',
                        'High-traffic wear',
                        'Mudroom overflow',
                        'Basement moisture'
                      ].map((issue, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgba(198, 25, 73, 1)' }}></span>
                          <span className="text-sm text-slate-700">{issue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section ref={ctaRef} className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-stone-50">
          <div className="container-wide relative z-10">
            <div className={`transition-all duration-1000 ease-out ${visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="relative bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl p-8 md:p-12 shadow-xl shadow-secondary-500/20 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform -translate-x-8 translate-y-8"></div>

                <div className="relative max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Ready for Cleaner Carpets in Cottage Grove?
                  </h2>
                  <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                    Schedule your professional carpet cleaning today. Free quotes with no obligation — just honest service from a team that's been earning trust since 1972.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:6514722736">
                      <button className="w-full sm:w-auto bg-white text-secondary-600 font-semibold py-4 px-8 rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call (651) 472-2736
                      </button>
                    </a>
                    <button
                      onClick={() => router.push('/contact')}
                      className="w-full sm:w-auto bg-white/20 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
                    >
                      Request a Free Quote
                    </button>
                  </div>

                  <p className="text-white/60 text-sm mt-6">
                    Or email us at{' '}
                    <a href="mailto:sales@spiesscarpet.com" className="text-white/80 underline hover:text-white transition-colors">
                      sales@spiesscarpet.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
