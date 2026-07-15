import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { satisfactionData } from "../../data/chartData";

const COLORS = ["#6366F1", "#E5E7EB"];

const SatisfactionChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">

      <h2 className="font-semibold text-lg mb-4">
        Customer Satisfaction
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={satisfactionData}
            dataKey="value"
            innerRadius={60}
            outerRadius={90}
          >
            {satisfactionData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default SatisfactionChart;