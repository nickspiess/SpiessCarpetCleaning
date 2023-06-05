import styles from '../styles/FirstLanding.module.css';
//import Quote from '../../../Quote/QuoteCard';
import { useRouter } from "next/router";
import React from 'react';
import Head from 'next/head';

const FirstLanding = () => {
    const router = useRouter();

    return (
        <>
            <div className={`${styles.first_container}`}>
                <div className={styles.landing_head}>
                    <h1 className={styles['head']}><strong><u>The Twin Cities' Most</u></strong></h1>
                    <h1 className={styles['head']}><strong><u>Trusted Carpet Cleaner</u></strong></h1>
                    <h1 className={styles['mobileHead']}><strong><u>The Twin Cities' Most Trusted Carpet Cleaner</u></strong></h1>
                </div>
                <div className={styles.button_container}>
                    <button onClick={() => router.push('/quote')} className={`${styles.btn_primary}`} kind="primary"><strong>Get an Instant Quote</strong></button>
                </div>
            </div>
        </>
    );
};

export default FirstLanding;