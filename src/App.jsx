import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/layout/Sidebar";

import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import SalesReport from "./pages/SalesReport";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sales-report" element={<SalesReport />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;