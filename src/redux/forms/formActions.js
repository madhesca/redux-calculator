import { SUBMIT_FORM, HANDLE_CHARGE, HANDLE_AMOUNT } from "./formTypes";

export const setForm = (data) => ({
  type: SUBMIT_FORM,
  payload: data,
});

export const handleCharge = (charge) => ({
  type: HANDLE_CHARGE,
  payload: charge.target.value,
  charge: charge.target.value,
});

export const handleAmount = (amount) => ({
  type: HANDLE_AMOUNT,
  payload: amount,
});

export const handleSubmit = (e, charge, amount) => {
  e.preventDefault();
  const singleExpense = {
    id: Math.random(),
    charge,
    amount,
  };

  return {
    type: SUBMIT_FORM,
    payload: singleExpense,
  };
};
