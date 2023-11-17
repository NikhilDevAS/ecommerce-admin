import { Product } from '@/models/Product';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { currentProduct, newProductId } = req.body;
    if (currentProduct) {
      await Product.updateOne(
        { _id: currentProduct },
        { featuredProduct: false },
        { upsert: true }
      ).exec();
    }

    const data = await Product.updateOne(
      { _id: newProductId },
      { featuredProduct: true },
      { upsert: true }
    );
    if (data) {
      res.json(data);
    }
  }

  if (req.method === 'GET') {
    res.json(await Product.findOne({ featuredProduct: true }));
  }
}
