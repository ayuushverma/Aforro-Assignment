import volumeGraph from "../../assets/volume-vs-service.png";
const VolumeChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm h-[340px] p-6">
      <h2 className="text-lg font-semibold mb-4">
        Volume vs Service Level
      </h2>
      <img
        src={volumeGraph}
        alt="Volume"
        className="w-full h-full object-contain"
        />
    </div>
  );
};

export default VolumeChart;