import styles from "../styles/QuoteCard.module.css";
import { useRef, useState } from "react"; // REVISED
import quoteCalculator from '../js/quoteCalculator'
import Head from 'next/head'
import StructuredData from 'src/pages/StructuredData';
import { sendEmail, insertIntoDatabase } from '../utils/databaseUtils';


const QuoteCard = () => {

    const [userInput, setUserInput] = useState("");
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [rooms, setRooms] = useState(0);
    const [steps, setSteps] = useState(0);
    const [chairs, setChairs] = useState(0);
    const [loveseats, setLoveseats] = useState(0);
    const [couches, setCouches] = useState(0);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [firstnameerror, setFirstNameError] = useState(false);
    const [showFirstNameErrorText, setShowFirstNameErrorText] = useState(false);
    const [lastnameerror, setLastNameError] = useState(false);
    const [showLastNameErrorText, setShowLastNameErrorText] = useState(false);
    const [emailerror, setEmailError] = useState(false);
    const [showEmailErrorText, setShowEmailErrorText] = useState(false);
    const [phoneerror, setPhoneError] = useState(false);
    const [showPhoneErrorText, setShowPhoneErrorText] = useState(false);

    const roomsInputRef = useRef(null);
    const stepsInputRef = useRef(null);
    const chairsInputRef = useRef(null);
    const loveseatsInputRef = useRef(null);
    const couchesInputRef = useRef(null);


      // The handleSubmit function with separated SendGrid and database calls
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the required fields are filled out
    if (!firstName || !lastName || !email || !phone) {
      alert('Please fill out all required fields.');
      return;
    }

    // Calculate total price and quote number
    const [totalPrice, quoteNumber] = quoteCalculator(rooms, steps, chairs, loveseats, couches);

    // Construct the quote data object
    const quoteData = {
      rooms,
      steps,
      chairs,
      loveseats,
      couches,
      firstName,
      lastName,
      email,
      phone,
      totalPrice,
      quoteNumber,
    };

    console.log('Sending quoteData to the API:', quoteData);

    // Send email using SendGrid API
    const emailSent = await sendEmail(quoteData);

    // If email was sent successfully, insert data into the database
    if (emailSent) {
      const dataInserted = await insertIntoDatabase(quoteData);

      // Reset the form inputs if data was inserted into the database successfully
      if (dataInserted) {
        setRooms(0);
        setSteps(0);
        setChairs(0);
        setLoveseats(0);
        setCouches(0);
      }
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

    const handleFirstNameChange = (event) => {
        const newValueIsValid = !event.target.validity.patternMismatch;
        if (firstnameerror) {
            if (newValueIsValid) {
                setFirstNameError(false);
                setShowFirstNameErrorText(false);
            }
        }
        setFirstName(event.target.value)
    };

    const handleFirstNameFocus = () => {
        if (firstnameerror) {
            setShowFirstNameErrorText(true);
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

    const handleLastNameChange = (event) => {
        const newValueIsValid = !event.target.validity.patternMismatch;
        if (lastnameerror) {
            if (newValueIsValid) {
                setLastNameError(false);
                setShowLastNameErrorText(false);
            }
        }
        setLastName(event.target.value)
    };

    const handleLastNameFocus = () => {
        if (lastnameerror) {
            setShowLastNameErrorText(true);
        }
    };

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

    const handleEmailChange = (event) => {
        const newValueIsValid = !event.target.validity.patternMismatch;
        if (emailerror) {
            if (newValueIsValid) {
                setEmailError(false);
                setShowEmailErrorText(false);
            }
        }
        setEmail(event.target.value)
    };
    const handlePhoneChange = (event) => {
        const newValueIsValid = !event.target.validity.patternMismatch;
        if (phoneerror) {
            if (newValueIsValid) {
                setPhoneError(false);
                setShowPhoneErrorText(false);
            }
        }
        setPhone(event.target.value)
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

    const structuredData =  {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": "Quote | Spiess Carpet Cleaning",
        "url": "https://www.spiesscarpet.com/quote",
        "description": "We are the most experienced carpet cleaner in the Twin Cities, providing expert-level carpet cleaning services.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "301 Quentin Ave N",
            "addressLocality": "Lakeland",
            "addressRegion": "MN",
            "postalCode": "55043",
            "addressCountry": "US",
        },
        "telephone": "+1-651-472-2736",
        "openingHours": "Mo-Fr 07:00-17:00",
        "sameAs": [
            "https://www.facebook.com/SpiessCarpetCleaning",
        ]
    };


    return (
        <>
        <Head>
            <title>Quote | Spiess Carpet Cleaning</title>
            <meta name="description" content="The Most Experienced Carpet Cleaner in the Twin Cities Area. Get an instant quote and book our trusted cleaners today." />
            <meta name="keywords" content="carpet cleaning, professional cleaners, Twin Cities, trusted service, quote" />
            <meta property="og:title" content="Quote | Spiess Carpet Cleaning" />
            <meta property="og:description" content="The Most Experienced Carpet Cleaner in the Twin Cities Area. Get an instant quote and book our trusted cleaners today." />
            <meta property="og:image" content="https://www.spiesscarpet.com/public/images/logo.png" />
            <meta property="og:url" content="https://www.spiesscarpet.com/quote" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Quote | Spiess Carpet Cleaning" />
            <meta name="twitter:description" content="Get an instant quote for the Most Experienced Carpet Cleaner in the Twin Cities Area." />
            <meta name="twitter:image" content="https://www.spiesscarpet.com/public/images/logo.png" />
        </Head>


        <StructuredData data={structuredData} />
        <div className={styles.quoteCardContainer}>
            <div className={styles.card}>
                <div className={styles.cardBody}>
                    <div className={styles.quoteContainer}>
                    <div className={`${styles.header}`}>
                        <h2 className={styles.head}><strong>Get an Instant Quote!</strong></h2>
                    </div>
                    <div className='form-group'>
                        <form id="input" className='forms' onSubmit={handleSubmit}>
                        <div className={styles.formGroup2Container}>
                            <div className={styles.formGroup2}>
                                <div className={styles.rooms}>
                                    <label className='test' htmlFor="rooms"><strong>Rooms:</strong></label>
                                    <input
                                        id='num_input'
                                        type="number"
                                        min='0'
                                        className="form-control border border-dark"
                                        value={rooms}
                                        onChange={(event) => setRooms(event.target.value)}
                                    />
                                </div>
                                <div className={styles.steps}>
                                    <label htmlFor="steps"><strong>Flights of Steps:</strong></label>
                                    <input
                                        type="number"
                                        min='0'
                                        className="form-control border border-dark"
                                        id="num_input"
                                        value={steps}
                                        onChange={(event) => setSteps(event.target.value)}
                                    />
                                </div>
                                </div>
                            </div>
                            <div className={styles.formGroupContainer}>
                            <div className={styles.formGroup}>
                                <div className={styles.rooms}>
                                    <label htmlFor="chairs"><strong>Chairs:</strong></label>
                                    <input
                                        type="number"
                                        min='0'
                                        className="form-control border border-dark"
                                        id="num_input"
                                        value={chairs}
                                        onChange={(event) => setChairs(event.target.value)}
                                    />
                                </div>
                                <div className={styles.loveseats}>
                                    <label htmlFor="loveseats"><strong>Loveseats:</strong></label>
                                    <input
                                        type="num_input"
                                        min='0'
                                        className="form-control border border-dark"
                                        id="input"
                                        value={loveseats}
                                        onChange={(event) => setLoveseats(event.target.value)}
                                    />
                                </div>
                                <div className={styles.upholstery}>
                                    <label htmlFor="upholstery"><strong>Couches:</strong></label>
                                    <input
                                        type="num_input"
                                        min='0'
                                        className="form-control border border-dark"
                                        id="input"
                                        placeholder="Upholstery Items"
                                        value={couches}
                                        onChange={(event) => setCouches(event.target.value)}
                                    />
                                </div>
                                </div>
                            </div>
                            <div className={styles.formGroup1Container}>
                            <div className={styles.formGroup1}>
                                <div className={styles.fName}>
                                    <label htmlFor="firstName"><strong>First Name:</strong></label>
                                    <input
                                    type="text"
                                    className='form-control border border-dark name-input'
                                    id={styles.name}
                                    aria-describedby="firstName"
                                    placeholder="First Name"
                                    pattern="[A-Za-z\-]{1,32}" ref={ref}
                                    onBlur={handleFirstNameBlur} onChange={handleFirstNameChange} onFocus={handleFirstNameFocus} 
                                    style={style(firstnameerror)} required />
                                    {showFirstNameErrorText && (
                                        <p role="alert" style={{ color: "rgb(255, 0, 0)", marginTop: "1.5vh"}}>
                                            Please enter letter format.
                                        </p>
                                    )}
                                </div>
                                <div className={styles.lName}>
                                    <label htmlFor="lastName"><strong>Last Name:</strong></label>
                                    <input
                                    type="text"
                                    className="form-control border border-dark name-input"
                                    id={styles.name}
                                    aria-describedby="lastName"
                                    placeholder="Last Name"
                                    pattern="[A-Za-z\-]{1,32}" ref={ref}
                                    onBlur={handleLastNameBlur} onChange={handleLastNameChange} onFocus={handleLastNameFocus} 
                                    style={style(lastnameerror)} required />
                                    {showLastNameErrorText && (
                                        <p role="alert" style={{ color: "rgb(255, 0, 0)", marginTop: "1.5vh"}}>
                                            Please enter letter format.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                            <div className={styles.formGroup3Container}>
                                <div className={styles.formGroup3}>
                                    <div className={styles.email}>
                                        <label htmlFor="email"><strong>Email:</strong></label>
                                        <input className="form-control" id="email"  required
                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
                                            ref={ref}
                                            onBlur={handleEmailBlur} onChange={handleEmailChange} onFocus={handleEmailFocus} 
                                            style={style(emailerror)} />
                                            {showEmailErrorText && (
                                                <p role="alert" style={{ color: "rgb(255, 0, 0)", marginTop: "1.5vh" }}>
                                                    Please enter email format: xxxxx@yyyyy.zzzzz
                                                </p>
                                            )}
                                        <small className="help">We'll never share your info with anyone else.</small>
                                    </div>
                                    <div className={styles.phone}>
                                        <label htmlFor="phone"><strong>Phone:</strong></label>
                                        <input className="form-control" id="phone" inputMode="decimal" required
                                            pattern="[0-9]{3}[0-9]{3}[0-9]{4}|[0-9]{3}-[0-9]{3}-[0-9]{4}" ref={ref}
                                            onBlur={handlePhoneBlur} onChange={handlePhoneChange} onFocus={handlePhoneFocus} 
                                            style={style(phoneerror)}  />
                                            {showPhoneErrorText && (
                                                <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                                                    Please enter phone number: xxx-yyy-zzzz
                                                </p>
                                            )}
                                        <small className="help">We'll never share your info with anyone else.</small>
                                    </div>
                                </div>
                                <div className={styles.formGroup4Container}>
                                    <div className={styles.quoteButton}>
                                        <button className={styles.btnLg} kind="primary" onClick={handleSubmit}>
                                        <strong>Get a Quote!</strong></button>
                                    </div>
                                </div>
                                <div className={styles.lowerText}>
                                    <p className={styles.lowText}><strong>Above pricing may not have a 15% discount of savings.  Please follow up on your quote for additional specials.</strong></p>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

    export default QuoteCard;