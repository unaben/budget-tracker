import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "./context/AppContext";

function ExpenseItem({ name, cost, id }) {
  const { dispatch } = useContext(AppContext);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // const capitalizeFirstLetterName = capitalizeFirstLetter(name);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {capitalizeFirstLetter(name)}
      <div>
        <span className="badge bg-primary badge-pill me-3">£{cost}</span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </div>
    </li>
  );
}

export default ExpenseItem;
