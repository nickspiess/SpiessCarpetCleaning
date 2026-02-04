import { useState, useEffect, useRef } from 'react';
import Head from "next/head";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  const [pageLoaded, setPageLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const storyRef = useRef(null);

  // Page entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Scroll-triggered animations
  useEffect(() => {
    const observers = [];
    const sections = [
      { ref: missionRef, id: 'mission' },
      { ref: valuesRef, id: 'values' },
      { ref: storyRef, id: 'story' }
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

  const values = [
    {
      title: "Service Excellence",
      description: "Every job is completed with meticulous attention to detail and professional standards",
      color: 'rgba(0, 168, 227, 1)',
      colorLight: 'rgba(0, 168, 227, 0.1)',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      )
    },
    {
      title: "Honesty & Integrity",
      description: "Transparent pricing, honest assessments, and ethical business practices in every interaction",
      color: 'rgba(198, 25, 73, 1)',
      colorLight: 'rgba(198, 25, 73, 0.1)',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      title: "Family Values",
      description: "A local, family-owned business that treats every customer like part of the family",
      color: 'rgba(247, 167, 25, 1)',
      colorLight: 'rgba(247, 167, 25, 0.1)',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    },
    {
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee backed by decades of experience and expertise",
      color: 'rgba(111, 89, 141, 1)',
      colorLight: 'rgba(111, 89, 141, 0.1)',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Head>
        <title>About Us | Spiess Carpet Cleaning - Twin Cities' Most Trusted</title>
        <meta name="description" content="Learn about Spiess Carpet Cleaning, a family-owned business serving the Twin Cities since 1972. 50+ years of experience, 40,000+ satisfied customers." />
        <meta name="keywords" content="about Spiess Carpet Cleaning, family business, Twin Cities carpet cleaner, Jeff Spiess" />
        <meta property="og:title" content="About Us | Spiess Carpet Cleaning" />
        <meta property="og:description" content="Five decades of carpet cleaning excellence in the Twin Cities. Family-owned, locally trusted." />
      </Head>

      <div className="bg-gradient-to-b from-stone-50 via-slate-50/80 to-stone-50 min-h-screen">
        {/* Hero Section */}
        <section className="pt-8 md:pt-16 pb-16 md:pb-20 relative overflow-hidden">
          <div className="container-wide relative z-10">
            {/* Header with entrance animation */}
            <div className={`text-center mb-16 transition-all duration-1000 ease-out ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                A Legacy of Excellence
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Based in Woodbury, proudly serving the Twin Cities for over five decades with exceptional quality, professional service, and thousands of satisfied customers.
              </p>
            </div>

            {/* Stats - Stacked Emphasis */}
            <div className={`transition-all duration-1000 ease-out delay-200 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="mt-16 grid grid-cols-3 divide-x divide-slate-200">
                <div className="text-center px-4 py-4">
                  <div className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: 'rgba(0,168,227,1)' }}>53</div>
                  <div className="text-sm text-slate-500 mt-1">years in business</div>
                </div>
                <div className="text-center px-4 py-4">
                  <div className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: 'rgba(198,25,73,1)' }}>40K+</div>
                  <div className="text-sm text-slate-500 mt-1">homes cleaned</div>
                </div>
                <div className="text-center px-4 py-4">
                  <div className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: 'rgba(247,167,25,1)' }}>99%</div>
                  <div className="text-sm text-slate-500 mt-1">satisfaction rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Video Section */}
        <section ref={missionRef} className="py-20 pt-16 relative overflow-hidden">
          <div className="container-wide">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ease-out ${visibleSections.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              {/* Mission Statement */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Service, Honesty & Integrity
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Since 1972, our passion has been providing the greatest experience for our customers,
                  along with the highest quality of work that remains unmatched in the industry.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  We are a family-based, local company that has revolutionized the industry with an
                  innovative approach that keeps our thousands of customers pleased and always coming back.
                </p>

                {/* Quick values */}
                <div className="space-y-3">
                  {[
                    { text: 'BridgePoint System Equipment', bg: 'rgba(0,168,227,0.1)', color: 'rgba(0,168,227,1)' },
                    { text: 'Eco-Friendly Cleaning Process', bg: 'rgba(198,25,73,0.1)', color: 'rgba(198,25,73,1)' },
                    { text: '100% Satisfaction Guaranteed', bg: 'rgba(247,167,25,0.1)', color: 'rgba(247,167,25,1)' }
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

              {/* Founder Video with depth styling */}
              <div
                className="rounded-3xl p-[1px] transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 168, 227, 0.15), transparent 60%, rgba(198, 25, 73, 0.1))',
                  boxShadow: '0 20px 40px -15px rgba(0, 168, 227, 0.1), 0 4px 20px -5px rgba(0,0,0,0.08)'
                }}
              >
                <div className="bg-white rounded-3xl p-6 lg:p-8 relative overflow-hidden">
                  {/* Corner accents */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 opacity-[0.08]"
                    style={{ background: 'radial-gradient(circle at top right, rgba(0, 168, 227, 1), transparent 70%)' }}
                  ></div>
                  <div
                    className="absolute bottom-0 left-0 w-24 h-24 opacity-[0.06]"
                    style={{ background: 'radial-gradient(circle at bottom left, rgba(198, 25, 73, 1), transparent 70%)' }}
                  ></div>

                  {/* Inner border for depth */}
                  <div className="absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.05)] pointer-events-none"></div>

                  <div className="mb-6 relative">
                    <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 px-3 py-1.5 rounded-full text-xs font-bold mb-3 border border-cyan-100">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                      From Our Founder
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900">
                      A Personal Message from Jeff Spiess
                    </h3>
                  </div>

                  <div className="rounded-2xl overflow-hidden relative group/video">
                    <div className="aspect-video relative bg-slate-900">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/RRZq3E61kFY"
                        title="About Spiess Carpet Cleaning"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    {/* Bottom accent bar */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1"
                      style={{ background: 'linear-gradient(to right, rgba(198,25,73,1), rgba(247,167,25,1), rgba(0,168,227,1))' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-stone-50">

          <div className="container-wide relative z-10">
            {/* Header */}
            <div className={`text-center mb-16 transition-all duration-1000 ease-out ${visibleSections.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
                What Sets Us Apart
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                The principles that guide every interaction and define our commitment to excellence
              </p>
            </div>

            {/* Values cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ease-out ${visibleSections.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div
                    className="rounded-2xl p-[1px] h-full"
                    style={{
                      background: `linear-gradient(135deg, ${value.color.replace('1)', '0.15)')}, transparent 60%, ${value.color.replace('1)', '0.08)')})`,
                      boxShadow: `0 15px 30px -10px ${value.color.replace('1)', '0.08)')}, 0 4px 15px -5px rgba(0,0,0,0.06)`
                    }}
                  >
                    <div className="bg-white rounded-2xl p-6 h-full relative overflow-hidden group cursor-pointer">
                      {/* Corner accent gradient */}
                      <div
                        className="absolute top-0 right-0 w-40 h-40 opacity-[0.05] transition-opacity duration-300 group-hover:opacity-[0.08]"
                        style={{ background: `radial-gradient(circle at top right, ${value.color}, transparent 60%)` }}
                      ></div>

                      {/* Inner border */}
                      <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] pointer-events-none"></div>

                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundColor: value.colorLight, color: value.color }}
                      >
                        {value.icon}
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {value.description}
                      </p>

                      {/* Bottom accent - grows on hover */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-1 group-hover:h-1.5 transition-all duration-500"
                        style={{ backgroundColor: value.color }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jeff's Story - Full-width dark section */}
        <section ref={storyRef} className="py-24 relative overflow-hidden">
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
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${visibleSections.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
                Built on a Legacy of Excellence
              </h2>

              <div className="text-lg md:text-xl leading-relaxed space-y-6 mb-12">
                <p className="text-white/80">
                  Founded by Jeff Spiess in 1990, our roots in the industry go back to 1972 when Jeff first learned the trade working alongside his father. That foundation of hands-on expertise shapes everything we do today.
                </p>
                <p className="text-white/80">
                  Over 40,000 homes cleaned. A 99% 'A' rating on Angie's List. These numbers reflect our commitment to honesty, integrity, and unmatched quality on every single job.
                </p>
                <p className="text-white/80">
                  At Spiess Carpet Cleaning, we believe success starts from the first moment we make contact. Our team is professional, courteous, and dedicated to exceeding your expectations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </div>
    </>
  );
}
