import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export default function Linehart({ data }) {
    return (
        <ResponsiveContainer height={250} width="99%">
            <LineChart data={data}>
                <CartesianGrid vertical={false} />
                <XAxis tickLine={false} dataKey="name" />
                <YAxis
                    type="number"
                    domain={[0, 504]}
                    tickCount={6}
                    axisLine={false}
                    tickLine={false}
                    ticks={[0, 100, 200, 300, 400, 500]}
                />
                <Tooltip />
                <Line dot={false} type="monotone" dataKey="Guest" strokeWidth={3} stroke="#E9A0A0" />
                <Line dot={false} type="monotone" dataKey="User" strokeWidth={3} stroke="#9BDD7C" />
            </LineChart>
        </ResponsiveContainer>
    );
}
