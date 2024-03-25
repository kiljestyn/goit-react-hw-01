import css from "./transactionHistory.module.css";

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr className="{css.line}">
      <td className={css.cell}>{type}</td>{" "}
      <td className={css.cell}>{amount}</td>
      <td className={css.cell}>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;
