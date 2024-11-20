// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
  
//   return (
//     <div className="bg-black text-white text-xs   py-3 w-ful  sm:w-full md:text-lg  lg:w-full lg:text-xl text-center">
//       <h2 className=''>
//         Sign up and get 20% off your first order.{' '}
//        <button> <Link to="/Signup" className="underline">
//           Sign Up Now
//         </Link></button>
//       </h2>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { AuthContext } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../Utils/firebase'; // Import your Firebase auth instance

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize useNavigate


  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Successfully logged out
        setUser({ isLogin: false, userInfo: {} });
        navigate('/'); // Redirect to home page after logout
       console.log("LOg Out Successfully")
      })
      .catch((error) => {
        // Handle logout error
        console.error('Logout error: ', error);
      });
  };

  return (
    <div className="bg-black text-white text-xs py-3 w-full sm:w-full md:text-lg lg:w-full lg:text-xl text-center">
      <h2>
        {user.isLogin ? (
          <>
            <span>Welcome, {user.userInfo.name}!</span>
            <button onClick={handleLogout} className="ml-4 text-blue-400 hover:text-blue-600">
              Log Out
            </button>
          </>
        ) : (
          <>
            <span>Sign up and get 20% off your first order. </span>
            <button>
              <Link to="/Signup" className="underline">
                Sign Up Now
              </Link>
            </button>
          </>
        )}
      </h2>
    </div>
  );
};

export default Navbar;
