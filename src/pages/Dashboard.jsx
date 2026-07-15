import Navbar from "../components/layout/Navbar";

import StatsSection from "../components/dashboard/StatsSection";
import VisitorChart from "../components/dashboard/VisitorChart";
import RevenueChart from "../components/dashboard/RevenueChart";
import SatisfactionChart from "../components/dashboard/SatisfactionChart";

import TargetChart from "../components/dashboard/TargetChart";
import ProductTable from "../components/dashboard/ProductTable";
import CountryMap from "../components/dashboard/CountryMap";
import VolumeChart from "../components/dashboard/VolumeChart";

import UserTable from "../components/users/UserTable";

const Dashboard = () => {
  return (
    <main className="flex-1 bg-[#F8F9FD] min-h-screen overflow-y-auto p-8">

      {/* Navbar */}
      <Navbar />

      {/* Row 1 */}
      <section className="grid grid-cols-12 gap-6 mt-6">

        <div className="col-span-8">
          <StatsSection />
        </div>

        <div className="col-span-4">
          <VisitorChart />
        </div>

      </section>

      {/* Row 2 */}

      <section className="grid grid-cols-12 gap-6 mt-6">

        <div className="col-span-6">
          <RevenueChart />
        </div>

        <div className="col-span-3">
          <SatisfactionChart />
        </div>

        <div className="col-span-3">
          <TargetChart />
        </div>

      </section>

      {/* Row 3 */}

      <section className="grid grid-cols-12 gap-6 mt-6">

        <div className="col-span-6">
          <ProductTable />
        </div>

        <div className="col-span-3">
          <CountryMap />
        </div>

        <div className="col-span-3">
          <VolumeChart />
        </div>

      </section>

      {/* Users Table */}

      <section className="mt-6">
        <UserTable />
      </section>

    </main>
  );
};

export default Dashboard;