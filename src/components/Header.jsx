// import React, { useState } from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="bg-gray-100 font-sans">
      <header className="flex items-center justify-between p-5 lg:px-10 relative">
        {/* Toggler Icon for Menu (Aligned to Left) */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900 lg:hidden"
          >
            {isMenuOpen ? <AiOutlineClose className="h-6 w-6" /> : <AiOutlineMenu className="h-6 w-6" />}
          </button>

          {/* Logo */}
          <div className="text-2xl lg:text-4xl font-extrabold text-black ">
            <Link to="/">SWIFT.CO</Link>
          </div>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } lg:flex flex-col lg:flex-row lg:space-x-8 text-gray-700 hover:text-gray-900 font-medium absolute lg:static top-16 lg:top-0 left-0 w-full lg:w-auto bg-gray-100 lg:bg-transparent lg:p-0 p-4 shadow-lg lg:shadow-none z-10`}
        >
          <Link
            to="/shop"
            className="hover:text-gray-900 p-2 lg:p-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/on-sale"
            className="hover:text-gray-900 p-2 lg:p-0"
            onClick={() => setIsMenuOpen(false)}
          >
            On Sale
          </Link>
          <Link
            to="/new-arrivals"
            className="hover:text-gray-900 p-2 lg:p-0"
            onClick={() => setIsMenuOpen(false)}
          >
            New Arrivals
          </Link>
          <Link
            to="/brands"
            className="hover:text-gray-900 p-2 lg:p-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Brands
          </Link>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          {/* Search Icon and Input */}
          <div className="relative flex items-center">
            <button
              onClick={toggleSearch}
              className="text-gray-600 hover:text-gray-900"
            >
              <AiOutlineSearch className="h-6 w-6" />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search for products..."
                className="absolute top-12  lg:top-0 left-0 lg:left-auto lg:relative px-4 py-2 bg-gray-100 rounded-3xl border border-gray-300 focus:outline-none focus:border-gray-500 w-30 lg:w-96 transition-all duration-300"
              />
            )}
          </div>

          {/* Cart Icon */}
          <button className="text-gray-600 hover:text-gray-900">
            <IoCartOutline className="h-6 w-6" />
          </button>

          {/* User Icon */}
          <button className="text-gray-600 hover:text-gray-900">
            <AiOutlineUser className="h-6 w-6" />
          </button>
        </div>
      </header>
    </div>
  );
}
