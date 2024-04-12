export const XTimeAxis = () => {
  const time = {
    0: "12:00:00 AM",
    2: "2:00:00 AM",
    4: "4:00:00 AM",
    6: "6:00:00 AM",
    8: "8:00:00 AM",
    10: "10:00:00 AM",
    12: "12:00:00 AM",
    14: "2:00:00 PM",
    16: "4:00:00 PM",
    18: "6:00:00 PM",
    20: "8:00:00 PM",
    22: "10:00:00 PM",
    24: "12:00:00 AM",
  }
  return time;
};

export const YAxis = (category: string) => {
  const data: Record<string, number[]> = {
    performance: [18, 16, 15, 14.5, 13, 10, 9, 7.5, 6, 5.5, 4, 2.3, 1],
    captured1: [0.1, 0.3, 0.7, 1.2, 1.6, 1.95, 2.34, 2.73, 3.12, 3.51, 3.9, 4.29, 4.68],
    captured2: [0.2, 0.5, 0.7, 0.97, 1.22, 1.47, 1.72, 1.97, 2.22, 2.47, 2.72, 2.97, 3.22],
    // captured3: [0.2, 0.7, 0.7, 1.3, 1.7, 2.02, 2.38, 2.74, 3.1, 3.46],
    captured3: [0.2, 0.7, 0.7, 1.3, 1.7, 2.02, 2.38, 2.74, 3.1, 3.46, 3.82, 4.18, 4.54],
  };
  const categoryColors: Record<string, string> = {
    performance: "rgb(75, 192, 192)",
    captured1: "rgb(255, 205, 86)",
    captured2: "rgb(255, 99, 132)",
    captured3: "rgb(54, 162, 235)",
  };
  const lastIndex = data[category].length - 1;

  if (data[category]) {
    return {
      dataSet: data[category],
      lastPoints: data[category].map((el, index) => {
        let overrideVal = 0;
        if (lastIndex === index) {
          overrideVal = el;
        }
        return overrideVal;
      }),
      colors: data[category].map((el, index) => {
        let overrideVal = categoryColors[category];
        if (lastIndex === index) {
          overrideVal = "red";
        }
        return overrideVal;
      }),
      color: categoryColors[category]
    };
  }
  return {
    dataSet: [],
    lastPoints: [],
    colors: [],
    color: 'blank'
  };
};

export const populateCurrentData = (timeData: string[], data: number[]) => {
  const hour = new Date().getHours().toLocaleString("id-ID");
  let lastIndex = timeData.length - 1;
  timeData.forEach((el, index) => {
    if (Number(hour) >= Number(el)) {
      lastIndex = index + 1;
    }
  });
  let currentDateData = [...data];
  currentDateData.splice(lastIndex, timeData.length - lastIndex + 1);
  return currentDateData;
}
