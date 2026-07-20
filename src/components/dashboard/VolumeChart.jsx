import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const volumeData = [
  { name: "Mon", volume: 195, services: 115 },
  { name: "Tue", volume: 240, services: 145 },
  { name: "Wed", volume: 215, services: 120 },
  { name: "Thu", volume: 185, services: 100 },
  { name: "Fri", volume: 205, services: 125 },
];

const totalVolume = 1135;
const totalServices = 635;

const VolumeChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm h-[360px] min-h-[350px] p-6 flex flex-col">
      <h2 className="text-lg font-semibold mb-4">
        Volume vs Service Level
      </h2>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={volumeData} margin={{ top: 6, right: 0, left: -12, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#E5E7EB" opacity={0.4} horizontal={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
            <Tooltip formatter={(value) => value} cursor={{ fill: 'rgba(15, 23, 42, 0.04)' }} />
            <Bar dataKey="services" stackId="a" fill="#22C55E" radius={[0, 0, 0, 0]} barSize={22} />
            <Bar dataKey="volume" stackId="a" fill="#2563EB" radius={[0, 0, 0, 0]} barSize={22} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#2563EB]" />
            Volume
          </div>
          <div className="w-px h-5 bg-slate-200" />
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
            Services
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Volume</p>
            <p className="text-xl font-semibold text-slate-900">{totalVolume.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Services</p>
            <p className="text-xl font-semibold text-slate-900">{totalServices.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolumeChart;
