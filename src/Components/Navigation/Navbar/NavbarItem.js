
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Us', path: '/about-us' },
    { id: 'resources', label: 'Resources', path: '/resources' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'news', label: 'News', path: '/news' },
    { id: 'foi-portal', label: 'Foi-portal', path: '/foi-portal' },
    { id: 'contact-us', label: 'Contact', path: '/contact-us' },

  ];

  return (
    <>
      <nav className="hidden sm:flex sm:items-end sm:justify-end -mt-12 sm:space-x-10 sm:mr-12">
      <ul className="sm:flex sm:space-x-12 sm:-mt-11 " >
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer sm:flex sm:items-center font-mono ${
              location.pathname === item.path ? 'text-lime-600  sm:h-24 border-t-4 border-lime-500   ' : 'text-black'
            }`}
          >
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>

    <div onClick={() => setNav(!nav)} className="sm:hidden cursor-pointer flex items-end justify-end pr-8 -mt-8 text-gray-500 z-10">
      {nav ? <FaTimes className="text-gray-400" size={25} /> : <HiMenu className="text-gray-400" size={25} />}
    </div>

    {nav && (
      <nav className=" z-30 sm:hidden inline-block items-start justify-start w-full mt-8 ">
      <ul className=" bg-stone-100 mt-8" style={{ fontFamily: 'Roboto Slab' }}>
        {navItems.map((item) => (
          <li 
            key={item.id}
            className={`cursor-pointer w-full h-12 ml-8  font-mono border-b border-gray-300 flex items-center  ${
              location.pathname === item.path ? 'text-lime-600 ' : 'text-black'
            }`}
          >
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
    )}

    </>
  );
};

export default Navbar;
