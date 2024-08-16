import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavbarAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { label: "admin", path: "/admin" },
    { label: "member", path: "/member" },
    { label: "product", path: "/product" },
  ];

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block md:hidden p-2 border-2 w-full"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <div
        className={`md:w-[120px] lg:w-[180px] xl:w-[240px] h-screen bg-yellow-300 border-2 fixed ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="h-full">
          <div>
            <NavLink to={"/admin"}>
              <img
                className="w-40 h-40 mx-auto"
                src="../img/logo/logo2.png"
                alt="logo"
              />
            </NavLink>
          </div>
          <div>
            <h1>navigate</h1>
          </div>
          <div className="w-full h-auto">
            <ul className="w-full h-auto">
              {navItems.map(({ label, path }) => (
                <li key={label} className="w-full px-5 py-2 border-b-[1px]">
                  <button
                    className="w-full text-left bg"
                    onClick={() => handleNavigation(path)}
                  >
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `w-full text-left  ${
                          isActive
                            ? "px-5 pl py-2 border-2 bg-indigo-400 text-white border-indigo-600"
                            : "hover:bg-yellow-400 hover:border-indigo-600"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarAdmin;
