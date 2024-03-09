import React from 'react';

import Logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className="flex items-center justify-center bg-gray-800 text-white h-16">
      <img
        src={Logo}
        alt="Raksha Logo"
        className="h-8 w-auto"
      />
      <span className="ml-2 text-lg font-semibold">Raksha</span>
    </div>
  );
};

export default Navbar;
