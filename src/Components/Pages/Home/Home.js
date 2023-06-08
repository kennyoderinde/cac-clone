import React from 'react'
import cacBuilding from '../../assets/cacheadquater.jpg'
import { FaSearch, FaDesktop } from 'react-icons/fa';
import Cards from './Cards'
import CircleIcon from './CircleIcon';
import CoatArms from '../../assets/coat2-150x150.jpg'



const Home = () => {
  return (
    <>
    <div className='sm:max-w-full sm:h-full'>
      <img src={cacBuilding} alt='' className='sm:w-full sm:h-full sm:mt-28  w-full h-full mt-10 '/>
      <h1 className=' sm:flex sm:items-center sm:justify-center sm:text-7xl sm:font-light flex flex-wrap items-center justify-center px-4 text-4xl font-light sm:-mt-64 -mt-32  delay-700 duration-700' style={{ fontFamily: 'Roboto Slab' }}>Nigerian Corporate Registry</h1>
      
      <div className='  mt-20 m p-10 sm:flex sm:items-center sm:justify-center sm:space-x-20 sm:mt-40 sm:p-14'>
      <button className=' z-0 sm:z-0 w-full h-14 flex items-center  sm:w-full sm:h-14 sm:p-2 sm:flex justify-center sm:items-center uppercase text-lime-700 font-semibold gap-4 border-t border-b-2  bg-gradient-to-t from-lime-400  to-lime-200 rounded drop-shadow-2xl ' style={{ borderBottom: '3px solid rgb(17, 85, 17)'}}>
        <FaSearch className=" sm:text-base text-white shadow-md " /> Public Search
      </button>

      <button className=' z-0 sm:z-0 w-full h-14 flex items-center  sm:w-full sm:h-14 sm:p-2 sm:flex justify-center sm:items-center uppercase text-lime-700 font-semibold gap-4 border-t border-b-2  bg-gradient-to-t from-lime-400  to-lime-200 rounded drop-shadow-2xl ' style={{ borderBottom: '3px solid rgb(17, 85, 17)'}}>
        <FaDesktop className=" sm:text-base text-white shadow-md " />  Online Registration
      </button>
      </div>
    </div>

    <div className=' relative w-full h-16 -top-8  sm:relative sm:w-full sm:h-24 sm:-top-8 rounded-t-full  bg-[#ebe8e5] '></div>

    <Cards />

      {/* Text: Step by step registration */}
    <div className=' text-5xl sm:text-7xl font-light text-lime-700 sm:flex sm:justify-center text-center sm:-mt-32 mt-44 leading-normal' style={{ fontFamily: 'Roboto Slab' }}>Step by step registration </div>


    {/* displays the 3 icons */}
    <CircleIcon />
    <div className='mt-[36rem] sm:mt-4'>
    <div className= ' w-full h-3 bg-lime-500'></div>
    <div className= ' sm:w-full sm:h-full bg-[#ebe8e5]'>
      <p className=' font-semibold uppercase font-poppins sm:pt-14 sm:ml-20 ml-20 pt-5'>CORPORATE HEADQUARTERS</p>
      <img src={CoatArms} alt='coat-arm' className='sm:w-48 sm:h-48 w-28 h-28 mt-8 ml-20'/>
      <span className=' w-40 h-60 flex items-start justify-start ml-20 pt-5 font-poppins font-semibold'>
        Plot 420, Tigris Crescent,
        Off Aguiyi Ironsi Street,
        Maitama, Abuja.
        Nigeria.
      </span>
    </div>
    <div className= 'flex item-center justify-center text-center w-full h-16 bg-lime-900 font-poppins text-white text-xs pt-6'>© Copyright 2019 - 2023 | CAC | All Rights Reserved | Powered by @kennyoderyndeh</div>
    </div>

    </>
  )
}

export default Home