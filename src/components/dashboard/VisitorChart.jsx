import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { visitorData } from "../../data/chartData";

const VisitorChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 h-[360px] min-h-[350px] flex flex-col">

      <h2 className="font-semibold text-lg mb-4">
        Visitor Insights
      </h2>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={visitorData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <XAxis dataKey="month" />
            <YAxis ticks={[0, 100, 200, 300]} domain={[0, 300]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="loyalCustomers"
              stroke="#A700FF"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="newCustomers"
              stroke="#EF4444"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="uniqueCustomers"
              stroke="#22C55E"
              strokeWidth={3}
              dot={false}
            />
            <Legend
              verticalAlign="bottom"
              height={24}
              iconType="square"
              wrapperStyle={{ left: 0, right: 'auto', textAlign: 'left', marginTop: 8 }}
              formatter={(value) => <span style={{ fontSize: '12px', color: '#475569' }}>{value}</span>}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default VisitorChart;