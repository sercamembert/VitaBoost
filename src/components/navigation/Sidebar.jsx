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
      <div className="absolute top-32 flex w-full flex-col">
        <Link
          to="/"
          onClick={handleClickMenu}
          className="text-stroke w-full p-3 text-center font-special text-[39px] uppercase text-tiffanyBlur duration-100 ease-out hover:cursor-pointer hover:bg-sky-400"
        >
          home
        </Link>
        <Link
          to="/#about"
          onClick={handleClickMenu}
          className="text-stroke w-full p-3 text-center font-special text-[39px] uppercase text-tiffanyBlur duration-100 ease-out hover:cursor-pointer hover:bg-sky-400"
        >
          about us
        </Link>

        <Link
          to="/contact"
          onClick={handleClickMenu}
          className="text-stroke w-full p-3 text-center font-special text-[39px] uppercase text-tiffanyBlur duration-100 ease-out hover:cursor-pointer hover:bg-sky-400"
        >
          contact
        </Link>
        <Link
          to="/#products"
          onClick={handleClickMenu}
          className="text-stroke w-full p-3 text-center font-special text-[39px] uppercase text-tiffanyBlur duration-100 ease-out hover:cursor-pointer hover:bg-sky-400"
        >
          products
        </Link>
        <Link
          to="/login"
          onClick={handleClickMenu}
          className="text-stroke w-full p-3 text-center font-special text-[39px] uppercase text-tiffanyBlur duration-100 ease-out hover:cursor-pointer hover:bg-sky-400"
        >
          login
        </Link>
        <Link
          to="/cart"
          onClick={handleClickMenu}
          className="text-stroke w-full p-3 text-center font-special text-[39px] uppercase text-tiffanyBlur duration-100 ease-out hover:cursor-pointer hover:bg-sky-400"
        >
          cart
        </Link>
      </div>
      <div className="absolute bottom-4 left-1/2 flex w-4/5 -translate-x-1/2 justify-center gap-4 border-t-2 border-green pt-2">
        <InstagramIcon sx={{ fontSize: 38 }} className="hover:cursor-pointer" />
        <FacebookIcon sx={{ fontSize: 38 }} className="hover:cursor-pointer" />
        <TwitterIcon sx={{ fontSize: 38 }} className="hover:cursor-pointer" />
      </div>
    </nav>
  );
};

export default Sidebar;
