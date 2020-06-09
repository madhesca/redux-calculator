import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import "./App.css";
import Alert from "./components/Alert";

const initialExpense = [
  { id: 1, charge: "Rent", amount: 200 },
  { id: 2, charge: "Buy Car", amount: 250 },
  { id: 3, charge: "Buy House", amount: 5000 },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpense);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
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
  };

  const handleDelete = (id) => {
    console.log("deleted", id);
  };

  const handleEdit = (id) => {
    console.log("edited", id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let addExpense = { id: Math.random(), charge, amount };
    if (charge !== "" && amount > 0) {
      setExpenses([...expenses, addExpense]);
      setCharge("");
      setAmount("");
      handleAlert({ type: "success", text: "Succesfully added an item" });
    } else {
      handleAlert({
        type: "danger",
        text:
          "Fields should not be emptied and amount should be greater than Zero",
      });
    }
  };

  return (
    <div className="App">
      {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
      <h2>Budget Calculator</h2>
      <br />
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        <br />
        <ExpenseList
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          deleteItems={deleteItems}
          expenses={expenses}
        />
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

export default App;
