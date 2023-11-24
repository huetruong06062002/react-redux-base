import App from "./App";
import User from "./components/Users/User";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/Home/HomePage";
import DashBoard from "./components/Admin/Content/DashBoard";
import { AnimatePresence } from "framer-motion";
import ManagerUser from "./components/Admin/Content/ManageUser";
import Login from "./components/Auth/Login";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/users" element={<User />} />
        </Route>
        <Route path="/admins" element={<Admin />}>
          <Route index element={<DashBoard />} />
          <Route path="manage-users" element={<ManagerUser />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
export default Layout;
