import '@component/styles/globals.css';
import Navbar from './Nav';
import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import Script from 'next/script';
import { useEffect, useRef } from "react";

// Import the Sequelize configuration and model definition
import { sequelize } from '../config/database/db';

// Set a flag to track if the migration has been performed
let migrationPerformed = false;

export default function App({ Component, pageProps }) {

  useEffect(() => {
    // Check if the migration has already been performed
  //  if (!migrationPerformed) {
  //     //Perform the migration to create the table if it doesn't exist
  //    sequelize.sync()
  //      .then(() => {
  //        console.log('Database is ready.');
  //        // Mark the migration as performed
  //        migrationPerformed = true;
  //      })
  //      .catch((error) => {
  //        console.error('Error occurred during database synchronization:', error);
  //        // Handle the error or exit the application
  //      });
  //  }
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer />
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
