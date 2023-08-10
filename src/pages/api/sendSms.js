const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: "593e868c",
  apiSecret: "x3sAsa8xa1tt261I",
});

const from = "19706011121";

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { firstName, lastName, totalPrice, message, phone } = req.body;
  const to = "+1" + phone; // Ensure the phone number is in the correct format
  const text = `Hi ${firstName} ${lastName}. This is Spiess Carpet Cleaning with your quote. Your total price will be no more than $${totalPrice}. We will be reaching out shortly. Thank you!`;

  vonage.sms.send({ to, from, text })
    .then((resp) => {
      console.log('Message sent successfully');
      console.log(resp);
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      console.log('There was an error sending the messages.');
      console.error(err);
      res.status(500).json({ success: false, error: err });
    });
};
