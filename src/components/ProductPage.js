import React, { useState, useEffect } from "react";
import { db } from "../App";
import { useParams } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import "../styles/ProductPage.scss";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    db.collection("items")
      .doc(id)
      .get()
      .then(snapShot => {
        console.log(snapShot.data());
        setProduct(snapShot.data());
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <Container>
      <Row className="product-page">
        <Col
          xs={9}
          sm={9}
          md={{ span: 6, offset: 3 }}
          lg={{ span: 6, offset: 3 }}
        >
          <Card border="secondary" className="product-page-card">
            <Card.Img variant="top" className="img" src={product.thumbnail} />
          </Card>
          <br></br>
        </Col>
        <Col xs={3} sm={3}>
          <Card border="light">
            <Card.Body>
              <Card.Text>
                <p>
                  <strong>{product.brand}</strong>
                </p>
                <p className="info-title">
                  <strong>{product.name}</strong>
                </p>
              </Card.Text>
              <hr></hr>
              <p>Color:</p>
              <div className="color-button-group">
                <button className="black"></button>
                <button className="white"></button>
                <button className="gray"></button>
              </div>

              <p>Size:</p>
              <div>
                <button className="size-button">XS</button>
                <button className="size-button">S</button>
                <button className="size-button">M</button>
                <button className="size-button">L</button>
                <button className="size-button">XL</button>
              </div>
              <div className="button-group">
                <button type="button" className="try-button">
                  Try
                </button>
                <button type="button" className="try-button">
                  Buy
                </button>
              </div>
              <button type="button" className="try-button">
                Add to Cart
              </button>

              <Card.Text>
                <hr className="line"></hr>
                <p className="info-price">
                  <span>Price: ${product.price}</span>
                </p>
                <p className="info-description">
                  Description: <br></br>
                  {product.description}
                </p>
                <p>
                  Learn more about our Trial Program:<br></br>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
