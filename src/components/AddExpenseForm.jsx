import React, { useState, useContext } from "react";
import { AppContext } from "./context/AppContext";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddExpenseForm = ({ submittedIncome }) => {
  const { dispatch } = useContext(AppContext);
  const [formInputValue, setFormInputValue] = useState({
    name: "",
    cost: "",
  });

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputValue((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const notify = () => {
    toast.info("Income value missing", {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-message",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !submittedIncome ||
      formInputValue.name === "" ||
      formInputValue.cost === ""
    ) {
      notify();
      // alert('hi')
      return;
    } else {
      const expenseToCreate = {
        id: uuidv4(),
        name: formInputValue.name,
        cost: parseFloat(formInputValue.cost),
      };

      dispatch({
        type: "ADD_EXPENSE",
        payload: expenseToCreate,
      });

      setFormInputValue({
        name: "",
        cost: "",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center align-items-end">
          <div className="col-sm">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              required="required"
              value={formInputValue.name}
              onChange={handleFormInputChange}
              placeholder="Enter expense type..."
            />
          </div>
          <div className="col-sm">
            <label htmlFor="cost">Cost</label>
            <input
              className="form-control"
              type="text"
              id="cost"
              name="cost"
              required="required"
              value={formInputValue.cost}
              onChange={handleFormInputChange}
            />
          </div>
          <div className="col-sm mt-3">
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default AddExpenseForm;
