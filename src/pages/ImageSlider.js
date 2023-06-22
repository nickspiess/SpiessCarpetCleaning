import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/carousel.module.css";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "/images/angie_2012.jpeg",
    "/images/angie_2013.jpeg",
    "/images/angie_2014.jpeg",
    "/images/angie_2015.jpeg",
    //"/images/angie_2016.jpeg",
    "/images/angie_2017.jpeg",
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
