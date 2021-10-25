import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

function TransactionHistory(props) {
  return (
    <table className={s.transaction_history}>
      <thead>
        <tr className={s.heading_list}>
          <th className={s.heading}>Type</th>
          <th className={s.heading}>Amount</th>
          <th className={s.heading}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {props.items.map((item) => {
          return (
            <tr key={item.id}>
              <td className={s.item}>{item.type}</td>
              <td className={s.item}>{item.amount}</td>
              <td className={s.item}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
