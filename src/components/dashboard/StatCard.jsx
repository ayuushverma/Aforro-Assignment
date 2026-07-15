const StatCard = ({
  title,
  value,
  percentage,
  icon: Icon,
  bg,
  iconBg,
  color,
}) => {
  return (
    <div
      className={`${bg} rounded-2xl p-5 transition-all duration-300 hover:shadow-lg cursor-pointer`}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBg}`}
      >
        <Icon className={color} size={20} />
      </div>

      {/* Value */}
      <h2 className="text-3xl font-bold text-[#151D48] mt-5">
        {value}
      </h2>

      {/* Title */}
      <p className="text-[#425166] font-medium mt-2">
        {title}
      </p>

      {/* Percentage */}
      <p className="text-[#4079ED] text-sm mt-2 font-medium">
        {percentage} from yesterday
      </p>
    </div>
  );
};

export default StatCard;