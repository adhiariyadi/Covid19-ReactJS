import React, { useState, useEffect } from "react";
import { getDailyData } from "../../api";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

function LineGraph({ className, casesType }) {
  const [data, setData] = useState({});

  const buildChartData = (data, casesType) => {
    let chartData = [];
    let lastDataPoint;
    for (let date in data[casesType]) {
      if (lastDataPoint) {
        let newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
    return chartData;
  };

  useEffect(() => {
    const fetchAPI = async () => {
      let chartData = buildChartData(await getDailyData(), casesType);
      setData(chartData);
    };
    fetchAPI();
  }, [casesType]);

  const casesTypeColor = {
    cases: {
      hex: "#0000FF",
      rgba: "rgba(0, 0, 255, 0.5)",
    },
    recovered: {
      hex: "#00FF00",
      rgba: "rgba(0, 255, 0, 0.5)",
    },
    deaths: {
      hex: "#FF0000",
      rgba: "rgba(255, 0, 0, 0.5)",
    },
  };

  return (
    <div className={className}>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: casesTypeColor[casesType].rgba,
                borderColor: casesTypeColor[casesType].hex,
                data: data,
              },
            ],
          }}
          options={{
            legend: {
              display: false,
            },
            elements: {
              point: {
                radius: 0,
              },
            },
            maintainAspectRatio: false,
            tooltips: {
              mode: "index",
              intersect: false,
              callbacks: {
                label: function (tooltipItem, data) {
                  return numeral(tooltipItem.value).format("+0,0");
                },
              },
            },
            scales: {
              xAxes: [
                {
                  type: "time",
                  time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                  },
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    callback: function (value, index, values) {
                      return numeral(value).format("0a");
                    },
                  },
                },
              ],
            },
          }}
        />
      )}
    </div>
  );
}

export default LineGraph;
