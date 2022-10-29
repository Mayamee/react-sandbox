import styles from "./Spinner.module.css";

const Spinner = () => (
  <div className={styles.spinner}>
    <div className={styles.spinner_child}>
      <div>
        <div>
          <div />
        </div>
        <div>
          <div />
        </div>
        <div>
          <div />
        </div>
        <div>
          <div />
        </div>
      </div>
    </div>
  </div>
);

export default Spinner;
