import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpensesList from "./components/ExpensesList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./components/context/AppContext";
import AddAmount from "./components/AddAmount";

const App = () => {
  const [submittedIncome, setSubmittedIcome] = useState(0);
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt3">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget submittedIncome={submittedIncome} />
          </div>
          <div className="col-sm">
            <Remaining submittedIncome={submittedIncome} />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3">Add Income</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddAmount
              submittedIncome={submittedIncome}
              setSubmittedIcome={setSubmittedIcome}
            />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpensesList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpenseForm submittedIncome={submittedIncome} />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
