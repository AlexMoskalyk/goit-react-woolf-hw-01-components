import React from 'react';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>type</th>
          <th>amount</th>
          <th>currency</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
