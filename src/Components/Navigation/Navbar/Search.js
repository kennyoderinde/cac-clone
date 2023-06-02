import React, { useState } from 'react';
import SearchInput from './SearchInput';

const App = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const items = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango'];

  const handleSearch = (filteredItems) => {
    setFilteredItems(filteredItems);
  };

  return (
    <div>
      <h1>Item Search</h1>
      <SearchInput items={items} onSearch={handleSearch} />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
