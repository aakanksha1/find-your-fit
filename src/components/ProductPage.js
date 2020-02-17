import React, { useState } from "react";
import { db } from "../App";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

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
      <Card border="secondary" className="product-card">
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Text>
            <p>{product.brand}</p>
            <p className="title">{product.name}</p>
            <hr className="line"></hr>
            <p className="price">
              <span>Price: ${product.price}</span>
            </p>
            <p className="description">Description: {product.description}</p>
          </Card.Text>
        </Card.Body>
      </Card>

      <br></br>
    </Container>
  );
};

export default ProductPage;
