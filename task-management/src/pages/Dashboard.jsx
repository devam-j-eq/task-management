import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { FaArrowsToDot } from "react-icons/fa6";
import { MdEdit } from "react-icons/md"; 
import clsx from "clsx";
import { Chart } from "../components/Chart";
const summary = {
  totalTasks: 30,
  tasks: {
    completed: 12,
    "in progress": 8,
    todo: 10,
  },
};

const Dashboard = () => {
  const totals = summary.tasks;
  const stats = [
    { _id: "1", label: "TOTAL TASK", total: summary?.totalTasks || 0, icon: <FaNewspaper />, bg: "bg-[#1d4ed8]" },
    { _id: "2", label: "COMPLETED TASK", total: totals["completed"] || 0, icon: <MdAdminPanelSettings />, bg: "bg-[#0f766e]" },
    { _id: "3", label: "TASK IN PROGRESS", total: totals["in progress"] || 0, icon: <MdEdit />, bg: "bg-[#f59e0b]" },
    { _id: "4", label: "TODOS", total: totals["todo"] || 0, icon: <FaArrowsToDot />, bg: "bg-[#be185d]" },
  ];
  

  return (
    <div className='h-full py-4'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
        {stats.map(({ icon, bg, label, total }, index) => (
          <div key={index} className='w-full h-32 bg-white p-5 shadow-md rounded-md flex items-center justify-between'>
            <div className='h-full flex flex-1 flex-col justify-between'>
              <p className='w-full text-base text-gray-600'>{label}</p>
              <span className='text-2xl font-semibold'>{total}</span>
            </div>
            <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center text-white", bg)}>
              {icon}
            </div>
          </div>
        ))}
      </div>

      <div className='w-full bg-white my-16 p-4 rounded shadow-sm'>
        <h4 className='text-xl text-gray-600 font-semibold'>
          Chart by Status
        </h4>
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard
