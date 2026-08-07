import { NavLink } from "react-router-dom";

function Header() {
  const navClass = ({ isActive }) =>
    isActive
      ? "rounded-lg bg-blue-600 px-4 py-2"
      : "rounded-lg px-4 py-2 hover:bg-slate-800";

  return (
    <header className="border-b border-slate-800 bg-slate-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <h1 className="text-xl font-bold">
          React Query 
        </h1>

        <nav className="flex gap-3">
          <NavLink
            to="/"
            className={navClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/normal"
            className={navClass}
          >
            Normal Mode
          </NavLink>

          <NavLink
            to="/advanced"
            className={navClass}
          >
            Advanced Mode
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;