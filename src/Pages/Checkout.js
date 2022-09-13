import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import CheckoutProduct from "../Components/CheckoutProduct";
import Header from "../Components/Header";
import { auth } from "../firebase";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(
//   "pk_test_51LhaTKSDHVj6sUesM6RU2SxmfduaBniO6P3peDgsVx9Ps8Of4akc8XafAnCdfhBVi8dUIuS3o9hKfkv3b65Xgpq000pc6bff44"
// );
const Checkout = () => {
  const productList = useSelector((state) => state.ProductList.productList);
  const { basket } = useSelector((state) => state.basket);
  const getTotal = basket.reduce(
    (total, item) => total + Number(item.app_sale_price),
    0
  );
  const [user] = useAuthState(auth);

  //   const createCheckoutSession = async () => {
  //     const stripe = await stripePromise;
  //     const checkoutSession = await axios.post("/create-checkout-session", {
  //       basket: basket,
  //       email: user.email,
  //     });
  //   };
  return (
    <div>
      <Header />
      <main className="max-w-screen-xl lg:flex h-full mx-auto ">
        <div className="flex-grow m-5 shadow-sm">
          <img
            src="https://links.papareact.com/ikj"
            alt=""
            className="object-contain mx-auto mb-5 "
          />
          <div className="flex flex-col p-5 space-y-10  bg-white">
            <h1 className="text-2xl border-b pb-4">
              {basket.length === 0
                ? "Your Amazon Basket is empty"
                : "Shopping Basket"}
            </h1>
            {basket.map(
              (
                {
                  product_id,
                  product_main_image_url,
                  product_title,
                  isPrime,
                  evaluate_rate,
                  app_sale_price_currency,
                  app_sale_price,
                },
                i
              ) => (
                <CheckoutProduct
                  key={i}
                  product_id={product_id}
                  product_main_image_url={product_main_image_url}
                  product_title={product_title}
                  isPrime={isPrime}
                  evaluate_rate={evaluate_rate}
                  app_sale_price_currency={app_sale_price_currency}
                  app_sale_price={app_sale_price}
                />
              )
            )}
          </div>
        </div>
        <div className="flex flex-col  m-5 lg:-ml-2 bg-white p-10 shadow-md">
          {productList.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal{" "}
                <span className="font-bold"> ({basket.length} items)</span>{" "}
                <span className="font-bold">:${getTotal}</span>
              </h2>

              <button
                // onClick={createCheckoutSession}
                type="submit"
                disabled={!user}
                className={` ${
                  user
                    ? "button mt-2 "
                    : " bg-gray-500 mt-2 p-2 mx-3 text-sm  md:text-sm rounded-sm border-gray-200 text-gray-300  cursor-not-allowed"
                }`}
              >
                {!user ? "Sign In to Checkout" : "Proceed to Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
