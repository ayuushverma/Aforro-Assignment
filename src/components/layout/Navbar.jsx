import { BellIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import searchIcon from "../../assets/searchIcon.svg";
import usFlag from "../../assets/us.svg";
import mustafa from "../../assets/mustafa.jpg";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-40 bg-[#FFFFFF]" style={{ top: '-18px' }}>
      <div className="mx-auto max-w-7xl w-full h-[120px] flex items-center justify-between px-8">

        {/* Dashboard */}
        <h1 className="text-[34px] font-bold text-[#1D2559]">Dashboard</h1>

        {/* Right */}
        <div className="flex items-center gap-8">

        {/* Search */}
        <div className="flex items-center w-[513px] h-[60px] bg-[#F9FAFB] rounded-[16px] px-6 gap-3">
          <img src={searchIcon} alt="search" className="h-5 w-5" />

          <input
            type="text"
            placeholder="Search here..."
            className="ml-3 flex-1 bg-transparent outline-none text-sm placeholder:text-gray-400"
          />

        </div>

        {/* Language */}

        <div className="flex items-center gap-2 cursor-pointer">
          <img src={usFlag} alt="US" className="h-5 w-5 rounded-sm" />

          <span className="font-medium text-[#1D2559]">Eng (US)</span>

          <ChevronDownIcon className="w-4 h-4 text-gray-500" />

        </div>

        {/* Notification */}

        <div className="relative cursor-pointer">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#FFFAF1] border border-[#FFF4E6]">
            <BellIcon className="h-6 w-6 text-[#FFA412]" />
            <span className="absolute -top-1.5 -right-1.5 h-2.5 w-2.5 rounded-full bg-[#F43F5E] shadow-sm"></span>
          </div>
        </div>

        {/* Profile */}

        <div className="flex items-center gap-3 cursor-pointer">
          <img src={mustafa} alt="profile" className="w-12 h-12 rounded-xl object-cover" />

          <div>
            <h3 className="font-semibold text-[#1D2559]">Musfiq</h3>
            <p className="text-sm text-gray-400">Admin</p>
          </div>

          <ChevronDownIcon className="w-4 h-4 text-gray-500" />
        </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;