import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Filter from "./Filter";
import "../styles/CheckoutPage.scss";
import ProductCard from "./ProductCard";
import { db } from "../App";

const CheckoutPage = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    db.collection("items")

      .get()
      .then(querySnapshot => {
        const productArr = [];
        querySnapshot.forEach(doc =>
          productArr.push({ id: doc.id, ...doc.data() })
        );
        setAllProducts(productArr);
        setProducts(productArr);
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  }, []);
  return (
    <Container products={products}>
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

      <Card>
        {" "}
        {products.map(product => (
          <ProductCard product={product} />
        ))}
      </Card>
    </Container>
  );
};

export default CheckoutPage;
