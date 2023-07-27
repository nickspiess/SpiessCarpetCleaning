import { insertIntoDatabase } from '../../utils/databaseUtils';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const quoteData = req.body;

    try {

        // Function to send email using SendGrid API
const emailSent = async (quoteData) => {
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

    // Send email using SendGrid API
      //const emailSent = await sendEmail(quoteData);

      // Insert data into the database
      await insertIntoDatabase(quoteData);

      if (emailSent) {
        res.status(200).json({ success: true });
      } else {
        res.status(500).json({ error: 'Email sending failed.' });
      }
    } catch (error) {
      console.error('Error handling quote submission:', error);
      res.status(500).json({ error: 'Something went wrong.' });
    }
  } else {
    res.status(405).end();
  }
}