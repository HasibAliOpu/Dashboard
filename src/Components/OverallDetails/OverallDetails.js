import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: "# of Votes",
      data: [5, 15, 10, 25, 45],
      backgroundColor: ["#F4365C", "#8292AB", "#FAAD41", "#2DCE8A", "#0083FF"],
    },
  ],
  labels: [
    "Returned",
    "pending",
    "Processing",
    "Ready To Deliver",
    "Delivered",
  ],
};

const OverallDetails = () => {
  return (
    <div className="px-10 py-5 bg-white rounded-2xl shadow-xl">
      <h1 className="text-center font-semibold text-2xl pb-2">Overall</h1>
      <Doughnut data={data} />
    </div>
  );
};

export default OverallDetails;
