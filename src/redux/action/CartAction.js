import * as types from "./actionType";

export const addToCart = (item) => ({
  type: types.ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (id) => ({
  type: types.REMOVE_FROM_CART,
  payload: id,
});

export const addToCartInitialte = (item) => {
  return function (dispatch) {
    dispatch(addToCart(item));
  };
};
export const removeFromCarttInitialte = (id) => {
  return function (dispatch) {
    dispatch(removeFromCart(id));
  };
};
