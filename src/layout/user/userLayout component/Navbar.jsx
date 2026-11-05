import { useState } from "react";
import Logo from "../../../assets/schon logo.webp";
import { MdClose } from "react-icons/md";
import {
  FaRegHeart,
  FaShoppingCart,
  FaUser,
  FaBars
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition ${isActive
      ? "text-black dark:text-white"
      : "text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
    }`;

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
      <div className="w-full">
        <div className="mx-auto flex max-w-7xl items-center px-4 py-4 lg:px-6">
          <div className="shrink-0">
            <NavLink to="/">
              <img
                src={Logo}
                alt="Schon"
                className="h-auto w-28"
              />
            </NavLink>
          </div>

          <div className="ml-auto flex items-center gap-1">
            <nav
              className={`fixed left-0 top-0 z-50 flex h-full w-72 flex-col bg-white p-6 shadow-xl transition-transform duration-300 dark:bg-black lg:static lg:z-auto lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:gap-8 lg:bg-transparent lg:p-0 lg:shadow-none lg:transition-none dark:lg:bg-transparent ${mobileMenuOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
                }`}
            >
              <div className="flex items-center justify-between lg:hidden">
                <NavLink to="/" onClick={handleNavClick}>
                  <img
                    src={Logo}
                    alt="Schon"
                    className="h-auto w-28"
                  />
                </NavLink>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
                  aria-label="Close menu"
                >
                  <MdClose size={24} />
                </button>
              </div>

              <div className="mt-12 flex flex-col gap-6 lg:mt-0 lg:flex-row lg:gap-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={handleNavClick}
                    className={navLinkClass}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </nav>

            <div className="flex items-center">
              <NavLink
                to="/wishlist"
                className="relative flex h-10 w-10 items-center justify-center text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
                aria-label="Wishlist"
              >
                <FaRegHeart size={19} />
              </NavLink>

              <NavLink
                to="/cart"
                className="relative flex h-10 w-10 items-center justify-center text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
                aria-label="Shopping cart"
              >
                <FaShoppingCart size={19} />
              </NavLink>

              <NavLink
                to="/profile"
                className="flex h-10 w-10 items-center justify-center text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
                aria-label="Account"
              >
                <FaUser size={18} />
              </NavLink>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white lg:hidden"
              aria-label="Open menu"
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </div>

      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${mobileMenuOpen
          ? "visible opacity-100"
          : "invisible opacity-0"
          }`}
      />
    </header>
  );
};

export default Navbar;