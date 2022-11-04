import { useEffect, useState } from "react";
import ImageDataDTO from "../../dto/ImageDataDTO";
import Image from "../Image/Image";
import styles from "./Slider.module.scss";

const Slider = ({ data } = { data: [] }) => {
  const [index, setIndex] = useState(0);
  const { length } = data;
  console.log(length);
  useEffect(() => {
    if (index < 0) {
      setIndex(length - 1);
    }
    if (index > length - 1) {
      setIndex(0);
    }
  }, [index, length]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((index) => index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className={styles.slider}>
      <h2 className={styles.title}>Slider</h2>
      <div className={styles["slider-body"]}>
        <div className={styles["slide-bus"]}>
          {data.map((item, i) => {
            item = new ImageDataDTO(item);
            let position = "nextSlide";
            if (i === index) {
              position = "activeSlide";
            }
            if (i === index - 1 || (index === 0 && i === length - 1)) {
              position = "lastSlide";
            }
            return (
              <article key={item.id} className={styles[position]+styles.slide}>
                <div className={styles["image-block"]}>
                  <Image src={item.url} width={600} height={300} />
                </div>
                <h3 className={styles.imageTitle}>{item.title}</h3>
              </article>
            );
          })}
        </div>
        <div className={styles["btn-block"]}>
          <button
            className="btn"
            onClick={() => setIndex((index) => index - 1)}
          >
            Prev
          </button>
          <button
            className="btn"
            onClick={() => setIndex((index) => index + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
