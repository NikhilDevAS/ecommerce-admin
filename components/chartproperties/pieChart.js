import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const colors = [
  '#8884d8',
  '#FA8072',
  '#AF69EE',
  '#3DED97',
  '#3AC7EB',
  '#F9A603',
];
export default function PieGraph({ data }) {
  console.log({ data, colors });
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={730} height={250}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          fill="#8884d8"
          label
        >
          {data &&
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
