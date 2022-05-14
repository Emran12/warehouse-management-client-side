import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Products from "./components/Products/Products";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Product from "./components/Product/Product";
import ManageProducts from "./components/ManageProducts/ManageProducts";
import AddItem from "./components/AddItem/AddItem";
import MyItems from "./components/MyItems/MyItems";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route
          path="/product/:id"
          element={
            <RequireAuth>
              <Product></Product>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageproducts"
          element={<ManageProducts></ManageProducts>}
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/additem" element={<AddItem></AddItem>}></Route>
        <Route path="/myitems" element={<MyItems></MyItems>}></Route>
        <Route path="/additem" element={<AddItem></AddItem>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
