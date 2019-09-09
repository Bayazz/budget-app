import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const Table = ({ expenseList, handleEdit, handleDelete }) => {
  if (!expenseList) return null;

  return (
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
              <span className="edit-button" onClick={() => handleEdit(item)}>
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
  );
};

export default Table;
