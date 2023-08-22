import styles from "../styles/updatedQuote.module.css";
import { useRef, useState } from "react"; // REVISED
import quoteCalculator from '../js/quoteCalculator'
import Head from 'next/head'
import StructuredData from 'src/pages/StructuredData';
import Swal from "sweetalert2";
import QuoteDetail from './quoteInput';

const Quote = () => {

    const [isCarpetOpen, setCarpetOpen] = useState(true);
    const [isUpholsteryOpen, setUpholsteryOpen] = useState(false);
    const [deodorize, setDeodorize] = useState(false);
    const [formData, setFormData] = useState({
      rooms: 0,
      flightsOfSteps: 0,
      kitchenChairs: 0,
      chairs: 0,
      loveseats: 0,
      lazyBoys: 0,
      sectionals: 0,
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    });
  
    const [formErrors, setFormErrors] = useState({});
  
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;

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
  
    const validateForm = () => {
      let newErrors = {};
  
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "Invalid phone number.";
      }
  
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email address.";
      }
  
      setFormErrors(newErrors);
  
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!validateForm()) {
        return;
      }
      const formDataJSON = JSON.stringify(formData);
      console.log(formDataJSON);
  
      console.log(formData);
    };
  
    return (
        <>
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
                    <QuoteDetail label="Chairs" name="chairs" value={formData.chairs} onIncrement={handleIncrement} onDecrement={handleDecrement} onChange={handleInputChange} />
                    </div>

                    <div className={styles.inputGroup}>
                    <QuoteDetail label="Lazy Boys" name="lazyBoys" value={formData.lazyBoys} onIncrement={handleIncrement} onDecrement={handleDecrement} onChange={handleInputChange} />
                    </div>
                
                    <div className={styles.inputGroup}>
                    <QuoteDetail label="Loveseats" name="loveseats" value={formData.loveseats} onIncrement={handleIncrement} onDecrement={handleDecrement} onChange={handleInputChange} />
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
                    </div>
                    <div className={styles.labelContainer}>
                        <label className={styles.label}>Last Name</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className={styles.input} />
                    </div>
                </div>
                <div className={styles.contactContainer}>

                        <label className={styles.label}>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className={styles.input} />
                        {formErrors.email && <p>{formErrors.email}</p>}
                        <label className={styles.label}>Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className={styles.input} />
                        {formErrors.phone && <p>{formErrors.phone}</p>}
                    </div>
            </div>
        
            {/* Submit button */}
            <button type="submit" className={styles.button}>Get a Quote</button>
            </form>
            </div>
        </div>
        </>
      );
  };

export default Quote;