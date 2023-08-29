import Collapsible from "react-collapsible";
import { ITEMS_IMG_URL } from "../utils/constants";

const MenuDropDown = (props) => {
  const { menuData } = props;
  const { name, price, imageId } = menuData?.card?.info;
  return (
    <div className="bg-white flex flex-wrap justify-between border-solid border border-l-0 border-r-0 py-4">
      <div>
        <h1 className="mb-2  ml-4 text-base font-normal leading-tight text-neutral-800 dark:text-neutral-50">
          {name}
        </h1>
        <p className="mb-2  ml-4 text-sm text-neutral-600 dark:text-neutral-200">
          - Rs {price / 100}
        </p>
      </div>
      <div>
        <img
          className="rounded-md w-[125px] h-[125px] object-fill  space-x-9"
          src={ITEMS_IMG_URL + imageId}
        ></img>
      </div>
    </div>
  );
};

export default MenuDropDown;
