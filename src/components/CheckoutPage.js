import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { useParams, Link, useLocation } from "react-router-dom";

// import Filter from "./Filter";
import "../styles/CheckoutPage.scss";
// import ProductCard from "./ProductCard";
import { db } from "../App";

const CheckoutPage = () => {
  // const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { state } = useLocation();
  console.log(state.checkoutProduct);

  return (
    <Container className="product-container">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h3>
            <strong>ORDER CONFIRMED</strong></h3>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <strong>Your {state.purchaseType} will come in 2-4 days.</strong>
        </Col>
      </Row>
      <br></br>
      <Row className="header1">
        <Col md={{ span: 6, offset: 3 }}>
          <strong>Order #ABC123456789</strong>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Row>
            <Col md={6}>
              <Card border="secondary" className="product-page-card">
                <Card.Img variant="top" className="img" src={state.checkoutProduct.thumbnail} />
              </Card>
            </Col>
            <Col md={6}>
              <h4 className="brand">{state.checkoutProduct.brand}</h4>
              <h6>{state.checkoutProduct.name}</h6>
              <p className="info-price">
                <span>
                  <strong>1 | {state.checkoutProductColor} | {state.checkoutProductSize}</strong>
                </span>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

    </Container>
  );
};

export default CheckoutPage;
