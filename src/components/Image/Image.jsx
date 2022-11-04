import styles from "./Image.module.scss";

const Image = (
  { src, width, height } = { src: null, width: "100%", height: "100%" }
) => (
  <div
    className={styles.container}
    style={{
      width,
      height,
    }}
  >
    <img src={src} alt="unsplash" />
  </div>
);

export default Image;
