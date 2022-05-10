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

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/products"
          element={
            <RequireAuth>
              <Products></Products>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/product/:id"
          element={
            <RequireAuth>
              <Product></Product>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
