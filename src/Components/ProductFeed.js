import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { ProductListinitiate } from "../redux/action/ProductListAction";

const ProductFeed = () => {
  const productList = useSelector((state) => state.ProductList.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!productList) {
      dispatch(ProductListinitiate());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:-mt-52 -mt-20">
      {productList
        ?.slice(0, 4)
        .map(
          ({
            product_id,
            product_main_image_url,
            product_title,
            isPrime,
            evaluate_rate,
            app_sale_price_currency,
            app_sale_price,
          }) => (
            <Product
              key={product_id}
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
      <img
        src="http://links.papareact.com/dyz"
        alt=""
        className="sm:col-span-full px-5 "
      />
      <div className="sm:col-span-2">
        {productList
          ?.slice(4, 5)
          .map(
            ({
              product_id,
              product_main_image_url,
              product_title,
              isPrime,
              evaluate_rate,
              app_sale_price_currency,
              app_sale_price,
            }) => (
              <Product
                className="py-3"
                key={product_id}
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
      {productList
        ?.slice(5, productList.lenght)
        .map(
          ({
            product_id,
            product_main_image_url,
            product_title,
            isPrime,
            evaluate_rate,
            app_sale_price_currency,
            app_sale_price,
          }) => (
            <Product
              key={product_id}
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
  );
};

export default ProductFeed;
