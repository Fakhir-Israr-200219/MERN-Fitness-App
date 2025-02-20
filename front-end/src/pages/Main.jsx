import React from 'react'
import { Chart } from "react-google-charts";

const Main = () => {
  const data = [
    ["Date", "what you say", "what you do"],
    ["07/05/2014", 1000, 400],
    ["07/05/2015", 1170, 460],
    ["07/05/2016", 660, 1120],
    ["07/05/2017", 1030, 540],
    ["07/05/2014", 1000, 400],
    ["07/05/2015", 1170, 460],
    ["07/05/2016", 660, 1120],
    ["07/05/2017", 1030, 540],
    ["07/05/2014", 1000, 400],
    ["07/05/2014", 1000, 400],
    ["07/05/2014", 1000, 400],
    ["07/05/2015", 1170, 460],
    ["07/05/2016", 660, 1120],
    ["07/05/2017", 1030, 540],
    ["07/05/2014", 1000, 400],
    ["07/05/2015", 1170, 460],
    ["07/05/2016", 660, 1120],
    ["07/05/2017", 1030, 540],
    ["07/05/2014", 1000, 400],
    ["07/05/2014", 1000, 400],
    ["07/05/2014", 1000, 400],
    ["07/05/2015", 1170, 460],
    ["07/05/2016", 660, 1120],
    ["07/05/2017", 1030, 540],
    ["07/05/2014", 1000, 400],
    ["07/05/2015", 1170, 460],
    ["07/05/2016", 660, 1120],
    ["07/05/2017", 1030, 540],
    ["07/05/2014", 1000, 400],
    ["07/05/2014", 1000, 400],
   

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
        
        height={window.innerWidth < 640 ? "300px" : "400px"}

      />


      <Chart
        // Note the usage of Bar and not BarChart for the material version
        chartType="Bar"
        data={data}
        options={options2}
        
        height={window.innerWidth < 640 ? "300px" : "400px"}

      />
    </div>
  )
}

export default Main