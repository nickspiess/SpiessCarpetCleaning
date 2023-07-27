import { insertDataIntoDatabase } from '../../utils/databaseUtils';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const quoteData = req.body;
      const result = await insertDataIntoDatabase(quoteData);
      if (result) {
        res.status(200).json({ message: 'Data submitted successfully.' });
      } else {
        res.status(500).json({ error: 'Failed to submit data.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to submit data.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}