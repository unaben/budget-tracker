import React, { useState, useContext } from "react";
import { AppContext } from "./context/AppContext";

const AddAmount = ({ submittedIncome, setSubmittedIcome }) => {
  const { budget } = useContext(AppContext);
  const [income, setIncome] = useState(budget);

  console.log("sub:", submittedIncome);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedIcome(income);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center align-items-end">
          <div className="col-sm ">
            <label htmlFor="income" className="mb-1">
              Add Income
            </label>
            <input
              className="form-control"
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              name="income"
              id="income"
              placeholder="Enter income..."
              required="required"
            />
          </div>
          <div className="col-sm mt-3 ">
            <button
              className="btn btn-primary"
              style={{ display: "inline" }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAmount;
