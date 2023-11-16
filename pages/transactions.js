import Layout from '@/components/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  function fetchTransactions() {
    axios.get('/api/transactions').then((result) => {
      setTransactions(result.data);
    });
  }
  return (
    <Layout>
      <h1>Paypal Transaction History</h1>
      <table className="basic">
        <thead>
          <tr>
            <th>Payer_Name</th>
            <th>email</th>
            <th>merchant_id</th>
            <th>created_time</th>
            <th>updated_time</th>
            <th>txn_id</th>
            <th>currency_code</th>
            <th>amount</th>
            <th>status</th>
            <th>order_id</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map((transaction) => {
              return (
                <tr>
                  <td>{transaction.name}</td>
                  <td>{transaction.email}</td>
                  <td>{transaction.merchant_id}</td>
                  <td>{transaction.time}</td>
                  <td>{transaction.updatedTime}</td>
                  <td>{transaction.txn_id}</td>
                  <td>{transaction.currency_code}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.status}</td>
                  <td>{transaction.order_id}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {/* <pre>{JSON.stringify(transactions, null, 4)}</pre> */}
    </Layout>
  );
}
