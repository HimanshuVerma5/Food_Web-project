import React, { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-pink-100 shadow-lg p-4 rounded-lg">
      <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span className={`transition-transform duration-300 ${showItems ? 'rotate-180' : 'rotate-0'}`}>
          🔽
        </span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
