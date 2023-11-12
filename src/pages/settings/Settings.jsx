import React, { useState } from "react";
import "./settings.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { profileInfo } from "../../datatablesource";
import { useEffect } from "react";
import UserService from "../../database/UserService";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../database/Firebase";

const Settings = () => {
  const [img, setImg] = useState();
  const [file, setFile] = useState("");
  const [loading, isLoading] = useState(true);

  const [inputField, setInputField] = useState({
    profile:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  });

  const navigate = useNavigate();

  const handleChange = ({ target }, id) => {
    setInputField({
      ...inputField,
      [id]: target.value,
    });
    console.log(inputField);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UserService.updateUser("bfwzE5oqgGZADzI9TBdk", {
      ...inputField,
      profile: img,
    });
    navigate("/home");
  };

  useEffect(() => {
    getUserProfile();
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on("state_changed", () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImg(downloadURL);
          setInputField({
            profile: downloadURL,
          });
          isLoading(false);
        });
      });
    };
    file && uploadFile();
  }, [file]);

  const getUserProfile = async () => {
    const docSnap = await UserService.getUser("bfwzE5oqgGZADzI9TBdk");
    setInputField({ ...docSnap.data() });
    setImg(inputField["profile"]);
    isLoading(false);
  };
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <form>
          <h1 className="title">Settings</h1>
          <div className="body">
            {profileInfo.map((singleUser) =>
              singleUser.field === "profile" ? (
                <div className="imgContainer" key={singleUser.id}>
                  <label className="label">
                    {singleUser.headerName}
                    <img
                      src={
                        loading || inputField.profile == ""
                          ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                          : inputField.profile
                      }
                      className="img"
                    />
                    <input
                      type="file"
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      style={{ display: "none", cursor: "pointer" }}
                    />
                  </label>
                </div>
              ) : (
                <div className="inputContainer" key={singleUser.id}>
                  <label>{singleUser.headerName}</label>
                  <div></div>
                  <input
                    type="text"
                    value={inputField[singleUser.field]}
                    onChange={(e) => handleChange(e, singleUser.field)}
                  />
                </div>
              )
            )}
          </div>
          <div
            style={{
              width: "60%",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <button type="submit" className="button" onClick={handleSubmit}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Settings;
