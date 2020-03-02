import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

// import Filter from "./Filter";
import "../styles/CheckoutPage.scss";
// import ProductCard from "./ProductCard";
import { db } from "../App";

const CheckoutPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    db.collection("items")
      .doc(id)
      .get()
      .then(snapshot => {
        setProduct(snapshot.data());
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return product && (
    <Container className="product-container">
      <br></br>
      <Row className="header1">
        <strong>ORDER CONFIRMED</strong>
      </Row>
      <br></br>
      <Row className="header2">
        <strong>Your trial will come in 2-4 days.</strong>
      </Row>
      <br></br>
      <Row className="header3">
        <strong>Order #ABC123456789</strong>
      </Row>
      <Card border="secondary" className="product-page-card">
        <Card.Img variant="top" className="img" src={product.thumbnail} />
      </Card>
      <h4 className="brand">{product.brand}</h4>
            <h6>{product.name}</h6>
            <p className="info-price">
                <span>
                  <strong>Price:</strong> ${product.price}
                </span>
              </p>

      {/* <Card>
        {" "}
        {products.map(product => (
          <ProductCard product={product} />
        ))}
      </Card> */}
    </Container>
  );
};

export default CheckoutPage;
