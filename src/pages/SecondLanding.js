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
            <span><h3 className={styles.second_ban}><strong>Services & Specials</strong></h3></span>
        </div>
        <div className={styles.landing_body}>
            <div className={styles.service_container}>
                <div className={styles.service}>
                    <div className={styles.carpet_image}>
                        <Image src={CarpetLogo} width={100} height={100} alt='air vent' />
                    </div>
                    <div className={styles.head}>
                        <h3 className={styles.headText}><strong>Carpet Cleaning</strong></h3>
                    </div>
                    <div className={styles.dots}>
                        <Image src={Dots} width={45} alt='three dots' />
                    </div>
                    <div className={styles.text}>
                        <p>
                        State-of-the-Art Steam Cleaning machines designed to make your carpet as clean and dry as fast as possible.
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
                <div className={styles.service}>
                <div className={styles.duct_image}>
                    <Image src={AirVent} width={77} height={77} alt='air vent' />
                </div>
                <div className={styles.head}>
                    <h3 className={styles.headText}><strong>Air Duct Cleaning</strong></h3>
                </div>
                <div className={styles.dots}>
                    <Image src={Dots} width={45} alt='three dots' />
                </div>
                <div className={styles.text}>
                    <p>
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
                <div className={`${styles.service} ${styles['rounded-border-gradient']}`}>
                <div className={styles.couch_image}>
                    <Image src={Couch} width={115} height={115} alt='air vent' />
                </div>
                <div className={styles.head}>
                    <h3 className={styles.headText}><strong>Upholstery Cleaning</strong></h3>
                </div>
                <div className={styles.dots}>
                    <Image src={Dots} width={45} alt='three dots' />
                </div>
                <div className={styles.text}>
                    <p>
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
            <div className={styles.specialsContainer}>
                <header className={styles.specialsHeader}>
                    <h4 className={styles.specialsHeaderText}>
                        <strong>
                            Our Current Specials
                        </strong>
                    </h4>
                </header>
                <div className={styles.clippingContainer}>
                    <article className={`${styles.clipping} ${styles.box}`}>
                        <h5>
                            <strong>
                            15% Off All Carpet Cleaning
                            </strong>
                        </h5>
                        <div className={styles.specialButtonContainer}>
                            <Link className={styles.landingButtonPrimary} href='/services'>
                                <button className={styles.quoteButton}>
                                    Get a Quote
                                </button>
                            </Link>
                            <Link className={styles.landingButtonPrimary} href='/contact'>
                                    <button className={styles.specialScheduleButton}>
                                        Schedule Today
                                    </button>
                            </Link>
                        </div>
                    </article>
                    <article className={`${styles.clipping} ${styles.box}`}>
                        <h5>
                            <strong>
                            30% Off All Upholstery Cleaning
                            </strong>
                        </h5>
                        <div className={styles.specialButtonContainer}>
                            <Link className={styles.landingButtonPrimary} href='/services'>
                                <button className={styles.quoteButton}>
                                    Get a Quote
                                </button>
                            </Link>
                            <Link className={styles.landingButtonPrimary} href='/contact'>
                                    <button className={styles.specialScheduleButton}>
                                        Schedule Today
                                    </button>
                            </Link>
                        </div>
                    </article>
                    <article className={`${styles.clipping} ${styles.box}`}>
                        <h5>
                        <strong>
                            50% Off Pet Odor Neutralizers
                            </strong>
                        </h5>
                        <div className={styles.specialButtonContainer}>
                            <Link className={styles.landingButtonPrimary} href='/services'>
                                <button className={styles.quoteButton}>
                                    Get a Quote
                                </button>
                            </Link>
                            <Link className={styles.landingButtonPrimary} href='/contact'>
                                    <button className={styles.specialScheduleButton}>
                                        Schedule Today
                                    </button>
                            </Link>
                        </div>
                    </article>
                </div>
            </div>
        </div>
        </>
    );
};

export default SecondLanding;
