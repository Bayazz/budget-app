import React from "react";
import "../App.css";

const Budget = ({ handleBudget, handleInputData, budget }) => {
  return (
    <React.Fragment>
      <h3>BUDGET APP</h3>
      <form className="budget" onSubmit={handleBudget}>
        <div className="form-group">
          <label htmlFor="budget-input">Please Enter Your Budget</label>
          <input
            name="budget"
            value={budget}
            id="budget-input"
            type="number"
            className="form-control"
            placeholder="Budget"
            onChange={handleInputData}
            required
          />
        </div>
        <button className="btn btn-primary btn-sm">Calculate</button>
      </form>
    </React.Fragment>
  );
};

export default Budget;
