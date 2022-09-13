import React from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import {
  addToCartInitialte,
  removeFromCarttInitialte,
} from "../redux/action/CartAction";

const CheckoutProduct = ({
  product_id,
  product_main_image_url,
  product_title,
  isPrime,
  evaluate_rate,
  app_sale_price_currency,
  app_sale_price,
}) => {
  const dispatch = useDispatch();
  const AddToBasket = () => {
    const product = {
      product_id,
      product_main_image_url,
      product_title,
      isPrime,
      evaluate_rate,
      app_sale_price_currency,
      app_sale_price,
    };
    dispatch(addToCartInitialte(product));
  };
  const removeFromBasket = (product_id) => {
    dispatch(removeFromCarttInitialte(product_id));
  };
  return (
    <div className="grid grid-cols-5">
      <img
        src={product_main_image_url}
        alt=""
        className="mx-auto h-32 w-32 object-contain"
      />
      <div className="col-span-4 md:col-span-3 mx-5">
        <p>{product_title}</p>
        <ReactStars
          count={5}
          size={24}
          value={4.5}
          activeColor="#ffd700"
          isHalf={true}
          edit={false}
        />
        <div className="font-bold ">
          {app_sale_price ? (
            <div>
              {app_sale_price_currency} {app_sale_price}
            </div>
          ) : (
            <div>Not Available</div>
          )}
        </div>
        {isPrime ? (
          <div className="flex items-center my-2 space-x-3">
            <img
              src="https://seeklogo.com/images/A/amazon-prime-icon-logo-484A50E84F-seeklogo.com.png"
              alt=""
              className="h-4"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        ) : (
          <div />
        )}
      </div>
      <div className="flex ml-[75px]  col-span-5 md:col-span-1 align-middle justify-evenly  md:flex-col lg:flex-col space-y-2 my-auto md:justify-end">
        <button onClick={AddToBasket} className="button mt-2 text-xs ">
          Add to Basket
        </button>
        <button
          onClick={() => removeFromBasket(product_id)}
          className="button text-xs"
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
