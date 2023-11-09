import ImageSlider from "./ImageSlider";
import Image from 'next/image'
import styles from "../styles/ThirdLanding.module.css";
import NextDoor from '../../public/images/NextDoor.jpg';

const ThirdLanding = () => {
  const images = [    
      require("../../public/images/angie_2013.jpeg").default,    
      require("../../public/images/angie_2014.jpeg").default,    
      require("../../public/images/angie_2015.jpeg").default,    
      //require("../../public/images/angie_2016.jpeg").default,    
      require("../../public/images/angie_2017.jpeg").default,  ];

  return (
    <>
        <div className={styles["landing-container"]}>
        <div className={styles["top-cont"]}>
                <div className={styles["head"]}>
                    <header className={styles["awarded-header"]}>
                        <h2 className={styles.headText}><strong>The Most Awarded Carpet Cleaner in the Midwest</strong></h2>
                    </header>
                </div>
            </div>
            <div className={styles['lower-container']}>
                <div className={styles.awardCont}>
                <div className={styles["angie-container"]}>
                    <header className={styles["angie-head"]}>
                        <strong>Multi-Time Angie's List Super Service Award</strong>
                    </header>
                <div className={styles["carousel-container"]}>
                    <ImageSlider className={styles.image} images={images} />
                </div>
                </div>
                <div className={styles.nextDoorContainer}>
                    <header className={styles.nextDoorHead}>NextDoor&trade; Neighborhood Fave</header>
                    <div className={styles.nextDoorImageContainer}>
                    <Image
                        className={styles.doorImg}
                        src={NextDoor} // Path to your image
                        alt="NextDoor image" 
                    />
                    </div>
                </div>
                
                </div>
                
            </div>
      </div>
    </>
  );
};

export default ThirdLanding;
