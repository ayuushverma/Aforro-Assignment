import { useMemo, useState } from "react";
import useUsers from "../../hooks/useUsers";

const UserTable = () => {
  const { users, loading, error } = useUsers();

  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  const cities = [...new Set(users.map((u) => u.address.city))];

  const filteredUsers = useMemo(() => {
    let filtered = [...users];

    filtered = filtered.filter((user) => {
      const query = search.toLowerCase();

      return (
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
      );
    });

    if (city !== "All") {
      filtered = filtered.filter(
        (user) => user.address.city === city
      );
    }

    filtered.sort((a, b) => {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });

    return filtered;
  }, [users, search, city, sortOrder]);

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm mt-8">

      <div className="mb-6 flex flex-wrap gap-3 sm:gap-4">

        <input
          type="text"
          placeholder="Search Name or Email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full min-w-0 rounded-lg border px-4 py-2 sm:w-72"
        />

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="min-w-[140px] flex-1 rounded-lg border px-4 py-2 sm:flex-none"
        >
          <option>All</option>

          {cities.map((city) => (
            <option
              key={city}
              value={city}
            >
              {city}
            </option>
          ))}
        </select>

        <button
          className="min-h-10 min-w-[120px] flex-1 rounded-lg bg-indigo-600 px-4 py-2 text-white sm:flex-none"
          onClick={() =>
            setSortOrder((prev) =>
              prev === "asc" ? "desc" : "asc"
            )
          }
        >
          Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
        </button>

      </div>

      <table className="w-full border-collapse">

        <thead>

          <tr className="bg-gray-100">

            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Company</th>
            <th className="p-3 text-left">City</th>

          </tr>

        </thead>

        <tbody>

          {filteredUsers.map((user) => (
            <tr
              key={user.id}
              className="border-b hover:bg-gray-50"
            >
              <td className="p-3">{user.name}</td>

              <td className="p-3">{user.email}</td>

              <td className="p-3">{user.company.name}</td>

              <td className="p-3">{user.address.city}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default UserTable;
