import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1>Products</h1>
      {products.slice(0, 7).map((product) => (
        <div key={product._id}>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title>{product.productName}</Card.Title>
              <Card.Img variant="top" src={product.img} />
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
                  {product.quantity > 0 ? " in Stock" : "out of stock"}{" "}
                </h5>
              </Card.Text>
              <Button variant="primary">Manage Product</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Products;
