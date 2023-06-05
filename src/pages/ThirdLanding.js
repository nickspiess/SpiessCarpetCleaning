import ImageSlider from "./ImageSlider";
import styles from "../styles/ThirdLanding.module.css";
import Angie2013 from "../../public/images/angie_2013.jpeg"
import Angie2014 from "../../public/images/angie_2014.jpeg"
import Angie2015 from "../../public/images/angie_2015.jpeg"
import Angie2016 from "../../public/images/angie_2016.jpeg"
import Angie2017 from "../../public/images/angie_2017.jpeg"


const ThirdLanding = () => {
  const images = [    
      require({Angie2013}).default,    
      require({Angie2014}).default,    
      require({Angie2015}).default,    
      require({Angie2016}).default,    
      require({Angie2017}).default,  ];

  return (
    <>
        <div className={styles["landing-container"]}>
            <div className={styles["top-cont"]}>
                <div className={styles["head"]}>
                    <header className={styles["awarded-header"]}>
                        <h2><strong>The Most Awarded Carpet Cleaner in the Midwest</strong></h2>
                    </header>
                </div>
            </div>
            <div className={styles['lower-container']}>
                <div className={styles["angie-container"]}>
                    <header className={styles["angie-head"]}>
                        <strong>Multi-Time Angie's List Super Service Award</strong>
                    </header>
                <div className={styles["carousel-container"]}>
                    <ImageSlider className={styles.image} images={images} />
                </div>
                </div>
                <div className={styles["review-container"]}>
                    <div className={styles.containerTwo}>
                    <div className="elfsight-app-d014ef4b-1230-4e83-b2ae-ec10f15fe6f0"></div>
                    </div>
                </div>
            </div>
      </div>
    </>
  );
};

export default ThirdLanding;
