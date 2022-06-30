import React, { useState, useContext } from "react";
import { AppContext } from "./context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("name: " + name + " cost: " + cost);

    const expenseToCreate = {
      id: uuidv4(),
      name: name,
      cost: parseFloat(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expenseToCreate,
    });

    setCost("");
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-center">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            required="required"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            className="form-control"
            type="text"
            id="cost"
            required="required"
            value={cost}
            onChange={(e) => {
              setCost(e.target.value);
            }}
          />
        </div>
        <div className="col-sm mt-3">
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
