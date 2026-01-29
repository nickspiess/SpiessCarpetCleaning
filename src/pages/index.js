import React from 'react';
import Head from 'next/head';
import SecondLanding from './SecondLanding';
import FirstLanding from './FirstLanding';
import ThirdLanding from './ThirdLanding';
import FourthLanding from './FourthLanding';
import StructuredData from './StructuredData';

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
        <title>Spiess Carpet Cleaning - #1 Carpet Cleaning Service in Twin Cities</title>
        <meta name="description" content="The Most Experienced Carpet Cleaner in the Twin Cities Metro and Western Wisconsin Areas. Get an instant quote and book our trusted cleaners today. 50+ years of excellence." />
        <meta name="keywords" content="carpet cleaning Twin Cities, professional carpet cleaner Minneapolis, St Paul carpet cleaning, upholstery cleaning, air duct cleaning Minnesota" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Spiess Carpet Cleaning - Twin Cities' Most Trusted" />
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
      </main>
    </>
  );
}