import styles from '../styles/FirstLanding.module.css';
import { useRouter } from "next/router";
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const FirstLanding = () => {

    const router = useRouter();

    const handleButtonClick = () => {
        // Perform any necessary server-side logic or API calls here
    
        // Redirect to the server-side rendered route
        router.push('/quote');
      };
    

    return (
        <>
        <div className={styles.specialsContainer}>
        
        </div>
            <div className={`${styles.first_container}`}>
            <header className={styles.callHeader}>
                <h3 className={styles.h3One}><a className={styles.link} href="sms:6513238711">651-323-8711</a></h3><h3> | </h3><h3>Call or Text Today for a FREE QUOTE</h3>
            </header>
                <div className={styles.landing_head}>
                    <h1 className={styles['head']}><strong><u>The Twin Cities' Most</u></strong></h1>
                    <h1 className={styles['head']}><strong><u>Experienced Carpet Cleaner</u></strong></h1>
                    <h1 className={styles['mobileHead']}><strong><u>The Twin Cities' Most Experienced Carpet Cleaning Business</u></strong></h1>
                </div>
                <div className={styles.button_container}>
                    <button onClick={handleButtonClick} className={`${styles.btn_primary}`} kind="primary"><strong>Schedule Today!</strong></button>
                </div>
            </div>
        </>
    );
};


export default FirstLanding;