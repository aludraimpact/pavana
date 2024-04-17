import React from "react";
import { Diagram } from "iconsax-react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";
ChartJS.register(CategoryScale, LineElement, PointElement, LinearScale, Title);

import { populateCurrentData, XTimeAxis, YAxis } from "@/helpers/graph.helper";
import { currentDate, customDateBeforeToday } from "@/helpers/dates.helper";
import Legend from "../../components/progress-bar/Legend";

function Co2Captured() {
  const beforeYesterdayData = YAxis("captured1");
  const yesterdayData = YAxis("captured2");
  const currentData = YAxis("captured3");

  const yValues = Object.values(XTimeAxis());
  const currentDateData = populateCurrentData(
    Object.keys(XTimeAxis()),
    currentData.dataSet
  );

  const data = {
    labels: yValues,
    datasets: [
      {
        label: "Data 3",
        data: currentDateData,
        borderWidth: 3,
        borderColor: currentData.color,
        pointBackgroundColor: currentData.color,
      },
      {
        label: "Data 2",
        data: yesterdayData.dataSet,
        borderWidth: 3,
        borderColor: yesterdayData.color,
        pointBackgroundColor: yesterdayData.color,
      },
      {
        label: "Data 1",
        data: beforeYesterdayData.dataSet,
        borderWidth: 3,
        borderColor: beforeYesterdayData.color,
        pointBackgroundColor: beforeYesterdayData.color,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <div className="border text-gray-500 w-full p-3 rounded-2xl">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm gap-2">
          <Diagram size={18} />
          <p className="text-gray-800 font-medium">CO2 Captured</p>
        </div>
      </div>

      <hr className="bg-gray-400 my-4" />

      {/* content */}
      <div className="h-30 justify-between">
        <div className="flex gap-4 justify-center flex-wrap">
          <Legend
            color={beforeYesterdayData.color}
            label={customDateBeforeToday(2)}
          />
          <Legend
            color={yesterdayData.color}
            label={customDateBeforeToday(1)}
          />
          <Legend color={currentData.color} label={currentDate()} />
        </div>

        <div className="w-full h-80">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Co2Captured;
