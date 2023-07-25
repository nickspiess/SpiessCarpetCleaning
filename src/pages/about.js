import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/about.module.css";
import StructuredData from 'src/pages/StructuredData';

export default function About() {

  const structuredData =  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "About Spiess Carpet Cleaning",
    "url": "https://www.spiesscarpet.com/about",
    "description": "Learn about Spiess Carpet Cleaning, a family-based local company providing high-quality carpet cleaning services since 1972.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "301 Quentin Ave N",
        "addressLocality": "Lakeland",
        "addressRegion": "MN",
        "postalCode": "55043",
        "addressCountry": "US",
    },
    "telephone": "+1-651-472-2736",
    "openingHours": "Mo-Fr 07:00-17:00",
    "url": "https://www.spiesscarpet.com/about",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.spiesscarpet.com/about"
    },
};


  const router = useRouter();


  return (
    <>
      <Head>
        <title>About | Spiess Carpet Cleaning</title>
        <meta name="description" content="Learn about Spiess Carpet Cleaning, a family-based local company providing high-quality carpet cleaning services since 1972." />
        <meta name="keywords" content="carpet cleaning, professional cleaners, Twin Cities, trusted service" />
        <meta property="og:title" content="About | Spiess Carpet Cleaning" />
        <meta property="og:description" content="Learn about Spiess Carpet Cleaning, a family-based local company providing high-quality carpet cleaning services since 1972." />
        <meta property="og:image" content="https://www.spiesscarpet.com/public/images/logo.png" />
        <meta property="og:url" content="https://www.spiesscarpet.com/about" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About | Spiess Carpet Cleaning" />
        <meta name="twitter:description" content="Learn about Spiess Carpet Cleaning, a family-based local company providing high-quality carpet cleaning services since 1972." />
        <meta name="twitter:image" content="https://www.spiesscarpet.com/public/images/logo.png" />
      </Head>
      
      <StructuredData data={structuredData} />
      <div className={styles.landing}>
        <header className={styles.head}>
          <div className={styles.skyline}>
            <h1 className={styles.picHead}>
              <strong>The Twin Cities #1 Carpet Cleaner</strong>
            </h1>
          </div>
        </header>
        <div className={styles.aboutTop}>
          <article className={styles.missionStatement}>
            <h2 className={styles.missionHeader}>
              <strong>Our Mission at Spiess Carpet Cleaning</strong>
            </h2>
            <p className={styles.mission}>
              Since 1972, Spiess Carpet Cleaning's passion is Service, Honesty & Integrity.<br/><br />
              We provide the greatest experience for our customers, along with the highest quality of work
              that remains unmatched from anyone in the industry.<br/><br />We are a family-based, local company that
              has revolutionized the industry with an innovative approach that keeps our thousands of customers
              pleased and always coming back.
            </p>
          </article>
          <div className={styles.vid}>
            <div className={styles.videoHead}>
              <h4 className={styles.belowVid}>
                <strong>A Message from our Founder:</strong>
              </h4>
            </div>
            <div className={styles.vidBody}>
              <iframe
                className={styles.responsiveIframe}
                width="650"
                height="305"
                src="https://www.youtube.com/embed/RRZq3E61kFY"
                title="About Spiess Carpet Cleaning"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className={styles.aboutBottom}>
          <article className={styles.founderInfo}>
            <h2 className={styles.founderHeader}>
              <strong>The History of Spiess Carpet Cleaning</strong>
            </h2>
            <p className={styles.history}>
              Owner, Jeff Spiess, started in the industry in 1972 working with
              his dad. After other side jobs and businesses, Jeff started Spiess
              Carpet Cleaning in 1990.
              <br />
              <br />
              At Spiess Carpet Cleaning, honesty, integrity, and
              quality are the backbone of this business. With over 30,000+ homes 
              cleaned and a 99% ‘A’ rating on Angie’s List, our thousands of satisfied 
              customers call back time and time again.
              <br />
              <br />
              Jeff makes sure our team is always professional,
              courteous, and respectful while in our customers’ homes.
              At Spiess Carpet Cleaning, success starts from the first moment
              we make contact. Give us a call and you will see
              why being successful is easy when it's done right.
            </p>
          </article>
          <div className={styles.buttonHolder}>
              <button
                onClick={() => router.push("/contact")}
                className={`${styles.butt}`}
                kind="primary"
              >
                <strong>Schedule Your Cleaning Today!</strong>
              </button>
          </div>
        </div>
      </div>
    </>
  );
}
