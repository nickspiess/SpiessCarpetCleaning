import styles from '../styles/FourthLanding.module.css'
import styless from '../styles/ThirdLanding.module.css'
import Link from 'next/link';

const FourthLanding = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        
        <div className={styles.aboutLanding}>
        <header className={styles.fourthHeader}>
        <h2 className={styles.head}><strong>Experts in Carpet, Upholstery, and Air Duct Cleaning</strong></h2>
      </header>
      <div className={styles.specialsVideoContainer}>
      <h3 className={styles.aboutAboveSpecial}>Check Out Our Most Recent Specials:</h3>

          <iframe className={styles.specialsiFrame} width="100%" height="500" src="https://www.youtube.com/embed/03yWrky_bHg?si=W58yQRQ4dmMxyk3N" 
            title="Spiess Carpet Cleaning Holiday Specials" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
          <div className={styles.upperContainer}>
          <div className={styles.aboutVid}>
            <h3 className={styles.aboutAboveVid}>Hear this Message from Our Founder:</h3>
            <div className={styles.aboutVidBody}>
              <iframe className={styles.aboutResponsiveIframe} width="85%" height="315" src="https://www.youtube.com/embed/RRZq3E61kFY" 
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
              <Link className={styles.landingButtonPrimary} href='/contact'>
                <button className={styles.landingButtonPrimaryButton}><strong>Schedule Today</strong></button>
              </Link>
            </div>
        </article>
        </div>
        <div className={styless.lowestContainer}>
                <div className={styless["review-container"]}>
                    <header className={styles.reviewHead}>See What Our Customers Are Saying:</header>
                    <div className={styless.containerTwo}>
                      <div className={styles.containerDos}>
                    <div className="elfsight-app-d014ef4b-1230-4e83-b2ae-ec10f15fe6f0" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default FourthLanding;
