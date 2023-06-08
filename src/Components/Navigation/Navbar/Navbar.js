
import React, { useState, useEffect } from 'react';
import SocialLinks from '../SocialLinks'
// import navbarData from './NavbarData';
import cacLogo from '../../assets/cac-logo.png'
import Search from './Search'

import NavbarItem from './NavbarItem';


// import { FaSearch, FaAngleDown } from 'react-icons/fa';


const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const onItemClick = (link) => {
    setActiveItem(link === activeItem ? null : link);
  };


// Navbar scroll when page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <div className=' sm:z-20 z-20 w-full grid '>

        <div className= ' sm:z-20 z-20 w-full h-1 bg-lime-500'></div>
        <SocialLinks  className={` relative sm:relative ${isScrolled ? 'hidden' : ''}`}/>


        <div className={` sm:z-20 z-20 sm:fixed fixed sm:-mt-12 top-28 w-full sm:w-full sm:h-32 h-24 bg-white border-b border-stone-300 shadow ${isScrolled ? 'top-0 sm:top-12' : ''}`}>
         <img src={cacLogo} alt="logo" className="sm:w-44 sm:h-14 w-36 h-12 sm:ml-14 sm:mt-8 ml-8 mt-6" />
         <div className="sm:flex sm:items-end sm:justify-end  sm:space-x-10 sm:mr-12">
          <NavbarItem />

        </div>
        {/* search bar */}
        <Search className= "relative"/>


      </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;

