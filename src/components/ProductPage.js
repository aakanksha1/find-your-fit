import React, { useState } from "react";
import { db } from "../App";
import { useParams } from "react-router-dom";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import "../styles/ProductPage.scss";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  db.collection("items")
    .doc(id)
    .get()
    .then(snapShot => {
      setProduct(snapShot.data());
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });

  return (
    <Container>
      <Row className="product-page">
        <Col
          xs={12}
          sm={12}
          md={{ span: 6, offset: 3 }}
          lg={{ span: 6, offset: 3 }}
        >
          <Card border="secondary" className="product-page-card">
            <Card.Img variant="top" className="img" src={product.thumbnail} />
            <Card.Body>
              <Card.Text>
                <p>
                  <strong>{product.brand}</strong>
                </p>
                <p className="info-title">
                  <strong>{product.name}</strong>
                </p>
                <hr className="line"></hr>
                <p className="info-price">
                  <span>Price: ${product.price}</span>
                </p>
                <p className="info-description">
                  Description: {product.description}
                </p>
              </Card.Text>
              <div className="button-group">
                <button
                  type="button"
                  class="btn btn-primary"
                  className="try-button"
                >
                  Try
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  className="try-button"
                >
                  Buy
                </button>
              </div>
            </Card.Body>
          </Card>
          <br></br>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
