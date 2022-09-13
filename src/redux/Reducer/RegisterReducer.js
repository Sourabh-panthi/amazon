import * as types from "../action/actionType";
import { initialState } from "./initialState";

const register = (state = initialState.user, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case types.REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
};

export default register;
