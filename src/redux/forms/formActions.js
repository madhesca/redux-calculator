import { SUBMIT_FORM, HANDLE_CHARGE, HANDLE_AMOUNT, DEFAULT, EMPTY } from "./formTypes";
import { EDIT_FORM } from "../items/itemTypes";
import { NO_EDIT } from "../edit/editTypes";

export const setForm = data => ({
  type: SUBMIT_FORM,
  payload: data
});

export const handleCharge = charge => ({
  type: HANDLE_CHARGE,
  payload: charge.target.value
});

export const handleAmount = amount => ({
  type: HANDLE_AMOUNT,
  payload: amount
});

export const empty = () => ({
  type: EMPTY
});

export const noEdit = () => ({
  type: NO_EDIT
});

export const handleSubmit = (e, charge, amount, expenses, edits) => {
  e.preventDefault();
  const singleExpense = {
    id: Math.random(),
    charge,
    amount
  };

  let { isEdit, editId } = edits;

  if (charge !== "" && amount > 0) {
    if (isEdit) {
      const tempExpenses = expenses.map(item => {
        return item.id === editId ? { ...item, charge, amount } : { ...item };
      });

      const result = {
        type: EDIT_FORM,
        payload: tempExpenses
      };

      return result;
    } else {
      const result = {
        type: SUBMIT_FORM,
        payload: singleExpense
      };

      return result;
    }
  } else {
    alert("wrong");
    return {
      type: DEFAULT
    };
  }
};
