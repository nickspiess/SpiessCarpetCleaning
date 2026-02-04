import { insertDataIntoDatabase } from '../../utils/databaseUtils';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const quoteData = req.body;

  try {
    const success = await insertDataIntoDatabase(quoteData);

    if (success) {
      return res.status(200).json({ message: 'Data saved successfully' });
    } else {
      return res.status(500).json({ error: 'Failed to save data' });
    }
  } catch (error) {
    console.error('Error handling submission:', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
