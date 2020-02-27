import ProductCard from "./ProductCard";
import Filter from "./Filter";
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { db } from "../App";

const ProductList = () => {
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
    <Container className="product-container">
      <Row>
        <Col md={3}>
          <Filter
            allProducts={allProducts}
            setProducts={setProducts}
            products={products}
          />
        </Col>
        <Col md={9}>
          <Row className="product-list">
            {products.map(product => (
              <Col xs={12} sm={12} md={4} lg={4}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
