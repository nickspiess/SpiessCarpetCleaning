import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/about.module.css";

export default function About() {
  const router = useRouter();


  return (
    <>
      <Head>
        <title>About | Spiess Carpet Cleaning</title>
      </Head>
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
                width="560"
                height="315"
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
              quality are the backbone of this business. Most businesses fail
              With over 30,000+ homes cleaned and a 99% ‘A’ rating on Angie’s
              List, our thousands of satisfied customers call back time and time
              again.
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
                onClick={() => router.push("/quote")}
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
