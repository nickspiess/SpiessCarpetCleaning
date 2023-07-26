const { Pool } = require('pg');
const { PotentialCustomers } = require('../database/db');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const insertPotentialCustomer = async (data) => {
    try {
      await PotentialCustomers.create({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        quoteNumber: data.quoteNumber,
        totalPrice: data.totalPrice, // Make sure to add totalPrice field in the model
      });
    } catch (error) {
      console.error('Error inserting potential customer:', error);
      throw error;
    }
  };

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = JSON.parse(req.body);
      await insertPotentialCustomer(data);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Unable to insert potential customer data' });
    }
  } else {
    res.status(404).json({ error: 'Not found' });
  }
}
