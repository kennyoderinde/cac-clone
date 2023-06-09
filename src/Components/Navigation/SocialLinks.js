import React from 'react';
import {AiFillInstagram, AiOutlineMail, AiFillTwitterCircle} from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";


const SocialLinks = () => {


    const links = [

                {
                    id:1,
                    child: (
                      <div className='flex sm:w-10 sm:h-10 w-8 h-8 bg-cyan-700 rounded-md items-center justify-center text-white '>
                       <GrFacebookOption size={20} className='' />
                      </div>
                    ),
                    
                    href: 'https://twitter.com/OderindeKehin16',
                    style: 'rounded-tr-md'
                  },
            
            
                {
                  id:2,
                  child: (
                    <div className='flex sm:w-10 sm:h-10 w-8 h-8 bg-sky-300 rounded-md items-center justify-center text-white '>
                    <AiFillTwitterCircle size={20} className='' />
                    </div>
                  ),
                  
                  href: 'https://twitter.com/OderindeKehin16',
                  style: 'rounded-tr-md'
                },
            
                {
                  id:3,
                  child: (
                    <div className='flex sm:w-10 sm:h-10 w-8 h-8 bg-teal-700 rounded-md items-center justify-center text-white '>
                    <AiFillInstagram  size={20} className='' />
                    </div>
                  ),
                  
                  href: 'https://www.instagram.com/kordatech1/',
                  style: 'rounded-tr-md'
                },
        
                {
                    id:4,
                    child: (
                      <div className='flex sm:w-10 sm:h-10 w-8 h-8 bg-black rounded-md items-center justify-center text-white '>
                       <AiOutlineMail size={20} className='' />
                      </div>
                    ),
                    
                    href: 'https://twitter.com/OderindeKehin16',
                    style: 'rounded-tr-md'
                  },      
              ]
  return (
    
    <div className="w-full z-10 sm:h-16 h-28 bg-gray-800 sm:flex sm:items-center grid place-items-center">
         <p className=' whitespace-nowrap font-medium text-[10px] sm:text-xs sm:ml-16 sm:px-2 flex sm:m-auto items-center justify-center text-white  '>Call Us Today! 234 708-062-9000 | helpdesk@cac.gov.ng</p>
       
        <ul className=' flex items-center h-full space-x-3 mr-12' >
            {
            links.map(({ id, child, href, style}) => {
            return (
             <li 
                className=''
                key={id}
             >
                <a href={href} 
                target='_blank'
                rel='noreferrer'
                className=" ">
                    
                {child}
                </a>
             </li>
            )
            })
            }
        </ul>
    </div>
    
  )
}

export default SocialLinks

