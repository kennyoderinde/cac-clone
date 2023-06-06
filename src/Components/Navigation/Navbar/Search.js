import React, { useState } from 'react';
import SearchInput from './SearchInput';
import { FaSearch, FaAngleDown } from 'react-icons/fa';


const Search = () => {
  const [filteredItems, setFilteredItems] = useState(null);
  const [isSearchVisible, setIsSearchVisible] = useState(false)


  const items = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango'];

  const handleSearch = (filteredItems) => {
    setFilteredItems(filteredItems);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };


  return (
    <>
      <div 
        onClick={toggleSearch}
        className=" sm:flex sm:items-end sm:justify-end sm:-mt-14 sm:space-x-10 sm:mr-12 ">
          <FaSearch className="text-black sm:text-base hover:text-lime-500" />
      </div>
    
    
   
      <div className='z-0  left-20'>
       
      {isSearchVisible && <SearchInput items={items} onSearch={handleSearch} />}

      {(filteredItems !== null && filteredItems.length > 0) ? (
        <ul className='z-20 relative ml-61rem sm:w-72 sm:h-80 bg-white  sm:mt-28 sm:border sm:border-stone-300'>
          {filteredItems.map((item, index) => (
            <li key={index} className='border border-stone-300 h-12 p-3'>
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      </div>
    </>
  );
};

export default Search;
