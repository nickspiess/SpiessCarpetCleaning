
const { Sequelize } = require('sequelize');

//Initialize Sequelize and set up the database connection
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

//Define the PotentialCustomers model (this will be used for database migration)
const PotentialCustomers = sequelize.define('potential_customers', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quoteNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// Perform the migration to create the table if it doesn't exist
sequelize
  .sync()
  .then(() => {
    console.log('Database is ready.');
  })
  .catch((error) => {
    console.error('Error occurred during database synchronization:', error);
  });

//Export the Sequelize instance and the PotentialCustomers model
module.exports = {
  sequelize,
  PotentialCustomers,
};
