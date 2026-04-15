import React from "react";
import { ImStatsDots } from "react-icons/im";
import { IoMdHome } from "react-icons/io";
import { RiTimeLine } from "react-icons/ri";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-base-100/30 shadow-sm sticky top-0 backdrop-blur-md">
      <div className="navbar container mx-auto px-2 lg:px-0">
        <div className="flex-1">
          <a className="font-extrabold text-2xl text-[#1F2937]">
            Keen<span className="font-semibold text-[#244D3F]">Keeper</span>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-medium text-[#64748B] space-x-3">
            <li>
              <NavLink to={"/"}>
                <IoMdHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/timeline"}>
                <RiTimeLine />
                Timeline
              </NavLink>
            </li>
            <li>
              <NavLink to={"/stats"}>
                <ImStatsDots />
                Stats
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
