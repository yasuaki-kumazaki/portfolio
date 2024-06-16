import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Contact from "./Contact";

const Navbar = () => {
  return (
    <div>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl">
          <a href="#">Yasuaki Kumazaki</a>
        </h1>
        <ul className="flex items-center">
          <li>
            <a className="px-4 py-2" href="#">
              Resume
            </a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <BsFillMoonStarsFill className="cursor-pointer text-2xl ml-4" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
