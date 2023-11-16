import { mongooseConnect } from '@/lib/mongoose';
import { Order } from '@/models/Order';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    await mongooseConnect();
    Order.findOneAndUpdate(
      { id: req.body.id },
      { status: req.body.status }
    ).then((result) => {
      res.json({ status: true });
    });
  }
}
