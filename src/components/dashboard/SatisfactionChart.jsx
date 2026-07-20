import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const satisfactionData = [
  { month: "Jan", lastMonth: 3004, thisMonth: 4504 },
  { month: "Feb", lastMonth: 3100, thisMonth: 4200 },
  { month: "Mar", lastMonth: 2900, thisMonth: 4300 },
  { month: "Apr", lastMonth: 3200, thisMonth: 4600 },
  { month: "May", lastMonth: 3300, thisMonth: 4700 },
  { month: "Jun", lastMonth: 3250, thisMonth: 4800 },
];

const SatisfactionChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 h-[360px] min-h-[350px] flex flex-col">

      <h2 className="font-semibold text-lg mb-4">
        Customer Satisfaction
      </h2>

      <div className="h-[210px] min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={satisfactionData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="lastMonthGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity={0.28} />
                <stop offset="100%" stopColor="#2563EB" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="thisMonthGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22C55E" stopOpacity={0.28} />
                <stop offset="100%" stopColor="#22C55E" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#E5E7EB" opacity={0.5} />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#64748B" }} axisLine={false} tickLine={false} />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Area
              type="monotone"
              dataKey="lastMonth"
              stroke="#2563EB"
              strokeWidth={3}
              fill="url(#lastMonthGradient)"
              dot={{ r: 4, fill: "#2563EB" }}
              activeDot={{ r: 6 }}
            />
            <Area
              type="monotone"
              dataKey="thisMonth"
              stroke="#22C55E"
              strokeWidth={3}
              fill="url(#thisMonthGradient)"
              dot={{ r: 4, fill: "#22C55E" }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-3 w-3 rounded-full bg-[#2563EB]" />
          <div>
            <p className="text-sm text-slate-500">Last Month</p>
            <p className="text-lg font-semibold text-slate-900">$3,004</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex h-3 w-3 rounded-full bg-[#22C55E]" />
          <div>
            <p className="text-sm text-slate-500">This Month</p>
            <p className="text-lg font-semibold text-slate-900">$4,504</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SatisfactionChart;