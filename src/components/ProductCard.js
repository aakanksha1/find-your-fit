import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <Container className="product-container">
      <Link to={`/${product.id}`} className="product-link">
        <Card border="secondary" className="product-card">
          <Card.Img
            variant="top"
            src={product.thumbnail}
            className="product-img"
          />
          <Card.Body>
            <Card.Text>
              <h5 className="brand">{product.brand}</h5>
              <div>{product.name}</div>
              <div>Price: ${product.price}</div>
              <hr className="line"></hr>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <br></br>
    </Container>
  );
};
export default ProductCard;
