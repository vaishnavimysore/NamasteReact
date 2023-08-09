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
    <div className="res-card">
      <div className="res-card-dets">
        <img className="res-img" src={CDN_URL + cloudinaryImageId}></img>
        <h3>{name}</h3>
        <hr></hr>
        <p>{cuisines.join(", ")} </p>
        <p>{avgRating} stars</p>
        <p>{deliveryTime} minutes</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
