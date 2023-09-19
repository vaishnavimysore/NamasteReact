import { useState } from "react";
import ItemLists from "./ItemLists";
import { useState } from "react";

const ResCategory = ({ items, index, setIndex }) => {
  const handleClick = () => {
    setIndex();
  };
  //To use && with .map() dont use {} with .map
  //Remember not to use {} inside map function, use () instead
  return (
    <div className="bg-white border-solid justify-between  border border-l-0 border-r-0 py-4 ">
      <span className="font-semibold cursor-pointer" onClick={handleClick}>
        {items.title} ({items.itemCards.length})
      </span>
      <div>
        {index &&
          items.itemCards.map((item) => (
            <ItemLists data={item?.card?.info} key={item?.card.id} />
          ))}
      </div>
    </div>
  );
};

export default ResCategory;
