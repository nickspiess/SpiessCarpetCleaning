import { sendEmail, insertIntoDatabase } from '../../utils/database'; // Import the functions to handle database operations

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      firstName,
      lastName,
      email,
      phone,
      rooms,
      steps,
      chairs,
      loveseats,
      couches,
    } = req.body;

    // Check if the required fields are filled out
    if (!firstName || !lastName || !email || !phone) {
      res.status(400).json({ error: 'Please fill out all required fields.' });
      return;
    }

    // Calculate total price and quote number
    const [totalPrice, quoteNumber] = quoteCalculator(
      rooms,
      steps,
      chairs,
      loveseats,
      couches
    );
    console.log('TOTAL PRICEEE : ' + totalPrice);

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

      // Return response based on whether data was inserted successfully or not
      if (dataInserted) {
        res.status(200).json({ message: 'Quote saved successfully.' });
      } else {
        res.status(500).json({ error: 'Failed to save quote data.' });
      }
    } else {
      res.status(500).json({ error: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
