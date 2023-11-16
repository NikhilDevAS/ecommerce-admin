import Layout from '@/components/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetchCustomers();
  }, []);

  function fetchCustomers() {
    axios.get('/api/customers').then((response) => {
      setCustomers(response.data);
    });
  }
  return (
    <Layout>
      <h1>Customers</h1>
      <table className="basic">
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {customers &&
            customers.map((customer) => {
              return (
                <tr>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {/* <pre>{JSON.stringify(customers, null, 4)}</pre> */}
    </Layout>
  );
}
