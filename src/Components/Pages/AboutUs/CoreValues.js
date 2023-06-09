import React, { useState } from 'react'

import { FaRegThumbsUp, FaRegLightbulb, FaRegEye, FaRegEdit } from 'react-icons/fa';





const projectsData = [
  {
    id: 1,
    icon: <FaRegThumbsUp onClick={() => handleClick('https://e-commerce-redux-project.vercel.app/')} />,
    title: 'Courtesy',
  },

  {
    id: 2,
    icon: <FaRegLightbulb onClick={() => handleClick('https://e-commerce-redux-project.vercel.app/')} />,
    title: 'Integrity',
  },
  {
    id: 3,
    icon: <FaRegEye onClick={() => handleClick('https://e-commerce-redux-project.vercel.app/')} />,
    title: 'Dedication',
  },
  {
    id: 4,
    icon: <FaRegEdit onClick={() => handleClick('https://e-commerce-redux-project.vercel.app/')} />,
    title: 'Efficiency',
  },
  
  
];

const handleClick = (url) => {
  window.open(url);
};

const ProjectList = () => {
  

    return (
        <React.Fragment>
            <div className='relative sm:relative sm:w-full w-full sm:h-full h-full  sm:top-60 top-80 bg-white sm:space-y-10'>
                <p className=' sm:text-7xl text-5xl text-center font-light pt-10' style={{ fontFamily: 'Roboto Slab' }}>Our Core Values</p>
                <div className=' grid grid-cols-2 gap-4 md:grid-cols-3 sm:flex sm:items-center sm:justify-center place-items-center mt-6 sm:pb-16 pb-6 '>
                    {projectsData.map((project) => (
                    
                    <div 
                        key={project.id}
                        className='  inline-block card bg-gray-400 w-72 h-72 shadow-xl shadow-lime-400  border-b-4 border-lime-700 '
                    >
                        <div className=''>
                            <span className=" flex items-center justify-center text-center font-medium text-gray-100 font-montserrat text-9xl sm:mt-6  mt-3 p-5 uppercase   ">{project.icon}</span>
                            <span className=" flex items-center justify-center text-base text-center font-medium text-gray-100 font-montserrat sm:mt-1 -mt-3 p-5 uppercase  ">{project.title}</span>
                        </div>
                    </div>
                    ))}
                </div>
          </div>
        </React.Fragment>
      )
    }

export default ProjectList


