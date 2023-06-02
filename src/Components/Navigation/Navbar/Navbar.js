
import React, { useState } from 'react';
import SocialLinks from '../SocialLinks'
// import navbarData from './NavbarData';
import cacLogo from '../../assets/cac-logo.png'
// import { FaSearch, FaAngleDown } from 'react-icons/fa';

import NavbarItem from './NavbarItem';


import { FaSearch, FaAngleDown } from 'react-icons/fa';


const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const onItemClick = (link) => {
    setActiveItem(link === activeItem ? null : link);
  };


  return (
    <React.Fragment>
      <div className=' w-full grid '>

        <div className= ' w-full h-1 bg-lime-500'></div>
        <SocialLinks />

        <div className="sticky sm:top-0 top-28 w-full sm:w-full sm:h-32 h-24 bg-white border-b border-stone-300 shadow">
         <img src={cacLogo} alt="logo" className="sm:w-44 sm:h-14 w-36 h-12 sm:ml-14 sm:mt-8 ml-8 mt-6" />
         <div className="sm:flex sm:items-end sm:justify-end  sm:space-x-10 sm:mr-12">
          <NavbarItem />
          <div className=" hidden sm:flex sm:items-end sm:justify-end sm:-mt-10 sm:space-x-10 sm:mr-12 ">
              <FaSearch className="text-black sm:text-base hover:text-lime-500" />
          </div> 

         
          {/*  Mobile responsiveness*/}
        </div>
      </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;

