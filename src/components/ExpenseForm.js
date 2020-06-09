import React from "react";

function ExpenseForm({ charge, amount, handleCharge, handleAmount, edit, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ex. Buy House" onChange={e => handleCharge(e)} value={charge} />
        <input type="text" placeholder="200" onChange={e => handleAmount(e)} value={amount} />
        <button type="submit">{edit ? "Edit" : "Submit"}</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
