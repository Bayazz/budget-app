import React, { Component } from "react";
import CanvasJSReact from "./lib/canvasjs.react";
import PieChart from "./pieChart";

class ColumnChart extends Component {
  state = {
    expenseListDate: JSON.parse(localStorage.getItem("expenseListDate")),
    selectedDateExpenses: JSON.parse(
      localStorage.getItem("selectedDateExpenses")
    )
  };

  sortByEarliestDate = dailyExpenses => {
    return dailyExpenses.sort(function(a, b) {
      return new Date(a.date) - new Date(b.date);
    });
  };

  getSelectedDateExpenses = event => {
    const { label: date } = event.dataPoint;
    const { expenseListDate } = this.state;

    let selectedDateExpenses = {};
    selectedDateExpenses[date] = expenseListDate[date];
    localStorage.setItem(
      "selectedDateExpenses",
      JSON.stringify(selectedDateExpenses)
    );

    this.setState({ selectedDateExpenses });
  };

  render() {
    const expenseListDate = JSON.parse(localStorage.getItem("expenseListDate"));

    let dailyExpensesNew = [];
    for (var date in expenseListDate) {
      const expenses = expenseListDate[date].map(item => item.expense);
      const sum = expenses.reduce((acc, curr) => acc + curr);
      const dayExpense = { date, sum };
      dailyExpensesNew.push(dayExpense);
    }

    dailyExpensesNew = this.sortByEarliestDate(dailyExpensesNew);

    const options = {
      title: {
        text: "Sum of Expenses by Dates",
        fontSize: 20
      },
      axisX: [
        {
          title: "Date",
          titleFontSize: 17
        }
      ],
      axisY: [
        {
          title: "USD",
          titleFontSize: 17
        }
      ],
      animationEnabled: true,
      animationDuration: 4000,

      toolTip: {
        content: "{label}: {y} USD",
        animationEnabled: true
      },
      theme: "light2",
      backgroundColor: "transparent",
      data: [
        {
          type: "column",
          click: event => this.getSelectedDateExpenses(event),
          dataPoints: dailyExpensesNew.map(item => ({
            label: item.date,
            y: item.sum
          }))
        }
      ]
    };

    return (
      <div className="row">
        <div className="col-6">
          <CanvasJSReact.CanvasJSChart
            options={options}
            /* onRef = {ref => this.chart = ref} */
          />
        </div>
        <div className="col d-flex justify-content-end">
          <PieChart selectedDateExpenses={this.state.selectedDateExpenses} />
        </div>
      </div>
    );
  }
}

export default ColumnChart;
