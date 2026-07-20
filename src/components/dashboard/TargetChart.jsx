import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { BsBag, BsStar } from "react-icons/bs";
import { revenueData } from "../../data/chartData";

const TargetChart = () => {
  return (
    <div className="bg-white rounded-lg sm:rounded-2xl shadow-sm h-auto md:h-[360px] min-h-[250px] md:min-h-[350px] p-3 sm:p-6 flex flex-col">
      <h2 className="text-sm sm:text-lg font-semibold mb-3 sm:mb-5">Target vs Reality</h2>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barCategoryGap="18%" barGap={6}>
            <CartesianGrid vertical={false} stroke="#E5E7EB" opacity={0.6} />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#64748B" }}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#64748B" }}
              domain={[0, 'dataMax + 2000']}
            />
            <Tooltip formatter={(value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)} cursor={{ fill: "rgba(15, 23, 42, 0.04)" }} />
            <Bar dataKey="online" fill="#10B981" radius={[6, 6, 0, 0]} barSize={10} />
            <Bar dataKey="offline" fill="#FBBF24" radius={[6, 6, 0, 0]} barSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 sm:mt-4 grid grid-cols-1 gap-2 sm:gap-3 md:grid-cols-2">
        <div className="flex items-center gap-2 sm:gap-3 rounded-lg sm:rounded-2xl border border-slate-200 bg-slate-50 px-3 sm:px-4 py-2 sm:py-3">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-2xl bg-emerald-100 text-emerald-700 flex-shrink-0">
            <BsBag className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Reality Sales</p>
            <p className="text-base sm:text-lg font-semibold text-slate-900">8.823</p>
            <p className="text-xs text-slate-400">Global</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 rounded-lg sm:rounded-2xl border border-slate-200 bg-slate-50 px-3 sm:px-4 py-2 sm:py-3">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-2xl bg-amber-100 text-amber-700 flex-shrink-0">
            <BsStar className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Target Sales</p>
            <p className="text-base sm:text-lg font-semibold text-slate-900">12.122</p>
            <p className="text-xs text-slate-400">Commercial</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetChart;