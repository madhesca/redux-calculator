import { DELETE_ITEM, DELETE_ALL } from "./itemTypes";
import { ADDED, NOALERT } from "./../alert/alertTypes";
import { HANDLE_CHARGE, HANDLE_AMOUNT } from "../forms/formTypes";
import { SET_EDIT } from "../edit/editTypes";

export const addAlert = () => ({
  type: ADDED
});

export const noAlert = () => {
  return {
    type: NOALERT
  };
};

export const deleteItem = id => {
  addAlert();
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

const setEdit = id => ({
  type: SET_EDIT,
  payload: id
});

export const editItem = (id, expenses) => {
  const editThis = expenses.find(item => item.id === id);

  return dispatch => {
    dispatch(handleCharge(editThis.charge));
    dispatch(handleAmount(editThis.amount));
    dispatch(setEdit(id));
  };
};

const handleCharge = charge => ({
  type: HANDLE_CHARGE,
  payload: charge
});

const handleAmount = amount => ({
  type: HANDLE_AMOUNT,
  payload: amount
});

export const deleteAll = () => {
  return {
    type: DELETE_ALL
  };
};
