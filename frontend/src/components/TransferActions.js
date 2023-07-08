import styles from "./TransferAction.module.css";

const TransferActions = () => {
  return (
    <div className={styles.transferActions}>
      <button type="button" className={styles.transfer}>
        Transfer
      </button>
      <button type="button" className={styles.sellButton} disabled={true}>
        Sell
      </button>
    </div>
  );
};

export default TransferActions;
