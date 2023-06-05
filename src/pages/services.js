import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/services.module.css';
import Image from 'next/image';
import Vent from '../../public/images/vents.jpeg';
import Carpet from '../../public/images/carpet.jpeg';
import Other from '../../public/images/upholstery.jpeg';

const Services = () => {
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
      </Head>
      <div className={styles.contentWrapper}>
    <div className={styles.mainContainer}>
        <header className={styles.head}>
            <h1 className={styles.header}>Our Services</h1>
        </header>
      <div className={styles['box-area']}>
        <div className={`${styles.box} ${styles.active}`}>
        <Image className={styles.image} src={Carpet} alt="img" />
            <div className={styles.contentWrapperCarpet}>
          <h2 className={styles.carpetHead}>Carpet Cleaning</h2>
          <p className={styles.text}>
            State of the art, chemical-free, truck mount powered, steam cleaning designed to make your carpets as clean as possible.
            Additional services such as deodorizing and Scotchgard stain-resistant protective coating are also available.
          </p>
          </div>
          <i className="fa-solid fa-person-walking"></i>
        </div>
        <div className={styles.box}>
          <Image className={styles.image} src={Other} alt="img" />
          <div className={styles.contentWrapperUpholstery}>
          <h2 className={styles.upholsteryHead}>Upholstery Cleaning</h2>
          <p>
            Cleaning away allergens helps protect your families health. This bonus is just one of many.
            Our state-of-the-art upholstery cleaning tackles even the most ground-in dirt and grime. 
            Let us help you prolong the life of your furniture.
          </p>
          </div>
          <i className="fa-solid fa-snowflake"></i>
        </div>
        <div className={styles.box}>
          <Image className={styles.image} src={Vent} alt="img" />
          <div className={styles.contentWrapperDucts}>
          <h2 className={styles.ductHead}>Air Duct and Dryer Vent Cleaning</h2>
          <p>
            We offer two different levels for cleaning your air ducts, an advanced 
            and maintenance cleaning.  We uses industrial vaccuums and high-pressure air wands to clean
            all your vents, branch, and trunk lines, making the air in your home cleaner than ever before. 
          </p>
          </div>
          <i className="fa-solid fa-tree"></i>
        </div>
        <div className={styles.box}>
          <Image className={styles.image} src={Other} alt="img" />
          <div className={styles.contentWrapperOther}>
          <div className={styles.topContainer}>
          <h2 className={styles.otherHead}>Additional Cleaning Services</h2>
          </div>
          <div className={styles.bottomContainer}>
          <ul className={styles.listContainer}>
            <div className={styles.list1}>
                <li>Area Rug Cleaning</li>
                <li>Blood stain removal</li>
                <li>Moving in/out cleanings</li>
                </div>
            <div className={styles.list2}>
                <li>Pet odor removal</li>
                <li>Pet stain removal</li>
                <li>Rust stain removal</li>
            </div>
            <div className={styles.list3}>
                <li>Carpet protectors</li>
                <li>Steam and spot cleaning</li>
                <li>Tile floor cleaning</li>
            </div>
          </ul>
                </div>
          </div>
          <i className="fa-solid fa-droplet"></i>
        </div>
      </div>
      </div>


      <div className={styles.mobileContainer}>
        <header className={styles.head}>
            <h1 className={styles.header}>Our Services</h1>
        </header>
      <div className={styles['box-area']}>
        <div className={styles.mobileBox}>
        <Image className={styles.image} src={Carpet} alt="img" />
            <div className={styles.contentWrapperCarpetMobile}>
          <h2 className={styles.mobileHead}><strong>Carpet Cleaning</strong></h2>
          <p className={styles.text}>
            State of the art, chemical-free, truck mount powered, steam cleaning designed to make your carpets as clean as possible.
            Additional services such as deodorizing and Scotchgard stain-resistant protective coating are also available.
          </p>
          </div>
          <i className="fa-solid fa-person-walking"></i>
        </div>
        <div className={styles.mobileBox}>
          <Image className={styles.image} src={Other} alt="img" />
          <div className={styles.contentWrapperUpholsteryMobile}>
          <h2 className={styles.mobileHead}><strong>Upholstery Cleaning</strong></h2>
          <p className={styles.text}>
            Cleaning away allergens helps protect your families health. This bonus is just one of many.
            Our state-of-the-art upholstery cleaning tackles even the most ground-in dirt and grime. 
            Let us help you prolong the life of your furniture.
          </p>
          </div>
          <i className="fa-solid fa-snowflake"></i>
        </div>
        <div className={styles.mobileBox}>
          <Image className={styles.image} src={Vent} alt="img" />
          <div className={styles.contentWrapperDuctsMobile}>
          <h2 className={styles.mobileHead}><strong>Air Duct and Dryer Vent Cleaning</strong></h2>
          <p className={styles.text}>
            Spiess Carpet Cleaning offers two different levels for cleaning your air ducts, and advanced 
            and maintenance cleaning.  Our process uses industrial vaccuums and high-pressure air wands and snakes to clean
            all your vents, branch, and trunk lines, making the air in your home cleaner than ever before. 
          </p>
          </div>
          <i className="fa-solid fa-tree"></i>
        </div>
        <div className={styles.lastMobileBox}>
          <Image className={styles.image} src={Other} alt="img" />
          <div className={styles.contentWrapperOtherMobile}>
            <div className={styles.otherHead}>
             <h2 className={styles.mobileHead}><strong>Additional Cleaning Services</strong></h2>
             </div>
          <div className={styles.topContainer}>
          <ul className={styles.listContainer}>
            <div className={styles.list1}>
                <li>Area Rug Cleaning</li>
                <li>Blood stain removal</li>
                <li>Moving in/out cleanings</li>
                <li>Pet odor removal</li>
                <li>Pet stain removal</li>
            </div>
            <div className={styles.list2}>
                <li>Rust stain removal</li>
                <li>Carpet protectors</li>
                <li>Steam and spot cleaning</li>
                <li>Tile floor cleaning</li>
                <li>Water removal</li>
            </div>
          </ul>
          </div>
          </div>
          <i className="fa-solid fa-droplet"></i>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Services;
