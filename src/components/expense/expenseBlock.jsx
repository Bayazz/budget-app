import React, { Component } from "react";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ExpenseBlock extends Component {
  render() {
    const {
      expenseList,
      handleEdit,
      handleDelete,
      submitExpenseList
    } = this.props;

    return (
      <React.Fragment>
        <table className="table ">
          <thead>
            <tr>
              <th>Expense Title</th>
              <th>Expense Value</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {expenseList.map(item => (
              <tr key={item.id}>
                {Object.keys(item)
                  .filter(key => key !== "id")
                  .map(key => (
                    <td key={key}>{item[key]}</td>
                  ))}
                <td>
                  <span
                    className="edit-button"
                    onClick={() => handleEdit(item)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </span>
                  <span
                    className="delete-button"
                    onClick={() => handleDelete(item)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {expenseList.length > 0 ? (
          <div>
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
                  width: "22%"
                }}
                required
              />
              <button className="btn btn-primary btn-sm">Add expenses</button>
            </form>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default ExpenseBlock;
