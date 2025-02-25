import React from 'react';
import {
  MdDashboard,
  MdOutlineAddTask,
  MdOutlinePendingActions,
  MdTaskAlt,
} from "react-icons/md";
import { FaTasks, FaTrashAlt, FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, NavLink } from 'react-router-dom';
import { setOpenSidebar } from "../redux/slices/authSlice";

const linkData = [
  { label: "Dashboard", link: "dashboard", icon: <MdDashboard /> },
  { label: "Tasks", link: "tasks", icon: <FaTasks /> },
  { label: "Completed", link: "completed/completed", icon: <MdTaskAlt /> },
  { label: "In Progress", link: "in-progress/in progress", icon: <MdOutlinePendingActions /> },
  { label: "To Do", link: "todo/todo", icon: <MdOutlinePendingActions /> },
  { label: "Team", link: "team", icon: <FaUsers /> },
  { label: "Trash", link: "trashed", icon: <FaTrashAlt /> },
];

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();

  const path = location.pathname.split("/")[1];
  const sidebarLinks = user?.isAdmin ? linkData : linkData.slice(0, 5);

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  return (
    <div className='w-full h-full flex flex-col gap-6 p-5'>
      {/* Sidebar Header */}
      <h1 className='flex gap-1 items-center'>
        <p className='bg-blue-600 p-2 rounded-full'>
          <MdOutlineAddTask className='text-white text-2xl font-black' />
        </p>
        <span className='text-2xl font-bold text-black'>TaskMe</span>
      </h1>

      {/* Sidebar Links */}
      <nav className='flex flex-col gap-4'>
        {sidebarLinks.map(({ label, link, icon }) => (
          <NavLink
            to={`/${link}`}
            key={label}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-lg transition-colors ${
                isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"
              }`
            }
            onClick={closeSidebar}
          >
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

