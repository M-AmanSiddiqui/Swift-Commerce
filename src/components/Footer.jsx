import React from 'react';
import { TfiEmail } from "react-icons/tfi"
import { Link } from 'react-router-dom';
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    

<div>

<div className="bg-black  mt-20 p-10  flex gap-44 items-center rounded-xl mx-20">
      {/* Heading Section */}
      <h1 className="text-white text-center text-2xl md:text-4xl font-extrabold mb-6">
        STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
      </h1>

      {/* Input and Button Section */}
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
    <footer className="bg-customGray ">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    <div className="text-2xl  lg:text-4xl font-extrabold text-black ">
            <Link to="/">SWIFT.CO</Link>
          </div>
      
      <p className="mt-5 text-sm text-gray-500">
      We have clothes that suits your style and <br /> which you’re proud to wear. From <br /> women to men.
      </p>
      <h1 className='flex gap-3 mt-5 text-xl'><AiFillTwitterCircle />
      <FaFacebook />
      <FaInstagramSquare />
      <FaGithub /></h1>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
        <h2 className="title-font  font-medium text-gray-900 tracking-widest text-sm mb-7">
          COMPANY
        </h2>
        <nav className=" list-none mb-10">
          <li>
            <Link className="text-gray-600 hover:text-gray-800">About</Link>
          </li>
          <li className='mt-3'> 
            <Link className="text-gray-600 hover:text-gray-800">Features</Link>
          </li>
          <li className='mt-3'> 
            <Link className="text-gray-600 hover:text-gray-800">Works</Link>
          </li>
          <li className='mt-3'> 
            <Link className="text-gray-600 hover:text-gray-800">career</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-7">
          HELP
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Customer Suppot</a>
          </li>
          <li className='mt-3'>
            <a className="text-gray-600 hover:text-gray-800">Delivery Details</a>
          </li>
          <li className='mt-3'>
            <a className="text-gray-600 hover:text-gray-800">Terms & Conditions</a>
          </li>
          <li className='mt-3'>
            <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          </li>
        </nav>
      </div>
      
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-7">
          FAQ
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Account</a>
          </li>
          <li className='mt-3'>
            <a className="text-gray-600 hover:text-gray-800">Manage Deliveries</a>
          </li>
          <li className='mt-3'>
            <a className="text-gray-600 hover:text-gray-800">Orders</a>
          </li>
          <li className='mt-3'>
            <a className="text-gray-600 hover:text-gray-800">Payment</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-7">
          RESOURCES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Free eBooks</a>
          </li>
          <li className='mt-3'>
            <a className="text-gray-600 hover:text-gray-800">Development Tutorial</a>
          </li>
          <li className='mt-3'>
            <a className="text-gray-600 hover:text-gray-800">How tp - Blog</a>
          </li>
          <li className='mt-3'>
            <a className="text-gray-600 hover:text-gray-800">Youtube Play list</a>
          </li>
        </nav>
      </div>
      


    </div>
  </div>
  
 
</footer>

   </div>










  );
}
