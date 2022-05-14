import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";

const Products = () => {
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
      <Banner></Banner>
      <div className="container mt-4 mb-2">
        <h1 className="text-center text-info text-bold">Products</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.slice(0, 13).map((product) => (
            <div key={product._id}>
              <Col>
                <Card style={{ width: "20rem" }}>
                  <Card.Body>
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Img variant="top" height="300px" src={product.img} />
                    <Card.Text>
                      {product.description.length > 200
                        ? `${product.description.slice(0, 6)}...`
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
                        {product.quantity > 0 ? (
                          " in Stock"
                        ) : (
                          <span className="text-warning fs-4">
                            out of stock
                          </span>
                        )}
                      </h5>
                    </Card.Text>

                    <Button
                      onClick={() => handleProductDetails(`${product._id}`)}
                    >
                      Manage Product
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          ))}
        </Row>
      </div>
      <div className="container text-center mt-3">
        <Link
          className="text-decoration-none text-white bg-primary border p-2 rounded font-bold fs-3"
          to="/manageproducts"
        >
          Manage Products
        </Link>
      </div>
    </div>
  );
};

export default Products;
