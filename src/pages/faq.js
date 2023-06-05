import { useState } from 'react';
import styles from '../styles/Faq.module.css';
import { MdKeyboardArrowDown } from "react-icons/md";
import Head from "next/head";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const faqs = [
        {
            question: "Why should I get my carpets cleaned?",
            answer: "Insert information here."
        },
        {
            question: "What are the benefits of Air Duct Cleaning?",
            answer: "Nobody knows."
        },
        {
            question: "Do you have a square footage limit for each room?",
            answer: "We never have a square footage limit and will never nickel and dime you like the competitors."
        },
        {
            question: "Are the chemicals harmful?",
            answer: "Obviously no, reason here:"
        },
        {
            question: "*Insert another question here*",
            answer: "Depends on who you are asking."
        }
    ];

    return (
        <>
            <Head>
                <title>Contact | Spiess Carpet Cleaning</title>
            </Head>
            <div className={styles['faq-wrapper']}>
                <h1 className={styles['faq-head']}>Frequently Asked Questions:</h1>
                <div className={styles['faq-container']}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.faq} ${activeIndex === index ? styles.active : ""}`}
                            onClick={() => handleToggle(index)}
                        >
                            <h3 className={styles['faq-title']}>
                                {faq.question}
                            </h3>
                            <p className={styles['faq-text']}>
                                {faq.answer}
                            </p>
                            <button className={styles['faq-toggle']}>
                                <h3><MdKeyboardArrowDown style={{ marginTop: '2vh' }}/></h3>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FAQ;
