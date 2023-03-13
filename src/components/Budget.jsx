import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";

const Budget = ({ submittedIncome }) => {
  const { budget } = useContext(AppContext);
  return (
    <div className="alert alert-secondary">
      <span>
        Budget: £{submittedIncome !== "undefined" ? submittedIncome : budget}
      </span>
    </div>
  );
};

export default Budget;
