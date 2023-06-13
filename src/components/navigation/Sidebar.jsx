/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Sidebar = ({ isVisible, onToggleSidebar }) => {
  const handleClickMenu = () => {
    onToggleSidebar();
  };
  return (
    <nav className={isVisible ? "sidebar" : "sidebar-close"}>
      <div className="absolute w-full flex flex-col top-32">
        <Link
          to="/"
          onClick={handleClickMenu}
          className="text-center font-special text-[39px] uppercase text-tiffanyBlur text-stroke w-full p-3 hover:bg-sky-400 hover:cursor-pointer ease-out duration-100"
        >
          home
        </Link>
        <Link
          to="/contact"
          onClick={handleClickMenu}
          className="text-center font-special text-[39px] uppercase text-tiffanyBlur text-stroke w-full p-3 hover:bg-sky-400 hover:cursor-pointer ease-out duration-100"
        >
          contact
        </Link>
        <Link
          to="/#products"
          onClick={handleClickMenu}
          className="text-center font-special text-[39px] uppercase text-tiffanyBlur text-stroke w-full p-3 hover:bg-sky-400 hover:cursor-pointer ease-out duration-100"
        >
          products
        </Link>
        <Link
          to="/login"
          onClick={handleClickMenu}
          className="text-center font-special text-[39px] uppercase text-tiffanyBlur text-stroke w-full p-3 hover:bg-sky-400 hover:cursor-pointer ease-out duration-100"
        >
          login
        </Link>
        <Link
          to="/cart"
          onClick={handleClickMenu}
          className="text-center font-special text-[39px] uppercase text-tiffanyBlur text-stroke w-full p-3 hover:bg-sky-400 hover:cursor-pointer ease-out duration-100"
        >
          cart
        </Link>
      </div>
      <div className="absolute bottom-4 flex w-4/5 gap-4 justify-center border-t-2 border-green pt-2 left-1/2 -translate-x-1/2">
        <InstagramIcon sx={{ fontSize: 38 }} className="hover:cursor-pointer" />
        <FacebookIcon sx={{ fontSize: 38 }} className="hover:cursor-pointer" />
        <TwitterIcon sx={{ fontSize: 38 }} className="hover:cursor-pointer" />
      </div>
    </nav>
  );
};

export default Sidebar;
