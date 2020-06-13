import React from "react";
import ExpenseItem from "./ExpenseItem";
import { connect } from "react-redux";
import { deleteItem, deleteAll, editItem, addAlert, noAlert } from "../redux/items/itemActions";

const ExpenseList = ({ noAlert, addAlert, expenses, deleteItems, handleDeleteRedux, handleEdit }) => {
  return (
    <div>
      <ul>
        {expenses.map(expense => (
          <ExpenseItem key={expense.id} expense={expense} handleDelete={handleDeleteRedux} handleEdit={handleEdit} />
        ))}
      </ul>
      <br />
      <button
        onClick={() =>
          deleteItems() &&
          addAlert() &&
          setTimeout(() => {
            noAlert();
          }, 3000)
        }
      >
        Delete All Expenses
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  expenses: state.items
});

const mapDispatchToProps = dispatch => ({
  handleEdit: (id, expense) => dispatch(editItem(id, expense)),
  handleDeleteRedux: param => dispatch(deleteItem(param)),
  deleteItems: () => dispatch(deleteAll()),
  addAlert: () => dispatch(addAlert()),
  noAlert: () => dispatch(noAlert())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
