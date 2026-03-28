import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SecondLanding from './SecondLanding';
import FirstLanding from './FirstLanding';
import ThirdLanding from './ThirdLanding';
import FourthLanding from './FourthLanding';
import StructuredData from './StructuredData';

function HomeFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you provide carpet cleaning service in Cottage Grove?",
      answer: (
        <>
          Yes! We proudly serve Cottage Grove and all surrounding communities in the Twin Cities metro.
          Visit our <Link href="/carpet-cleaning-cottage-grove-mn" className="text-secondary-600 hover:text-secondary-700 underline font-medium">Cottage Grove carpet cleaning</Link> page to learn more.
        </>
      ),
      color: 'rgba(0, 168, 227, 1)'
    },
    {
      question: "How long does the carpet cleaning process take?",
      answer: "A typical carpet cleaning session takes about 20 to 30 minutes per room, depending on the size and condition of your carpets. Heavily soiled areas may require additional time to ensure thorough cleaning.",
      color: 'rgba(198, 25, 73, 1)'
    },
    {
      question: "How long does it take for carpets to dry after cleaning?",
      answer: "Most carpets dry within 4 to 6 hours after cleaning. With good ventilation — such as opening windows or running fans — drying time can be reduced to as little as 2 to 4 hours.",
      color: 'rgba(247, 167, 25, 1)'
    },
    {
      question: "Do you offer pet odor and stain removal?",
      answer: "Yes, we specialize in pet odor and stain removal using advanced enzymatic treatments that break down pet proteins at a molecular level, eliminating the source of the problem completely.",
      color: 'rgba(0, 168, 227, 1)'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-stone-50 relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-amber-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container-wide relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
            Common Questions
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Quick answers to the questions we hear most from our customers
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-slate-300 shadow-lg'
                    : 'border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                <div
                  className="h-1 transition-all duration-300"
                  style={{ backgroundColor: isOpen ? faq.color : 'transparent' }}
                ></div>

                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                >
                  <span className="flex items-center gap-4">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold text-white transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: faq.color }}
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
            );
          })}
        </div>

        {/* View All FAQs Link */}
        <div className="text-center mt-10">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-300"
          >
            View All FAQs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.spiesscarpet.com",
    "name": "Spiess Carpet Cleaning",
    "image": "https://www.spiesscarpet.com/images/logo.png",
    "url": "https://www.spiesscarpet.com/",
    "description": "Twin Cities' most trusted carpet cleaning service with 50+ years of experience. Professional carpet, upholstery, and air duct cleaning.",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2042 Wooddale Dr Ste 145",
      "addressLocality": "Woodbury",
      "addressRegion": "MN",
      "postalCode": "55125",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.9239,
      "longitude": -92.9594
    },
    "telephone": "+1-651-472-2736",
    "email": "sales@spiesscarpet.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 44.9239,
        "longitude": -92.9594
      },
      "geoRadius": "80000"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "400",
      "bestRating": "5"
    },
    "sameAs": [
      "https://www.facebook.com/SpiessCarpetCleaning"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Carpet Cleaning",
            "description": "Professional deep steam carpet cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Upholstery Cleaning",
            "description": "Professional furniture and fabric cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Air Duct Cleaning",
            "description": "Complete HVAC and air duct cleaning"
          }
        }
      ]
    }
  };

  return (
    <>
      <Head>
        <title>Carpet Cleaning Service in Woodbury MN - Spiess Carpet Cleaning</title>
        <meta name="description" content="The Most Experienced Carpet Cleaner in the Twin Cities Metro and Western Wisconsin Areas. Get an instant quote and book our trusted cleaners today. 50+ years of excellence." />
        <meta name="keywords" content="carpet cleaning Twin Cities, professional carpet cleaner Minneapolis, St Paul carpet cleaning, upholstery cleaning, air duct cleaning Minnesota" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Carpet Cleaning Service in Woodbury MN - Spiess Carpet Cleaning" />
        <meta property="og:description" content="The Most Experienced Carpet Cleaner in the Twin Cities Area. Get an instant quote and book our trusted cleaners today." />
        <meta property="og:image" content="https://www.spiesscarpet.com/images/logo.png" />
        <meta property="og:url" content="https://www.spiesscarpet.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Spiess Carpet Cleaning" />
        <meta name="twitter:description" content="Welcome to the #1 Carpet Cleaner Service in the Twin Cities. Get an instant quote and book our trusted cleaners today." />
        <meta name="twitter:image" content="https://www.spiesscarpet.com/images/logo.png" />
        <link rel="canonical" href="https://www.spiesscarpet.com" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Spiess Carpet Cleaning" />
      </Head>

      <StructuredData data={structuredData} />

      <main className="min-h-screen bg-white">
        <FirstLanding />
        <SecondLanding />
        <ThirdLanding />
        <FourthLanding />
        <HomeFAQ />
      </main>
    </>
  );
}
