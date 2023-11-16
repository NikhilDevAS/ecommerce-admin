import { mongooseConnect } from '@/lib/mongoose';
import { User } from '@/models/User';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    await mongooseConnect();
    res.json(await User.find({}).sort({ createdAt: -1 }));
  }
}
