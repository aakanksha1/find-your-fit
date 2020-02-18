import ProductCard from "./ProductCard";
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { db } from "../App";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const productsArr = [];

  useEffect(() => {
    db.collection("items")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc =>
          productsArr.push({ id: doc.id, ...doc.data() })
        );
        setProducts(productsArr);
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <Container className="product-container">
      <Row className="product-list">
        {products.map(product => (
          <Col xs={12} sm={12} md={4} lg={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;