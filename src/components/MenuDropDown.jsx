import Collapsible from "react-collapsible";
import { ITEMS_IMG_URL } from "../utils/constants";

const MenuDropDown = (props) => {
  const { menuData } = props;
  const { name, price, imageId, description } = menuData?.card?.info;
  console.log(menuData?.card?.info);
  return (
    <div className="bg-white border-solid flex justify-between  border border-l-0 border-r-0 py-4 text-left">
      <div className="">
        <span className="mb-2  ml-4 text-base font-normal leading-tight text-neutral-800 dark:text-neutral-50">
          {name}
        </span>
        <span className="mb-2  ml-4 text-base text-neutral-600 dark:text-neutral-200">
          - Rs {price / 100}
        </span>
        <p className="text-xs text-gray-400 w-64 ml-4 mt-2">{description}</p>
      </div>

      <div>
        <button className="rounded-md bg-black absolute text-white ml-16 mt-24 p-1">
          Add +
        </button>
        <img
          className="rounded-md w-[125px] h-[125px] object-fill  space-x-9"
          src={ITEMS_IMG_URL + imageId}
        ></img>
      </div>
    </div>
  );
};

export default MenuDropDown;
