import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-black text-white text-center px-4 py-2 sm:py-3">
      <h2 className="text-sm sm:text-base">
        Sign up and get 20% off your first order.{' '}
        <Link to="/" className="underline">
          Sign Up Now
        </Link>
      </h2>
    </div>
  );
};

export default Navbar;
