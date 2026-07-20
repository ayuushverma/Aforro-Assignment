import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SidebarItem from "./SidebarItem";
import Dabanglogo from "../../assets/dabanglogo.png";
import DashboardIcon from "../icons/DashboardIcon";
import leaderboardImg from "../../assets/leaderboard.png";
import orderImg from "../../assets/order.png";
import productImg from "../../assets/product.png";
import salereportImg from "../../assets/salereport.png";
import messageImg from "../../assets/message.png";
import settingImg from "../../assets/setting.png";
import logoutImg from "../../assets/logout.png";
import buyhere from "../../assets/buyhere.png";

const menus = [
  { name: "Dashboard", path: "/", icon: DashboardIcon },
  { name: "Leaderboard", path: "/leaderboard", icon: leaderboardImg },
  { name: "Orders", path: "/orders", icon: orderImg },
  { name: "Products", path: "/products", icon: productImg },
  { name: "Sales Report", path: "/sales-report", icon: salereportImg },
  { name: "Messages", path: "/messages", icon: messageImg },
  { name: "Settings", path: "/settings", icon: settingImg },
  { name: "Sign Out", path: "/logout", icon: logoutImg },
];

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMobileSidebar = () => setIsMobileOpen(false);

  const sidebarContent = (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <div className="flex items-center gap-2">
          <img src={Dabanglogo} alt="Dabang Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold text-[#1D2559]">Dabang</h1>
        </div>
      </div>

      <div className="space-y-2 pt-3">

        {menus.map((menu) => (
          <SidebarItem key={menu.name} item={menu} onClick={closeMobileSidebar} />
        ))}

      </div>

      <div className="relative lg:top-20 flex justify-center bg-white" >
        <img src={buyhere} alt="Buy Here" className="w-[40%] lg:w-full h-[40%] lg:h-auto mt-8 rounded-lg" />
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        aria-label="Open sidebar"
        onClick={() => setIsMobileOpen(true)}
        className="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#1D2559] shadow-lg ring-1 ring-gray-200 lg:hidden"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      {isMobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          onClick={closeMobileSidebar}
          className="fixed inset-0 z-50 bg-black/35 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-[60] flex h-screen w-[270px] max-w-[85vw] bg-white flex-col justify-between px-4 sm:px-6 py-6 pt-15 shadow-2xl transition-transform duration-300 lg:static lg:z-auto lg:flex lg:h-auto lg:w-[270px] lg:max-w-none lg:min-h-screen lg:self-stretch lg:translate-x-0 lg:shadow-none ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={closeMobileSidebar}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-[#1D2559] hover:bg-[#f4f6fa] lg:hidden"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;
