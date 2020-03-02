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
  const {state} = useLocation();
  console.log(state.checkoutProduct);

  return (
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
        <Card.Img variant="top" className="img" src={state.checkoutProduct.thumbnail} />
      </Card>
      <h4 className="brand">{state.checkoutProduct.brand}</h4>
            <h6>{state.checkoutProduct.name}</h6>
            <p className="info-price">
                <span>
                  <strong>Price:</strong> ${state.checkoutProduct.price}
                </span>
              </p> 
              <p className="info-price">
                <span>
                  <strong>Color:</strong> {state.checkoutProductColor}
                  <strong>Size: </strong> {state.checkoutProductSize}
                </span>
              </p> 
    </Container>
  );
};

export default CheckoutPage;
