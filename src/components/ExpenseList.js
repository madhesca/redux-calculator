import React from "react";
import ExpenseItem from "./ExpenseItem";
import { connect } from "react-redux";
import { deleteItem, deleteAll, editItem } from "../redux/items/itemActions";

const ExpenseList = ({
  expenses,
  deleteItems,
  handleDeleteRedux,
  handleEdit,
}) => {
  return (
    <div>
      <ul>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            handleDelete={handleDeleteRedux}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
      <br />
      <button onClick={deleteItems}>Delete All Expenses</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  handleEdit: (id, expense) => dispatch(editItem(id, expense)),
  handleDeleteRedux: (param) => dispatch(deleteItem(param)),
  deleteItems: () => dispatch(deleteAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
