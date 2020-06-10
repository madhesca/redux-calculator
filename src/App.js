import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import "./App.css";
import Alert from "./components/Alert";

// const initialExpense = [
//   { id: 1, charge: "Rent", amount: 200 },
//   { id: 2, charge: "Buy Car", amount: 250 },
//   { id: 3, charge: "Buy House", amount: 5000 }
// ];

const initialExpense = localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")) : [];

function App({ show }) {
  const [expenses, setExpenses] = useState(initialExpense);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");

  const handleCharge = e => {
    setCharge(e.target.value);
  };

  const handleAmount = e => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const deleteItems = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "deleted all items" });
  };

  const handleDelete = id => {
    const deleteExpense = expenses.filter(item => item.id !== id);
    setExpenses(deleteExpense);
    handleAlert({ type: "danger", text: "Item deleted" });
  };

  const handleEdit = id => {
    const itemToEdit = expenses.find(item => item.id === id);
    setCharge(itemToEdit.charge);
    setAmount(itemToEdit.amount);
    setEdit(true);
    setId(id);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let addExpense = { id: Math.random(), charge, amount };
    if (charge !== "" && amount > 0) {
      if (edit) {
        const tempExpenses = expenses.map(item => {
          return item.id === id ? { ...item, charge, amount } : { ...item };
        });

        setExpenses(tempExpenses);
        setCharge("");
        setAmount("");
        setEdit(false);
        handleAlert({ type: "success", text: "You edited an item" });
      } else {
        setExpenses([...expenses, addExpense]);
        setCharge("");
        setAmount("");
        handleAlert({ type: "success", text: "Succesfully added an item" });
      }
    } else {
      handleAlert({
        type: "danger",
        text: "Fields should not be emptied and amount should be greater than Zero"
      });
    }
  };

  useEffect(() => {
    console.log("useEffect called");
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="App">
      {alert.show ? <Alert /> : null}
      <h2>Budget Calculator</h2>
      <br />
      <main className="App">
        <ExpenseForm edit={edit} />
        <br />
        <ExpenseList handleDelete={handleDelete} handleEdit={handleEdit} deleteItems={deleteItems} />
      </main>
      <hr />
      <h2>
        Total Expenses :
        <span>
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h2>
    </div>
  );
}

const mapStateToProps = state => ({
  show: state.alerts.show
});

export default connect(mapStateToProps)(App);
