import React from 'react'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
  return (
    <div className='bg-white-100 font-sans'>
      <header className='flex items-center justify-between p-5 pt-6 pr-10 pl-9 ml-7 mr-6'>
      <div className="text-4xl font-extrabold text-Black-1500 font-yei">
          <Link to="/">SWIFT.CO</Link>
        </div>
       
        <nav className="flex space-x-8 text-gray-700 font-medium font-satoshi">
          <Link to="/shop" className="hover:text-gray-900">Shop</Link>
          <Link to="/on-sale" className="hover:text-gray-900">On Sale</Link>
          <Link to="/new-arrivals" className="hover:text-gray-900">New Arrivals</Link>
          <Link to="/brands" className="hover:text-gray-900">Brands</Link>
        </nav>
        
  <div className="flex items-center space-x-4 ">
  <input
    type="text"
    placeholder="Search for products..."
    className="px-4 py-2 bg-customGray rounded-3xl border border-gray-300 focus:outline-none focus:border-gray-5 w-96"
  />
  <button className="text-gray-600 hover:text-gray-900">
    
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H4M7 13l-1 5h11l1-5M10 21h4"></path>
    </svg>
  </button>
  <button className="text-gray-600 hover:text-gray-900">
   
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A9 9 0 0112 3a9 9 0 016.879 14.804M15 21v-2a4 4 0 00-8 0v2m9-9a4 4 0 11-8 0 4 4 0 018 0z"></path>
    </svg>
  </button>
</div> </header></div>
  )
}





