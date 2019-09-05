import React from "react";
import ResultElement from "./resultElement";
import {
  faCreditCard,
  faMoneyBillAlt,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";

const Result = ({ budget, expense, balance }) => {
  return (
    <div className="block">
      <ResultElement name="BUDGET" icon={faMoneyBillAlt} amount={budget} />
      <ResultElement name="EXPENSES" icon={faCreditCard} amount={expense} />
      <ResultElement name="BALANCE" icon={faDollarSign} amount={balance} />
    </div>
  );
};

export default Result;
