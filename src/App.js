import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./Products/Products";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
      </Routes>
    </div>
  );
}

export default App;
