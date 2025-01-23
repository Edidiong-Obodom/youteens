import { useState } from "react";
import ToggleIcon from "../../assets/toggleIcon";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

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
        <div className="cursor-pointer">
          <h1 className="oleo-script-bold text-[24px] font-color-active">
            Youteens
          </h1>
        </div>
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
        Home
      </div>
      <div
        className={`${
          toggle ? "hidden md:block" : "block py-[0.5rem] md:py-[0rem]"
        } cursor-pointer`}
      >
        About
      </div>
      <div
        className={`${
          toggle ? "hidden md:block" : "block py-[0.5rem] md:py-[0rem]"
        } cursor-pointer`}
      >
        Donations
      </div>
      <div
        className={`${
          toggle ? "hidden md:block" : "block py-[0.5rem] md:py-[0rem]"
        } cursor-pointer`}
      >
        Contact
      </div>
    </nav>
  );
};

export default Navbar;
