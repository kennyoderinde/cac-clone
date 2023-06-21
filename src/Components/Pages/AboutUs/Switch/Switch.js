import React, { useState } from "react";
import Vision from '../Switch/Vision'
import Mission from "../Switch/Mission";
import  { Gi3DGlasses, Gi3DStairs } from "react-icons/gi";


const SwitchPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const settingsOptions = [
    { id: 1, name: "Our Vision", icon: <Gi3DGlasses /> },
    { id: 2, name: "Our Mission", icon : <Gi3DStairs /> },
  ];

  const renderSettingsOptions = () => {
    return settingsOptions.map((option) => (
      <li key={option.id}>

      {selectedOption === option.name && (
        <span className="sm:flex min-w-full sm:w-1 h-1 bg-lime-600 "></span>
      )}
        <a
          id='option-style'
          href="#"
          onClick={() => handleOptionClick(option.name)}
          className={` font-roboto sm:flex flex items-center justify-center border-2 sm:min-w-full w-96 h-20  ${
            selectedOption === option.name
              ? " text-black font-roboto hover:text-green-500 text-xl bg-gray-100 "
              : "text-gray-700 hover:text-green-500 font-roboto text-xl "
          }`}
        >
        <span className=" text-4xl p-4">{option.icon}</span>
          {option.name}
        </a>

      </li>
    ));
  };

  const renderSelectedOption = () => {
    switch (selectedOption) {
      case "Our Vision":     //from the settingsoption data
        return <Vision />;
      case "Our Mission":
        return <Mission />;
      default:
        return <Vision />;

    }
  };

  return (
    <div id="experienceSection" className=' sm:z-30 absolute sm:absolute bg-[#020c1b]  sm:p-4 w-full sm:w-full mt-10 '>
          
        <div className="">
          <div className="  ">
              <div className="bg-none hover:text-green-500 shadow-md text-base">
                <ul className="sm:flex sm:flex-row flex flex-col p-4 justify-center items-center bg-yellow-500">{renderSettingsOptions()}</ul>
            </div>
            <div className="sm:w-full w-full sm:h-24 h-28 sm:flex sm:flex-row flex flex-col justify-center items-center sm:justify-center sm:items-center ">
              <div className=" sm:w-3/4 w-3/4 sm:h-full text-lime-600 sm:text-lg base font-medium  text-center bg-white sm:flex sm:flex-row flex flex-col p-4 justify-center  items-center " style={{ fontFamily: 'Roboto Slab' }}>
                {renderSelectedOption()}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SwitchPage;
//BsSunglasses