import StatCard from "./StatCard";
import { statsData } from "../../data/statsData";

const StatsSection = () => {
  return (
    <section className="mt-2 mx-1">

      <div className="flex justify-between items-center mb-4 sm:mb-5">

        <div>

          <h2 className="text-base sm:text-lg md:text-xl lg:text-[20px] font-bold leading-6 sm:leading-8 text-[#05004E]">
            Today's Sales
          </h2>

          <p className="text-xs sm:text-sm md:text-base lg:text-[16px] font-normal leading-5 sm:leading-[30px] text-[#737791]">
            Sales Summary
          </p>

        </div>

      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5">

        {statsData.map((card) => (
          <StatCard
            key={card.id}
            {...card}
          />
        ))}

      </div>

    </section>
  );
};

export default StatsSection;