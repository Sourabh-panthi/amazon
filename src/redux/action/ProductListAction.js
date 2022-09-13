import * as types from "./actionType";
import ProductListApi from "../api/ProductListApi";

export const getProductList = () => {
  return {
    type: types.GET_PRODUCT_LIST,
  };
};

export const getProductListRes = (data) => {
  return {
    type: types.GET_PRODUCT_LIST_RES,
    payload: data,
  };
};

export const ProductListinitiate = () => {
  return function (dispatch) {
    dispatch(getProductList());
    ProductListApi()
      .then(function (response) {
        dispatch(getProductListRes(response.data.docs));
      })
      .catch(function (error) {});
  };
};
