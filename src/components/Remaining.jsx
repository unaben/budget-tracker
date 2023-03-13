import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";

const Remaining = ({ submittedIncome }) => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  //   const alertType =  budget - totalExpenses <= 5 ? 'alert-danger' : 'alert-success'
  const data = submittedIncome !== "undefined" ? submittedIncome : budget;
  const alertType = totalExpenses > data ? "alert-danger" : "alert-success";
  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: £{data - totalExpenses}</span>
    </div>
  );
};

export default Remaining;
