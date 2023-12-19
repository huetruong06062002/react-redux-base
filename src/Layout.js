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
import Register from "./components/Auth/Register";
import ListQuiz from "./components/Users/ListQuiz";
import Logout from "./components/Auth/Logout";
import DetailQuiz from "./components/Users/DetailQuiz";
import ManageQuiz from './components/Admin/Content/Quiz/ManageQuiz';

const NotFound = () => {
  return (
    <div className="container mt-3 alert alert-danger">
      404.Not Found data with current your URL
    </div>
  );
};

const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/users" element={<ListQuiz />} />
        </Route>
        <Route path="/quiz/:QuizId" element={<DetailQuiz />} />
        <Route path="/admins" element={<Admin />}>
          <Route index element={<DashBoard />} />
          <Route path="manage-users" element={<ManagerUser />} />
          <Route path="manage-quizzes" element={<ManageQuiz />} />

        </Route>
        <Route path="/logout" element={<Login />} />
        <Route path="/login" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
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
