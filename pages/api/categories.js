import { mongooseConnect } from '@/lib/mongoose';
import { Category } from '@/models/Category';

export default async function handler(req, res) {
  const { method, body } = req;

  await mongooseConnect();

  if (method === 'GET') {
    res.json(await Category.find().populate('parent'));
  }

  if (method === 'POST') {
    const { name, parentCategory, properties } = body;

    const categoryDoc = await Category.create({
      name,
      parent: parentCategory || undefined,
      properties: properties.map((p) => ({
        name: p.name,
        value: p.value.split(','),
      })),
    });

    res.json(categoryDoc);
  }

  if (method === 'PUT') {
    const { name, parentCategory, properties, _id } = body;

    const categoryDoc = await Category.updateOne(
      { _id },
      {
        name,
        parent: parentCategory || undefined,
        properties: properties.map((p) => ({
          name: p.name,
          value: p.value.split(','),
        })),
      }
    );

    res.json(categoryDoc);
  }

  if (method === 'DELETE') {
    const { _id } = req.query;

    await Category.deleteOne({ _id });

    res.json('ok');
  }
}
