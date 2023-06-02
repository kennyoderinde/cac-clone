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
    <div className= ' grid sm:flex sm:items-center items-center justify-center text-center sm:space-x-16 '>
      {IconData.map(({ id, icon: Icon, title, text2, path }) => ( // Fixed the variable name 'icon' to 'Icon' and added parentheses for mapping
        <div className=' w-full h-80 sm:w-80 sm:h-80 border-2 flex justify-center items-center sm:flex sm:justify-center sm:space-y-10 space-y-10 ml-0  ' 
        key={id}
        >
          <Link to={path} className=" mt-6 sm:mt-10" onClick={handleButtonClick}>
            <div className=" w-28 h-28 sm:w-28 sm:h-28 rounded-full bg-lime-600 flex justify-center items-center sm:flex sm:justify-center sm:items-center sm:mt-0 -mt-10 ml-48 sm:ml-24 "><Icon  className=' text-white text-6xl flex :text-center sm:text-white sm:text-6xl sm:flex :text-center '/></div> {/* Render the icon component */}
            <span className="text-base text-gray-600 font-light sm:mt-12 pt-6 sm:items-center sm:text-center text-center  " style={{ fontFamily: 'Roboto Slab' }}>{title}</span> {/* Changed 'text' to 'title' */}
            
            <div>
                <span className="text-base text-gray-600 font-medium sm:text-center text-center sm:items-center sm:px-0 px-6 ">{text2}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}

export default StepIcon;
