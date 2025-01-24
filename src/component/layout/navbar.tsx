import { useState } from "react";
import ToggleIcon from "../../assets/toggleIcon";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const location = useLocation();

  const refresh = () => {
    return window.location.reload();
  };

  const handleToggle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  return (
    <nav className="eddyNav flex flex-col md:flex-row justify-between">
      <div className="flex flex-row justify-between">
        <button onClick={refresh} onKeyDown={refresh}>
          <h1 className="oleo-script-bold text-[24px] font-color-active">
            Youteens
          </h1>
        </button>
        <button
          className={`inline md:hidden no-style w-fit`}
          onClick={handleToggle}
          onKeyDown={handleToggle}
        >
          <ToggleIcon height="20" width="20" fillColor="#000000" />
        </button>
      </div>

      <div
        className={`${
          toggle
            ? "hidden md:block"
            : "block pt-[2rem] pb-[0.5rem] md:py-[0rem]"
        } cursor-pointer`}
      >
        <NavLink
          to="/"
          className={`${
            location.pathname === "/" ? "poppins-bold text-[#CE7C02]" : ""
          }`}
        >
          Home
        </NavLink>
      </div>
      <div
        className={`${
          toggle ? "hidden md:block" : "block py-[0.5rem] md:py-[0rem]"
        } cursor-pointer`}
      >
        <NavLink
          to="/about"
          className={`${
            location.pathname === "/about" ? "poppins-bold text-[#CE7C02]" : ""
          }`}
        >
          About
        </NavLink>
      </div>
      <div
        className={`${
          toggle ? "hidden md:block" : "block py-[0.5rem] md:py-[0rem]"
        } cursor-pointer`}
      >
        <a
          href="https://wa.me/qr/VBB5GN5NLDDNF1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donations
        </a>
      </div>
      <div
        className={`${
          toggle ? "hidden md:block" : "block py-[0.5rem] md:py-[0rem]"
        } cursor-pointer`}
      >
        <a
          href="https://wa.me/qr/VBB5GN5NLDDNF1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
