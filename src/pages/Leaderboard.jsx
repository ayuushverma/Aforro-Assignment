import { useMemo, useState } from "react";
import useUsers from "../hooks/useUsers";
import searchIcon from "../assets/searchIcon.svg";

const Leaderboard = () => {
  const { users, loading, error } = useUsers();
  const [query, setQuery] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [sortBy, setSortBy] = useState("name-asc");
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const cities = useMemo(() => {
    const set = new Set(users.map((u) => u.address?.city).filter(Boolean));
    return ["", ...Array.from(set)];
  }, [users]);

  const filtered = useMemo(() => {
    let list = users || [];
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(
        (u) =>
          u.name.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q) ||
          (u.company?.name || "").toLowerCase().includes(q)
      );
    }
    if (cityFilter) {
      list = list.filter((u) => u.address?.city === cityFilter);
    }

    if (sortBy === "name-asc") list = list.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "name-desc") list = list.sort((a, b) => b.name.localeCompare(a.name));
    if (sortBy === "company") list = list.sort((a, b) => (a.company?.name || "").localeCompare(b.company?.name || ""));

    return list;
  }, [users, query, cityFilter, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#1D2559]">Leaderboard</h1>
          <p className="text-sm text-gray-500">Top users and rankings</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center w-[480px] h-[48px] bg-[#F9FAFB] rounded-[12px] px-4 gap-3">
          <img src={searchIcon} alt="search" className="h-5 w-5 text-[#5D5FEF]" />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            type="text"
            placeholder="Search by name, email or company"
            className="ml-3 flex-1 bg-transparent outline-none text-sm placeholder:text-gray-400"
          />
        </div>

        <select
          value={cityFilter}
          onChange={(e) => {
            setCityFilter(e.target.value);
            setPage(1);
          }}
          className="h-[48px] rounded-md border px-3 bg-white"
        >
          {cities.map((c) => (
            <option key={c} value={c}>
              {c || "All cities"}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="h-[48px] rounded-md border px-3 bg-white"
        >
          <option value="name-asc">Name A → Z</option>
          <option value="name-desc">Name Z → A</option>
          <option value="company">Company</option>
        </select>
      </div>

      {/* List / Table */}
      <div className="dashboard-card overflow-hidden">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-sm text-gray-500">
              <th className="text-left px-6 py-4">Name</th>
              <th className="text-left px-6 py-4">Email</th>
              <th className="text-left px-6 py-4">City</th>
              <th className="text-left px-6 py-4">Company</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                  Loading...
                </td>
              </tr>
            )}
            {error && (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-red-500">
                  {error}
                </td>
              </tr>
            )}
            {!loading && paged.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                  No results
                </td>
              </tr>
            )}
            {paged.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#EEF2FF] flex items-center justify-center text-sm font-semibold text-[#23307A]">
                      {u.name.split(" ").map((n) => n[0]).slice(0,2).join("")}
                    </div>
                    <div>
                      <div className="font-medium text-[#1D2559]">{u.name}</div>
                      <div className="text-xs text-gray-400">{u.username}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">{u.email}</td>
                <td className="px-6 py-4">{u.address?.city}</td>
                <td className="px-6 py-4">{u.company?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-500">{filtered.length} results</div>
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-1 rounded-md border"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Prev
          </button>
          <div className="px-3 py-1">{page} / {totalPages}</div>
          <button
            className="px-3 py-1 rounded-md border"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;