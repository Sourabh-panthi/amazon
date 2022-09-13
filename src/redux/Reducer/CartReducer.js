import * as types from "../action/actionType";
import { initialState } from "./initialState";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      const newBasket = [...state.basket, action.payload];
      return {
        ...state,
        basket: newBasket,
      };
    case types.REMOVE_FROM_CART:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.product_id === action.payload
      );
      console.log("index", index);
      let newCart = [...state.basket];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Cant remove product`);
      }
      return {
        ...state,
        basket: newCart,
      };
    default:
      return state;
  }
}
