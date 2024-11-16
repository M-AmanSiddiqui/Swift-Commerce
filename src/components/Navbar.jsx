import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-black text-white text-xs   py-3 w-ful  sm:w-full md:text-lg  lg:w-full lg:text-xl text-center">
      <h2 className=''>
        Sign up and get 20% off your first order.{' '}
        <Link to="/Signup" className="underline">
          Sign Up Now
        </Link>
      </h2>
    </div>
  );
};

export default Navbar;
