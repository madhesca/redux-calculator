import React from "react";

function ExpenseItem({ expense, handleDelete, handleEdit }) {
  const { id, charge, amount } = expense;
  return (
    <div>
      <br />
      <li>
        {charge} and {amount} -- {"     "}
        <button onClick={() => handleEdit(id)}>Edit</button>
        {"               "}
        <button onClick={() => handleDelete(id)}>Delete</button>
      </li>
    </div>
  );
}

export default ExpenseItem;
