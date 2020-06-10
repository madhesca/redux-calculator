import { DELETE_ITEM, EDIT_ITEM } from "./itemTypes";
import { SUBMIT_FORM } from "./../forms/formTypes";

const initialExpense = [
  { id: 1, charge: "Rent", amount: 200 },
  { id: 2, charge: "Buy Car", amount: 250 },
  { id: 3, charge: "Buy House", amount: 5000 },
];

const itemReducer = (state = initialExpense, action) => {
  switch (action.type) {
    case DELETE_ITEM:
      return [...state.filter((item) => item.id !== action.payload)];
    case SUBMIT_FORM:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default itemReducer;
