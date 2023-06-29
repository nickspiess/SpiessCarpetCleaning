import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const PhoneIcon = ({ phoneNumber }) => {
    const handlePhoneClick = () => {
      // Perform phone call action here
      console.log('Calling', phoneNumber);
    };
  
    return (
      <div onClick={handlePhoneClick}>
        <FontAwesomeIcon icon={faPhone} size="lg" />
      </div>
    );
  };

export default PhoneIcon;