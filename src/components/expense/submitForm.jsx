import React from "react";

const SubmitForm = ({ submitExpenseList, expenseList }) => {
  if (!expenseList.length > 0) return null;

  return (
    <form
      id="submitExpenses-form"
      className="dateInput"
      onSubmit={submitExpenseList}
    >
      <input
        name="date"
        type="date"
        className="form-control"
        style={{
          margin: "0 50px 0 0",
          width: "26%"
        }}
        required
      />
      <button className="btn btn-secondary btn-sm">Submit expenses</button>
    </form>
  );
};

export default SubmitForm;
