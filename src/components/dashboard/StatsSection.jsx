import StatCard from "./StatCard";
import { statsData } from "../../data/statsData";

const StatsSection = () => {
  return (
    <section className="mt-8">

      <div className="flex justify-between items-center mb-5">

        <div>

          <h2 className="text-2xl font-bold">
            Today's Sales
          </h2>

          <p className="text-gray-500">
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