import { useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from 'sonner';
import Login from "./pages/Login";
import TaskDetails from "./pages/TaskDetails";
import Task from "./pages/Task";
import Trash from "./pages/Trash";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";

function LayoutWrapper() {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  console.log("User State:", user); // Check user state

  if (user === undefined) return null; // Wait until user is defined

  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-1/5 h-screen bg-white sticky top-0 block z-10">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/dashboard" state={{ from: location }} replace />
  );
}

function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route path="/log-in" element={<Login />} />
        
          <Route path="/" element={<Navigate to="/dashboard" />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/task" element={<Task />} />
          <Route path="/completed/:status" element={<Task />} />
          <Route path="/in-progress/:status" element={<Task />} />
          <Route path="/todo/:status" element={<Task />} />
          <Route path="/team" element={<Users />} />
          <Route path="/trashed" element={<Trash />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        
      </Routes>
      <Toaster richColors />
    </main>
  );
}

export default App;
