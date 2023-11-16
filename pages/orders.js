import Layout from '@/components/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { withSwal } from 'react-sweetalert2';

function Orders({ swal }) {
  const [orders, setOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState('');
  const [showDropmenu, setShowDropmenu] = useState(false);
  useEffect(() => {
    fetchOrders();
  }, []);

  function fetchOrders() {
    axios.get('/api/orders').then((response) => {
      setOrders(response.data);
    });
  }

  function showDropMenuList(id) {
    setSelectedOrderId(id);
    if (id === selectedOrderId) {
      setShowDropmenu(!showDropmenu);
    } else {
      setShowDropmenu(true);
    }
  }

  function changeOrderStatus(status, id) {
    swal
      .fire({
        title: `Are You Sure?`,
        text: `Do You Want To Change Order Status of Order Id "${id}" to "${status}" ?`,
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Yes, Change!',
        reverseButtons: true,
        confirmButtonColor: '#d55',
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const response = await axios.put('/api/updateorder', {
            id,
            status,
          });

          if (response.data.status) {
            fetchOrders();
          }
        }
      });
  }
  return (
    <Layout>
      <h1>Orders</h1>
      <div className="overflow-auto">
        <table className="basic w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Order_id</th>
              <th>Recipient</th>
              <th>Products</th>
              <th>amount</th>
              <th>payment_method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders?.length > 0 &&
              orders.map((order) => {
                return (
                  <>
                    <tr className="border border-gray-200">
                      <td className="">
                        {new Date(order.createdAt).toLocaleString()}
                      </td>
                      <td className="text-center">{order.id}</td>
                      <td className="">
                        {order.userId?.name} <br /> {order.userId?.email}
                      </td>
                      <td>
                        {order.products &&
                          order.products.map((product) => {
                            return (
                              <div
                                className="flex items-center border border-gray-400 mb-1"
                                key={product._id}
                              >
                                <span className="font-bold p-2 text-[7px]">
                                  X
                                </span>
                                {product.title} {'=> Qty:'} {product.quantity}{' '}
                                {'=> Price:'} &nbsp;
                                <b>${product.quantity * product.price}</b>
                                <br />
                              </div>
                            );
                          })}
                      </td>
                      <td className="text-center">${order.netamount}</td>
                      <td className="text-center">{order.paymentType}</td>
                      <td className="text-center">
                        {order.status === 'Delivered' ? (
                          <button
                            type="button"
                            className="py-2 px-4 rounded-md bg-green-600 text-white"
                          >
                            Delivered
                          </button>
                        ) : order.status === 'Rejected' ||
                          order.status === 'Cancelled' ? (
                          <button
                            type="button"
                            className="py-2 px-4 rounded-md bg-red-600 text-white"
                          >
                            Rejected
                          </button>
                        ) : (
                          <div class="relative inline-block text-left">
                            <div>
                              <button
                                onClick={() => showDropMenuList(order.id)}
                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                id="menu-button"
                                aria-expanded="true"
                                aria-haspopup="true"
                              >
                                {order.status}
                                <svg
                                  class="-mr-1 h-5 w-5 text-gray-400"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>

                            <div
                              className={
                                showDropmenu && selectedOrderId === order.id
                                  ? 'absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                                  : 'absolute hidden right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                              }
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="menu-button"
                              tabindex="-1"
                            >
                              <div className="py-1" role="none">
                                {order.status === 'Placed' && (
                                  <button
                                    className="text-gray-700 block px-4 py-2 text-sm cursor-pointer mb-2 shadow-md bg-green-200 rounded-md w-full"
                                    onClick={() =>
                                      changeOrderStatus('Packed', order.id)
                                    }
                                  >
                                    Packed
                                  </button>
                                )}
                                {order.status === 'Packed' && (
                                  <button
                                    onClick={() =>
                                      changeOrderStatus('Shipped', order.id)
                                    }
                                    className="text-gray-700 block px-4 py-2 text-sm cursor-pointer mb-2 shadow-md bg-blue-200 rounded-md w-full"
                                  >
                                    Shipped
                                  </button>
                                )}
                                {order.status === 'Shipped' && (
                                  <button
                                    onClick={() =>
                                      changeOrderStatus('Delivered', order.id)
                                    }
                                    className="text-gray-700 block px-4 py-2 text-sm cursor-pointer mb-2 shadow-md bg-green-600 rounded-md w-full"
                                  >
                                    Delivered
                                  </button>
                                )}
                                {order.status !== 'Delivered' &&
                                  order.status !== 'Shipped' && (
                                    <button
                                      onClick={() =>
                                        changeOrderStatus('Rejected', order.id)
                                      }
                                      className="text-gray-700 block px-4 py-2 text-sm cursor-pointer mb-2 shadow-md bg-red-200 rounded-md w-full"
                                    >
                                      Rejected
                                    </button>
                                  )}
                              </div>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>

      {/* <pre>{JSON.stringify(orders, null, 4)}</pre> */}
    </Layout>
  );
}

export default withSwal(({ swal }, ref) => <Orders swal={swal} />);
