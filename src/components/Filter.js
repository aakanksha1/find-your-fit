import React, { useState, useEffect } from "react";
import { Collapse, Icon } from "antd";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Filter.scss";
const { Panel } = Collapse;

const Filter = ({ allProducts, setProducts, products }) => {
  const [brandFilter, setBrandFilter] = useState("");
  const [apparelFilter, setApparelFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");

  const sizeAvaliable = product => {
    console.log(product.colors);
    for (var color in product.colors) {
      console.log(Object.entries(color));
      var holder = Object.entries(color).sizes.filter(
        obj => obj.sizeFilter > 0
      );
      if (holder.length > 1) {
        // that there is a size for this product
        return holder;
      }
    }
  };

  const viewProducts = () => {
    if (brandFilter.length > 1) {
      var holder = allProducts.filter(obj => obj.brand === brandFilter);
      setProducts(holder);
    }
    if (apparelFilter.length > 1) {
      var holder = allProducts.filter(obj => obj.type === apparelFilter);
      setProducts(holder);
    }
    if ((apparelFilter.length > 1) & (brandFilter.length > 1)) {
      var holder = allProducts.filter(obj => obj.type === apparelFilter);
      holder = holder.filter(obj => obj.brand === brandFilter);
      setProducts(holder);
    }
    if (sizeFilter.length >= 1) {
      console.log("help");
      var holderArr = allProducts.map(product => sizeAvaliable(product));
      console.log(holderArr);
    }
  };

  return (
    <Container>
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) =>
          isActive ? <Icon type="minus" /> : <Icon type="plus" />
        }
        expandIconPosition="right"
      >
        <Panel className="filter-panel" header="Brands" key="1">
          {["Adidas", "Athleta", "Lululemon", "Nike", "Under Armour"].map(
            brand => (
              <div>
                <a
                  className={brandFilter === brand ? "red" : null}
                  onClick={() => {
                    brandFilter === brand
                      ? setBrandFilter("")
                      : setBrandFilter(brand);
                  }}
                  key={brand}
                >
                  {brand}
                </a>
              </div>
            )
          )}
        </Panel>
        <Panel className="filter-panel" header="Apparel" key="2">
          <Row>
            <Col md={6}>
              <h3>Tops</h3>
              {["Base Layer", "Short Sleeve", "Long Sleeve", "Outerwear"].map(
                type => (
                  <div>
                    <a
                      className={apparelFilter === `T${type}` ? "red" : null}
                      onClick={() => {
                        apparelFilter === `T${type}`
                          ? setApparelFilter("")
                          : setApparelFilter("T" + type);
                      }}
                      key={type}
                    >
                      {type}
                    </a>
                  </div>
                )
              )}
            </Col>
            <Col md={6}>
              <h3>Bottoms</h3>
              {["Base Layers", "Shorts", "Pants", "Leggings"].map(type => (
                <div>
                  <a
                    className={apparelFilter === `B${type}` ? "red" : null}
                    onClick={() => {
                      apparelFilter === `B${type}`
                        ? setApparelFilter("")
                        : setApparelFilter("B" + type);
                    }}
                    key={type}
                  >
                    {type}
                  </a>
                </div>
              ))}
            </Col>
          </Row>
        </Panel>
        <Panel className="filter-panel" header="Size" key="3">
          <div>
            <a
              className={sizeFilter === "XS" ? "red" : null}
              onClick={() => {
                sizeFilter === "XS" ? setSizeFilter("") : setSizeFilter("XS");
              }}
            >
              {"XS (26 - 28)"}
            </a>
          </div>
          <div>
            <a
              className={sizeFilter === "S" ? "red" : null}
              onClick={() => {
                sizeFilter === "S" ? setSizeFilter("") : setSizeFilter("S");
              }}
            >
              {"S  (28 - 30)"}
            </a>
          </div>
          <div>
            <a
              className={sizeFilter === "M" ? "red" : null}
              onClick={() => {
                sizeFilter === "M" ? setSizeFilter("") : setSizeFilter("M");
              }}
            >
              {"M  (30 - 32)"}
            </a>
          </div>
          <div>
            <a
              className={sizeFilter === "L" ? "red" : null}
              onClick={() => {
                sizeFilter === "L" ? setSizeFilter("") : setSizeFilter("L");
              }}
            >
              {"L  (32 - 34)"}
            </a>
          </div>
          <div>
            <a
              className={sizeFilter === "XL" ? "red" : null}
              onClick={() => {
                sizeFilter === "XL" ? setSizeFilter("") : setSizeFilter("XL");
              }}
            >
              {"XL (34 - 36)"}
            </a>
          </div>
        </Panel>
      </Collapse>
      <Button
        style={{ marginTop: "20px", float: "right" }}
        variant="outline-dark"
        onClick={viewProducts}
      >
        View Results
      </Button>
    </Container>
  );
};

export default Filter;
