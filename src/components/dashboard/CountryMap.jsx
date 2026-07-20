import SalesGraph from "../../assets/sales-territory-map.png";
const CountryMap = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm h-[360px] min-h-[350px] p-6 overflow-hidden">
      <h2 className="text-lg font-semibold mb-4">
        Sales Mapping by Country
      </h2>
      <img
        src={SalesGraph}
        alt="Map"
        className="w-full h-full object-contain scale-y-180 scale-x-125 mt-15"
      />
    </div>
  );
};

export default CountryMap;