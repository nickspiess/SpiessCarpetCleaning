import styles from "../styles/updatedQuote.module.css";
import { useRef, useState } from "react"; // REVISED
import quoteCalculator from '../js/quoteCalculator'
import Head from 'next/head'
import StructuredData from 'src/pages/StructuredData';
import Swal from "sweetalert2";
import QuoteDetail from './quoteInput';
import ReCAPTCHA from "react-google-recaptcha";
import createMessage from '../js/messageCreator';

const Quote = () => {

    const [captchaValue, setCaptchaValue] = useState(null);
    const [isCarpetOpen, setCarpetOpen] = useState(true);
    const [isUpholsteryOpen, setUpholsteryOpen] = useState(false);
    const [deodorize, setDeodorize] = useState(false);
    const [formData, setFormData] = useState({
      rooms: 0,
      flightsOfSteps: 0,
      kitchenChairs: 0,
      ottoman: 0,
      lazyBoys: 0,
      loveseats: 0,
      sofas: 0,
      sectionals: 0,
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    });
  
    const [formErrors, setFormErrors] = useState({});
  
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;

    const handleCaptchaResponseChange = (value) => {
        setCaptchaValue(value);
    };

    const handleCheckboxChange = (e) => {
        setDeodorize(e.target.checked);
    };
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleIncrement = (field) => {
      setFormData({
        ...formData,
        [field]: formData[field] + 1
      });
    };
  
    const handleDecrement = (field) => {
      setFormData({
        ...formData,
        [field]: formData[field] > 0 ? formData[field] - 1 : 0
      });
    };

    const resetForm = () => {
        setFormData({
          rooms: 0,
          flightsOfSteps: 0,
          kitchenChairs: 0,
          ottoman: 0,
          lazyBoys: 0,
          loveseats: 0,
          sofas: 0,
          sectionals: 0,
          firstName: "",
          lastName: "",
          email: "",
          phone: ""
        });
        setDeodorize(false);
        setCaptchaValue(null);
      };
  
    const validateForm = () => {
        let newErrors = {};
    
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required.";
        }
    
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required.";
        }
    
        if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Invalid phone number.";
        }
    
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email address.";
        }
    
        setFormErrors(newErrors);
    
        return Object.keys(newErrors).length === 0;
    };
    
  
    const handleSubmit = async (e) => {
        e.preventDefault();

            // Run validation checks
            if (!validateForm()) {
                let errorMessage = "";
                for (const error in formErrors) {
                  errorMessage += formErrors[error] + "\n";
                }
            
                Swal.fire({
                  icon: 'error',
                  title: 'Validation Error',
                  text: errorMessage,
                });
            }
            else {

    // Check if at least one option is selected
    const options = ['rooms', 'flightsOfSteps', 'kitchenChairs', 'ottoman', 'lazyBoys', 'loveseats', 'sofas', 'sectionals'];
    if (options.every(option => formData[option] === 0)) {
        alert('Please select at least one option.');
        return;
    }

    // Check if name fields are filled
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
        alert('Please fill out the name fields.');
        return;
    }
    
        // Ensure CAPTCHA is completed
        //if (!captchaValue) {
        //    alert('Please complete the CAPTCHA');
        //    return;
        //}
    
        // Check if the required fields are filled out
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
            alert('Please fill out all required fields.');
            return;
        } else {
            const { rooms, flightsOfSteps, kitchenChairs, ottoman, lazyBoys, loveseats, sofas, sectionals, firstName, lastName, email, phone } = formData;
            let message = createMessage(formData);

            if (deodorize) {
                message = message + ' and deodorizer';
            }

            const [totalPrice, quoteNumber] = quoteCalculator(
                rooms,
                flightsOfSteps,
                kitchenChairs,
                ottoman,
                lazyBoys,
                loveseats,
                sofas,
                sectionals,
                deodorize
            );
            
            const quoteData = {
                rooms,
                flightsOfSteps,
                kitchenChairs,
                ottoman,
                lazyBoys,
                loveseats,
                sofas,
                sectionals,
                firstName,
                lastName,
                email,
                phone,
                totalPrice,
                quoteNumber,
            };
            
            const jsonQuoteData = JSON.stringify(quoteData);
    
            try {
                const res = await fetch('/api/sendgrid', {
                    body: JSON.stringify({
                        email: email,
                        firstName: firstName,
                        lastName: lastName,
                        roomCount: rooms,
                        stepCount: flightsOfSteps,
                        kitchenChairCount: kitchenChairs,
                        ottomanCount: ottoman,
                        loveseatCount: loveseats,
                        lazyBoyCount: lazyBoys,
                        sectionalCount: sectionals,
                        totalPrice: totalPrice,
                        quoteNumber: quoteNumber,
                        subject: 'Your Quote from Spiess Carpet!',
                        message: message,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                });
    
                if (res.ok) {
                    console.log(await res.text());
                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent Successfully',
                    });
                    resetForm();
                } else {
                    console.log(await res.text());
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops, something went wrong',
                        text: await res.text(),
                    });
                }
            } catch (error) {
                console.error(error);
            }
            // try {
            //         const res = await fetch('/api/sendSms', {
            //         body: JSON.stringify({
            //             firstName: firstName,
            //             lastName: lastName,
            //             totalPrice: totalPrice,
            //             message: message,
            //             phone: phone,
            //         }),
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            //         method: 'POST',
            //         });
                
            //         if (res.ok) {
            //         console.log('SMS sent successfully');
            //         } else {
            //         console.log('Error sending SMS');
            //         }
            //     } catch (error) {
            //         console.error(error);
            //     }
        }
    }
    };
  
    return (
        <>

        <Head>
        <title>Quote | Spiess Carpet Cleaning</title>
        <meta name="description" content="We are the most experienced carpet cleaner in the Twin Cities, get a free quote." />
          <meta name="keywords" content="carpet cleaning, professional cleaners, Twin Cities, trusted service" />
          <meta property="og:title" content="Free Quote | Spiess Carpet Cleaning" />
          <meta property="og:description" content="We are the most experienced carpet cleaner in the Twin Cities, get a free quote." />
          <meta property="og:image" content="https://www.spiesscarpet.com/public/images/logo.png" />
          <meta property="og:url" content="https://www.spiesscarpet.com" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Free Quote | Spiess Carpet Cleaning" />
          <meta name="twitter:description" content="We are the most experienced carpet cleaner in the Twin Cities, get a free quote." />
          <meta name="twitter:image" content="https://www.spiesscarpet.com/public/images/logo.png" />
      </Head>

        <div className={styles.background}>
            <header className={styles.head}>
                    <h3 className={styles.header}>Get an Instant Quote!</h3>
                </header>
            <div className={styles.quoteContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.dropdownSection}>
                <div className={styles.dropdownHeader} onClick={() => setCarpetOpen(!isCarpetOpen)}>
                    Carpet Cleaning
                    <span className={isCarpetOpen ? styles.arrowUp : styles.arrowDown}>▼</span>
                </div>
                <div className={isCarpetOpen ? styles.dropdownContentOpen : styles.dropdownContentClosed}>
                    <div className={styles.inputGroup}>
                        <QuoteDetail label="Rooms" name="rooms" value={formData.rooms} onIncrement={handleIncrement} onDecrement={handleDecrement} onChange={handleInputChange} />
                    </div>
                
                    <div className={styles.inputGroup}>
                        <QuoteDetail label="Flights of Steps" name="flightsOfSteps" value={formData.flightsOfSteps} onIncrement={handleIncrement} onDecrement={handleDecrement} onChange={handleInputChange} />
                    </div>
                    </div>
            </div>
        
            <div className={styles.dropdownSection}>
                <div className={styles.dropdownHeader} onClick={() => setUpholsteryOpen(!isUpholsteryOpen)}>
                    Upholstery Cleaning
                    <span className={isUpholsteryOpen ? styles.arrowUp : styles.arrowDown}>▼</span>
                </div>
                <div className={isUpholsteryOpen ? styles.dropdownContentOpen : styles.dropdownContentClosed}>
                    <div className={styles.inputGroup}>
                        <QuoteDetail label="Kitchen Chairs" name="kitchenChairs" value={formData.kitchenChairs} onIncrement={handleIncrement} onDecrement={handleDecrement} onChange={handleInputChange} />
                    </div>

                    <div className={styles.inputGroup}>
                    <QuoteDetail label="Ottoman" name="ottoman" value={formData.ottoman} onIncrement={handleIncrement} onDecrement={handleDecrement} onChange={handleInputChange} />
                    </div>

                    <div className={styles.inputGroup}>
                    <QuoteDetail label="Lazy Boys" name="lazyBoys" value={formData.lazyBoys} onIncrement={handleIncrement} onDecrement={handleDecrement} onChange={handleInputChange} />
                    </div>
                
                    <div className={styles.inputGroup}>
                    <QuoteDetail label="Loveseats" name="loveseats" value={formData.loveseats} onIncrement={handleIncrement} onDecrement={handleDecrement} onChange={handleInputChange} />
                    </div>

                    <div className={styles.inputGroup}>
                    <QuoteDetail label="Sofas" name="sofas" value={formData.sofas} onIncrement={handleIncrement} onDecrement={handleDecrement} onChange={handleInputChange} />
                    </div>
                
                    <div className={styles.inputGroup}>
                    <QuoteDetail label="Sectionals" name="sectionals" value={formData.sectionals} onIncrement={handleIncrement} onDecrement={handleDecrement} onChange={handleInputChange} />
                    </div>
                </div>
            </div>

                <div className={styles.inputGroupDeodor}>
                    <div className={styles.divLabelDeodor}>
                        <label className={styles.label}>Deodorizer:</label>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <label className={styles.checkboxLabel}>
                        <input type="checkbox" id="deodorizeCheckbox" checked={deodorize} onChange={handleCheckboxChange} className={styles.hiddenCheckbox} />
                        <span className={deodorize ? `${styles.customCheckbox} ${styles.checked}` : styles.customCheckbox}></span>
                        </label>
                    </div>
                </div>
        
            {/* Customer Details */}
            <div className={styles.infoContainer}>
                <div className={styles.nameContainer}>
                    <div className={styles.labelContainer}>
                            <label className={styles.label}>First Name</label>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className={styles.input} />
                            {formErrors.firstName && <p className={styles.errorText}>{formErrors.firstName}</p>}
                        </div>
                        <div className={styles.labelContainer}>
                            <label className={styles.label}>Last Name</label>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className={styles.input} />
                            {formErrors.lastName && <p className={styles.errorText}>{formErrors.lastName}</p>}
                </div>
            </div>

                <div className={styles.contactContainer}>
                    <label className={styles.label}>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className={styles.input} />
                    {formErrors.email && <p className={styles.errorText}>{formErrors.email}</p>}
                    <label className={styles.label}>Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className={styles.input} />
                    {formErrors.phone && <p className={styles.errorText}>{formErrors.phone}</p>}
                </div>
            </div>

            {/*<ReCAPTCHA
                sitekey="6LcKKownAAAAAOcsOcsgySX2VMFeKmoFm-xRse5U"
                onChange={handleCaptchaResponseChange}
    />*/}

            {/* Submit button */}
            <button type="submit" className={styles.button}>Get a Quote</button>
            </form>
            </div>
        </div>
        </>
      );
  };

export default Quote;