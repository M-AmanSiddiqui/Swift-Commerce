import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      {/* Newsletter Section */}
      <div className="bg-black mt-20 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-20 rounded-xl mx-4 md:mx-10 lg:mx-20">
        {/* Heading */}
        <h1 className="text-white text-center text-2xl md:text-4xl font-extrabold">
          STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
        </h1>

        {/* Input and Button */}
        <div className="flex flex-col items-center w-full md:w-auto">
          <input
            placeholder="Enter your email address"
            className="pl-4 pr-4 w-full md:w-96 h-12 mb-4 rounded-full text-sm md:text-base focus:outline-none text-black"
            type="text"
          />
          <button className="bg-white text-black w-full md:w-96 h-12 text-sm md:text-base font-medium rounded-full">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-customGray mt-12">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          {/* Company Info */}
          <div className="w-full md:w-1/4 flex-shrink-0 text-center md:text-left mb-8 md:mb-0">
            <div className="text-2xl lg:text-4xl font-extrabold text-black">
              <Link to="/">SWIFT.CO</Link>
            </div>
            <p className="mt-5 text-sm text-gray-500">
              We have clothes that suit your style and <br /> which you’re proud to wear. From <br /> women to men.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-5 text-2xl">
              <AiFillTwitterCircle />
              <FaFacebook />
              <FaInstagramSquare />
              <FaGithub />
            </div>
          </div>

          {/* Links Sections */}
          <div className="flex-grow flex flex-wrap md:pl-20 text-center md:text-left">
            {/* Column 1 */}
            <div className="w-1/2 md:w-1/4 px-4 mb-6 md:mb-0">
              <h2 className="font-medium text-gray-900 text-sm mb-4">COMPANY</h2>
              <nav className="list-none">
                <li><Link className="text-gray-600 hover:text-gray-800">About</Link></li>
                <li className="mt-3"><Link className="text-gray-600 hover:text-gray-800">Features</Link></li>
                <li className="mt-3"><Link className="text-gray-600 hover:text-gray-800">Works</Link></li>
                <li className="mt-3"><Link className="text-gray-600 hover:text-gray-800">Career</Link></li>
              </nav>
            </div>

            {/* Column 2 */}
            <div className="w-1/2 md:w-1/4 px-4 mb-6 md:mb-0">
              <h2 className="font-medium text-gray-900 text-sm mb-4">HELP</h2>
              <nav className="list-none">
                <li><a className="text-gray-600 hover:text-gray-800">Customer Support</a></li>
                <li className="mt-3"><a className="text-gray-600 hover:text-gray-800">Delivery Details</a></li>
                <li className="mt-3"><a className="text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
                <li className="mt-3"><a className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
              </nav>
            </div>

            {/* Column 3 */}
            <div className="w-1/2 md:w-1/4 px-4 mb-6 md:mb-0">
              <h2 className="font-medium text-gray-900 text-sm mb-4">FAQ</h2>
              <nav className="list-none">
                <li><a className="text-gray-600 hover:text-gray-800">Account</a></li>
                <li className="mt-3"><a className="text-gray-600 hover:text-gray-800">Manage Deliveries</a></li>
                <li className="mt-3"><a className="text-gray-600 hover:text-gray-800">Orders</a></li>
                <li className="mt-3"><a className="text-gray-600 hover:text-gray-800">Payment</a></li>
              </nav>
            </div>

            {/* Column 4 */}
            <div className="w-1/2 md:w-1/4 px-4">
              <h2 className="font-medium text-gray-900 text-sm mb-4">RESOURCES</h2>
              <nav className="list-none">
                <li><a className="text-gray-600 hover:text-gray-800">Free eBooks</a></li>
                <li className="mt-3"><a className="text-gray-600 hover:text-gray-800">Development Tutorials</a></li>
                <li className="mt-3"><a className="text-gray-600 hover:text-gray-800">How to - Blog</a></li>
                <li className="mt-3"><a className="text-gray-600 hover:text-gray-800">YouTube Playlist</a></li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
