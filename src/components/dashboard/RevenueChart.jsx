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
    <div className="bg-white rounded-lg sm:rounded-2xl shadow-sm h-auto md:h-[360px] min-h-[250px] md:min-h-[350px] flex flex-col p-3 sm:p-5">

      <h2 className="font-semibold text-sm sm:text-lg mb-3 sm:mb-4">
        Total Revenue
      </h2>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={revenueData} margin={{ top: 0, right: 10, left: -20, bottom: 0 }}>
          <XAxis dataKey="day" tick={{ fontSize: 10, fill: '#6b7280' }} />
          <YAxis tickFormatter={(value) => `${value / 1000}k`} tick={{ fontSize: 10, fill: '#6b7280' }} />
          <Tooltip formatter={(value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)} />
          <Bar dataKey="online" fill="#2563EB" radius={[6, 6, 0, 0]} barSize={12} />
          <Bar dataKey="offline" fill="#10B981" radius={[6, 6, 0, 0]} barSize={12} />
          <Legend verticalAlign="bottom" height={30} iconType="square" wrapperStyle={{ left: 0, right: 'auto', textAlign: 'left', fontSize: '12px' }} formatter={(value) => <span style={{ fontSize: '11px', color: '#475569' }}>{value}</span>} />
        </BarChart>
      </ResponsiveContainer>
      </div>

    </div>
  );
};

export default RevenueChart;