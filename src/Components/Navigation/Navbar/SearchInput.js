import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ImNotification } from "react-icons/im";

const SearchInput = ({ items, onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setInputValue(searchTerm);
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );
    onSearch(filteredItems);
  };

  const handleIconClick = () => {
    if (!inputValue) {
      setShowAlert(true);
    }
  };

  const hideAlert = () => {
    setShowAlert(false);
  };

  const Alert = () => (
    <div
      className="fixed z-30 top-64 left-59rem border-2 border-stone-400 bg-gray-100 w-48 h-10 flex items-center text-sm P-1 justify-center text-gray-500 whitespace-nowrap rounded-lg"
      onClick={hideAlert}
    >
      <ImNotification className="text-amber-500 text-2xl" />
      Please fill in this space
    </div>
  );

  //z-00 fixed sm: sm:bg-stone-200 sm:border border-stone-400 sm:p-4
  return (
    <div className="ml-59rem -mt-6 sm:relative sm:w-80 sm:h-24 top-14 bg-stone-200 border sm:flex  ">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        value={inputValue}
        className=" w-full sm:w-56 sm:h-14 p-2 mt-10 outline-none border border-stone-400"
      />

      <div
        className="absolute right-0 top-10 flex justify-center items-center w-16 h-14 bg-black hover:bg-lime-500 border px-5"
        onClick={handleIconClick}
      >
        <FaSearch className="text-white text-lg" />
      </div>

      {showAlert && <Alert className=''/>}
    </div>
  );
};

export default SearchInput;
