import React, { useState } from 'react';
import styles from '../styles/testimonials.module.css'
//<div className="elfsight-app-d6a85cb1-597d-45da-a58c-4e8d1fd40337"></div>
import Head from 'next/head'
import {TailSpin} from "react-loader-spinner";
import icon from '../../public/images/icon.png';
import StructuredData from 'src/pages/StructuredData';

const Testimonials = () => {

    const [isLoading, setIsLoading] = useState(true); // Add isLoading state

    const handleIframeLoad = () => {
        setIsLoading(false); // Set isLoading to false when iframe is loaded
      };
      const LoadingIcon = () => (
        <div className={styles.loadingContainer}>
          <TailSpin type="Oval" color="#000000" height={50} width={50} />
        </div>
      );


    const structuredData =  {
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
            <link rel="icon" type="image/png" href={icon} />
        </Head>
        <StructuredData data={structuredData} />
        <div className={styles.container}>
            <h2 className={styles.header}><strong>At Spiess Carpet Cleaning, Our Customers Are Always Come First</strong></h2>
            <div className={styles.reviewContainer}>
                    <div className={`elfsight-app-d6a85cb1-597d-45da-a58c-4e8d1fd40337 ${styles.reviewDiv}`} />
            <iframe
                className={!isLoading ? styles.reviewIframe : styles.hidden}
                title="Testimonials"
                width="100%"
                height="100%"
                onLoad={handleIframeLoad}
            ></iframe>
            </div>
        </div>
        </>
    );
};

export default Testimonials;