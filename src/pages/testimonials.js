import React from 'react';
import styles from '../styles/testimonials.module.css'
//<div className="elfsight-app-d6a85cb1-597d-45da-a58c-4e8d1fd40337"></div>
import Head from 'next/head'

const Testimonials = () => {
    return (
        <>
        <Head>
            <title>Testimonials | Spiess Carpet Cleaning</title>
        </Head>
        <div className={styles.container}>
            <h2 className={styles.header}><strong>At Spiess Carpet Cleaning, Our Customers Are Always Come First</strong></h2>
            <div className={styles.reviewContainer}>
                <div className="elfsight-app-d6a85cb1-597d-45da-a58c-4e8d1fd40337"></div>
            </div>
        </div>
        </>
    );
};

export default Testimonials;