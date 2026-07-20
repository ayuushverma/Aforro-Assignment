import SalesGraph from "../../assets/sales-territory-map.png";
const CountryMap = () => {
  return (
    <div className="bg-white rounded-lg sm:rounded-2xl shadow-sm h-auto md:h-[360px] min-h-[210px] md:min-h-[350px] p-4 sm:p-6 overflow-hidden">
      <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
        Sales Mapping
      </h2>
      <img
        src={SalesGraph}
        alt="Map"
        className="mx-auto h-[150px] w-full object-contain sm:h-[190px] md:h-full md:scale-x-125 md:scale-y-180 md:mt-15"
      />
    </div>
  );
};

export default CountryMap;
