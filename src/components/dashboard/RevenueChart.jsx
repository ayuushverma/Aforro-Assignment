import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { revenueData } from "../../data/chartData";

const RevenueChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">

      <h2 className="font-semibold text-lg mb-4">
        Total Revenue
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={revenueData}>
          <XAxis dataKey="month" />
          <Tooltip />
          <Bar
            dataKey="revenue"
            fill="#8B5CF6"
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default RevenueChart;