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
    "@type": "HomeAndConstructionBusiness",
    "name": "Spiess Carpet Cleaning",
    "url": "https://www.spiesscarpet.com/",
    "description": "We are the most experienced carpet cleaner in the Twin Cities, providing expert-level carpet cleaning services.",
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
        <title>Spiess Carpet Cleaning - #1 Carpet Cleaning Service in Twin Cities</title>
        <meta name="description" content="The Most Experienced Carpet Cleaner in the Twin Cities Metro and Western Wisconsin Areas. Get an instant quote and book our trusted cleaners today. 40+ years of excellence." />
        <meta name="keywords" content="carpet cleaning, professional cleaners, Twin Cities, trusted service, Hudson carpet cleaner, twin cities carpet cleaner, oakdale carpet cleaner, Eden prairie carpet cleaner, woodbury carpet cleaner, saint paul carpet cleaner, Hudson upholstery cleaner, twin cities upholstery cleaner, oakdale upholstery cleaner, Eden prairie upholstery cleaner, woodbury upholstery cleaner, saint paul upholstery cleaner, Hudson air duct cleaner, twin cities air duct cleaner, oakdale air duct cleaner, Eden prairie air duct cleaner, woodbury air duct cleaner, saint paul air duct cleaner, Hudson steam cleaner, twin cities steam cleaner, oakdale steam cleaner, Eden prairie steam cleaner, woodbury steam cleaner, saint paul steam cleaner" />
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