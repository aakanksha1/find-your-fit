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
              <p>{product.brand}</p>
              <p className="title">{product.name}</p>
              <p className="price">
                <span>Price: ${product.price}</span>
              </p>
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
