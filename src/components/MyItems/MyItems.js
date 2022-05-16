import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyItems = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  console.log(user);
  useEffect(() => {
    fetch("https://hidden-escarpment-52790.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter((product) => product.email === user.email);
        console.log(result);
        setProducts(result);
      });
  }, []);

  const handleDeleteProduct = (id) => {
    const url = `https://hidden-escarpment-52790.herokuapp.com/product/${id}`;
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(url, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          const remainingProducts = products.filter(
            (product) => product._id !== id
          );
          setProducts(remainingProducts);
        });
    }
  };

  return (
    <div className="container" style={{ marginBottom: "500px" }}>
      <div className="mt-4 mb-2">
        <h1 className="text-center text-info text-bold">Products</h1>
        {products.length > 0 && (
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Product Name</th>
                <th>Supplier Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Del.Item</th>
              </tr>
            </thead>
            {products.map((product) => (
              <tbody key={product._id}>
                <tr>
                  <td>{product._id}</td>
                  <td>{product.productName}</td>
                  <td>{product.supplierName}</td>
                  <td className="text-center">${product.price}</td>
                  <td className="text-center">{product.quantity}</td>
                  <td className="text-center">
                    <Button onClick={() => handleDeleteProduct(product._id)}>
                      X
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        )}
      </div>
    </div>
  );
};

export default MyItems;
