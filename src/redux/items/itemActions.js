import { DELETE_ITEM, EDIT_ITEM, DELETE_ALL } from "./itemTypes";
import { ADDED } from "./../alert/alertTypes";

export const addAlert = () => ({
  type: ADDED,
});

export const deleteItem = (id) => {
  addAlert();
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};

export const editItem = (id, expenses) => {
  console.log(expenses);
  // const edited = expense.find((item) => item.id === id);
  // const itemToEdit = {
  //   charge: edited.charge,
  //   amount: edited.amount,
  // };
  // return {
  //   type: EDIT_ITEM,
  //   payload: itemToEdit,
  // };
  return {
    type: EDIT_ITEM,
    payload: expenses,
  };
};

export const deleteAll = () => ({
  type: DELETE_ALL,
});
