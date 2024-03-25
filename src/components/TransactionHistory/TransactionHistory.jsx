import css from "./transactionHistory.module.css";
import TransactionHistoryItem from "./TransactionHistoryItem";

const TransactionHistory = ({ items = [] }) => {
  const elements = items.map(({ id, ...other }) => (
    <TransactionHistoryItem key={id} {...other} />
  ));

  return (
    <>
      <table className={css.transactionHistory}>
        <thead className={css.tableTitle}>
          <tr className={css.titleRow}>
            <th className={css.titleCell}>Type</th>
            <th className={css.titleCell}>Amount</th>
            <th className={css.titleCell}>Currency</th>
          </tr>
        </thead>
        <tbody className={css.titleBody}>{elements}</tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
