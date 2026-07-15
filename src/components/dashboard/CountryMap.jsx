import SalesGraph from "../../assets/sales-territory-map.png";
const CountryMap = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm h-[340px] p-6">
      <h2 className="text-lg font-semibold mb-4">
        Sales Mapping by Country
      </h2>
      <img
        src={SalesGraph}
        alt="Map"
        className="w-full h-full object-contain"
        />
    </div>
  );
};

export default CountryMap;