import React from "react";
import { connect } from "react-redux";
import { handleCharge, handleAmount, handleSubmit, empty, noEdit } from "../redux/forms/formActions";
import { addAlert, noAlert } from "../redux/items/itemActions";

function ExpenseForm({ addAlert, noAlert, noEdit, expenses, edits, empty, charge, amount, handleCharge, handleAmount, handleSubmit }) {
  console.log("expenses", expenses);
  console.log("edits", edits.isEdit);
  console.log("charge", charge);

  return (
    <div>
      <form
        onSubmit={e =>
          handleSubmit(e, charge, amount, expenses, edits) &&
          empty() &&
          noEdit() &&
          setTimeout(() => {
            noAlert();
          }, 3000) &&
          charge
            ? addAlert()
            : null
        }
      >
        <input type="text" placeholder="Ex. Buy House" onChange={e => handleCharge(e)} value={charge} />
        <input type="text" placeholder="200" onChange={e => handleAmount(e.target.value)} value={amount} />
        <button type="submit">{edits.isEdit ? "Edit" : "Submit"}</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  charge: state.forms.charge,
  amount: state.forms.amount,
  expenses: state.items,
  edits: state.edit
});

const mapDispatchToProps = dispatch => ({
  handleCharge: here => dispatch(handleCharge(here)),
  handleAmount: there => dispatch(handleAmount(there)),
  handleSubmit: (everywhere, charge, amount, expenses, edits) => dispatch(handleSubmit(everywhere, charge, amount, expenses, edits)),
  empty: () => dispatch(empty()),
  noEdit: () => dispatch(noEdit()),
  addAlert: () => dispatch(addAlert()),
  noAlert: () => dispatch(noAlert())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
