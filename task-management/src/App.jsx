import { Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import clsx from "clsx";
import { Fragment, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import TaskDetails from "./pages/TaskDetails";
import Task from "./pages/Task";
import Trash from "./pages/Trash";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import { setOpenSidebar } from "./redux/slices/authSlice";

function Layout() {
  return (
    <div className="w-full h-screen flex">
      <div className="hidden md:block w-1/5 h-screen bg-white sticky top-0">
        <Sidebar />
      </div>

      <MobileSidebar />
      
      <div className="flex flex-col flex-1 h-screen">
        <Navbar />
        <div className="p-4 2xl:px-10 flex-1 overflow-auto">
          <Outlet /> {/* Renders Dashboard & Other Pages */}
        </div>
      </div>
    </div>
  );
}

const MobileSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div
      className={`fixed inset-0 bg-black/40 z-50 transform transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      } md:hidden`}>

      <div className="w-3/4 h-full bg-white shadow-lg">
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={() => dispatch(setOpenSidebar(false))}>
          <IoClose />
        </button>

        <Sidebar />
      </div>
    </div>
  );
};


function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route path="/log-in" element={<Login />} />

        <Route element={<Layout />}>
          <Route index path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Task />} />
          <Route path="/completed/:status" element={<Task />} />
          <Route path="/in-progress/:status" element={<Task />} />
          <Route path="/todo/:status" element={<Task />} />
          <Route path="/team" element={<Users />} />
          <Route path="/trashed" element={<Trash />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Route>
      </Routes>
      <Toaster richColors />
    </main>
  );
}
export default App;


