import { HANDLE_CHARGE, HANDLE_AMOUNT } from "./formTypes";

const initialState = {
  charge: "",
  amount: "",
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHARGE:
      return {
        ...state,
        charge: action.payload,
      };
    case HANDLE_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };

    default:
      return state;
  }
};

export default formReducer;
