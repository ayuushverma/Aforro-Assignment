import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { revenueData } from "../../data/chartData";

const RevenueChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 h-[360px] min-h-[350px] flex flex-col">

      <h2 className="font-semibold text-lg mb-4">
        Total Revenue
      </h2>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueData} margin={{ top: 0, right: 0, left: -10, bottom: 0 }}>
          <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#6b7280' }} />
          <YAxis tickFormatter={(value) => `${value / 1000}k`} tick={{ fontSize: 12, fill: '#6b7280' }} />
          <Tooltip formatter={(value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)} />
          <Bar dataKey="online" fill="#2563EB" radius={[8, 8, 0, 0]} barSize={18} />
          <Bar dataKey="offline" fill="#10B981" radius={[8, 8, 0, 0]} barSize={18} />
          <Legend verticalAlign="bottom" height={36} iconType="square" wrapperStyle={{ left: 0, right: 'auto', textAlign: 'left' }} formatter={(value) => <span style={{ fontSize: '12px', color: '#475569' }}>{value}</span>} />
        </BarChart>
      </ResponsiveContainer>
      </div>

    </div>
  );
};

export default RevenueChart;