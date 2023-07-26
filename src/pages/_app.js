import '@component/styles/globals.css';
import Navbar from './Nav';
import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import Script from 'next/script';
import { useEffect, useRef } from "react";
import { isServer } from '../utils/isServer';


// Set a flag to track if the migration has been performed
let migrationPerformed = false;

export default function App({ Component, pageProps }) {

  useEffect(() => {
       // Check if the migration has already been performed
       if (!migrationPerformed && !isServer()) {
        // Make an API call to trigger the database migration
        fetch('/api/database', {
          method: 'POST',
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data.message);
            // Mark the migration as performed
            migrationPerformed = true;
          })
          .catch((error) => {
            console.error('Error occurred during database migration:', error);
            // Handle the error or exit the application
          });
      }
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
