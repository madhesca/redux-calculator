import React from "react";
// import { connect } from "react-redux";

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

// const mapStateToProps = (state) => ({
//   expenses: state.items,
// });

// export default connect(mapStateToProps)(ExpenseItem);
export default ExpenseItem;
