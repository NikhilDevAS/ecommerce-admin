import { mongooseConnect } from '@/lib/mongoose';
import { Order } from '@/models/Order';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    await mongooseConnect();

    // const data = await Order.find();

    // console.log(JSON.stringify(data, null, 4));

    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const barGraphData = [];

    const result = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: sixMonthsAgo, $lt: new Date() },
          paymentType: { $in: ['COD', 'Paypal'] },
        },
      },
      {
        $group: {
          _id: {
            month: { $month: '$createdAt' }, // Extract the month from the createdAt field
            paymentType: '$paymentType',
          },
          count: { $sum: 1 },
        },
      },
      {
        $group: {
          _id: '$_id.month',
          COD: {
            $sum: {
              $cond: {
                if: { $eq: ['$_id.paymentType', 'COD'] },
                then: '$count',
                else: 0,
              },
            },
          },
          paypal: {
            $sum: {
              $cond: {
                if: { $eq: ['$_id.paymentType', 'Paypal'] },
                then: '$count',
                else: 0,
              },
            },
          },
        },
      },
      {
        $sort: { _id: 1 }, // Sort the results by month
      },
    ]).exec();
    if (result) {
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      result.map((data) => {
        barGraphData.push({
          month: months[data._id - 1],
          cash_on_delivery: data.COD,
          paypal: data.paypal,
        });
      });
    }
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const dailyData = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: sevenDaysAgo, $lte: new Date() },
        },
      },
      {
        $group: {
          _id: { $dayOfWeek: '$createdAt' }, // Group by the day of the week (1-7)
          dayName: { $first: { $dayOfWeek: '$createdAt' } }, // Extract the day of the week
          totalAmount: { $sum: '$netamount' },
        },
      },
    ]);

    const radarGraphData = [];

    if (dailyData) {
      const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];

      dailyData.map((data) => {
        radarGraphData.push({
          day: daysOfWeek[data._id - 1],
          amount: data.totalAmount,
        });
      });
    }

    const today = new Date();
    const sevenDaysAgo1 = new Date(today);
    sevenDaysAgo1.setDate(today.getDate() - 6); // Go back 6 more days to cover a total of 7 days

    // Define an array of day names
    const dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const dailyCategoryData = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: sevenDaysAgo1, $lte: today },
        },
      },
      {
        $project: {
          day: {
            $dateToString: { format: '%Y-%m-%d', date: '$createdAt' },
          },
          category: '$products.category.name',
        },
      },
      {
        $unwind: '$category',
      },
      {
        $group : {
          _id : '$day',
          category : 
        }
      }
    ]);

    if (dailyCategoryData) {
      console.log(JSON.stringify(dailyCategoryData, null, 4));
    }
  }
}
