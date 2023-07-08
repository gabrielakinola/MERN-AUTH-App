import styles from "./Radio.module.css";
const Radio = () => {
  return (
    <label class={styles.radio}>
      <input className={styles.radioItem} type="radio" />
    </label>
  );
};

export default Radio;
