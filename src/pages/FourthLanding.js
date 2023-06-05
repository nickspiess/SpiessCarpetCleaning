import styles from '../styles/FourthLanding.module.css'
import Link from 'next/link';

const FourthLanding = () => {
  return (
    <>
      <header className={styles.fourthHeader}>
        <h2 className={styles.head}><strong>Experts in Carpet, Upholstery, and Air Duct Cleaning</strong></h2>
      </header>
      <div className={styles.aboutLanding}>
        <div className={styles.aboutVid}>
          <h3 className={styles.aboutAboveVid}>Hear this Message from Our Founder:</h3>
          <div className={styles.aboutVidBody}>
            <iframe className={styles.aboutResponsiveIframe} width="100%" height="315" src="https://www.youtube.com/embed/RRZq3E61kFY" 
              title="About Spiess Carpet Cleaning" frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
              picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
        <article className={styles.fourthContainer}>
          <p className={styles.aboutInfo}>
            For efficient and reliable cleaning services, choose Spiess Carpet Cleaning.
            As the most experienced carpet cleaner in the Twin Cities Metro area, our services are
            fully bonded and insured and come with a 100% money-back guarantee.
            We offer chemical-free solutions and use the best equipment in the industry.
          </p>
          <div className={styles.buttonContainer}>
            <Link className={styles.landingButtonPrimary} href='/quote'>
              <button className={styles.landingButtonPrimaryButton}><strong>Get a Free Quote</strong></button>
            </Link>
            <Link className={styles.landingButtonSecondary} href='/contact'>
              <button className={styles.landingButtonSecondaryButton}><strong>Contact Us</strong></button>z
            </Link>
          </div>
        </article>
      </div>
    </>
  )
}

export default FourthLanding;
