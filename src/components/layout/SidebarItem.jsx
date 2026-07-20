import { NavLink } from "react-router-dom";

const SidebarItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <NavLink to={item.path} end={item.path === "/"}>
      {({ isActive }) => (
        <div
          className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl transition-all duration-200 ${
            isActive
              ? "bg-[#5D5FEF] text-white shadow-sm"
              : "text-[#6b7280] hover:bg-[#f4f6fa] hover:text-[#1f2a44]"
          }`}
        >
          {typeof Icon === "string" ? (
            // If an active image is provided, prefer it when active; otherwise apply subtle filter
            <img
              src={isActive && item.activeIcon ? item.activeIcon : Icon}
              alt={item.name}
              className={`h-5 w-5 object-contain ${isActive && !item.activeIcon ? "filter invert brightness-0" : ""}`}
            />
          ) : (
            <Icon className={isActive ? "h-5 w-5 text-white" : "h-5 w-5"} />
          )}
          <span>{item.name}</span>
        </div>
      )}
    </NavLink>
  );
};

export default SidebarItem;