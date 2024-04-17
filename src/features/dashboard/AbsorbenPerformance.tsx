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
import { currentDate } from "@/helpers/dates.helper";
import Legend from "../../components/progress-bar/Legend";

function AbsorbenPerformance() {
  const YAxisData = YAxis("performance");
  const currentData = populateCurrentData(
    Object.keys(XTimeAxis()),
    YAxisData.dataSet
  );
  const lineColor = YAxisData.color;
  const highlightColor = "red";
  const currentDataColors = currentData.map((el, index) => {
    if (currentData.length - 1 === index) {
      return highlightColor;
    }
    return lineColor;
  });

  const data = {
    labels: Object.values(XTimeAxis()),
    datasets: [
      {
        label: "Absorben Performance",
        data: currentData,
        borderWidth: 3,
        borderColor: currentDataColors,
        pointBackgroundColor: currentDataColors,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="border text-gray-500 w-full p-3 rounded-2xl">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm gap-2">
          <Diagram size={18} />
          <p className="text-gray-800 font-medium">Absorben Performance</p>
        </div>
      </div>

      <hr className="bg-gray-400 my-4" />

      {/* content */}
      <div>
        <Legend color={lineColor} label={currentDate()} legendType="square" />
        <div className="w-full h-80">
          <Line data={data} options={options} />
        </div>
        <div className="mt-4 pr-2">
          <Legend
            color={highlightColor}
            label="Reactor Replacement"
            legendType="round"
            position="right"
          />
        </div>
      </div>
    </div>
  );
}

export default AbsorbenPerformance;
