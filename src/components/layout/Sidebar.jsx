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
    <aside className="w-[270px] bg-white flex flex-col justify-between min-h-screen px-6 py-6 pt-15  ">

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

        <div className="relative mt-95">
          <div className="relative overflow-hidden rounded-[24px] p-6 text-white" style={{ background: 'linear-gradient(135deg,#5D5FEF 0%, #6E63F7 100%)' }}>
            {/* decorative ellipses (radial gradients to match Figma) */}
            <div
            className="absolute rounded-full bg-white/10 z-0"
            style={{
              width: "180px",
              height: "180px",
              top: "-85px",
              right: "-60px",
            }}
          />

            <div
              className="absolute rounded-full bg-white/10 z-0"
              style={{
                width: "220px",
                height: "220px",
                bottom: "-120px",
                left: "-90px",
              }}
            />

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                <img src={Dabanglogo} alt="Dabang Pro" className="h-6 w-6" />
              </div>

              <h3 className="font-semibold text-lg text-white">Dabang Pro</h3>

              <p className="text-sm mt-2 text-white/90 max-w-[180px]">Get access to all features on tetumbas</p>

              <button className="mt-5 rounded-2xl bg-white py-2 px-6 font-semibold text-[#5D5FEF] ">Get Pro</button>
            </div>
          </div>
        </div>

      </div>

    </aside>
  );
};

export default Sidebar;