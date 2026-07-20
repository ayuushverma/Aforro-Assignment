import newcustomer from "../assets/newcustomer.png";
import totalsaleicon from "../assets/totalsaleicon.png";
import productsold from "../assets/productsold.png";
import totalorder from "../assets/totalorder.png";
export const statsData = [
  {
    id: 1,
    title: "Total Sales",
    value: "$1k",
    percentage: "+8%",
    icon: totalsaleicon,
    bg: "bg-pink-100",
    color: "text-blue-600",
  },
  {
    id: 2,
    title: "Total Order",
    value: "300",
    percentage: "+5%",
    icon: totalorder,
    bg: "bg-[#FFF4DE]",
    color: "text-yellow-600",
  },
  {
    id: 3,
    title: "Product Sold",
    value: "5",
    percentage: "+1.2%",
    icon: productsold,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    id: 4,
    title: "New Customer",
    value: "8",
    percentage: "+0.5%",
    icon: newcustomer,
    bg: "bg-purple-100",
    color: "text-pink-600",
  },
];