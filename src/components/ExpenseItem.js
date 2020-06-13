import React from "react";
import { connect } from "react-redux";

function ExpenseItem({ expense, handleDelete, handleEdit, expenses }) {
  const { id, charge, amount } = expense;
  return (
    <div>
      <br />
      <li>
        {charge} and {amount} -- {"     "}
        <button key={id} onClick={() => handleEdit(id, expenses)}>
          Edit
        </button>
        {"               "}
        <button onClick={() => handleDelete(id)}>Delete</button>
      </li>
    </div>
  );
}

const mapStateToProps = state => ({
  expenses: state.items
});

export default connect(mapStateToProps)(ExpenseItem);
// export default ExpenseItem;
