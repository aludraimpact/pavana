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

function Co2Captured() {
  const YAxisData1 = YAxis("captured1");
  const YAxisData2 = YAxis("captured2");
  const YAxisData3 = YAxis("captured3");

  const yValues = Object.values(XTimeAxis());
  const currentDateData = populateCurrentData(Object.keys(XTimeAxis()), YAxisData3.dataSet);

  const data = {
    labels: yValues,
    datasets: [
      {
        label: "Data 1",
        data: YAxisData1.dataSet,
        borderWidth: 3,
        borderColor: YAxisData1.color,
      },
      {
        label: "Data 2",
        data: YAxisData2.dataSet,
        borderWidth: 3,
        borderColor: YAxisData2.color,
      },
      {
        label: "Data 3",
        data: currentDateData,
        borderWidth: 3,
        borderColor: YAxisData3.color,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  }

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
        <div className="w-full h-80">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Co2Captured;
