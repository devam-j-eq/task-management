import React from "react";
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
 import { chartData } from "../assets/data";

export const Chart = () => {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart width={100} height={40} data={chartData}>
        <XAxis dataKey='name'  />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray='3 3' />
        
        <Bar dataKey='Completed' fill='#0f766e' />
        <Bar dataKey='InProgress' fill='#f59e0b' />
        <Bar dataKey='ToDo' fill='#be185d' />
      </BarChart>
    </ResponsiveContainer>
  );
};