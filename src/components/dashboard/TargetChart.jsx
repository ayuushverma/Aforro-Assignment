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

      <div className="flex flex-row w-full">
  <div className="mt-3 sm:mt-4 flex flex-col lg:flex-row gap-2 sm:gap-3 w-full">
    
    <div className="flex flex-1 min-w-0 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 flex-shrink-0">
        <BsBag className="h-4 w-4" />
      </div>

      <div className="min-w-0">
        <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate">
          Reality Sales
        </p>
        <p className="text-sm sm:text-base font-semibold text-slate-900 truncate">
          8.823
        </p>
        <p className="text-[10px] text-slate-400 truncate">
          Global
        </p>
      </div>
    </div>

    <div className="flex flex-1 min-w-0 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700 flex-shrink-0">
        <BsStar className="h-4 w-4" />
      </div>

      <div className="min-w-0">
        <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate">
          Target Sales
        </p>
        <p className="text-sm sm:text-base font-semibold text-slate-900 truncate">
          12.122
        </p>
        <p className="text-[10px] text-slate-400 truncate">
          Commercial
        </p>
      </div>
    </div>

  </div>
</div>
    </div>
  );
};

export default TargetChart;