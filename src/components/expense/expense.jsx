import React from "react";

const Expense = ({ handleExpense, handleInputData, inputData }) => {
  return (
    <form className="expense" onSubmit={handleExpense}>
      <div className="form-group">
        <label htmlFor="expenseName-input">Please Enter Your Expense</label>
        <input
          name="name"
          value={inputData.name}
          id="expenseName-input"
          type="text"
          className="form-control"
          placeholder="Expense"
          onChange={handleInputData}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="expenseAmount-input">
          Please Enter Your Expense Amount
        </label>
        <input
          name="amount"
          value={inputData.amount}
          id="expenseAmount-input"
          type="number"
          className="form-control"
          placeholder="Amount"
          onChange={handleInputData}
          required
        />
      </div>
      <button className="btn btn-primary btn-sm">Add Expense</button>
    </form>
  );
};

export default Expense;
