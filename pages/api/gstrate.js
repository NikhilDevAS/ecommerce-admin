import { Rate } from '@/models/Commission';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { gstRate } = req.body;
    const data = await Rate.findOne();
    if (data) {
      await Rate.updateOne({ _id: data._id }, { gstRate });
    } else {
      await Rate.create({ gstRate });
    }

    res.json({ ok: true });
  }
  if (req.method === 'GET') {
    const data = await Rate.find();
    if (data) {
      res.json(data);
    }
  }
}
