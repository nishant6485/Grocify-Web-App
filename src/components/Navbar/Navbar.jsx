import React, { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TbMenu2 } from "react-icons/tb";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled ? "shadow-lg" : ""}`}
      >
        <nav className="max-w-[1400px] items-center px-10 mx-auto md:h-[14vh] h-[12vh] flex justify-between">
          <Link to="/" className="text-3xl font-semibold ">
            Gr<span className="uppercase text-orange-500">o</span>cify
          </Link>
          {/* desktop menu */}
          <ul className="md:flex gap-x-15 hidden">
            <li>
              <a
                href="#"
                className="font-semibold tracking-wide text-orange-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#process"
                className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#contactus"
                className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500"
              >
                Contact Us
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-x-5">
            <div className="md:flex items-center border-2 rounded-full p-1 border-orange-500 hidden">
              <input
                type="text"
                id="text"
                name="text"
                placeholder="Search..."
                autoCapitalize="off"
                className="flex-1 h-[5vh] px-3 focus:outline-none"
              />
              <button className="bg-gradient-to-b from-orange-400 to-orange-500 h-10 w-10 text-white flex justify-center items-center rounded-full text-xl">
                <IoSearch />
              </button>
            </div>
            <a href="#" className="text-zinc-800 text-2xl">
              <GoHeartFill />
            </a>
            <a href="#" className="text-zinc-800 text-2xl">
              <HiShoppingBag />
            </a>

            {/* HamBurger */}

            <button
              className="text-zinc-800 text-3xl md:hidden"
              onClick={toggleMenu}
            >
              {showMenu ? <TbMenu3 /> : <TbMenu2 />}
            </button>
          </div>

          {/* mobile menu */}

          <ul
            className={`flex flex-col gap-y-12 bg-orange-500/10 backdrop-blur-xl rounded-xl shadow-2xl p-10 gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 items-center transition-all duration-500 ${showMenu ? "left-1/2" : ""}`}
          >
            <li>
              <a
                href="#"
                onClick={() => setShowMenu(false)}
                className="font-semibold tracking-wide text-orange-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setShowMenu(false)}
                className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#process"
                onClick={() => setShowMenu(false)}
                className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#contactus"
                onClick={() => setShowMenu(false)}
                className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500"
              >
                Contact Us
              </a>
            </li>
            <li className="flex items-center border-2 rounded-full p-1 border-orange-500 md:hidden">
              <input
                type="text"
                id="text"
                name="text"
                placeholder="Search..."
                autoCapitalize="off"
                className="flex-1 h-[5vh] px-3 focus:outline-none"
              />
              <button className="bg-gradient-to-b from-orange-400 to-orange-500 h-10 w-10 text-white flex justify-center items-center rounded-full text-xl">
                <IoSearch />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
