import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../widget/Button";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

const UserProfile = ({ inputField }) => {
  const navigate = useNavigate();
  const { initialState } = useStateContext();
  function logout() {
    window.localStorage.clear("token");
    navigate("/login");
  }
  function home() {
    navigate("/home");
  }

  return (
    <div className="absolute right-1 top-16 bg-white p-8 rounded-lg w-96 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-black-200">
          User Profile
        </p>
        <Button
          icon={<MdOutlineCancel />}
          onClick={initialState}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center border-color border-b-1 ">
        <img
          src={inputField.profile}
          alt=""
          style={{
            height: "90px",
            width: "70px",
            borderRadius: "20%",
          }}
        />
        <div>
          <h4 className="font-semibold text-xl dark:text-black-200">
            {inputField.name}
          </h4>

          <h4 className="text-black-500 text-sm dark:text-black-400">
            {inputField.userType}
          </h4>

          <h4 className="text-black-500 text-sm font-semibold dark:text-black-400">
            {inputField.emailId}
          </h4>
        </div>
      </div>
      <div></div>
      <div className="mt-5">
        <Button
          onClick={logout}
          color="white"
          bgColor="green"
          fontSize="20px"
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  );
};

export default UserProfile;
