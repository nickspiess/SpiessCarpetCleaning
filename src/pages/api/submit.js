import { insertIntoDatabase } from '../../utils/databaseUtils';

export default async function handler(req, res) {
  console.log('in submit api');
  if (req.method === 'POST') {
    const quoteData = req.body;
    console.log('in if');
    try {
      console.log('in try');
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