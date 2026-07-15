import {
  FiGrid,
  FiBarChart2,
  FiShoppingCart,
  FiPackage,
  FiFileText,
  FiMessageCircle,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

export const sidebarItems = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: FiGrid,
  },
  {
    id: 2,
    title: "Leaderboard",
    path: "/leaderboard",
    icon: FiBarChart2,
  },
  {
    id: 3,
    title: "Order",
    path: "/orders",
    icon: FiShoppingCart,
  },
  {
    id: 4,
    title: "Products",
    path: "/products",
    icon: FiPackage,
  },
  {
    id: 5,
    title: "Sales Report",
    path: "/sales-report",
    icon: FiFileText,
  },
  {
    id: 6,
    title: "Messages",
    path: "/messages",
    icon: FiMessageCircle,
  },
  {
    id: 7,
    title: "Settings",
    path: "/settings",
    icon: FiSettings,
  },
  {
    id: 8,
    title: "Sign Out",
    path: "/logout",
    icon: FiLogOut,
  },
];