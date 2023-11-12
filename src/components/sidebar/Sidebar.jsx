import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { Logout, Settings } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icon/logo.jpg";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate();

  function logout() {
    window.localStorage.clear("token");
    navigate("/login");
  }
  return (
    <div className="sidebar">
      <div className="top">
        <img src={logo} alt="logo" className=" h-8 aspect-square box-content" />
        <span className="logo">Pattiyamma Kadai</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <li>
              <Settings className="icon" />
              <span>Settings</span>
            </li>
          </Link>
          <div onClick={logout} style={{ textDecoration: "none" }}>
            <li>
              <Logout className="icon" />
              <span>Logout</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
