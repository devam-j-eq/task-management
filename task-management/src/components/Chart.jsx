import React, { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartData, summary } from "../assets/data";

export const Chart = () => {
  
  const updatedChartData = useMemo(() => {
    if (!summary || !summary.tasks) return chartData; 

    const summaryWeek = {
      name: "Total",
      Completed: summary.tasks?.completed ?? 0,
      InProgress: summary.tasks?.["in progress"] ?? 0,
      ToDo: summary.tasks?.todo ?? 0,
    };

    return [...chartData, summaryWeek]; 
  }, [summary, chartData]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={updatedChartData}>
        <XAxis dataKey="name" />
        <YAxis data />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />

        <Bar dataKey="Completed" fill="#0f766e" />
        <Bar dataKey="InProgress" fill="#f59e0b" />
        <Bar dataKey="ToDo" fill="#be185d" />
      </BarChart>
    </ResponsiveContainer>
  );
};
