const products = [
  {
    id: "01",
    name: "Home Decor Range",
    percent: 45,
    barColor: "bg-sky-500",
    badgeBg: "bg-sky-50",
    badgeBorder: "border-sky-200",
    badgeText: "text-sky-600",
    label: "45%",
  },
  {
    id: "02",
    name: "Disney Princess Pink Bag 18'",
    percent: 29,
    barColor: "bg-emerald-500",
    badgeBg: "bg-emerald-50",
    badgeBorder: "border-emerald-200",
    badgeText: "text-emerald-600",
    label: "29%",
  },
  {
    id: "03",
    name: "Bathroom Essentials",
    percent: 18,
    barColor: "bg-violet-500",
    badgeBg: "bg-violet-50",
    badgeBorder: "border-violet-200",
    badgeText: "text-violet-600",
    label: "18%",
  },
  {
    id: "04",
    name: "Apple Smartwatches",
    percent: 25,
    barColor: "bg-amber-400",
    badgeBg: "bg-amber-50",
    badgeBorder: "border-amber-200",
    badgeText: "text-amber-600",
    label: "25%",
  },
];

const ProductTable = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm h-[360px] min-h-[350px] p-4 pb-6">
      <h2 className="text-lg font-semibold mb-6">Top Products</h2>

      <div className="mb-4 hidden grid-cols-[40px_1fr_1.5fr_auto] gap-4 text-sm font-semibold text-slate-400 md:grid">
        <span>#</span>
        <span>Name</span>
        <span>Popularity</span>
        <span className="text-right">Sales</span>
      </div>

      <div className="space-y-0">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`grid grid-cols-[40px_1fr_1.5fr_auto] items-center gap-4 rounded-3xl px-4 py-4 ${index < products.length - 1 ? "border-b border-slate-100" : ""}`}
          >
            <div className="text-sm font-semibold text-slate-400">{product.id}</div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-slate-900">{product.name}</p>
            </div>
            <div className="min-w-0">
              <div className={`h-2.5 w-full overflow-hidden rounded-full ${product.badgeBg}`}>
                <div className={`${product.barColor} h-full rounded-full`} style={{ width: `${product.percent}%` }} />
              </div>
            </div>
            <div className={`rounded-full border px-3 py-1 text-sm font-semibold ${product.badgeText} ${product.badgeBorder} ${product.badgeBg}`}>
              {product.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTable;