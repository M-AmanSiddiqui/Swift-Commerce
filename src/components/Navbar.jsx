import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black text-white text-center'>
    <h2 className=''>  Sign up and get 20% off to your first order. <Link to="/" className='underline'> Sign Up Now</Link> </h2>
    </div>
  );
};

export default Navbar;
