import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function FAQ() {
  const router = useRouter();
  const [pageLoaded, setPageLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});

  const faqRef = useRef(null);
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
      { ref: faqRef, id: 'faq' },
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

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you provide carpet cleaning service in Cottage Grove?",
      answer: (
        <>
          Absolutely! We proudly serve Cottage Grove and all surrounding communities in the Twin Cities metro area.
          Our Woodbury-based team regularly cleans carpets for homeowners throughout Cottage Grove and nearby neighborhoods.
          Visit our <Link href="/carpet-cleaning-cottage-grove-mn" className="text-secondary-600 hover:text-secondary-700 underline font-medium">Cottage Grove carpet cleaning</Link> page
          to learn more about our services in your area.
        </>
      ),
      color: 'rgba(0, 168, 227, 1)'
    },
    {
      question: "How long does the carpet cleaning process take?",
      answer: "A typical carpet cleaning session takes about 20 to 30 minutes per room, depending on the size of the room and the condition of your carpets. Heavily soiled areas or rooms with extensive staining may require additional time to ensure thorough cleaning. We always take the time needed to deliver exceptional results rather than rushing through the job.",
      color: 'rgba(198, 25, 73, 1)'
    },
    {
      question: "How long does it take for carpets to dry after cleaning?",
      answer: "Most carpets dry within 6 to 8 hours after our professional cleaning. With good ventilation — such as opening windows, running fans, or turning on your HVAC system — drying time can be reduced to as little as 4 to 6 hours. We recommend avoiding heavy foot traffic on freshly cleaned carpets until they are fully dry to maintain the best results.",
      color: 'rgba(247, 167, 25, 1)'
    },
    {
      question: "Do you offer pet odor and stain removal?",
      answer: "Yes, we specialize in pet odor and stain removal using advanced enzymatic treatments that break down the proteins in pet urine, vomit, and other organic stains at a molecular level. Unlike store-bought products that only mask odors, our professional-grade solutions eliminate the source of the problem completely, leaving your carpets fresh and truly clean.",
      color: 'rgba(0, 168, 227, 1)'
    },
    {
      question: "Why should I get my carpets professionally cleaned?",
      answer: "Professional carpet cleaning offers significant health and lifestyle benefits. Regular deep cleaning removes allergens, dust mites, bacteria, and pollutants trapped in carpet fibers that regular vacuuming can't reach. It extends the lifespan of your carpets by preventing fiber breakdown from embedded dirt, restores the original appearance and texture of your flooring, and creates a healthier indoor environment for your family — especially important for those with allergies or respiratory sensitivities.",
      color: 'rgba(198, 25, 73, 1)'
    },
    {
      question: "What are the benefits of air duct cleaning?",
      answer: "Air duct cleaning provides multiple benefits for your home. It significantly improves indoor air quality by removing accumulated dust, allergens, mold spores, and pet dander from your HVAC system. Clean ducts also improve energy efficiency, helping reduce your utility bills since your system doesn't have to work as hard. Additionally, regular air duct cleaning helps prevent potential fire hazards caused by lint and debris buildup in your ductwork, and it reduces the amount of dust circulating throughout your home.",
      color: 'rgba(247, 167, 25, 1)'
    },
    {
      question: "Do you have a square footage limit for each room?",
      answer: "No — we never have a square footage limit and we will never nickel and dime you like some competitors do. At Spiess Carpet Cleaning, we believe in transparent, fair pricing. A room is a room, regardless of size. This straightforward approach has been part of our commitment to honesty and integrity for over 50 years, and it's one of the many reasons our customers keep coming back.",
      color: 'rgba(0, 168, 227, 1)'
    },
    {
      question: "Are the cleaning chemicals safe for my family and pets?",
      answer: "Absolutely. We use eco-friendly, non-toxic cleaning solutions that are completely safe for children and pets. Our cleaning products are carefully selected to deliver powerful cleaning results without harsh chemicals or harmful residues. You can feel confident having your family and furry friends walk on freshly cleaned carpets without any health concerns.",
      color: 'rgba(198, 25, 73, 1)'
    },
    {
      question: "What is the BridgePoint system?",
      answer: "The BridgePoint system is the highest quality professional cleaning solution in the carpet cleaning industry. BridgePoint's advanced chemical formulations deliver superior cleaning power — breaking down deep-seated dirt, allergens, and stains more effectively than standard products. We exclusively use BridgePoint cleaning solutions because they provide the deepest, most thorough clean possible while remaining safe for your family and pets.",
      color: 'rgba(247, 167, 25, 1)'
    },
    {
      question: "What areas do you serve?",
      answer: "We serve the entire Twin Cities metropolitan area and beyond. Our regular service area includes Woodbury, Cottage Grove, Lakeville, Minnetonka, Eden Prairie, Eagan, Apple Valley, Burnsville, Plymouth, Maple Grove, Bloomington, St. Paul, Minneapolis, and all surrounding communities. Based in Woodbury, we're centrally located to reach homes throughout the metro quickly and efficiently.",
      color: 'rgba(0, 168, 227, 1)'
    }
  ];

  const colors = [
    'rgba(0, 168, 227, 1)',
    'rgba(198, 25, 73, 1)',
    'rgba(247, 167, 25, 1)'
  ];

  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Spiess Carpet Cleaning</title>
        <meta name="description" content="Find answers to common questions about Spiess Carpet Cleaning services, pricing, drying times, pet stain removal, and more. Serving the Twin Cities since 1972." />
        <meta name="keywords" content="carpet cleaning FAQ, carpet cleaning questions, pet stain removal, air duct cleaning, BridgePoint system, Twin Cities carpet cleaner" />
        <meta property="og:title" content="FAQ | Spiess Carpet Cleaning" />
        <meta property="og:description" content="Get answers to frequently asked questions about our professional carpet, upholstery, and air duct cleaning services." />
      </Head>

      <div className="bg-gradient-to-b from-stone-50 via-slate-50/80 to-stone-50 min-h-screen">
        {/* Hero Section */}
        <section className="pt-8 md:pt-16 pb-12 md:pb-16 relative overflow-hidden">
          <div className="container-wide relative z-10">
            <div className={`text-center mb-4 transition-all duration-1000 ease-out ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-sm font-semibold text-secondary-600 uppercase tracking-wider mb-4">
                Woodbury-Based · Serving the Twin Cities Since 1972
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                With over 50 years of experience and 40,000+ homes cleaned, we've heard it all.
                Here are the answers to the questions our customers ask most.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section ref={faqRef} className="pb-20 relative overflow-hidden">
          <div className="container-wide relative z-10">
            <div className={`max-w-3xl mx-auto transition-all duration-1000 ease-out ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = activeIndex === index;
                  const accentColor = faq.color;

                  return (
                    <div
                      key={index}
                      className={`transition-all duration-700 ease-out ${visibleSections.faq || pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                      style={{ transitionDelay: `${200 + index * 80}ms` }}
                    >
                      <div
                        className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
                          isOpen
                            ? 'border-slate-300 shadow-lg'
                            : 'border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
                        }`}
                      >
                        {/* Accent top border */}
                        <div
                          className="h-1 transition-all duration-300"
                          style={{
                            backgroundColor: isOpen ? accentColor : 'transparent'
                          }}
                        ></div>

                        {/* Question Button */}
                        <button
                          onClick={() => handleToggle(index)}
                          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                        >
                          <span className="flex items-center gap-4">
                            <span
                              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold text-white transition-transform duration-300 group-hover:scale-110"
                              style={{ backgroundColor: accentColor }}
                            >
                              {index + 1}
                            </span>
                            <span className={`text-base md:text-lg font-semibold transition-colors duration-200 ${isOpen ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
                              {faq.question}
                            </span>
                          </span>
                          <span className="flex-shrink-0">
                            <svg
                              className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>

                        {/* Answer Panel */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="px-6 pb-6 pl-[4.5rem]">
                            <p className="text-slate-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="pb-24 relative overflow-hidden">
          <div className="container-wide relative z-10">
            <div className={`max-w-3xl mx-auto transition-all duration-1000 ease-out ${visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="relative bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl p-8 md:p-10 shadow-xl shadow-secondary-500/20 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform -translate-x-8 translate-y-8"></div>

                <div className="relative text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Still Have Questions?
                  </h2>
                  <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                    Our team is happy to answer any questions you have. Reach out for a free, no-obligation quote today.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="tel:6514722736">
                      <button className="w-full sm:w-auto bg-white text-secondary-600 font-semibold py-3.5 px-6 rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call (651) 472-2736
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
