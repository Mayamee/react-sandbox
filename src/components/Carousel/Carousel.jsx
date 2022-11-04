import { Children, cloneElement, useEffect, useState } from "react";
import styles from "./Carousel.module.scss";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const PAGE_WIDTH = 600;

const Carousel = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const handleLeftArrowClick = () => {
    setOffset((offset) => offset - 1);
  };
  const handleRightArrowClick = () => {
    setOffset((offset) => offset + 1);
  };
  useEffect(() => {
    if (offset < 0) setOffset(children.length - 1);
    if (offset > children.length - 1) setOffset(0);
  }, [offset, children.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((offset) => offset + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles["main-container"]}
      style={{
        height: 300,
      }}
    >
      <FaChevronCircleLeft
        className={styles["left-arrow"]}
        onClick={handleLeftArrowClick}
      />
      <div
        className={styles["window"]}
        style={{
          width: PAGE_WIDTH,
        }}
      >
        <div
          className={styles["slides"]}
          style={{
            transform: `translateX(${offset * -PAGE_WIDTH}px)`,
          }}
        >
          {Children.map(children, (child) =>
            cloneElement(child, {
              style: {
                height: "100%",
                minWidth: `${PAGE_WIDTH}px`,
                maxWidth: `${PAGE_WIDTH}px`,
              },
            })
          )}
        </div>
      </div>
      <FaChevronCircleRight
        className={styles["right-arrow"]}
        onClick={handleRightArrowClick}
      />
    </div>
  );
};

export default Carousel;
