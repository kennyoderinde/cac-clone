import React from 'react'
import contactImg from '../../assets/citty-image.jpeg'
// import Switch from './Switch/Switch'
// import CoreValues from './CoreValues'
import CoatArms from '../../assets/coat2-150x150.jpg'
import Form from '../Contact/Form'
import officePix1 from '../../assets/pexels-photo-4348404.jpeg'
import officePix2 from '../../assets/pexels-photo-7238759.jpeg'



const Contact = () => {
  return (
    <>
      <div className= ' sm:z-10 z-10 sm:max-w-full sm:h-full sm:space-y-0'> 
        <img src={contactImg} alt='about-page-img' className= ' sm:fixed fixed  sm:z-0 sm:w-full  sm:h-42rem h-42rem sm:-mt-24 mt-20  w-full ' />
                
        <div className= ' sm:relative relative sm:w-full sm:h-[42rem] sm:mt-28  w-full h-80 mt-0 bg-black sm:opacity-50 opacity-50 '>
          <div className= '  flex flex-col items-center justify-center text-center space-y-6 sm:pt-52 pt-32'>
            <p className= ' sm:text-8xl text-5xl text-stone-600 font-light ' style={{ fontFamily: 'Roboto Slab' }}> Contact Us </p>
            <span className= ' sm:text-2xl text-lg text-white font-medium font-poppins '>Ways To Get In Touch</span>
          </div>
        </div> 
        
        

        <div className= ' sm:relative relative sm:flex sm:flex-col flex flex-col items-center justify-center sm:w-full w-full sm:h-[95rem] h-[95rem] sm:-mt-8 mt-20 bg-white'>
          <p className= 'text-black sm:text-6xl text-4xl flex text-center font-light leading-snug sm:mt-24 mt-67rem'  style={{ fontFamily: 'Roboto Slab' }}>Send Us An Email</p>
        
          <div className="grid justify-center md:justify-end">
            <p className="px-14 py-6">The functions of the Commission as set out in section 7 of the Companies and Allied Matters Act, includes the following:</p>
            <ul className="flex flex-col items-start justify-start -space-y-20 text-base sm:p-14 sm:-mt-32 -mt-20 px-10  py-5 w-full">
              <li className="text-base font-poppins text-stone-600 p-14">To administer the Act, including the regulation and supervision of the formation, incorporation, management and winding up of companies</li>
              <li className="text-base font-poppins text-stone-600 p-14">To establish and maintain companies registry and offices in all the states of the Federation suitably and adequately equipped to discharge its functions under the Act or any law in respect of which it is charged with responsibility.</li>
            </ul>
          </div>

           <div className= ' w-full h-full sm:w-full sm:h-full sm:flex grid place-items-center sm:-space-x-40'>
            <Form className='relative'/> 

            <div className= ' sm:w-3/12 w-full sm:h-80 h-80 border border-gray-400 sm:ml-20 bg-white'>
              <span className=''>Contact Us</span>
              <p className=''>If you require any level of support for our services please get in touch with us via the methods below:</p>
            </div>

          </div> 

          <div className= '  relative sm:relative w-full h-screen sm:w-full sm:h-screen sm:flex grid sm:mt-24 mt-0 bg-white sm:mb-20 mb-20 place-items-center '>
            <div className= ' sm:w-1/2 w-full sm:h-full h-80 border border-gray-400 '>
              <img src={officePix1} alt='officeplace' className=' sm:w-full sm:h-full max-w-full h-full transition-all duration-700 hover:scale-110 '/>
              <div className='  sm:w-full sm:h-40 w-full h-40 relative -top-80 bg-gray-800 opacity-75 text-center grid place-items-center'>
                <span className=' text-4xl text-lime-500 font-semibold text-center'>Corporate Headquaters</span>
                <p className='text-white text-lg font-medium'>helpdesk@cac.gov.ng</p>
                <p className='text-white text-lg font-medium'>+234 817 567 0315</p>

              </div>
            
            </div>

            <div className= ' sm:w-1/2 w-full sm:h-full h-80 border border-gray-400 '>
              <img src={officePix2} alt='officeplaces' className=' sm:w-full sm:h-full w-full h-full transition-all duration-700 hover:scale-110 '/>
              <div className='sm:w-full sm:h-40 w-full h-40 relative -top-80 bg-gray-800 opacity-75 text-center grid place-items-center'>
                <span className=' text-4xl text-lime-500 font-semibold text-center'> State Offices</span>

              </div>

            </div>

          </div> 
        </div>


        <div className='w-full h-screen relative sm:-top-4 top-59rem '>
          <div className= ' w-full h-3 bg-lime-600 sm:mt-4'></div>
          <div className= ' sm:w-full sm:h-full bg-[#dadbd9]'>
            <p className=' font-semibold uppercase font-poppins sm:pt-14 sm:ml-20 ml-20 pt-5'>CORPORATE HEADQUARTERS</p>
            <img src={CoatArms} alt='coat-arm' className='sm:w-48 sm:h-48 w-28 h-28 mt-8 ml-20'/>
            <span className=' w-40 h-60 flex items-start justify-start ml-20 pt-5 font-poppins font-medium'>
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

export default Contact