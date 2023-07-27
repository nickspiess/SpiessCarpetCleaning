const { PotentialCustomers } = require("../config/database/db");


// Function to insert data into the database
const insertDataIntoDatabase = async (quoteData) => {
  try {
    // Use Sequelize's create() method to insert data into the table
    const result = await PotentialCustomers.create(quoteData);
    console.log("our result : " + result);
    console.log("our result json : " + result.toJSON());
    console.log("Data inserted into the database successfully:", result.toJSON());
    return true;
  } catch (error) {
    console.error("Database insertion error:", error);
    return false;
  }
};

module.exports = {
  insertDataIntoDatabase,
};