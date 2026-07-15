import { NavLink } from "react-router-dom";

const SidebarItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-3 w-full px-4 py-3 rounded-xl transition ${
          isActive ? "bg-indigo-600 text-white" : "text-gray-500 hover:bg-gray-100"
        }`
      }
    >
      <Icon className="w-5 h-5" />
      <span>{item.name}</span>
    </NavLink>
  );
};

export default SidebarItem;