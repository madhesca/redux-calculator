import React from "react";
import { connect } from "react-redux";
import { handleCharge, handleAmount, handleSubmit } from "../redux/forms/formActions";
import store from "../redux/store";

function ExpenseForm({ charge, amount, handleCharge, handleAmount, edit, handleSubmit }) {
  console.log(store.getState());

  return (
    <div>
      <form onSubmit={e => handleSubmit(e, charge, amount)}>
        <input type="text" placeholder="Ex. Buy House" onChange={e => handleCharge(e)} value={charge} />
        <input type="text" placeholder="200" onChange={e => handleAmount(e.target.value)} value={amount} />
        <button type="submit">{edit ? "Edit" : "Submit"}</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  charge: state.forms.charge,
  amount: state.forms.amount
});

const mapDispatchToProps = dispatch => ({
  handleCharge: here => dispatch(handleCharge(here)),
  handleAmount: there => dispatch(handleAmount(there)),
  handleSubmit: (everywhere, charge, amount) => dispatch(handleSubmit(everywhere, charge, amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
