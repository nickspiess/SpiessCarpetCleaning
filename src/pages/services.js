import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/services.module.css';
import Image from 'next/image';
import Vent from '../../public/images/vents.jpeg';
import Carpet from '../../public/images/carpet.jpeg';
import Other from '../../public/images/upholstery.jpeg';
import StructuredData from 'src/pages/StructuredData';
import Carousel from './ServicesCarousel'

const Services = () => {

  const structuredData =  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Services | Spiess Carpet Cleaning",
    "url": "https://www.spiesscarpet.com/services",
    "description": "We are the most experienced carpet cleaner in the Twin Cities, see our expert-provided services.",
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
        "https://www.facebook.com/SpiessCarpetCleaning/quote",
    ]
};

  useEffect(() => {
    const handleClick = (event) => {
      const boxes = document.querySelectorAll(`.${styles.box}`);
      boxes.forEach((box) => {
        box.classList.remove(styles.active);
      });
      event.currentTarget.classList.add(styles.active);
    };

    const boxes = document.querySelectorAll(`.${styles.box}`);
    boxes.forEach((box) => {
      box.addEventListener('click', handleClick);
    });

    return () => {
      boxes.forEach((box) => {
        box.removeEventListener('click', handleClick);
      });
    };
    
  }, []);

  return (
    <>
      <Head>
        <title>Services | Spiess Carpet Cleaning</title>
        <meta name="description" content="We are the most experienced carpet cleaner in the Twin Cities, see our expert-provided services." />
          <meta name="keywords" content="carpet cleaning, professional cleaners, Twin Cities, trusted service" />
          <meta property="og:title" content="Services | Spiess Carpet Cleaning" />
          <meta property="og:description" content="We are the most experienced carpet cleaner in the Twin Cities, see our expert-provided services." />
          <meta property="og:image" content="https://www.spiesscarpet.com/public/images/logo.png" />
          <meta property="og:url" content="https://www.spiesscarpet.com" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Services | Spiess Carpet Cleaning" />
          <meta name="twitter:description" content="We are the most experienced carpet cleaner in the Twin Cities, see our expert-provided services." />
          <meta name="twitter:image" content="https://www.spiesscarpet.com/public/images/logo.png" />
      </Head>

      <StructuredData data={structuredData} />
      <div className={styles.contentWrapper}>
    <div className={styles.mainContainer}>
        <Carousel / >
      </div>
      </div>
    </>
  );
};

export default Services;
