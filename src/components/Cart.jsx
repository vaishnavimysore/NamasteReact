import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import { ITEMS_IMG_URL } from "../utils/constants";

const Cart = () => {
  //We subscribe to the cart slice in our redux store, this updates whenever the cart is updated
  const cartData = useSelector((store) => store.cart.items);
  //useDispatch is a react hook used for dispatching an action
  const dispatch = useDispatch();

  const removeAllItems = () => {
    //Dispatching the clear cart action to the reducer
    dispatch(clearCart());
  };
  const handleRemove = (index) => {
    //Dispatching the remove item action to the reducer and we pass the index(ie action.payload) for removing that particular data
    dispatch(removeItem(index));
  };
  return (
    <div>
      <div className=" flex justify-between mx-[600px]">
        <h1 className=" text-red-700 text-3xl">Cart</h1>
        <button
          className="bg-white text-gray-400 border-solid flex justify-between  border border-l-0 border-r-0 px-4 py-2 text-left  rounded-lg"
          onClick={removeAllItems}
        >
          Clear Cart
        </button>
      </div>
      {/*check if there any items in the cart and display those items, else display h1*/}
      {cartData.length === 0 ? (
        <div className="bg-white text-gray-400 border-solid flex justify-between  border border-l-0 border-r-0 px-4 py-8 text-left mx-64 rounded-lg">
          <h1>Cart is empty! Add items to your cart!! </h1>
        </div>
      ) : (
        cartData.map((cartData, index) => (
          <div className="bg-white border-solid flex justify-between  border border-l-0 border-r-0 py-4 text-left mx-64 rounded-lg">
            <div className="">
              <span className="mb-2  ml-4 text-base font-normal leading-tight text-neutral-800 dark:text-neutral-50">
                {cartData.name} - Rs {cartData.price / 100}
              </span>

              <p className="text-xs text-gray-400 w-64 ml-4 mt-2">
                {cartData.description}
              </p>
            </div>

            <div>
              {/*This button is to remove the items added to the cart  */}
              {/*Index from the map func is used as a parameter for the calling func */}
              <button
                className="rounded-md bg-black absolute text-white ml-2 mt-24 p-1"
                onClick={() => handleRemove(index)}
              >
                Remove Item
              </button>
              <img
                className="rounded-md w-[125px] h-[125px] object-fill  space-x-9"
                src={ITEMS_IMG_URL + cartData.imageId}
              ></img>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
