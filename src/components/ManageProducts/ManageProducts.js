import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleProductDetails = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div>
      <div className="container mt-4 mb-2">
        <h1 className="text-center text-info text-bold">Products</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Supplier Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Add Item</th>
              <th>Del.Item</th>
            </tr>
          </thead>
          {products.map((product) => (
            <tbody>
              <tr>
                <td>{product._id}</td>
                <td>{product.productName}</td>
                <td>{product.supplierName}</td>
                <td className="text-center">${product.price}</td>
                <td className="text-center">{product.quantity}</td>
                <td className="text-center">
                  <Button>+</Button>
                </td>
                <td className="text-center">
                  <Button>X</Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageProducts;
