const { PotentialCustomers } = require("../config/database/db");

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

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: email,
        firstName: firstName,
        lastName: lastName,
        roomCount: rooms,
        stepCount: steps,
        chairCount: chairs,
        loveseatCount: loveseats,
        couchCount: couches,
        totalPrice: totalPrice,
        quoteNumber: quoteNumber,
        subject: "Your Quote from Spiess Carpet!",
        message:
          "Here is your quote for " +
          rooms +
          " rooms, " +
          steps +
          " flights of steps, " +
          chairs +
          " chairs, " +
          loveseats +
          " loveseats, and " +
          couches +
          " couches.",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    console.log("API response status:", res.status);
    console.log("API response body:", await res.text());

    if (res.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

// Function to insert data into the database
const insertDataIntoDatabase = async (quoteData) => {
  try {
    // Use Sequelize's create() method to insert data into the table
    const result = await PotentialCustomers.create(quoteData);
    console.log("Data inserted into the database successfully:", result.toJSON());
    return true;
  } catch (error) {
    console.error("Database insertion error:", error);
    return false;
  }
};

module.exports = {
  sendEmail,
  insertDataIntoDatabase,
};