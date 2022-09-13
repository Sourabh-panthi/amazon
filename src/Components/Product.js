import React from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addToCartInitialte } from "../redux/action/CartAction";

const Product = ({
  product_id,
  product_main_image_url,
  product_title,
  isPrime,
  evaluate_rate,
  app_sale_price_currency,
  app_sale_price,
}) => {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
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

  return (
    <div className="relative rounded-md flex flex-col content-center z-30 bg-white p-5 m-5 text-start ">
      <img
        src={product_main_image_url}
        alt=""
        className="mx-auto h-40 w-40 object-contain"
      />
      <div className="m-3">
        <h4 className="line-clamp-2">{product_title}</h4>
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
          <div className="my-8" />
        )}
      </div>
      <button onClick={handleAddToBasket} className="button">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
