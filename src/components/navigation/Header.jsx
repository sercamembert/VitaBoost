import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Badge from "@mui/material/Badge";
import Sidebar from "./Sidebar";
import Hamburger from "hamburger-react";
import { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import Switcher from "../../events/Switcher";
import Cart from "../cart/Cart";
import { CartContext } from "../../contexts/CartContext";

const Header = () => {
  const {
    isBlackVisible,
    setIsBlackVisible,
    isSidebarVisible,
    setIsSidebarVisible,
    isHamburgerOpen,
    setIsHamburgerOpen,
    handleToggleCart,
    handleToggleSidebar,
  } = useContext(SidebarContext);

  const { isCartVisible, setIsCartVisible, cartItems } =
    useContext(CartContext);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isBlackVisible]);

  const handlePageClick = () => {
    if (isSidebarVisible) {
      setIsSidebarVisible(false);
      setTimeout(() => {
        setIsBlackVisible(false);
      }, 200);
      setIsHamburgerOpen(false);
    }
    if (isCartVisible) {
      setIsCartVisible(false);
      setTimeout(() => {
        setIsBlackVisible(false);
      }, 200);
      setIsHamburgerOpen(false);
    }
  };

  return (
    <header className={!isScrolled ? "header" : "header"}>
      <div
        className={
          !isScrolled
            ? "flex h-full w-1/2 items-center bg-primary pl-4 md:pl-16"
            : "flex h-full w-1/2 animate-[headerAnimation_0.7s_ease-in-out] items-center bg-gray-100 pl-4 dark:bg-dark md:pl-16"
        }
      >
        <Link to="/" tabIndex={1}>
          <Logo />
        </Link>
      </div>
      <div
        className={
          !isScrolled
            ? "flex h-full w-1/2 items-center justify-end bg-primary pr-4 lg:bg-white dark:lg:bg-dark"
            : "flex h-full w-1/2 animate-[headerAnimation_0.7s_ease-in-out] items-center justify-end bg-gray-100 pr-4 dark:bg-dark lg:bg-gray-100"
        }
      >
        <HeaderIcons
          onToggleSidebar={handleToggleSidebar}
          onToggleCart={handleToggleCart}
          isHamburgerOpen={isHamburgerOpen}
          setIsHamburgerOpen={setIsHamburgerOpen}
          isScrolled={isScrolled}
          cartItems={cartItems}
        />
      </div>
      {isBlackVisible && <BlackOverlay handlePageClick={handlePageClick} />}
      <HeaderLinks isScrolled={isScrolled} />
      <Sidebar
        isVisible={isSidebarVisible}
        onToggleSidebar={handleToggleSidebar}
      />
      <Cart isVisible={isCartVisible} handleClose={handleToggleSidebar} />
    </header>
  );
};

const BlackOverlay = React.memo(({ handlePageClick }) => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 top-0 z-30 bg-black opacity-50 ease-in"
      onClick={handlePageClick}
    ></div>
  );
});

const HeaderIcons = ({
  onToggleSidebar,
  isHamburgerOpen,
  setIsHamburgerOpen,
  isScrolled,
  onToggleCart,
  cartItems,
}) => {
  const handleClickMenu = () => {
    onToggleSidebar();
  };
  const handleClickCart = () => {
    onToggleCart();
  };

  return (
    <div className="flex w-fit gap-2">
      <div
        className={
          !isScrolled
            ? "flex items-center"
            : "flex animate-[headerAnimation_0.7s_ease-in-out] items-center"
        }
      >
        <Badge
          badgeContent={cartItems.length}
          color="error"
          className="hover:cursor-pointer dark:text-white"
          tabIndex={5}
          onClick={handleClickCart}
        >
          <ShoppingBagOutlinedIcon sx={{ fontSize: 34 }} />
        </Badge>
      </div>
      <div
        className={
          !isScrolled
            ? "flex items-center"
            : "flex animate-[headerAnimation_0.7s_ease-in-out] items-center"
        }
      >
        <Link to="/login">
          <PersonOutlineOutlinedIcon
            sx={{ fontSize: 38 }}
            className="hover:cursor-pointer dark:text-white"
            tabIndex={-1}
          />
        </Link>
      </div>
      <div
        className={
          !isScrolled
            ? "flex items-center px-1"
            : "flex animate-[headerAnimation_0.7s_ease-in-out] items-center"
        }
      >
        <Switcher tabIndex={0} />
      </div>
      <div
        className="z-50 ml-2 rounded-md bg-green p-1 hover:cursor-pointer"
        onClick={handleClickMenu}
        tabIndex={0}
      >
        <Hamburger
          size={30}
          toggled={isHamburgerOpen}
          toggle={setIsHamburgerOpen}
        />
      </div>
    </div>
  );
};

const HeaderLinks = ({ isScrolled }) => {
  return (
    <div
      className={
        !isScrolled
          ? "absolute left-1/2 hidden h-full translate-x-[-50%] content-center items-center gap-8 font-primary text-2xl font-medium lg:flex"
          : "absolute left-1/2 hidden h-full translate-x-[-50%] animate-[linksScroll_0.7s_ease-in-out] content-center items-center gap-8 font-primary text-2xl font-medium lg:flex"
      }
    >
      <Link
        to="/"
        className="uppercase duration-300 ease-in-out hover:scale-110 hover:text-tiffany dark:text-white dark:hover:text-tiffany"
        tabIndex={2}
      >
        home
      </Link>

      <Link
        to="/#products"
        className="uppercase duration-300 ease-in-out hover:scale-110 hover:text-tiffany dark:text-white dark:hover:text-tiffany"
        tabIndex={3}
      >
        products
      </Link>
      <Link
        to="/#about"
        className="uppercase duration-300 ease-in-out hover:scale-110 hover:text-tiffany dark:text-white dark:hover:text-tiffany"
        tabIndex={4}
      >
        about us
      </Link>
    </div>
  );
};

export default Header;
