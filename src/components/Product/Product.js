import React, { useEffect, useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";

import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleDeliverd = () => {
    let qnty = product.quantity;
    qnty -= 1;
    product.quantity = qnty;
    if (product.quantity <= 0) product.quantity = 0;
    const updatedProduct = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ quantity: product.quantity }),
    };
    fetch(`http://localhost:5000/product/${id}`, updatedProduct)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  return (
    <div className="container">
      <Card className="border-0">
        <Card.Body>
          <Row>
            <Col sm={12} md={4}>
              <Card.Img variant="top" height="400px" src={product.img} />
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
              <Button onClick={handleDeliverd}>Deliverd</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
