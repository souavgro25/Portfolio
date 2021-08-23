import React from "react";
import file from "../Images/Sourabh_Grover.pdf";
import { Link } from "react-scroll";
function Dropdown({ isopen }) {
  return (
    <div className={isopen ? `md:hidden ` : "hidden"}>
      <ul className="animate-wiggle flex flex-col justify-center items-center gap-y-5  bg-gray-800 py-10">
        <Link to="About" smooth={true} duration={500}>
          <li className="text-white font-normal text-sm hover:text-green-400 ">
            About
          </li>
        </Link>
        <Link to="Work" smooth={true} duration={500}>
          <li className="text-white font-normal text-sm hover:text-green-400 ">
            Work
          </li>
        </Link>
        <Link to="Contact" smooth={true} duration={500}>
          <li className="text-white font-normal text-sm hover:text-green-400 ">
            Contact
          </li>
        </Link>
        <li className="px-4 py-2 rounded-md border-2 border-green-300 text-green-300 font-normal text-sm hover:bg-gray-800 ">
          <a href={file} download="resume" target="_blank" rel="noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
