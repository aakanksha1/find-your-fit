import React, { useState, useEffect } from "react";
import { db } from "../App";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Card,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Button,
  ButtonGroup
} from "react-bootstrap";
import "../styles/ProductPage.scss";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);

  useEffect(() => {
    db.collection("items")
      .doc(id)
      .get()
      .then(snapshot => {
        setProduct(snapshot.data());
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    product && (
      <Container>
        <Row className="product-page">
          <Col
            xs={12}
            sm={12}
            md={{ span: 6, offset: 2 }}
            lg={{ span: 6, offset: 3 }}
          >
            <Card border="secondary" className="product-page-card">
              <Card.Img variant="top" className="img" src={product.thumbnail} />
            </Card>
            <br></br>
          </Col>
          <Col xs={12} sm={12} md={4} lg={3}>
            <h4 className="brand">{product.brand}</h4>
            <h6>{product.name}</h6>
            <hr></hr>
            <p>Color:</p>
            <div className="color-button-group">
              {product.colors.map((color, i) => (

                <OverlayTrigger
                  placement="top"
                  overlay={props => <Tooltip {...props}>{color.value}</Tooltip>}
                >
                  <button
                    key={i}
                    className={color === i ? "red" : null}
                    onClick={() => {
                      color === i
                        ? setColor("")
                        : setColor(color.value);
                    }}
                    style={{ backgroundColor: color.hex }}>
                    {i}

                  </button>
                </OverlayTrigger>
              ))}
            </div>

            <p>Size:</p>
            <div>
              {["XS", "S", "M", "L", "XL"].map(s => (
                <div>
                  <a
                    className={size === s ? "red" : null}
                    onClick={() => {
                      size === s
                        ? setSize("")
                        : setSize(s);
                    }}
                    key={s}
                  >
                    {s}
                  </a>
                </div>
              ))}
            </div>


            <ButtonGroup className="purchase-button-group">
              <Link to={{
                pathname: `/checkout`,
                state: {
                  checkoutProduct: product,
                  checkoutProductSize: size,
                  checkoutProductColor: color,
                  purchaseType: 'trial'
                }
              }}>
                {/* `/checkout/${id}`} className="product-link"> */}
                <Button variant="outline-dark">
                  Try ${(0.25 * product.price).toFixed(2)}{" "}
                </Button>
              </Link>
              <Link to={{
                pathname: `/checkout`,
                state: {
                  checkoutProduct: product,
                  checkoutProductSize: size,
                  checkoutProductColor: color,
                  purchaseType: 'buy'
                }
              }}>
                <Button variant="outline-dark">
                  Buy ${product.price.toFixed(2)}
                </Button></Link>

            </ButtonGroup>
            <Card.Text>
              <hr className="line"></hr>

              <p className="info-description">
                <strong>Description: </strong> <br></br>
                {product.description}
              </p>
              <p>
                <strong>Learn more about our Trial Program:</strong>
                <br></br> Find Your Fit allows athletes to try speciality
                workout clothes before they commit to buying the item right for
                them! You have a one month trial period that starts from the day
                that they receive their new gear. For further details of the
                Find Your Fit program, see our FAQ section.
              </p>
            </Card.Text>
          </Col>
        </Row>
      </Container>
    )
  );
};

export default ProductPage;
