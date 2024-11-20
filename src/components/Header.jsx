import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";


export default function Header() {

  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false); // Close search input when menu is toggled
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="bg-gray-100 font-sans">
      <header className="flex items-center justify-between p-4 lg:px-10 relative">
        {/* Left Section: Menu Icon and Logo */}
        <div className="flex items-center space-x-4">
          {/* Menu Icon for Mobile */}
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900 lg:hidden focus:outline-none"
          >
            {isMenuOpen ? (
              <AiOutlineClose className="h-6 w-6" />
            ) : (
              <AiOutlineMenu className="h-6 w-6" />
            )}
          </button>

          {/* Logo */}
          <div className="text-2xl lg:text-4xl font-extrabold text-black">
            <Link to="/">SWIFT.CO</Link>
          </div>
        </div>

        {/* Center Section: Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row lg:space-x-8 absolute lg:static top-16 lg:top-0 left-0 w-full lg:w-auto bg-gray-100 lg:bg-transparent lg:p-0 p-4 shadow-lg lg:shadow-none z-10`}
        >
  {/* Search Input inside Menu */}
  <div className="lg:hidden flex items-center mt-4">
            <button
              onClick={toggleSearch}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <AiOutlineSearch className="h-6 w-6" />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search for products..."
                className="mt-2 px-4 py-2 bg-gray-100 rounded-3xl border border-gray-300 focus:outline-none focus:ring focus:ring-gray-500 w-fullnpm run dev lg:w-96 transition-all duration-300"
              />
            )}
          </div>

          {["Product", "On Sale", "New Arrivals", "Brands"].map((link, index) => (
            <Link
              key={index}
              to={`/${link.toLowerCase().replace(" ", "-")}`}
              className="block text-gray-700 hover:text-gray-900 font-medium lg:inline lg:p-0 py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </Link>
          ))}

        
        </nav>

        {/* Right Section: Icons */}
        
            {/* Right Section: Icons for Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Search Icon */}
          <div className="relative">
            <button
              onClick={toggleSearch}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <AiOutlineSearch className="h-6 w-6 mt-2" />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search for products..."
                className="absolute  lg:top-0 left-0 lg:left-auto lg:relative px-4 py-2 bg-gray-100 rounded-3xl border border-gray-300 focus:outline-none focus:ring focus:ring-gray-500 w-64 lg:w-96 transition-all duration-300"
              />
            )}
          </div>
          {/* Cart Icon */}
          <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
            <IoCartOutline className="h-6 w-6" />
          </button>

          {/* User Icon */}
          <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
            <AiOutlineUser className="h-6 w-6" />
          </button>
        </div>
      </header>
    </div>
  );
}
