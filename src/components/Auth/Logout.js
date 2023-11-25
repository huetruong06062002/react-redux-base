import { useNavigate } from "react-router";

const Logout = () => {
  localStorage.clear();
  const navigate = useNavigate();
  navigate("/login");
};

export default Logout;
