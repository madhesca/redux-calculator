import { DEFAULT, HANDLE_CHARGE, HANDLE_AMOUNT, EMPTY } from "./formTypes";

const initialState = {
  charge: "",
  amount: ""
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHARGE:
      return {
        ...state,
        charge: action.payload
      };
    case HANDLE_AMOUNT:
      return {
        ...state,
        amount: action.payload
      };

    case DEFAULT:
      return {
        ...state
      };

    case EMPTY:
      return {
        ...state,
        charge: "",
        amount: ""
      };
    default:
      return state;
  }
};

export default formReducer;
