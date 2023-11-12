import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../../database/ProductService";
import { useEffect } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../database/Firebase";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import toast from "react-hot-toast";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [inputField, setInputField] = useState({
    imageName: "",
    category: "",
  });
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const getEditProduct = async () => {
    const docSnap = await ProductService.getProduct(params.productId);
    setInputField({
      name: docSnap.data().name ?? "",
      category: docSnap.data().category ?? "",
      imageName: image,
      favorite: docSnap.data().favorite ?? false,
      description: docSnap.data().description ?? "",
      price: Number(docSnap.data().price) ?? 0,
      productId: docSnap.data().productId ?? "",
    });
    setImageSrc(inputField.image[0]);
  };

  const handleChange = ({ target }, id) => {
    setInputField({
      ...inputField,
      [id]: target.value,
    });
  };

  useEffect(() => {
    setIsAdd(params.productId === undefined ? true : false);
    if (!isAdd) {
      getEditProduct();
      setFile("");
    }
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on("state_changed", () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImage(downloadURL);
        });
      });
    };
    file && uploadFile();
  }, [file]);
  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          switch (snapshot.state) {
            case "paused":
              break;
            case "running":
              break;
            default:
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImage(downloadURL);
            setInputField({ imageName: downloadURL });
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleClick = async (e) => {
    e.preventDefault();
    const productData = {
      name: inputField.name ?? "",
      category: inputField.category ?? "",
      imageName: image,
      favorite: inputField.favorite ?? false,
      description: inputField.description ?? "",
      price: Number(inputField.price) ?? 0,
      productId: inputField.productId ?? "",
    };
    if (!isAdd) {
      const { productId } = params;
      await ProductService.updateProduct(productId, productData);
      navigate("/products");
      toast.success("Product Added Scuessfully!");
      return;
    } else {
      await ProductService.addProducts(productData);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              style={{ position: "relative", left: "20%", top: "5%" }}
              className=" mb-4"
              src={
                inputField.imageName !== ""
                  ? inputField.imageName
                  : "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko="
              }
              alt=""
            />
            <label
              htmlFor="file"
              style={{ position: "relative", right: "20%", top: "10%" }}
            >
              Image: <DriveFolderUploadOutlinedIcon className="icon" />
            </label>
          </div>
          <div className="right">
            <form>
              {inputs.map((input) =>
                input.field !== "image" ? (
                  input.field === "category" ? (
                    <div className="formInput" key={input.id}>
                      <label>Category</label>
                      <Select
                        sx={{
                          width: 250,
                          height: 40,
                          marginTop: "10px",
                        }}
                        name="category"
                        value={inputField[input.field]}
                        defaultValue={inputField.category}
                        onChange={(e) => handleChange(e, input.field)}
                      >
                        <MenuItem value={"juice"}>Juice</MenuItem>
                        <MenuItem value={"steamed"}>Steamed</MenuItem>
                        <MenuItem value={"snack "}>Snack </MenuItem>
                        <MenuItem value={"soup"}>Soup</MenuItem>
                      </Select>
                    </div>
                  ) : (
                    <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        value={inputField[input.field]}
                        onChange={(e) => handleChange(e, input.field)}
                      />
                    </div>
                  )
                ) : (
                  <></>
                )
              )}
              <div className="formInput" key={inputs.id}>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <button
                bgColor="deeppink"
                text="Save"
                onClick={(e) => handleClick(e)}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
