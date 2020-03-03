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
    <Container>
      <Container className="product-heading">
        <Row className="header1">
          <Col xs={12} sm={{ span: 6, offset:1 }}  md={{ span: 6, offset: 1 }} lg={{ span: 6, offset:1 }}>
            <strong>ORDER CONFIRMED</strong>
          </Col>
        </Row>
        <Row className="header2">
          <Col xs={12} sm={{ span: 6, offset:2 }}  md={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 2}}>
            <strong>Your {state.purchaseType} will come in 2-4 days.</strong>
          </Col>
        </Row>
        <Row className="header3">
          <Col xs={12} sm={{ span: 6, offset:4 }}  md={{ span: 6, offset: 4 }} lg={{ span: 6, offset: 4}}>
            <strong>Order #ABC123456789</strong>
          </Col>
        </Row>
      </Container>

      <Container className="product-container">
        <Row className="order-summary">
          <Col xs={{span:9, offset: 3}} sm={{span:9, offset: 3}} md={{span:9, offset: 3}} lg={{span:9, offset: 3}}>
            <strong>Order Summary</strong>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Row className="card-info">
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
      <Container className="total">
        <Row>
          <Col >
            <hr className="horizontal-rule"></hr>
          </Col>
        </Row>
        <Row className="total-price">
          <Col xs={{ span: 3 }} sm={{ span: 3, offset: 2 }}  md={{ span: 3, offset: 3 }}>
            <strong>Total</strong>
          </Col>
          <Col xs={{ span: 3, offset: 3 }} sm={{ span: 3, offset: 2 }}  md={{ span: 3, offset: 2 }}>
            <strong>${state.checkoutProduct.price}</strong>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CheckoutPage;
