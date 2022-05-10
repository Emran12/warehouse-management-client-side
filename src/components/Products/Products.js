import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="container mt-4 mb-2">
        <h1 className="text-center text-info text-bold">Products</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.slice(0, 6).map((product) => (
            <div key={product._id}>
              <Col>
                <Card style={{ width: "20rem" }}>
                  <Card.Body>
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Img variant="top" height="300px" src={product.img} />
                    <Card.Text>
                      {product.description.length > 200
                        ? `${product.description.slice(0, 200)}...`
                        : product.description}
                    </Card.Text>
                    <Card.Text>
                      <h5>
                        Supplier Name: <smal>{product.supplierName}</smal>
                      </h5>
                      <h5>Price: ${product.price}</h5>
                    </Card.Text>
                    <Card.Text>
                      <h5>
                        Availability:
                        {product.quantity > 0
                          ? " in Stock"
                          : "out of stock"}{" "}
                      </h5>
                    </Card.Text>

                    <Link
                      className="text-decoration-none border p-2 bg-primary text-white rounded"
                      to="/product/:id"
                    >
                      Manage Product
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Products;
