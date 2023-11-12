import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useEffect, useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import UserService from "../../database/UserService";
import profileLogo from "../../assets/icon/logo.jpg";
import UserProfile from "../profile/userProfile";
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [inputField, setInputField] = useState({
    name: "Admin User",
    profile:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    emailId: "admin@example.com",
    userType: "Admin",
  });
  const { handleClick, isClicked } = useStateContext();

  useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = async () => {
    const docSnap = (await UserService.getUser("bfwzE5oqgGZADzI9TBdk")).data();
    if (!docSnap) return;
    const { name, profile, emailId, userType } = docSnap;
    setInputField({
      name,
      profile,
      emailId,
      userType,
    });
  };
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item" onClick={() => handleClick("userProfile")}>
            <img
              src={inputField.profile === "" ? profileLogo : inputField.profile}
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
        {isClicked.userProfile && <UserProfile inputField={inputField} />}
      </div>
    </div>
  );
};

export default Navbar;
