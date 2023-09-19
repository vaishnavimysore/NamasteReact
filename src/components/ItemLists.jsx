import { ITEMS_IMG_URL } from "../utils/constants";
const ItemLists = ({ data }) => {
  console.log(data);

  return (
    <div className="bg-white border-solid flex justify-between  border border-l-0 border-r-0 py-4 text-left">
      <div className="">
        <span className="mb-2  ml-4 text-base font-normal leading-tight text-neutral-800 dark:text-neutral-50">
          {data.name} - Rs {data.price / 100}
        </span>

        <p className="text-xs text-gray-400 w-64 ml-4 mt-2">
          {data.description}
        </p>
      </div>

      <div>
        <button className="rounded-md bg-black absolute text-white ml-16 mt-24 p-1">
          Add +
        </button>
        <img
          className="rounded-md w-[125px] h-[125px] object-fill  space-x-9"
          src={ITEMS_IMG_URL + data.imageId}
        ></img>
      </div>
    </div>
  );
};

export default ItemLists;
