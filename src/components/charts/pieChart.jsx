import React from "react";
import CanvasJSReact from "../../lib/canvasjs.react";

const PieChart = ({ selectedDateExpenses }) => {
  const date = Object.keys(selectedDateExpenses);

  const options = {
    title: {
      text: "Expenses in a Day",
      fontSize: 20
    },
    subtitles: [
      {
        text: date
      }
    ],
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
        type: "pie",
        click: function(e) {
          console.log(e);
        },
        indexLabelFontSize: 16,
        dataPoints: selectedDateExpenses[date].map(item => ({
          label: item.name,
          y: item.expense
        }))
      }
    ]
  };

  return (
    <CanvasJSReact.CanvasJSChart
      options={options}
      /* onRef = {ref => this.chart = ref} */
    />
  );
};

export default PieChart;
