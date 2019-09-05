import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class Table extends Component {
  setKey = () => {
    return Math.random()
      .toString(36)
      .substr(2, 9);
  };

  render() {
    const { rows, handleEdit, handleDelete, columns } = this.props;

    return (
      <table className="table ">
        <thead>
          <tr>
            {columns.map(column => (
              <th>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(rowItem => (
            <tr key={this.setKey}>
              {Object.keys(rowItem).map(key => (
                <td key={this.setKey}>{rowItem[key]}</td>
              ))}
              <td>
                <span
                  className="edit-button"
                  onClick={() => handleEdit(rowItem)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </span>
                <span
                  className="delete-button"
                  onClick={() => handleDelete(rowItem)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
