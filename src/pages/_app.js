import '@component/styles/globals.css';
import Navbar from './Nav';
import Footer from './Footer';
import Script from 'next/script';

export default function App({ Component, pageProps }) {

  return (
    <>
      <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer />
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}