import React from 'react'
import abtImg from '../../assets/pexels-photo-1181317.jpeg'
import Switch from './Switch/Switch'
import CoreValues from './CoreValues'
import CoatArms from '../../assets/coat2-150x150.jpg'


const AboutUs = () => {
  return (
    <>
      <div className= ' sm:z-10 z-10 sm:max-w-full sm:h-full sm:space-y-0'> 
        <img src={abtImg} alt='about-page-img' className= ' sm:fixed fixed  sm:z-0 sm:w-full sm:h-42rem h-42rem sm:-mt-24 mt-20  w-full ' />
                
        <div className= ' sm:relative  sm:w-full sm:h-[42rem] sm:mt-28  w-full h-80 mt-0 bg-black sm:opacity-50 opacity-50 '>
          <div className= '  flex flex-col items-center justify-center text-center space-y-6 sm:pt-52 pt-32'>
            <p className= ' sm:text-8xl text-5xl text-stone-400 font-light ' style={{ fontFamily: 'Roboto Slab' }}> Who we are  </p>
            <span className= ' sm:text-2xl text-lg text-white font-medium font-poppins '>Who we are</span>
          </div>
        </div> 
        
        <div className= ' sm:relative relative sm:flex  sm:items-center sm:justify-center sm:w-full w-full sm:h-96 h-96 bg-white sm:mt-10 -mt-10 space'>
          <div className= ' sm:w-1/2 w-full sm:h-full h-full bg-white sm:p-20 p-14 sm-space-y-8 space-y-8'>
            <p className= ' uppercase  text-stone-500 font-poppins text-lg font-semibold leading-normal'>Welcome to Corporate Affairs Commission</p>
            <span className= 'text-black sm:text-6xl text-4xl flex text-justify font-light leading-normal tracking-wide' style={{ fontFamily: 'Roboto Slab' }}>Nigeria's Corporate Registry</span>
          </div>
          <div className= ' sm:w-1/2 w-full sm:h-96 h-[42] bg-white sm:p-20 p-14 sm:mt-0 -mt-10 '>
            <p className= ' text-stone-500 font-poppins text-base font-medium sm:-mt-2 -mt-24'>The Corporate Affairs Commission was established by the Companies 
                  and Allied Matters Act, which was promulgated in 1990 to regulate the
                  formation and management of companies in Nigeria.
            </p>
            <span className=' text-stone-500 font-poppins text-base font-medium leading-normal sm:mt-6 mt-6'>The establishment of the Corporate Affairs Commission as an autonomous 
                body was as a result of the perceived inefficiency and 
                ineffectiveness of the  erstwhile Company Registry, a department within 
                the Federal Ministry of Commerce and Tourism  which was then responsible for 
                the registration and administration of the repealed Companies Act of 1968  
            </span>
          </div>
        </div>

        <div className= ' sm:relative relative sm:flex sm:flex-col flex flex-col items-center justify-center sm:w-full w-full sm:h-[31rem] h-[74rem] sm:-mt-8 mt-40 bg-white'>
          <p className= 'text-black sm:text-6xl text-4xl flex text-center font-light leading-snug sm:mt-10 mt-20'  style={{ fontFamily: 'Roboto Slab' }}>Functions of the Commission</p>
        
          <div className="grid justify-center md:justify-end">
            <p className="px-14 py-6">The functions of the Commission as set out in section 7 of the Companies and Allied Matters Act, includes the following:</p>
            <ul className="flex flex-col items-start justify-start -space-y-20 text-base sm:p-14 sm:-mt-32 -mt-20 px-10  py-5 w-full">
              <li className="text-base font-poppins text-stone-600 p-14">To administer the Act, including the regulation and supervision of the formation, incorporation, management and winding up of companies</li>
              <li className="text-base font-poppins text-stone-600 p-14">To establish and maintain companies registry and offices in all the states of the Federation suitably and adequately equipped to discharge its functions under the Act or any law in respect of which it is charged with responsibility.</li>
              <li className="text-base font-poppins text-stone-600 p-14">Arrange and conduct an investigation into the affairs of any company where the interests of the shareholders and the public so demand.</li>
              <li className="text-base font-poppins text-stone-600 p-14">To undertake such other activities as are necessary or expedient for giving full effect to the provisions of the Act.</li>
              <li className="text-base font-poppins text-stone-600 p-14">The Commission also registers Business Names, and Incorporated Trustees as well as provides a wide range of ancillary services.</li>
            </ul>
          </div>

        </div>

        <Switch className= 'absolute' />
        <CoreValues />

        <div className='w-full h-screen relative sm:top-52 top-80 '>
          <div className= ' w-full h-3 bg-lime-600 sm:mt-4'></div>
          <div className= ' sm:w-full sm:h-full bg-[#dadbd9]'>
            <p className=' font-semibold uppercase font-poppins sm:pt-14 sm:ml-20 ml-20 pt-5'>CORPORATE HEADQUARTERS</p>
            <img src={CoatArms} alt='coat-arm' className='sm:w-48 sm:h-48 w-28 h-28 mt-8 ml-20'/>
            <span className=' w-40 h-60 flex items-start justify-start ml-20 pt-5 font-poppins font-semibold'>
              Plot 420, Tigris Crescent,
              Off Aguiyi Ironsi Street,
              Maitama, Abuja.
              Nigeria.
            </span>
          </div>
          <div className= 'flex item-center justify-center text-center w-full h-16 bg-lime-900 font-poppins text-white text-sm pt-6'>© Copyright 2019 - 2023 | CAC | All Rights Reserved | Powered by @kennyoderyndeh</div>
          </div>
        
      </div> 
    </>
  )
}

export default AboutUs