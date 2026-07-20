import { BellIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import searchIcon from "../../assets/searchIcon.svg";
import usFlag from "../../assets/us.svg";
import mustafa from "../../assets/mustafa.jpg";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-40 bg-[#FFFFFF]" style={{ top: '-18px' }}>
      <div className="mx-auto w-full min-h-[80px] md:h-[120px] flex flex-col md:flex-row items-start md:items-center justify-between px-3 sm:px-4 md:px-8 py-3 md:py-0 gap-4 md:gap-0">

        {/* Dashboard */}
        <h1 className="text-xl sm:text-2xl md:text-[34px] font-bold text-[#1D2559] order-1">Dashboard</h1>

        {/* Right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-8 w-full sm:w-auto order-3 sm:order-2">

        {/* Search */}
        <div className="flex items-center w-full sm:w-[280px] md:w-[513px] h-[44px] sm:h-[52px] md:h-[60px] bg-[#F9FAFB] rounded-[12px] md:rounded-[16px] px-3 sm:px-4 md:px-6 gap-3">
          <img src={searchIcon} alt="search" className="h-4 w-4 md:h-5 md:w-5" />

          <input
            type="text"
            placeholder="Search..."
            className="ml-2 md:ml-3 flex-1 bg-transparent outline-none text-xs sm:text-sm md:text-base placeholder:text-gray-400"
          />

        </div>

        {/* Language - Hide on small mobile */}

        <div className="hidden sm:flex items-center gap-1 md:gap-2 cursor-pointer flex-shrink-0">
          <img src={usFlag} alt="US" className="h-4 w-4 md:h-5 md:w-5 rounded-sm" />

          <span className="font-medium text-[#1D2559] text-xs md:text-base">Eng</span>

          <ChevronDownIcon className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />

        </div>

        {/* Notification */}

        <div className="relative cursor-pointer flex-shrink-0">
          <div className="relative flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-[6px] md:rounded-[8px] bg-[#FFFAF1] border border-[#FFF4E6]">
            <BellIcon className="h-5 w-5 md:h-6 md:w-6 text-[#FFA412]" />
            <span className="absolute -top-1.5 -right-1.5 h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-[#F43F5E] shadow-sm"></span>
          </div>
        </div>

        {/* Profile */}

        <div className="flex items-center gap-2 md:gap-3 cursor-pointer flex-shrink-0">
          <img src={mustafa} alt="profile" className="w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl object-cover" />

          <div className="hidden md:block">
            <h3 className="font-semibold text-[#1D2559] text-sm">Musfiq</h3>
            <p className="text-xs text-gray-400">Admin</p>
          </div>

          <ChevronDownIcon className="w-3 h-3 md:w-4 md:h-4 text-gray-500 hidden md:block" />
        </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;