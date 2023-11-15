import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/services.module.scss';
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

// Manage the current service state
const [currentService, setCurrentService] = useState('Carpet Cleaning');
const [isTransitioning, setIsTransitioning] = useState(false);
const [isNextService, setIsNextService] = useState(false);


const handleClick = (newService) => {
  if (newService !== currentService && !isTransitioning) {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentService(newService);
      setIsTransitioning(false);
    }, 400);
  }
};


const servicesInfo = {
  'Carpet Cleaning': {
    description: '<article><p>State of the art, chemical-free, truck mount powered, steam cleaning designed to make your carpets as clean as possible.</p><p>Additional services such as deodorizing and Scotchgard stain-resistant protective coating are also available.</p></article>',
    image: '/images/carpet.jpeg',
  },
  'Upholstery Cleaning': {
    description: '<article><p>Cleaning away allergens helps protect your families health. This bonus is just one of many. Our state-of-the-art upholstery cleaning tackles even the most ground-in dirt and grime.</p><p>Let us help you prolong the life of your furniture.</p></article>',
    image: '/images/upholstery.jpeg',
  },
  'Air Duct Cleaning': {
    description: '<article><p>Spiess Carpet Cleaning offers two different levels for cleaning your air ducts, advanced and maintenance cleanings.</p><p>Our process uses industrial vaccuums, high-pressure air wands, and snakes to clean all your vents, branches, and trunk lines, making the air in your home cleaner than ever before.</p></article>',
    image: '/images/vents.jpeg',
  },
  'Additional Services': {
    description: '<div><ul><li className={styles.description}>Area Rug Cleaning</li><li>Blood stain removal</li><li>Moving in/out cleanings</li><li>Pet odor removal</li><li>Pet stain removal</li></ul><ul><li>Rust stain removal</li><li>Added Carpet Protectant</li><li>Steam and spot cleaning</li><li>Tile floor cleaning</li><li>Water removal</li></ul></div>',
    image: '/images/upholstery.jpeg',
  },
};

const buttonColors = {
  'Carpet Cleaning': 'linear-gradient(0deg, rgba(199, 150, 148, .75) 0%, rgba(199,62,55,.95) 33%, rgba(195,19,10,1) 50%, rgba(199,62,55,.95) 66%, rgba(199, 150, 148, .75) 100%)',
  'Upholstery Cleaning': 'linear-gradient(0deg, rgba(148, 185, 222, 0.75) 0%, rgba(20, 132, 226, 0.95) 33%, rgba(0, 118, 234, 1) 50%, rgba(20, 132, 226, 0.95) 66%, rgba(148, 185, 222, 0.75) 100%)',
  'Air Duct Cleaning': 'linear-gradient(0deg, rgba(130, 178, 118, 0.85)0%, rgba(67, 130, 42, 0.95) 33%, rgba(52, 133, 33, 1) 50%, rgba(67, 130, 42, 0.95) 66%, rgba(130, 178, 118, 0.85) 100%)',
  'Additional Services': 'linear-gradient(0deg, rgba(229, 214, 145, 0.75)0%, rgba(234, 198, 40, 0.95) 33%, rgba(234, 179, 0, 1) 50%, rgba(234, 198, 40, 0.95) 66%, rgba(229, 214, 145, 0.75) 100%)',
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
      <div className={styles.background}>
        <div className={styles.mainContainer}>
      <header className={styles.head}>
          <h3 className={styles.header}>Our Services</h3>
      </header>
      <div className={styles.container}>
      <div className={styles.buttonsContainer}>
        {Object.keys(servicesInfo).map((service) => (
          <button
          key={service}
          className={styles.serviceButton}
          style={
            buttonColors[service].includes("linear-gradient")
              ? { backgroundImage: buttonColors[service] }
              : { backgroundColor: buttonColors[service] }
          }
          onClick={() => handleClick(service)}
        >
            {service}
          </button>
        ))}
      </div>
      <div className={`
            ${styles.infoContainer} 
            ${isTransitioning ? (isNextService ? styles.slideRight : styles.slideLeft) : styles.show}
          `}>
            <div className={styles.infoContent}>
        <img
          className={styles.serviceImage}
          src={servicesInfo[currentService].image}
          alt={currentService}
        />
        <div
              className={`${styles.serviceDescription} ${styles.dangerousHTMLContainer}`}
              dangerouslySetInnerHTML={{ __html: servicesInfo[currentService].description }}
        >
        </div>
        <div className={styles.buttonContainer}>
          <Link className={styles.linkButton} href='/contact'>
              <button className={styles.bookButton}>
                  Book Now
              </button>
          </Link>
        </div>
      </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Services;
