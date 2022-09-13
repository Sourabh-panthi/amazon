import { combineReducers } from "redux";
import ProductListReducer from "./ProductListReducer";
import CartReducer from "./CartReducer";
export default combineReducers({
  ProductList: ProductListReducer,
  basket: CartReducer,
});
