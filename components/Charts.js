import RadarGraph from './chartproperties/radarGraph';
import AreaChartSpace from './chartproperties/areaChart';
import Chart from './chartproperties/barGraph';
import PieGraph from './chartproperties/pieChart';
import LineGraph from './chartproperties/lineGraph';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Charts() {
  [
    {
      month: '2022',
      prev_month_collection: 0,
      cur_month_collection: 0,
    },
    {
      year: '2023',
      prev_month_collection: 560.52,
      cur_month_collection: 741.96,
    },
  ];
  const data1 = [
    {
      year: '2016',
      Iphone: 4000,
      Samsung: 2400,
    },
    {
      year: '2017',
      Iphone: 3000,
      Samsung: 1398,
    },
    {
      year: '2018',
      Iphone: 2000,
      Samsung: 9800,
    },
    {
      year: '2019',
      Iphone: 2780,
      Samsung: 3908,
    },
    {
      year: '2020',
      Iphone: 1890,
      Samsung: 4800,
    },
    {
      year: '2021',
      Iphone: 2390,
      Samsung: 3800,
    },
    {
      year: '2022',
      Iphone: 3490,
      Samsung: 4300,
    },
  ];

  const data2 = [
    {
      name: 'Twitter',
      value: 200400,
    },
    {
      name: 'Facebook',
      value: 205000,
    },
    {
      name: 'Instagram',
      value: 23400,
    },
    {
      name: 'Snapchat',
      value: 20000,
    },
    {
      name: 'LinkedIn',
      value: 29078,
    },
    {
      name: 'YouTube',
      value: 18900,
    },
  ];

  const data3 = [
    {
      day: 'Monday',
      amount: 500,
    },
    {
      day: 'Tuesday',
      amount: 300,
    },
    {
      day: 'Wednesday',
      amount: 240,
    },
    {
      day: 'Thursday',
      amount: 230,
    },
    {
      day: 'Friday',
      amount: 150,
    },
    {
      day: 'Saturday',
      amount: 300,
    },
  ];

  const data4 = [
    {
      month: 'Jan',
      paid: 5000,
      organic: 4230,
    },
    {
      month: 'Feb',
      paid: 7800,
      organic: 2900,
    },
    {
      month: 'Mar',
      paid: 4700,
      organic: 2400,
    },
    {
      month: 'Apr',
      paid: 9000,
      organic: 2600,
    },
    {
      month: 'May',
      paid: 7000,
      organic: 3210,
    },
  ];

  const { status } = useSession();
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [profit, setProfit] = useState();
  const [barGraphData, setBarGraphData] = useState([]);
  const [respond, setRespond] = useState([]);
  useEffect(() => {
    if (status === 'authenticated') {
      fetchDashboardData();
    }
  }, []);

  function fetchDashboardData() {
    axios.get('/api/dashboard').then((response) => {
      console.log(response.data);
      if (response.data) {
        setTotalProducts(response.data.totalProducts);
        setTotalSales(response.data.totalSales);
        setTotalUsers(response.data.totalUsers);
        setProfit(response.data.proft);
        setBarGraphData(response.data.barGraphData);
        setRespond(response.data.data);
      }
    });
  }

  return (
    <section>
      <pre>{JSON.stringify(respond, null, 4)}</pre>
      <div className="w-full">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="count_chart">
            <h2 className="mb-5 text-md">Total Sales</h2>
            <p className="mb-s text-lg font-bold">{totalSales}</p>
          </div>
          <div className="count_chart">
            <h2 className="mb-5 text-md">Total Profit</h2>
            <p className="mb-s text-lg font-bold">${profit}</p>
          </div>
          <div className="count_chart">
            <h2 className="mb-5 text-md">Total Customers</h2>
            <p className="mb-s text-lg font-bold">{totalUsers}</p>
          </div>
          <div className="count_chart">
            <h2 className="mb-5 text-md">Total Products</h2>
            <p className="mb-s text-lg font-bold">{totalProducts}</p>
          </div>
        </div>

        <div className="w-full mt-10 py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="py-10 shadow-md border rounded-md">
              {data1 && <AreaChartSpace data={data1} />}
            </div>

            <div className="py-10 shadow-md border rounded-md">
              {barGraphData.length > 0 && <Chart data={barGraphData} />}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
            <div className="py-10 shadow-md border rounded-md">
              {/* <Chart data={data} /> */}
              {data3 && <RadarGraph data={data3} />}
            </div>
            {/* <div className="py-10 shadow-md border rounded-md">
              {data2 && <PieGraph data={data2} />}
            </div> */}

            {/* <div className="py-10 shadow-md border rounded-md">
              {data4 && <LineGraph data={data4} />}
            </div> */}
          </div>
        </div>

        {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
      </div>
    </section>
  );
}
