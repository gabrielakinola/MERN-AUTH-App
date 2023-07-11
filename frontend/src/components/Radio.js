import styles from "./Radio.module.css";
const Radio = () => {
  return (
    <label class={styles["radio-btn"]}>
      <input className={styles.radioItem} type="radio" name="list" />{" "}
      <span class={styles.checkmark}></span>
    </label>
  );
};

export default Radio;
