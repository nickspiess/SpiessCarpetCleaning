import React from 'react';
import Head from 'next/head'
import StructuredData from 'src/pages/StructuredData';
import TestimonialsCarousel from './TestimonialsCarousel';

const Testimonials = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": "Testimonials | Spiess Carpet Cleaning",
        "url": "https://www.spiesscarpet.com/testimonials",
        "description": "We are the most experienced carpet cleaner in the Twin Cities, see what our customers have to say.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "301 Quentin Ave N",
            "addressLocality": "Lakeland",
            "addressRegion": "MN",
            "postalCode": "55043",
            "addressCountry": "US",
        },
        "telephone": "+1-651-472-2736",
        "openingHours": "Mo-Fr 07:00-17:00",
        "sameAs": [
            "https://www.facebook.com/SpiessCarpetCleaning",
        ]
    };

    return (
        <>
        <Head>
            <title>Testimonials | Spiess Carpet Cleaning</title>
            <meta name="description" content="We are the most experienced carpet cleaner in the Twin Cities, see what our customers have to say." />
            <meta name="keywords" content="carpet cleaning, professional cleaners, Twin Cities, trusted service, testimonials" />
            <meta property="og:title" content="Testimonials | Spiess Carpet Cleaning" />
            <meta property="og:description" content="We are the most experienced carpet cleaner in the Twin Cities, see what our customers have to say." />
            <meta property="og:image" content="https://www.spiesscarpet.com/public/images/logo.png" />
            <meta property="og:url" content="https://www.spiesscarpet.com" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Testimonials | Spiess Carpet Cleaning" />
            <meta name="twitter:description" content="We are the most experienced carpet cleaner in the Twin Cities, see what our customers have to say." />
            <meta name="twitter:image" content="https://www.spiesscarpet.com/public/images/logo.png" />
        </Head>
        <StructuredData data={structuredData} />

        {/* Testimonials Carousel Section */}
        <section className="py-20 bg-gradient-to-b from-white via-stone-50/50 to-white">
            <div className="container-wide">
                <TestimonialsCarousel />
            </div>
        </section>
        </>
    );
};

export default Testimonials;