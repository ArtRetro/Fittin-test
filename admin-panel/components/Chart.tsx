"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { motion } from "framer-motion";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        color: "#eae6ff",
      },
      grid: {
        color: "rgba(255,255,255,0.03)",
      },
    },
    x: {
      ticks: {
        color: "#cfc7ff",
      },
      grid: {
        display: false,
      },
    },
  },
};

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const data = {
  labels,
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 8, 14, 23, 18, 27],
      backgroundColor: "rgba(139,92,246,0.9)", // purple-500
      borderRadius: 6,
      barThickness: 18,
    },
  ],
};

export default function Chart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.995 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45 }}
      className="bg-purple-600/30 p-4 rounded-xl"
    >
      <div className="h-64">
        <Bar options={options} data={data} />
      </div>
    </motion.div>
  );
}
