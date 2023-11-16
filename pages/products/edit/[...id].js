import Layout from '@/components/Layout';
import ProductForum from '@/components/ProductForum';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function EditProduct() {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get('/api/products?id=' + id).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);

  return (
    <Layout>
      <h1>Edit Product</h1>
      {productInfo && <ProductForum {...productInfo} />}
    </Layout>
  );
}