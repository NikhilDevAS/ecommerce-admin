import { mongooseConnect } from '@/lib/mongoose';
import { Transaction } from '@/models/Transaction';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    await mongooseConnect();
    res.json(await Transaction.find().sort({ _id: -1 }));
  }
}
