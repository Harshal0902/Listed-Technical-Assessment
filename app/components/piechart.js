import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function PiChart({ data }) {
  const colors = ["#98D89E", "#F6DC7D", "#EE8484"];

  if (!data) {
    return null; // Return null or a loading indicator if data is undefined
  }

  return (
    <PieChart width={134} height={134}>
      <Tooltip />
      <Pie data={data} dataKey="value" outerRadius={65}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
