import Swal from "sweetalert2";
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

        // Function to send email using SendGrid API
        const sendEmail = async (quoteData) => {
          try {
            const res = await fetch('/api/sendgrid', {
              body: JSON.stringify({
                email: quoteData.email,
                firstName: quoteData.firstName,
                lastName: quoteData.lastName,
                roomCount: quoteData.rooms,
                stepCount: quoteData.steps,
                chairCount: quoteData.chairs,
                loveseatCount: quoteData.loveseats,
                couchCount: quoteData.couches,
                totalPrice: quoteData.totalPrice,
                quoteNumber: quoteData.quoteNumber,
                subject: 'Your Quote from Spiess Carpet!',
                message: `Here is your quote for ${quoteData.rooms} rooms, ${quoteData.steps} flights of steps, ${quoteData.chairs} chairs, ${quoteData.loveseats} loveseats, and ${quoteData.couches} couches.`,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
              method: 'POST',
            });
      
            console.log('API response status:', res.status);
            console.log('API response body:', await res.text());
      
            if (res.ok) {
              Swal.fire({
                icon: 'success',
                title: 'Message Sent Successfully',
              });
              return true;
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops, something went wrong',
                text: await res.text(),
              });
              return false;
            }
          } catch (error) {
            console.log(error);
            return false;
          }
        };
      
        // Function to insert data into the database
        const insertIntoDatabase = async (quoteData) => {
          try {
            await PotentialCustomers.create(quoteData);
            console.log('Data inserted into the database successfully.');
            return true;
          } catch (error) {
            console.log('Database insertion error:', error);
            return false;
          }
        };

//Export the Sequelize instance and the PotentialCustomers model
module.exports = {
  sequelize,
  PotentialCustomers,
  sendEmail,
  insertIntoDatabase,
};
