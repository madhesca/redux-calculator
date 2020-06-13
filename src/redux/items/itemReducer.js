import { DELETE_ITEM, EDIT_ITEM, DELETE_ALL, EDIT_FORM } from "./itemTypes";
import { SUBMIT_FORM } from "./../forms/formTypes";

const initialExpense = [
  { id: 1, charge: "Rent", amount: 200 },
  { id: 2, charge: "Buy Car", amount: 250 },
  { id: 3, charge: "Buy House", amount: 5000 }
];

const itemReducer = (state = initialExpense, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return [...state, action.payload];

    case EDIT_FORM:
      return action.payload;

    case EDIT_ITEM:
      const newState = action.payload;
      return [newState];

    case DELETE_ITEM:
      return [...state.filter(item => item.id !== action.payload)];

    case DELETE_ALL:
      return [];
    default:
      return state;
  }
};

export default itemReducer;
