import React from "react";
import file from "../Images/Sourabh_Grover.pdf";
import logo from "../Images/logo.png";
import { Link } from "react-scroll";
function Header({ toggle }) {
  return (
    <div className="flex justify-between pt-5 items-center">
      <div className="md:ml-16 ml-5 self-center">
        <Link to="Home" smooth={true} duration={500}>
          <img
            className=" animate-wiggle h-16 transition duration-500 ease-in-out transform hover:transform-y-1 hover:scale-110 hover:text-green-400"
            src={logo}
            alt="Logo"
          />
        </Link>
      </div>

      <div>
        <i
          onClick={toggle}
          className="fas fa-bars text-green-400 fa-2x mr-10 self-center md:hidden "
        ></i>
        <ul className=" animate-faderight md:flex justify-center items-center gap-x-5 md:mr-20  hidden ">
          <Link to="About" smooth={true} duration={500}>
            <li className="text-white font-normal text-sm hover:text-green-400 cursor-pointer transition duration-500 ease-in-out transform hover:transform-y-1 hover:scale-110 hover:text-green-400  ">
              About
            </li>
          </Link>
          <Link to="Work" smooth={true} duration={500}>
            <li className="text-white font-normal text-sm hover:text-green-400 cursor-pointer transition duration-500 ease-in-out transform hover:transform-y-1 hover:scale-110 hover:text-green-400 ">
              Work
            </li>
          </Link>
          <Link to="Contact" smooth={true} duration={500}>
            <li className="text-white font-normal text-sm hover:text-green-400 cursor-pointer transition duration-500 ease-in-out transform hover:transform-y-1 hover:scale-110 hover:text-green-400 ">
              Contact
            </li>
          </Link>
          <li className="px-4 py-2 rounded-md border-2 border-green-400 text-green-300 font-normal text-sm hover:bg-gray-800 ">
            <a href={file} target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
