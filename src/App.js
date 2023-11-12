import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Users from "./pages/users/Users";
import Orders from "./pages/orders/Orders";
import Products from "./pages/product/Products";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import Update from "./components/profile/localstorage";
import { DarkModeContext } from "./context/darkModeContext";
import Settings from "./pages/settings/Settings";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const token = window.localStorage.getItem("token");

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {token === null ? (
              <Route index element={<Login />} />
            ) : (
              <Route index element={<Home />} />
            )}
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="users">
              <Route index element={<Users />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path="products">
              <Route index element={<Products />} />
              <Route
                path=":productId"
                element={<New inputs={productInputs} title="Edit Product" />}
              />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="orders">
              <Route index element={<Orders />} />
              <Route path=":orderId" element={<Single />} />
            </Route>

            <Route path="localstorage">
              <Route index element={<Update />} />
              <Route path=":localstorage" element={<Update />} />
            </Route>
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
