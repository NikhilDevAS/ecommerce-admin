import { mongooseConnect } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { User } from '@/models/User';

export default async function handler(req, res) {
  await mongooseConnect();
  await User.find();
  res.json(await Order.find().populate('userId').sort({ createdAt: -1 }));
}
