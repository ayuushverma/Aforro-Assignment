import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { visitorData } from "../../data/chartData";

const VisitorChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">

      <h2 className="font-semibold text-lg mb-4">
        Visitor Insights
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={visitorData}>
          <XAxis dataKey="month" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="visitors"
            stroke="#6366F1"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};

export default VisitorChart;