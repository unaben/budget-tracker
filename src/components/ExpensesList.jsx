import React, { useContext, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "./context/AppContext";

const ExpensesList = () => {
  const [search, setSearch] = useState("");
  const { expenses } = useContext(AppContext);

  const filteredExpense = expenses.filter((expense) => {
    return expense.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="row ">
        <div className="col-sm my-3">
          <input
            type="text"
            placeholder="Search..."
            className="form-control w-50"
            onChange={(e) => setSearch(e.target.value)}
            id="search"
            value={search}
          />
        </div>
      </div>

      <ul className="list-group">
        {!!filteredExpense &&
          filteredExpense.map((expense) => (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          ))}
      </ul>
    </>
  );
};

export default ExpensesList;
