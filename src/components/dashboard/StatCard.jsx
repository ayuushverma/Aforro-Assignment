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
      className={`${bg} rounded-lg sm:rounded-2xl p-3 sm:p-4 md:p-5 transition-all duration-300 hover:shadow-lg cursor-pointer`}
    >
      {/* Icon */}
      <div className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${iconBg}`}>
        {typeof Icon === 'string' ? (
          <img src={Icon} alt={title} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain" />
        ) : (
          <Icon className={color} size={24} />
        )}
      </div>

      {/* Value */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#151D48] mt-3 sm:mt-4 md:mt-5">
        {value}
      </h2>

      {/* Title */}
      <p className="text-[#425166] font-medium mt-1 sm:mt-2 text-xs sm:text-sm">
        {title}
      </p>

      {/* Percentage */}
      <p className="text-[#4079ED] text-xs sm:text-sm mt-1 sm:mt-2 font-medium">
        {percentage} from yesterday
      </p>
    </div>
  );
};

export default StatCard;