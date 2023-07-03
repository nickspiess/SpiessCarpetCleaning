import React, { useState } from 'react';
import styles from '../styles/ServicesCarousel.module.css';

const Carousel = () => {
  const services = [
    {
      title: 'Carpet Cleaning',
      image: '/images/carpet.jpeg',
      summary: 'State of the art, chemical-free, truck mount powered, steam cleaning designed to make your carpets as clean as possible. Additional services such as deodorizing and Scotchgard stain-resistant protective coating are also available.',
    },
    {
      title: 'Upholstery Cleaning',
      image: '/images/upholstery.jpeg',
      summary: 'Cleaning away allergens helps protect your families health. This bonus is just one of many. Our state-of-the-art upholstery cleaning tackles even the most ground-in dirt and grime. Let us help you prolong the life of your furniture.',
    },
    {
      title: 'Air Duct Cleaning',
      image: '/images/vents.jpeg',
      summary: 'Spiess Carpet Cleaning offers two different levels for cleaning your air ducts, advanced and maintenance cleanings.  Our process uses industrial vaccuums, high-pressure air wands, and snakes to clean all your vents, branches, and trunk lines, making the air in your home cleaner than ever before. ',
    },
    {
      title: 'Additional Services',
      image: '/images/upholstery.jpeg',
      summary: '<ul> <div><li>Area Rug Cleaning</li><li>Blood stain removal</li><li>Moving in/out cleanings</li><li>Pet odor removal</li><li>Pet stain removal</li></div></ul><ul><li>Rust stain removal</li><li>Carpet protectors</li><li>Steam and spot cleaning</li><li>Tile floor cleaning</li><li>Water removal</li></div></ul>',
    },
  ];

  const [selectedService, setSelectedService] = useState(services[0]);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className={styles.carouselContainer}>
      <h1 className={styles.carouselHeader}>Services Provided</h1>
      <div className={styles.serviceList}>
        {services.map((service) => (
          <button
            key={service.title}
            className={`${styles.serviceButton} ${selectedService.title === service.title ? styles.active : ''}`}
            onClick={() => handleServiceClick(service)}
          >
            {service.title}
          </button>
        ))}
      </div>
      <div className={styles.carouselImageContainer}>
        {selectedService && (
          <img className={styles.carouselImage} src={selectedService.image} alt={selectedService.title} />
        )}
      </div>
      <div className={styles.summaryBox}>
        {selectedService ? (
          <div>
            <h2>{selectedService.title}</h2>
            <div className={styles.summaryContent} dangerouslySetInnerHTML={{ __html: selectedService.summary }}></div>
          </div>
        ) : (
          <p className={styles.selectServiceText}>Select a service to view details</p>
        )}
      </div>
    </div>
  );
};

export default Carousel;
