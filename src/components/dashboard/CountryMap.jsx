import SalesGraph from "../../assets/sales-territory-map.png";
const CountryMap = () => {
  return (
    <div className="bg-white rounded-lg sm:rounded-2xl shadow-sm h-auto md:h-[360px] min-h-[250px] md:min-h-[350px] p-4 sm:p-6 overflow-hidden">
      <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
        Sales Mapping
      </h2>
      <img
        src={SalesGraph}
        alt="Map"
        className="w-full h-auto md:h-full object-contain scale-y-180 scale-x-125 mt-2 md:mt-15"
      />
    </div>
  );
};

export default CountryMap;