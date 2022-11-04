import styles from "./App.module.scss";
import Carousel from "./components/Carousel/Carousel";
// import Slider from "./components/Slider/Slider";
// import { useImages } from "./http";
import { classesConcat } from "./lib/classNamesConcat";
function App() {
  // const images = useImages(3);
  return (
    <div className={styles.App}>
      <Carousel>
        <div className={classesConcat(styles.item, styles["item-1"])}>
          Item-1
        </div>
        <div className={classesConcat(styles.item, styles["item-2"])}>
          Item-2
        </div>
        <div className={classesConcat(styles.item, styles["item-3"])}>
          Item-3
        </div>
        <div className={classesConcat(styles.item, styles["item-4"])}>
          Item-4
        </div>
      </Carousel>
      <Carousel>
        <div className={classesConcat(styles.item, styles["item-1"])}>
          Item-1
        </div>
        <div className={classesConcat(styles.item, styles["item-2"])}>
          Item-2
        </div>
        <div className={classesConcat(styles.item, styles["item-3"])}>
          Item-3
        </div>
        <div className={classesConcat(styles.item, styles["item-4"])}>
          Item-4
        </div>
      </Carousel>
      {/* <pre>{JSON.stringify(images, null, 2)}</pre> */}
    </div>
  );
}

export default App;
