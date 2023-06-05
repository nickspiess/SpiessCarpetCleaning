import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/carousel.module.scss";
import Angie2013 from "../../public/images/angie_2013.jpeg"
import Angie2014 from "../../public/images/angie_2014.jpeg"
import Angie2015 from "../../public/images/angie_2015.jpeg"
import Angie2016 from "../../public/images/angie_2016.jpeg"
import Angie2017 from "../../public/images/angie_2017.jpeg"

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const images = [
    {Angie2013},
    {Angie2014},
    {Angie2015},
    {Angie2016},
    {Angie2017},
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className={styles.slider}>
      {images.map((image, i) => (
        <div
          key={i}
          className={`${styles["slider-image"]} ${
            index === i ? styles.active : ""
          }`}
        >
          <div className={styles["image-container"]}>
            <Image
              src={image}
              alt={`slider-${i}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
