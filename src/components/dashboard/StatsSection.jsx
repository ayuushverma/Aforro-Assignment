import StatCard from "./StatCard";
import { statsData } from "../../data/statsData";

const StatsSection = () => {
  return (
    <section className="mt-2 mx-1">

      <div className="flex justify-between items-center mb-5">

        <div>

          <h2 className="text-[20px] font-bold font-xl leading-8 text-[#05004E]">
            Today's Sales
          </h2>

          <p className="text-[16px] font-normal leading-[30px] text-[#737791]">
            Sales Summary
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

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