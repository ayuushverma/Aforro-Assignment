import targetGraph from "../../assets/target.png";
const TargetChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm h-[340px] p-6">
      <h2 className="text-lg font-semibold mb-4">
        Target
      </h2>
      <img
        src={targetGraph}
        alt="Target Chart"
        className="w-full h-full object-contain"
        />
    </div>
  );
};

export default TargetChart;