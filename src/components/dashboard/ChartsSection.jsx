import VisitorChart from "./VisitorChart";
import RevenueChart from "./RevenueChart";
import SatisfactionChart from "./SatisfactionChart";

const ChartsSection = () => {
  return (
    <section className="grid lg:grid-cols-3 gap-6 mt-8">

      <VisitorChart />

      <RevenueChart />

      <SatisfactionChart />

    </section>
  );
};

export default ChartsSection;