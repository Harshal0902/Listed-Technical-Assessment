import { PieChart, Pie, Cell } from "recharts";
export default function PiChart({ data }) {
  const colors = ["#98D89E", "#F6DC7D", "#EE8484"];

  return (
    <PieChart width={134} height={134}>
      <Pie data={data} dataKey="value" outerRadius={65}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
