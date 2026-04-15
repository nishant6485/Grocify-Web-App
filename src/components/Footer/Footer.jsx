import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="flex flex-wrap gap-y-12 max-w-[1400px] mx-auto px-10 ">
        <div className="flex-1 basis-[300px] ">
          <a href="#" className="text-3xl font-semibold ">
            Gr<span className="uppercase text-orange-500">o</span>cify
          </a>
          <p className="text-zinc-600 mt-6 max-w-[350px]">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>

          <p className="text-zinc-800 mt-6">2026 &copy; all rights reserved</p>
        </div>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 font-bold text-2xl">company</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              about
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              FAQ'S
            </a>
          </li>
        </ul>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 font-bold text-2xl">support</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              support center
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              feedback
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              contact us
            </a>
          </li>
        </ul>

        <div className="flex-1">
          <h5 className="text-zinc-800 font-bold text-2xl">stay connected</h5>
          <p className="mt-6 text-zinc-600">
            questions or feedback? <br />
            we'd love hear from you.
          </p>

          <div className="bg-white flex items-center  p-1 mt-6 rounded-lg">
            <input
              type="email"
              name="email"
              id="email"
              autoCapitalize="off"
              placeholder="Email Address"
              className="h-[5vh] pl-4 flex-1 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg cursor-pointer text-2xl text-white hover:to-orange-600">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
