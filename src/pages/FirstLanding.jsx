import styles from '../styles/FirstLanding.module.css';
import { useRouter } from "next/router";
import React from 'react';

const FirstLanding = () => {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/quote');
    };

    const handleContactClick = () => {
        window.location.href = "sms:6514722736";
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.first_container}`}>
                <header className={styles.callHeader}>
                    <h3 className={styles.h3One}>
                        <a className={styles.link} href="sms:6514722736">Call or Text Today for a FREE QUOTE</a>
                        <a className={styles.link} href="sms:6514722736">651-472-2736</a>
                    </h3> | 
                    <button onClick={handleButtonClick} className={`${styles.btn_primary}`} kind="primary">
                        <strong>Schedule Today!</strong>
                    </button>
                </header>
                <div className={styles.landing_head}>
                    <h1 className={styles['head']}><strong><u>40+ Years in the Industry</u></strong></h1>
                    <h1 className={styles['mobileHead']}><strong><u>40+ Years in the Industry</u></strong></h1>
                    <div className={styles.specialsButton}>
                        <div className={styles.specialsContent}>
                            <h4 className={styles.butHead}>30% Off All Services</h4>
                            <button 
                                onClick={handleContactClick}
                                className={styles.subButton}
                            >
                                Contact Today
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Features section inside first_container */}
                <div className={styles.features_section}>
                    <div className={styles.featureTextContainer}>
                        <div className={styles.feature_image_wrapper}>
                            <img src="/images/AngiesHome.jpg" alt="Angies List" className={styles.feature_image} />
                        </div>
                        <h3 className={styles.feature_heading}>Angie's List</h3>
                        <p className={styles.feature_text}>99% "A" Ratings<br/>400+ Reviews</p>
                    </div>
                    <div className={styles.featureTextContainer}>
                        <div className={styles.feature_image_wrapper}>
                            <img src="/images/NextDoor.jpg" alt="NextDoor" className={styles.feature_image} />
                        </div>
                        <h3 className={styles.feature_heading}>NextDoor</h3>
                        <p className={styles.feature_text}>100% Satisfied Customers</p>
                    </div>
                    <div className={styles.featureTextContainer}>
                        <div className={styles.feature_image_wrapper}>
                            <img src="/images/BBB.jpg" alt="Better Business Bureau" className={styles.feature_image} />
                        </div>
                        <h3 className={styles.feature_heading_bbb}>Better Business Bureau</h3>
                        <p className={styles.feature_text}>"A+" Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstLanding;