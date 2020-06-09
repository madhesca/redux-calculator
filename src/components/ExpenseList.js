import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, deleteItems, handleDelete, handleEdit }) => {
  return (
    <div>
      <ul>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
      <br />
      <button onClick={deleteItems}>Delete All Expenses</button>
    </div>
  );
};

export default ExpenseList;
