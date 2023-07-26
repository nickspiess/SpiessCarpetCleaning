// pages/api/database.js

import { sequelize } from '../../config/database/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Perform the migration to create the table if it doesn't exist
    try {
      await sequelize.sync();
      console.log('Database is ready.');
      res.status(200).json({ message: 'Database is ready.' });
    } catch (error) {
      console.error('Error occurred during database synchronization:', error);
      res.status(500).json({ error: 'Database synchronization error.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
