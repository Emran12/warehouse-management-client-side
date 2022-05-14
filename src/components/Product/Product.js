import React, { useEffect, useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { useParams } from "react-router-dom";

const Product = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleDelivered = (id) => {
    let qnty = product.quantity;
    qnty -= 1;
    product.quantity = qnty;
    if (product.quantity < 0) product.quantity = 0;
    const data = product;
    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  };

  const onSubmit = (data) => {
    const preQnty = parseInt(product.quantity);
    const newQnty = preQnty + parseInt(data.productQnty);
    if (newQnty < 0) product.quantity = 0;
    product.quantity = newQnty;
    data = product;
    console.log(data);
    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  };

  return (
    <div className="container">
      <Card className="border-0">
        <Card.Body>
          <Row>
            <Col sm={12} md={4}>
              <div className="border rounded bg-dark">
                <Card.Img
                  className="border rounded p-3 bg-white"
                  variant="top"
                  height="400px"
                  src={product.img}
                />
              </div>
            </Col>
            <Col md={8} className="mt-5">
              <Card.Title>{product.productName}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>
                <h5>
                  Supplier: <smal>{product.supplierName}</smal>
                </h5>
                <h5>Price: ${product.price}</h5>
              </Card.Text>
              <Card.Text>
                <h5>
                  Availability:
                  {product.quantity >= 0 ? (
                    product.quantity
                  ) : (
                    <span className="text-warning">
                      Temporarily Unavailable
                    </span>
                  )}
                </h5>
              </Card.Text>

              <div className="d-flex">
                <Button onClick={() => handleDelivered(product._id)}>
                  Delivered
                </Button>
                <form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className=" w-75"
                    {...register("productQnty", { pattern: /\d+/ })}
                  />
                  {errors.age && (
                    <p>Please enter number for adding product quantity.</p>
                  )}
                  <input
                    className="text-white bg-primary"
                    type="submit"
                    value={`restock item`}
                  />
                </form>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
