import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
// #0b70ff
// #e2eaf8
export default function Navbar() {
  const toggleMenu = () => {
    if (document.getElementById("mobile-menu").classList.contains("left-[-50rem]")) {
      document.getElementById("mobile-menu").classList.remove("left-[-50rem]");
      document.getElementById("mobile-menu").classList.add("left-0");
    } else {
      document.getElementById("mobile-menu").classList.remove("left-0");
      document.getElementById("mobile-menu").classList.add("left-[-50rem]");
    }
  };
  return (
    <>
      {/* For Desktop */}
      <nav className="w-full flex items-center justify-between px-2 py-3 sm:px-5 sm:py-1">
        <ul className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap- mr-10">
            <img className="w-10 sm:w-16 rounded-full" src={Logo} alt="" />
            <p className="text-xl font-semibold sm:text-2xl">JobTrek</p>
          </Link>
          <Link to="/" className="hidden sm:block hover:text-[#0b70ff] cursor-pointer transition-colors  text-[#1967d2]">
            Home
          </Link>
          <li className="hidden sm:block hover:text-[#0b70ff] cursor-pointer transition-colors ">
            Find jobs
          </li>
          <li className="hidden sm:block hover:text-[#0b70ff] cursor-pointer transition-colors ">
            Companies
          </li>
          <li className="hidden sm:block hover:text-[#0b70ff] cursor-pointer transition-colors ">
            Applications
          </li>
        </ul>
        <ul className="hidden sm:flex items-center gap-5">
          <Link to="/login" className="text-[#1967d2] bg-[#e2eaf8] px-2 py-1 rounded-md hover:bg-blue-700 hover:text-white transition-colors duration-300 ease-in cursor-pointer">
            Login / Signup
          </Link>
          <li className="bg-[#1967d2] px-3 py-1 rounded-md text-white hover:bg-blue-800 transition-all duration-300 cursor-pointer">
            Post a Job
          </li>
        </ul>
        {/* for Mobile */}
        <div className="flex gap-4 sm:hidden">
          <Link to="/login" className="text-[#1967d2] bg-[#e2eaf8] px-2 rounded-sm">
            Login
          </Link>
          <svg
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="bg-[#0000003e] left-[-50rem] transition-all duration-500 sm:hidden absolute top-0 w-screen h-screen"
      >
        <ul
          id="mobile-menu-item"
          className=" bg-white w-fit relative overflow-hidden min-h-full py-3 "
        >
          <li className="flex items-center gap-14 pr-5 ps-2 pb-5">
            <div className="flex items-center">
              <img className="w-14" src={Logo} alt="" />
              <p className="font-semibold text-lg">JobTrek</p>
            </div>
            <svg
              onClick={toggleMenu}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </li>
          <Link tp="/" className="px-4 text-base py-2 text-[#0b70ff] bg-teal-50">Home</Link>
          <li className="px-4 text-base py-2">Jobs</li>
          <li className="px-4 text-base py-2">Companies</li>
          <li className="px-4 text-base py-2">Application</li>
          <li className="px-4 text-base py-2">Profile</li>
          <li className="mx-4 my-5 text-center bg-[#0b70ff] py-1 rounded-md text-white hover:bg-blue-800 transition-all duration-300 cursor-pointer">
            Post a Job
          </li>
        </ul>
      </div>
    </>
  );
}
