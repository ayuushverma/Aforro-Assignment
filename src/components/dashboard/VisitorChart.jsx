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
    <div className="bg-white rounded-lg sm:rounded-2xl shadow-sm p-3 sm:p-5 h-auto md:h-[360px] min-h-[250px] md:min-h-[350px] flex flex-col">

      <h2 className="font-semibold text-sm sm:text-lg mb-3 sm:mb-4">
        Visitor Insights
      </h2>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={visitorData} margin={{ top: 0, right: 10, left: -20, bottom: 0 }}>
            <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#6b7280' }} />
            <YAxis ticks={[0, 100, 200, 300]} domain={[0, 300]} tick={{ fontSize: 10, fill: '#6b7280' }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="loyalCustomers"
              stroke="#A700FF"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="newCustomers"
              stroke="#EF4444"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="uniqueCustomers"
              stroke="#22C55E"
              strokeWidth={2}
              dot={false}
            />
            <Legend
              verticalAlign="bottom"
              height={24}
              iconType="square"
              wrapperStyle={{ left: 0, right: 'auto', textAlign: 'left', marginTop: 8, fontSize: '11px' }}
              formatter={(value) => <span style={{ fontSize: '10px', color: '#475569' }}>{value}</span>}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default VisitorChart;