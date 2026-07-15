import {
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between">

      {/* Dashboard */}
      <h1 className="text-[34px] font-bold text-[#1D2559]">
        Dashboard
      </h1>

      {/* Right */}
      <div className="flex items-center gap-8">

        {/* Search */}
        <div className="flex items-center w-[380px] h-[52px] bg-[#F7F8FC] rounded-2xl px-5">

          <MagnifyingGlassIcon className="w-5 h-5 text-[#5D5FEF]" />

          <input
            type="text"
            placeholder="Search here..."
            className="ml-3 flex-1 bg-transparent outline-none text-sm placeholder:text-gray-400"
          />

        </div>

        {/* Language */}

        <div className="flex items-center gap-2 cursor-pointer">

          <span className="text-xl">🇺🇸</span>

          <span className="font-medium text-[#1D2559]">
            Eng (US)
          </span>

          <ChevronDownIcon className="w-4 h-4 text-gray-500" />

        </div>

        {/* Notification */}

        <div className="relative cursor-pointer">

          <BellIcon className="w-6 h-6 text-[#FFB648]" />

          <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500"></span>

        </div>

        {/* Profile */}

        <div className="flex items-center gap-3 cursor-pointer">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
            className="w-12 h-12 rounded-xl object-cover"
          />

          <div>

            <h3 className="font-semibold text-[#1D2559]">
              Musfiq
            </h3>

            <p className="text-sm text-gray-400">
              Admin
            </p>

          </div>

          <ChevronDownIcon className="w-4 h-4 text-gray-500" />

        </div>

      </div>

    </header>
  );
};

export default Navbar;