import React from 'react';
import { useRef, useState } from "react";
import styles from '../styles/contact.module.css'
import { FaCcAmex } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import Check from '../../public/images/bankCheck.png'
import Cash from '../../public/images/money.png'
import emailjs from "emailjs-com";
import Image from 'next/image';
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import Head from "next/head";


const SERVICE_ID = "service_5e4f1be";
const TEMPLATE_ID = "template_rfah2ei";
const USER_ID = "VPkdzprTCBDdiUbQI";

const Contact = () => {

    const [formStatus, setFormStatus] = React.useState('Send');
    const [userInput, setUserInput] = useState("");
    const [emailerror, setEmailError] = useState(false);
    const [showEmailErrorText, setShowEmailErrorText] = useState(false);
    const [phoneerror, setPhoneError] = useState(false);
    const [showPhoneErrorText, setShowPhoneErrorText] = useState(false);
    const [firstnameerror, setFirstNameError] = useState(false);
    const [showFirstNameErrorText, setShowFirstNameErrorText] = useState(false);
    const [lastnameerror, setLastNameError] = useState(false);
    const [showLastNameErrorText, setShowLastNameErrorText] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault()

        const contactMsg = {
          name: e.target.firstName.value + " " + e.target.lastName.value,
          message: e.target.message.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
        };

        const jsonQuoteData = JSON.stringify(contactMsg);
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text);
            Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
            icon: 'error',
            title: 'Oops, something went wrong',
            text: error.text,
            })
        });

        e.target.reset()
        setFormStatus('Submitting...')
        
    }

    const handleEmailBlur = (event) => {
        if (!emailerror) {
            if (event.target.validity.patternMismatch) {
                ref.current.focus();
                setEmailError(true);
                setShowEmailErrorText(true);
            }
        }
        if (emailerror) {
            setShowEmailErrorText(false);
        }
    };
    const handlePhoneBlur = (event) => {
        if (!phoneerror) {
            if (event.target.validity.patternMismatch) {
                ref.current.focus();
                setPhoneError(true);
                setShowPhoneErrorText(true);
            }
        }
        if (phoneerror) {
            setShowPhoneErrorText(false);
        }
    };
    const handleFirstNameBlur = (event) => {
        if (!firstnameerror) {
            if (event.target.validity.patternMismatch) {
                ref.current.focus();
                setFirstNameError(true);
                setShowFirstNameErrorText(true);
            }
        }
        if (firstnameerror) {
            setShowFirstNameErrorText(false);
        }
    };
    const handleLastNameBlur = (event) => {
        if (!lastnameerror) {
            if (event.target.validity.patternMismatch) {
                ref.current.focus();
                setLastNameError(true);
                setShowLastNameErrorText(true);
            }
        }
        if (lastnameerror) {
            setShowLastNameErrorText(false);
        }
    };

    const handleEmailChange = (event) => {
        const newValueIsValid = !event.target.validity.patternMismatch;
        if (emailerror) {
            if (newValueIsValid) {
                setEmailError(false);
                setShowEmailErrorText(false);
            }
        }

        setUserInput(event.target.value);
    };
    const handlePhoneChange = (event) => {
        const newValueIsValid = !event.target.validity.patternMismatch;
        if (phoneerror) {
            if (newValueIsValid) {
                setPhoneError(false);
                setShowPhoneErrorText(false);
            }
        }

        setUserInput(event.target.value);
    };
    const handleFirstNameChange = (event) => {
        const newValueIsValid = !event.target.validity.patternMismatch;
        if (firstnameerror) {
            if (newValueIsValid) {
                setFirstNameError(false);
                setShowFirstNameErrorText(false);
            }
        }

        setUserInput(event.target.value);
    };
    const handleLastNameChange = (event) => {
        const newValueIsValid = !event.target.validity.patternMismatch;
        if (lastnameerror) {
            if (newValueIsValid) {
                setLastNameError(false);
                setShowLastNameErrorText(false);
            }
        }

        setUserInput(event.target.value);
    };

    const handleFirstNameFocus = () => {
        if (firstnameerror) {
            setShowFirstNameErrorText(true);
        }
    };
    const handleLastNameFocus = () => {
        if (lastnameerror) {
            setShowLastNameErrorText(true);
        }
    };
    const handlePhoneFocus = () => {
        if (phoneerror) {
            setShowPhoneErrorText(true);
        }
    };
    const handleEmailFocus = () => {
        if (emailerror) {
            setShowEmailErrorText(true);
        }
    };

    function style(error) {
        if (error) {
            return {
            backgroundColor: "rgba(255, 0, 0, 0.5)" 
            // Or any other style you prefer
            };
        }
    }

    const ref = useRef();

    return (
        <>
        <Head>
            <title>Contact | Spiess Carpet Cleaning</title>
        </Head>
        <div className={styles.contactCont}>
            <article className={styles.contactBox}>
                <h2 className={styles.contactHead}>Enter Your Info and We Will Message<br/>You Back As Soon As Possible</h2>
                <div className="container mt-5">
                    <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="firstName">
                        First Name
                        </label>
                        <input className="form-control" type="text" name="firstName" id="firstName" pattern="[A-Za-z]{1,32}" 
                            onBlur={handleFirstNameBlur} onChange={handleFirstNameChange} onFocus={handleFirstNameFocus} 
                            style={style(firstnameerror)} required />
                            {showFirstNameErrorText && (
                                <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                                    Please enter letter format for first name.
                                </p>
                            )}
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="lastName">
                        Last Name
                        </label>
                        <input className="form-control" type="text" name="lastName" id="lastName" pattern="[A-Za-z]{1,32}" 
                        onBlur={handleLastNameBlur} onChange={handleLastNameChange} onFocus={handleLastNameFocus} 
                        style={style(lastnameerror)} required />
                        {showLastNameErrorText && (
                            <p role="alert" style={{ color: "rgb(255, 0, 0)"}}>
                                Please enter letter format for last name.
                            </p>
                        )}
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                        Email
                        </label>
                        <input className="form-control" id="email" 
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
                        ref={ref} name="email"
                        onBlur={handleEmailBlur} onChange={handleEmailChange} onFocus={handleEmailFocus} 
                        style={style(emailerror)} required />
                        {showEmailErrorText && (
                            <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                                Please enter email format as xxxxx@yyyyy.zzzzz
                            </p>
                        )}
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="phone">
                        Phone
                        </label>
                        <input className="form-control" id="phone" name="phone" inputMode="decimal" 
                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}|[0-9]{3}-[0-9]{3}-[0-9]{4}" ref={ref}
                        onBlur={handlePhoneBlur} onChange={handlePhoneChange} onFocus={handlePhoneFocus} 
                        style={style(phoneerror)} required />
                        {showPhoneErrorText && (
                            <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                                Please enter phone number format as xxx-yyy-zzzz
                            </p>
                        )}
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="message">
                        Message
                        </label>
                        <input className="form-control" name="message" id="message" required />
                    </div>
                        <div className={styles.buttonContainer}>
                            <button className={`${styles.contactBtn} btn btn-danger`} type="submit">
                                <strong>Submit</strong>
                                {onSubmit}
                            </button>
                        </div>
                    </form>
                </div>
            </article>
            <div className={styles.contactInfo}>
                <article className={styles.directContact}>
                    <h2 className={styles.contactHeadTop}>Contact Us Directly</h2>
                    <p className={styles.contactParagraphs}>(651)-472-2736</p>
                    <p className={styles.contactParagraphs}><u>sales@spiesscarpet.com</u></p>
                </article>
                <article className={styles.hours}>
                    <h2 className={styles.contactHead}>Business Hours</h2>
                    <p className={styles.contactParagraphs}>Monday - Friday:      7:00am - 5:00pm</p>
                    <p className={styles.contactParagraphs}>Saturday:             By Appointment Only</p>
                    <p className={styles.contactParagraphs}>Sunday:               Closed</p>
                </article>
                <article className={styles.serviceArea}>
                    <h2 className={styles.contactHead}>Areas Serviced</h2>
                    <p className={styles.contactParagraphs}>Twin Cities Metro and Surrounding Areas</p>
                </article>
                <div className={styles.payments}>
                    <h2 className={styles.contactParagraphs}>Payments Accepted:</h2> 
                    <div className={styles.paymentContainer}>
                        <div className={styles.topPay}>
                            <h1 className={styles.cardLineOne}><FaCcVisa className={styles.visa} /><FaCcMastercard className={styles.mastercard} /><FaCcDiscover className={styles.discover} /></h1>
                        </div>
                        <div className={styles.bottomPay}>
                                <FaCcAmex className={styles.amex}/>
                                <Image className={styles.cash} src={Cash} width={40} height={55} alt='cash' />
                                <Image className={styles.cash}src={Check} width={40} height={57} alt='cashiers check' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;