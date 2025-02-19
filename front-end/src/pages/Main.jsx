import React from 'react'
import { Chart } from "react-google-charts";

const Main = () => {
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2014", 1000, 400],
    ["2015", 1170, 460],
    ["2016", 660, 1120],
    ["2017", 1030, 540],
  ];
  const options = {
    chart: {
      title: "How much Dadication You Serve For Exercises",
    },
  };
  const options2 = {
    chart: {
      title: "How much Dadication You Serve For You calaries",
    },
  };
  return (
    <div>
      <Chart
        // Note the usage of Bar and not BarChart for the material version
        chartType="Bar"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />


      <Chart
        // Note the usage of Bar and not BarChart for the material version
        chartType="Bar"
        data={data}
        options={options2}
        width="100%"
        height="400px"
      />
    </div>
  )
}

export default Main