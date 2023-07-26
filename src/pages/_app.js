import '@component/styles/globals.css';
import Navbar from './Nav';
import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import Script from 'next/script';
import { useEffect, useRef } from "react";

export default function App({ Component, pageProps }) {


  useEffect(() => {
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
