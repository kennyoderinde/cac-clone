import { IoIosPeople } from 'react-icons/io';
import { BsBank2 } from "react-icons/bs";
import { MdOutlinePointOfSale } from "react-icons/md";


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

const IconData = [
    { id: 1, icon: BsBank2, title: 'Companies', text2: 'Find out the step by step process for Registration of company.', path: '/card1' },
    { id: 2, icon: MdOutlinePointOfSale, title: 'Business Names', text2: 'Find out the step by step process for Business Name Registration.', path: '/card2' },
    { id: 3, icon: IoIosPeople, title: 'Incorporated Trustee', text2: 'All you need to know about registering an Incorporated Trustees.', path: '/card3' },
  ];


const StepIcon = () => {
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className='w-full h-96 sm:w-full sm:h-96 sm:mt-20 mt-10 '>
    <div className= ' flex flex-cp sm:flex sm:items-center justify-center text-center sm:space-x-16 '>
      {IconData.map(({ id, icon: Icon, title, text2, path }) => ( // Fixed the variable name 'icon' to 'Icon' and added parentheses for mapping
        <div className=' sm:w-80 sm:h-80 border-2 sm:flex sm:justify-center sm:space-y-10 ' key={id}>
          <Link to={path} className=" mt-6 sm:mt-10" onClick={handleButtonClick}>
            <div className="sm:w-28 sm:h-28 rounded-full bg-lime-600 sm:flex sm:justify-center sm:items-center ml-24"><Icon  className=' text-white sm:text-6xl sm:flex :text-center '/></div> {/* Render the icon component */}
            <span className="text-base text-gray-600 font-light sm:mt-12 p-6 sm:items-center" style={{ fontFamily: 'Roboto Slab' }}>{title}</span> {/* Changed 'text' to 'title' */}
            
            <div>
                <span className="text-base text-gray-600 font-medium sm:items-center ">{text2}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}

export default StepIcon;
