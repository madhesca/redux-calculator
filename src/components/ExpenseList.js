import React from "react";
import ExpenseItem from "./ExpenseItem";
import { connect } from "react-redux";
import { deleteItem } from "../redux/items/itemActions";

const ExpenseList = ({ expenses, deleteItems, handleDeleteRedux, handleEdit }) => {
  return (
    <div>
      <ul>
        {expenses.map(expense => (
          <ExpenseItem key={expense.id} expense={expense} handleDelete={handleDeleteRedux} handleEdit={handleEdit} />
        ))}
      </ul>
      <br />
      <button onClick={deleteItems}>Delete All Expenses</button>
    </div>
  );
};

const mapStateToProps = state => ({
  expenses: state.items
});

const mapDispatchToProps = dispatch => ({
  handleDeleteRedux: param => dispatch(deleteItem(param))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
