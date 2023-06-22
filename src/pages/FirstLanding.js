import styles from '../styles/FirstLanding.module.css';
import { useRouter } from "next/router";
import React from 'react';
import { getServerSideProps } from "./getServerSideProps";
import StructuredData from 'src/pages/StructuredData';

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

            <div className={`${styles.first_container}`}>
                <div className={styles.landing_head}>
                    <h1 className={styles['head']}><strong><u>The Twin Cities' Most</u></strong></h1>
                    <h1 className={styles['head']}><strong><u>Experienced Carpet Cleaner</u></strong></h1>
                    <h1 className={styles['mobileHead']}><strong><u>The Twin Cities' Most Experienced Carpet Cleaner</u></strong></h1>
                </div>
                <div className={styles.button_container}>
                    <button onClick={handleButtonClick} className={`${styles.btn_primary}`} kind="primary"><strong>Get an Instant Quote</strong></button>
                </div>
            </div>
        </>
    );
};


export default FirstLanding;