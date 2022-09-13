import * as types from "../action/actionType";
import { initialState } from "./initialState";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState.productList, action) {
  switch (action.type) {
    case types.GET_PRODUCT_LIST_RES:
      return {
        ...state,
        productList: action.payload,
      };
    default:
      return state;
  }
}
