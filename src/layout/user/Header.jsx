import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

// Lucide Icons
import { Heart, ShoppingBag, UserRound, Menu, X, Tag,} from "lucide-react";

// Components
import Image from "../../components/media/Image";
import Input from "../../components/forms/Input";
import Button from "../../components/Button";

const Header = () => {
  
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
    // { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Terms", path: "/terms" },
  ];

  const user = null

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const goToAccount = () => {
    navigate(user ? "/profile" : "/login");
    closeMenu();
  };

  return (
    <header className="sticky top-0 left-0 z-50 bg-white">
      <div className="mx-auto w-full max-w-360 px-2 md:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between gap-5 border-b border-gray-200 lg:border-none">
          <Link to="/">
            <Image
              src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1794023750/Tech_logo-removebg-preview_hqwpuu.png"
              alt="TechMarket"
              className="h-12"
            />
          </Link>

          {/* Desktop Search */}
          <div className="hidden max-w-xl flex-1 lg:flex">
            <Input
              type="search"
              placeholder="Search products, brands and more..."
            />
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              to="/wishlist"
              className="text-[#061336] transition-colors hover:text-[#015BFA]"
              aria-label="Wishlist"
            >
              <Heart size={24} strokeWidth={1.8} />
            </Link>

            <Link
              to="/cart"
              className="relative text-[#061336] transition-colors hover:text-[#015BFA]"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={23} strokeWidth={1.8} />
            </Link>

            <Button
              icon={UserRound}
              iconSize={24}
              onClick={goToAccount}
              variant="transparent"
              className="p-2 hover:text-[#015BFA]"
            />
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            <Link
              to="/cart"
              className="relative text-[#061336]"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={24} strokeWidth={1.8} />
            </Link>

            <Button
              icon={Menu}
              iconSize={28}
              variant="normal"
              onClick={() => setIsMenuOpen(true)}
              className="p-2!"
              aria-label="Open menu"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden h-12 items-center justify-between bg-linear-to-r from-blue-700 to-cyan-400 px-6 shadow-md md:flex">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <Link
            to="/offers"
            className="flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#031957]"
          >
            <Tag size={18} strokeWidth={1.8} />
            Special Offers
          </Link>
        </nav>
      </div>

      {/* Mobile Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-60 bg-[#061336]/40 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          isMenuOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 z-70 h-dvh w-[60%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex h-20 items-center justify-between border-b border-gray-100 px-5">
          <Link onClick={closeMenu} to="/">
            <Image
              src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1794023750/Tech_logo-removebg-preview_hqwpuu.png"
              alt="TechMarket"
              className="h-8"
            />
          </Link>

          <Button
            icon={X}
            iconSize={24}
            variant="normal"
            onClick={closeMenu}
            className="p-2!"
            aria-label="Close menu"
          />
        </div>

        {/* Drawer Content */}
        <div className="h-[calc(100dvh-80px)] overflow-y-auto p-5">
          {/* Search */}
          <div className="mb-7">
            <Input
              type="search"
              placeholder="Search products..."
            />
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Explore
            </p>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#F0F7FF] text-[#015BFA]"
                        : "text-[#061336] hover:bg-[#F0F7FF] hover:text-[#015BFA]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="my-5 border-t border-gray-100" />

          {/* Account Links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
              My Account
            </p>

            <div className="flex flex-col gap-2">
              <Link
                to="/wishlist"
                onClick={closeMenu}
                className="flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium text-[#061336] transition-colors hover:bg-[#F0F7FF] hover:text-[#015BFA]"
              >
                <Heart size={21} strokeWidth={1.8} className="w-6 shrink-0" />
                Wishlist
              </Link>

              <Link
                to="/cart"
                onClick={closeMenu}
                className="flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium text-[#061336] transition-colors hover:bg-[#F0F7FF] hover:text-[#015BFA]"
              >
                <ShoppingBag
                  size={21}
                  strokeWidth={1.8}
                  className="w-6 shrink-0"
                />
                Cart
              </Link>

              <Button
                icon={UserRound}
                iconSize={23}
                onClick={goToAccount}
                text="Account"
                variant="transparent"
                className="h-11 w-full justify-start gap-3 px-3"
              />
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Header;