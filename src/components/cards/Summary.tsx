import { currentDate, customDateBeforeToday } from "@/helpers/dates.helper";
import { populateCurrentData, XTimeAxis, YAxis } from "@/helpers/graph.helper";

const Summary = () => {
  const YAxisData2 = YAxis("captured2").dataSet;
  const YAxisData3 = YAxis("captured3").dataSet;

  const currentDateData = populateCurrentData(
    Object.keys(XTimeAxis()),
    YAxisData3
  );

  const yesterdayDateData = populateCurrentData(
    Object.keys(XTimeAxis()),
    YAxisData2
  );

  const performanceKG = currentDateData[currentDateData.length - 1];
  const lastPerformance = yesterdayDateData[yesterdayDateData.length - 1];

  const differencePercentage = (
    ((performanceKG - lastPerformance) / lastPerformance) *
    100
  ).toFixed(2);

  return (
    <div className="border text-gray-500 w-full  p-3 rounded-2xl">
      <div className="space-y-3">
        <div className="flex items-start gap-3 w-full">
          <div className="w-full space-y-3">
            <p className="text-sm text-gray-800 font-medium">Performance</p>
            <div className="flex">
              <p className="text-6xl">{performanceKG}</p>
              <div className="mx-2" />
              <p className="text-md">KG</p>
            </div>
            <p className="text-sm text-gray-800">
              {Number(differencePercentage) > 0 ? "Up by" : "Down to"}{" "}
              <span className="text-lg">{differencePercentage}%</span> in{" "}
              {currentDate()}
            </p>
            <p className="text-sm text-gray-800">
              compared to {customDateBeforeToday(1)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
