import React, { useState, useEffect } from "react";
import { Collapse, Icon } from "antd";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Filter.scss";
const { Panel } = Collapse;

const Filter = ({ allProducts, setProducts, products }) => {
  const [brandFilter, setBrandFilter] = useState("");
  const [apparelFilter, setApparelFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");

  // href tag on the divs for each w/ onClick set the state of the filter
  // give div value property and
  //filter.brandFilter)

  const viewProducts = () => {
    if (brandFilter.length > 1) {
      var holder = allProducts.filter(obj => obj.brand === brandFilter);
      setProducts(holder);
      console.log("brand:" + brandFilter);
      console.log("productsforbrand" + products);
    }
    if (apparelFilter.length > 1) {
      var holder = allProducts.filter(obj => obj.type === apparelFilter);
      setProducts(holder);
      console.log("apparel:" + apparelFilter);
      console.log("productsfora" + products);
    }

    if ((apparelFilter.length > 1) & (brandFilter.length > 1)) {
      var holder = allProducts.filter(obj => obj.type === apparelFilter);
      holder = holder.filter(obj => obj.brand === brandFilter);
      setProducts(holder);
    }
    /*
    if (sizeFilter.length() > 1 ){
      var holder = allProducts.filter(obj => obj.brand === );
      setProducts(holder);  
    }
    */
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
                  className="red"
                  onClick={() => setBrandFilter(brand)}
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
                      className="red"
                      onClick={() => setApparelFilter("T" + type)}
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
                    className="red"
                    onClick={() => setApparelFilter("B" + type)}
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
            <a className="red" onClick={() => setSizeFilter("XS")}>
              {"XS (26 - 28)"}
            </a>
          </div>
          <div className="red">
            <a className="red" onClick={() => setSizeFilter("S")}>
              {"S  (28 - 30)"}
            </a>
          </div>
          <div className="red">
            <a className="red" onClick={() => setSizeFilter("M")}>
              {"M  (30 - 32)"}
            </a>
          </div>
          <div className="red">
            <a className="red" onClick={() => setSizeFilter("L")}>
              {"L  (32 - 34)"}
            </a>
          </div>
          <div className="red">
            <a className="red" onClick={() => setSizeFilter("XL")}>
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
