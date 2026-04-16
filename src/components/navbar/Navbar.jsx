import React from "react";
import { ImStatsDots } from "react-icons/im";
import { IoMdHome } from "react-icons/io";
import { RiTimeLine } from "react-icons/ri";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-base-100/30 shadow-sm sticky top-0 backdrop-blur-md">
      <div className="w-11/12 flex justify-between items-center py-2 mx-auto">
        <div>
          <a className="font-extrabold text-2xl text-[#1F2937]">
            Keen<span className="font-semibold text-[#244D3F]">Keeper</span>
          </a>
        </div>
        <div>
          <ul className="menu menu-horizontal px-0 text-xl lg:text-sm font-medium text-[#64748B] space-x-2">
            <li>
              <NavLink to={"/"}>
                <IoMdHome />
                <span className="hidden lg:block">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/timeline"}>
                <RiTimeLine />
                <span className="hidden lg:block">Timeline</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/stats"}>
                <ImStatsDots />
                <span className="hidden lg:block">Stats</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
