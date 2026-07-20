import Navbar from "../components/layout/Navbar";

import StatsSection from "../components/dashboard/StatsSection";
import VisitorChart from "../components/dashboard/VisitorChart";
import RevenueChart from "../components/dashboard/RevenueChart";
import SatisfactionChart from "../components/dashboard/SatisfactionChart";

import TargetChart from "../components/dashboard/TargetChart";
import ProductTable from "../components/dashboard/ProductTable";
import CountryMap from "../components/dashboard/CountryMap";
import VolumeChart from "../components/dashboard/VolumeChart";

// import UserTable from "../components/users/UserTable";

const Dashboard = () => {
  return (
    <main className="flex-1 bg-gray-50 min-h-screen overflow-y-auto">

      {/* Navbar */}
      <Navbar />  

      {/* Row 1 - Stats and Visitors */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 px-3 sm:px-4 md:px-6 lg:px-4 py-4 md:py-0">

        <div className="md:col-span-2 lg:col-span-8 my-2 bg-white rounded-lg sm:rounded-2xl shadow-sm p-4 sm:p-5 h-auto md:h-[360px] min-h-[300px] md:min-h-[350px]">
          <StatsSection />
        </div>

        <div className="md:col-span-2 lg:col-span-4 h-auto md:h-[360px] min-h-[300px] md:min-h-[350px] mt-2 md:mt-3">
          <VisitorChart />
        </div>

      </section>

      {/* Row 2 - Revenue, Satisfaction, Target */}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 mt-4 md:mt-6 px-3 sm:px-4 md:px-6 lg:px-4">

        <div className="md:col-span-2 lg:col-span-6">
          <RevenueChart />
        </div>

        <div className="md:col-span-1 lg:col-span-3">
          <SatisfactionChart />
        </div>

        <div className="md:col-span-1 lg:col-span-3">
          <TargetChart />
        </div>

      </section>

      {/* Row 3 - Products, Map, Volume */}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 mt-4 md:mt-6 px-3 sm:px-4 md:px-6 lg:px-4 pb-4">

        <div className="md:col-span-2 lg:col-span-6">
          <ProductTable />
        </div>

        <div className="md:col-span-1 lg:col-span-3">
          <CountryMap />
        </div>

        <div className="md:col-span-1 lg:col-span-3">
          <VolumeChart />
        </div>

      </section>

    </main>
  );
};

export default Dashboard;