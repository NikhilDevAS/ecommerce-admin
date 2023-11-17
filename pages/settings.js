import Layout from '@/components/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Settings() {
  const [products, setProducts] = useState([]);
  const [featuredProductId, setFeaturedProductId] = useState('');
  const [featuredProduct, setFeaturedProduct] = useState({});
  const [gstRate, setGstRate] = useState(0);
  const [currentGstRate, setCurrentGstRate] = useState(0);
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await axios.get('/api/products');
      if (response.data) {
        setProducts(response.data);
      }
      const featuredProduct = await axios.get('/api/addfeaturedproduct');
      if (featuredProduct.data) {
        setFeaturedProduct(featuredProduct.data);
        setFeaturedProductId(featuredProduct.data._id);
      }

      const result = await axios.get('/api/gstrate');
      if (result.data) {
        setCurrentGstRate(result.data[0].gstRate);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function addFeaturedProduct() {
    if (featuredProductId) {
      const response = await axios.put('/api/addfeaturedproduct', {
        currentProduct: featuredProduct ? featuredProduct._id : '',
        newProductId: featuredProductId,
      });
      if (response.data) {
        getProducts();
      }
    }
  }

  async function addGstRate() {
    try {
      if (gstRate) {
        const response = await axios.post('/api/gstrate', { gstRate });
        if (response.data) {
          getProducts();
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Layout>
      <h1>Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="rounded-md shadow-md p-5">
          <h1>Add GST Rate</h1>
          <div className="mt-5">
            <label>GST Rate (%)</label>
            <input
              type="number"
              placeholder="Enter Gst Rate (%)"
              value={gstRate}
              onChange={(e) => setGstRate(e.target.value)}
            />
            <button
              className="py-2 px-5 bg-black text-sm text-white font-bold w-1/2"
              onClick={() => addGstRate()}
            >
              Save
            </button>
            <div className="mt-5">
              <p className="font-bold uppercase text-gray-400">
                Current Gst Rate
              </p>
              <div className="mt-3">
                <p>{currentGstRate}%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-md shadow-md p-5">
          <h1>Add / Change Featured Product</h1>
          <div className="mt-5">
            <label>Select Product</label>
            <select
              value={featuredProductId}
              onChange={(e) => setFeaturedProductId(e.target.value)}
            >
              {products &&
                products.map((product) => {
                  return (
                    <option key={product._id} value={product._id}>
                      {product.title}
                    </option>
                  );
                })}
            </select>
            <button
              className="py-2 px-5 bg-black text-sm text-white font-bold w-1/2"
              onClick={() => addFeaturedProduct()}
            >
              Save
            </button>
          </div>
          <div className="mt-5">
            <p className="font-bold uppercase text-gray-400">
              Current Featured Product
            </p>
            <div className="mt-3">
              <p>{featuredProduct && featuredProduct.title}</p>
            </div>
          </div>
        </div>
        <div className="rounded-md shadow-md p-5">
          <h1>Change Password</h1>
          <div className="mt-5">
            <label>Current Password</label>
            <input type="password" placeholder="*******" />
            <label>New Password</label>
            <input type="password" placeholder="*******" />
            <label>Confirm Password</label>
            <input type="password" placeholder="*******" />
            <button className="py-2 px-5 bg-black text-sm text-white font-bold w-1/2">
              Save
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
