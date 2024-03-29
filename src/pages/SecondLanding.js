import React from 'react';
import Image from 'next/image';
import styles from '../styles/SecondLanding.module.css';
import CarpetLogo from '../../public/images/final_carpet.png';
import AirVent from '../../public/images/final_vent.png';
import Couch from '../../public/images/couch.png';
import Dots from '../../public/images/dots1.png';
import Link from 'next/link';

const SecondLanding = () => {
    return (
        <>
        <div className={styles.second_banner}>
            <span><h3 className={styles.second_ban}><strong>Services Provided</strong></h3></span>
        </div>
        <div className={styles.landing_body}>
            <div className={styles.service_container}>
                <div className={styles.service}>
                <div className={styles.serviceContent}>
                    <div className={styles.imgContainer}>
                        <Image className={styles.image} src={CarpetLogo} width={100} height={100} alt='air vent' />
                        </div>
                    <div className={styles.head}>
                        <h3 className={styles.headText}><strong>Carpet Cleaning</strong></h3>
                    </div>
                    <div className={styles.dots}>
                        <Image src={Dots} width={45} alt='three dots' />
                    </div>
                    <div className={styles.text}>
                        <p className={styles.pTag}>
                        State-of-the-Art Steam Cleaning designed to make your carpet as clean and dry as fast as possible.
                        </p>
                        <div className={styles.buttonContainer}>
                        <Link className={styles.landingButtonPrimary} href='/services'>
                            <button className={styles.learnButton}>
                                Learn More
                            </button>
                        </Link>
                        <Link className={styles.landingButtonPrimary} href='/contact'>
                                <button className={styles.scheduleButton}>
                                    Schedule Today
                                </button>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={styles.service}>
                <div className={styles.serviceContent}>
                    <div className={styles.imgContainer}>
                    <Image className={styles.duct_image} src={AirVent} width={77} height={77} alt='air vent' />
                    </div>
                <div className={styles.head}>
                    <h3 className={styles.headText}><strong>Air Duct Cleaning</strong></h3>
                </div>
                <div className={styles.dots}>
                    <Image src={Dots} width={45} alt='three dots' />
                </div>
                <div className={styles.text}>
                    <p className={styles.pTag}>
                        Innovative Air Duct and Dryer Vent cleaning technologies to keep you and your home healthy.
                    </p>
                
                <div className={styles.buttonContainer}>
                <Link className={styles.landingButtonPrimary} href='/services'>
                        <button className={styles.learnButton}>
                            Learn More
                        </button>
                    </Link>
                    <Link className={styles.landingButtonPrimary} href='/contact'>
                            <button className={styles.scheduleButton}>
                                Schedule Today
                            </button>
                    </Link>
                    </div>
                    </div>
                    </div>
                </div>
                <div className={`${styles.service}`}>
                <div className={styles.serviceContent}>
                    <div className={styles.imgContainer}>
                    <Image className={styles.image} src={Couch} width={115} height={115} alt='air vent' />
                    </div>
                <div className={styles.head}>
                    <h3 className={styles.headText}><strong>Upholstery Cleaning</strong></h3>
                </div>
                <div className={styles.dots}>
                    <Image src={Dots} width={45} alt='three dots' />
                </div>
                <div className={styles.text}>
                    <p className={styles.pTag}>
                        Upholstery cleaning available with the most advanced cleaning technologies.
                    </p>
                <div className={styles.buttonContainer}>
                        <Link className={styles.landingButtonPrimary} href='/services'>
                            <button className={styles.learnButton}>
                                Learn More
                            </button>
                        </Link>
                        <Link className={styles.landingButtonPrimary} href='/contact'>
                                <button className={styles.scheduleButton}>
                                    Schedule Today
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

export default SecondLanding;
