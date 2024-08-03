import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex flex-row justify-between items-center bg-green px-4 ">
      <h1 className="text-red-700">React Rentals</h1>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search location"
      />
      <div>
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
    </div>
  );
};

export default Header;
