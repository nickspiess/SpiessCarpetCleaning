import Swal from "sweetalert2";
const { PotentialCustomers } = require('../config/database/db');



// Function to send email using SendGrid API
const sendEmail = async (quoteData) => {
    try {
      const {
        email,
        firstName,
        lastName,
        rooms,
        steps,
        chairs,
        loveseats,
        couches,
        totalPrice,
        quoteNumber,
      } = quoteData;
  
      const message = `Here is your quote for ${rooms} rooms, ${steps} flights of steps, ${chairs} chairs, ${loveseats} loveseats, and ${couches} couches.`;
  
      const res = await fetch('../pages/api/sendgrid', {
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          roomCount: rooms,
          stepCount: steps,
          chairCount: chairs,
          loveseatCount: loveseats,
          couchCount: couches,
          totalPrice,
          quoteNumber,
          subject: 'Your Quote from Spiess Carpet!',
          message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
  
      console.log('API response status:', res.status);
      console.log('API response body:', await res.text());
  
      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        });
        return true;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops, something went wrong',
          text: await res.text(),
        });
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

// Function to insert data into the database
const insertIntoDatabase = async (quoteData) => {
  try {
    // Use Sequelize's create() method to insert data into the table
    const result = await PotentialCustomers.create(quoteData);
    console.log('Data inserted into the database successfully:', result.toJSON());
    return true;
  } catch (error) {
    console.error('Database insertion error:', error);
    return false;
  }
};
  
  module.exports = {
    sendEmail,
    insertIntoDatabase,
  };