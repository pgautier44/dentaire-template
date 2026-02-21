import { useState } from "react";
import styles from "./ImageSlider.module.css";

export default function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className={styles.slider}>
      <img
        src={images[index]}
        alt="Cabinet"
        className={styles.image}
      />

      <button className={`${styles.arrow} ${styles.left}`} onClick={prev}>
        ‹
      </button>

      <button className={`${styles.arrow} ${styles.right}`} onClick={next}>
        ›
      </button>
    </div>
  );
}
