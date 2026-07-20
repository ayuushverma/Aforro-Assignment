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
  return (
    <aside className="hidden lg:flex w-full lg:w-[270px] bg-white flex-col justify-between min-h-screen px-4 sm:px-6 py-6 pt-15">

      <div>
        <div className="flex items-center gap-2 mb-8">
          <div className="flex items-center gap-2">
            <img src={Dabanglogo} alt="Dabang Logo" className="w-10 h-10" />
            <h1 className="text-xl font-bold text-[#1D2559]">Dabang</h1>
          </div>
        </div>

        <div className="space-y-2 pt-3">

          {menus.map((menu) => (
            <SidebarItem key={menu.name} item={menu} />
          ))}

        </div>

        <div className="relative top-20" >
          <img src={buyhere} alt="Buy Here" className="w-full h-auto mt-8 rounded-lg" />
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;