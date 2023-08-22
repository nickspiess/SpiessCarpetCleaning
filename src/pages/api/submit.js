import { insertDataIntoDatabase } from '../../utils/databaseUtils';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const quoteData = req.body;
    try {
      // Insert data into the database
      await insertDataIntoDatabase(quoteData);
    } catch (error) {
      console.error('Error handling quote submission:', error);
      res.status(500).json({ error: 'Something went wrong.' });
    }
  } else {
    res.status(405).end();
  }
}