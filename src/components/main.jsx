import React, { Component } from "react";
import Budget from "./budget";
import ResultBlock from "./results/resultBlock";
import ExpenseBlock from "./expense/expenseBlock";
import "../App.css";
import Expense from "./expense/expense";

class Main extends Component {
  state = {
    data: { budget: 0, balance: 0, expense: 0 },
    expenseList: [],
    expenseListDate: JSON.parse(localStorage.getItem("expenseListDate")),
    inputData: { budget: "", name: "", amount: "" }
  };

  handleInputData = ({ currentTarget }) => {
    const input = currentTarget.value;
    const inputName = currentTarget.name;
    const { inputData: inputs } = this.state;
    const inputsNew = Object.assign({}, inputs);
    inputsNew[inputName] = input;
    this.setState({ inputData: inputsNew });
  };

  editedExpense = "";

  handleCalculation = (expenseList, inputData) => {
    const { data } = this.state;
    var totalExpense = 0;
    for (let i = 0; i < expenseList.length; i++) {
      totalExpense = totalExpense + expenseList[i].expense;
    }
    let balance = data.budget - totalExpense;
    const dataNew = Object.assign({}, data);
    dataNew.balance = balance;
    dataNew.expense = totalExpense;

    this.setState({
      data: dataNew,
      inputData,
      expenseList
    });
  };

  handleBudget = e => {
    e.preventDefault();

    const { name, value: budgetInput } = e.currentTarget[0];
    const { data, inputData: inputs } = this.state;
    const balance = budgetInput - data.expense;
    const inputsNew = Object.assign({}, inputs);
    const dataNew = Object.assign({}, data);
    dataNew.budget = budgetInput;
    dataNew.balance = balance;
    inputsNew[name] = "";

    this.setState({ data: dataNew, inputData: inputsNew });
  };

  handleExpense = e => {
    e.preventDefault();
    const { expenseList, inputData: inputs } = this.state;
    const { name, value: nameInput } = e.currentTarget[0];
    const { name: amount, value: expenseInput } = e.currentTarget[1];
    const inputsNew = Object.assign({}, inputs);
    inputsNew[name] = "";
    inputsNew[amount] = "";

    const id =
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9);
    const expenseNewItem = {
      name: nameInput,
      id: id,
      expense: Number(expenseInput)
    };
    let expenseNewList;
    expenseList
      ? (expenseNewList = [expenseNewItem, ...expenseList])
      : (expenseNewList = [expenseNewItem]);
    this.handleCalculation(expenseNewList, inputsNew);
  };

  handleEdit = item => {
    const { expenseList } = this.state;
    const editedList = expenseList.filter(expense => expense.id !== item.id);
    const inputData = { budget: "", name: item.name, amount: item.expense };
    this.handleCalculation(editedList, inputData);
  };
  handleDelete = item => {
    const { expenseList, inputData } = this.state;
    const editedList = expenseList.filter(expense => expense.id !== item.id);
    this.handleCalculation(editedList, inputData);
  };

  submitExpenseList = event => {
    event.preventDefault();

    const { value: date } = event.currentTarget[0];
    const { expenseList, expenseListDate, data } = this.state;

    const expenseListDates = {};

    expenseListDates[date] = [...expenseList];

    // const expenseListDates = [];
    // expenseListDates[date] = [...expenseList];

    for (let date in expenseListDate) {
      expenseListDates[date] = expenseListDate[date];
    }

    //const expenseListDateNew = [expenseListDates, ...expenseListDate];
    const newData = Object.assign({}, data);
    newData.budget = 0;
    newData.balance = 0;
    newData.expense = 0;
    const newExpenseList = [];

    localStorage.setItem("expenseListDate", JSON.stringify(expenseListDates));

    this.setState({
      expenseList: newExpenseList,
      expenseListDate: expenseListDates,
      data: newData
    });
  };

  render() {
    const { data, expenseList, inputData } = this.state;

    return (
      <React.Fragment>
        <div className="container jumbotron ">
          <div className="row">
            <div className="col-4">
              <Budget
                handleBudget={this.handleBudget}
                handleInputData={this.handleInputData}
                budget={inputData.budget}
              />
            </div>
            <div className="col">
              <ResultBlock
                budget={data.budget}
                expense={data.expense}
                balance={data.balance}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <Expense
                handleExpense={this.handleExpense}
                handleInputData={this.handleInputData}
                inputData={inputData}
              />
            </div>
            <div className="col">
              <ExpenseBlock
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
                expenseList={expenseList}
                submitExpenseList={this.submitExpenseList}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
