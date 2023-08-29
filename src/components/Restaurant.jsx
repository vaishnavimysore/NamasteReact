import { CDN_URL } from "../utils/constants.js";

//Fucntional component for the Restaurant Card which is part of the body
//Res-card dets and res-img are contained in the res-card.
//The source for image is the from the cloudinary site, with the ImageID changing for each image.
//To reuse the Restaurant car component with multiple values we use props, destructure it and use the properties of it with {}'s
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <div className="">
      <div className="mx-3 mt-6 w-[300px] h-[450px] bg-gradient-to-b from-white  to-red-100 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
        <img
          className="rounded-t-lg h-[250px] object-fill"
          src={CDN_URL + cloudinaryImageId}
        ></img>

        <hr></hr>
        <div className="bg-gradient-to-b from-white  to-red-100">
          <div>
            <h3 className="mb-2  ml-4 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {name}
            </h3>
          </div>
          <div>
            <p className="mb-4  ml-4 text-base text-neutral-600 dark:text-neutral-200">
              {cuisines.join(", ")}{" "}
            </p>
          </div>
          <div>
            <p className="mb-4 ml-4 text-base text-neutral-600 dark:text-neutral-200">
              {avgRating} stars
            </p>
          </div>
          <div>
            <p className="mb-4  ml-4 text-base text-neutral-600 dark:text-neutral-200">
              {deliveryTime} minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
