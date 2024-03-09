import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex items-center justify-center bg-gray-800 text-white h-16">
      <Link to="/" className="flex items-center">
        {/* <img
          src="/path_to_your_logo.png"
          alt="Raksha Logo"
          className="h-8 w-auto"
        /> */}
        <span className="ml-2 text-lg font-semibold">Raksha</span>
      </Link>
    </div>
  );
};

export default Navbar;