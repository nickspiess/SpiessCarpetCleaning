import React from 'react';
import Link from 'next/link';
import SecondLanding from './SecondLanding'
import FirstLanding from './FirstLanding'
import ThirdLanding from './ThirdLanding'
import FourthLanding from './FourthLanding'
import Head from 'next/head'
import StructuredData from 'src/pages/StructuredData';

export default class extends React.Component {
  

  render() {

    const structuredData =  {
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
                <title>Spiess Carpet Cleaning</title>
                <meta name="description" content="The Most Experienced Carpet Cleaner in the Twin Cities Area. Get an instant quote and book our trusted cleaners today." />
                <meta name="keywords" content="carpet cleaning, professional cleaners, Twin Cities, trusted service" />
                <meta property="og:title" content="Spiess Carpet Cleaning" />
                <meta property="og:description" content="The Most Experienced Carpet Cleaner in the Twin Cities Area. Get an instant quote and book our trusted cleaners today." />
                <meta property="og:image" content="https://www.spiesscarpet.com/public/images/logo.png" />
                <meta property="og:url" content="https://www.spiesscarpet.com" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Spiess Carpet Cleaning" />
                <meta name="twitter:description" content="Welcome to the #1 Carpet Cleaner Service in the Twin Cities. Get an instant quote and book our trusted cleaners today." />
                <meta name="twitter:image" content="https://www.spiesscarpet.com/public/images/logo.png" />
            </Head>
            
        <StructuredData data={structuredData} />
            <div className="body">
              <div className="wrapper">
                    <FirstLanding />
                    <FourthLanding />
                    <SecondLanding />
                    <ThirdLanding />
                  </div>
            </div>
        </>
      )
    }
  }
