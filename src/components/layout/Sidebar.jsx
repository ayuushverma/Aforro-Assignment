import {
  Squares2X2Icon,
  TrophyIcon,
  ShoppingBagIcon,
  CubeIcon,
  DocumentChartBarIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import SidebarItem from "./SidebarItem";

const menus = [
  { name: "Dashboard", path: "/", icon: Squares2X2Icon },
  { name: "Leaderboard", path: "/leaderboard", icon: TrophyIcon },
  { name: "Orders", path: "/orders", icon: ShoppingBagIcon },
  { name: "Products", path: "/products", icon: CubeIcon },
  { name: "Sales Report", path: "/sales-report", icon: DocumentChartBarIcon },
  { name: "Messages", path: "/messages", icon: ChatBubbleLeftRightIcon },
  { name: "Settings", path: "/settings", icon: Cog6ToothIcon },
  { name: "Sign Out", path: "/logout", icon: ArrowLeftOnRectangleIcon },
];

const Sidebar = () => {
  return (
    <aside className="w-[250px] bg-white border-r border-gray-200 flex flex-col justify-between min-h-screen px-5 py-6">

      <div>

        <h1 className="text-3xl font-bold text-indigo-600 mb-10">
          Dabang
        </h1>

        <div className="space-y-2">

          {menus.map((menu) => (
            <SidebarItem key={menu.name} item={menu} />
          ))}

        </div>

        <div className="bg-[#5D5FEF] rounded-3xl p-5 text-white mt-6">

          <h3 className="font-semibold text-lg">
            Dabang Pro
          </h3>

          <p className="text-sm mt-2 opacity-80">
            Get access to all premium features.
          </p>

          <button className="mt-5 w-full bg-white text-indigo-600 rounded-xl py-2 font-semibold">
            Get Pro
          </button>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;