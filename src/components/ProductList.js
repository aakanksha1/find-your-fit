import ProductCard from "./ProductCard";
import Filter from "./Filter";
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { db } from "../App";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const { state } = useLocation();

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
        <Filter
          className="Filters"
          allProducts={allProducts}
          setProducts={setProducts}
        />
        <Col md={12}>
          {products.length < 1 ? (
            <p
              style={{
                fontSize: "15px",
                textAlign: "center",
                paddingTop: "40px"
              }}
            >
              There are no matches. Try another filter!
            </p>
          ) : (
            <div>
              {state && products !== allProducts ? (
                <div>
                  <h2
                    style={{
                      textAlign: "center",
                      fontFamily: "Roboto Condensed",
                      marginTop: "10px",
                      marginBottom: "20px"
                    }}
                  >
                    Your Smart Fit Recommendations!
                  </h2>
                </div>
              ) : null}
              <div>
                <p
                  style={{ marginBottom: "-25px", marginLeft: "15px" }}
                >{`${products.length} results`}</p>
                <Row className="product-list">
                  {products.map(product => (
                    <Col xs={12} sm={12} md={4} lg={4}>
                      <ProductCard product={product} />
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
