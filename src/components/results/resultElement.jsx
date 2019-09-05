import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const resultElement = ({ name, icon, amount }) => {
  return (
    <div className="element">
      <h5>{name}</h5>
      <span className="budget-icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <h4>$ {amount}</h4>
    </div>
  );
};

export default resultElement;
