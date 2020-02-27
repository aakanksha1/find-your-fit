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
    }
    if (apparelFilter.length > 1) {
      var holder = allProducts.filter(obj => obj.type === apparelFilter);
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
              <a onClick={() => setBrandFilter(brand)} key={brand}>
                {brand}
              </a>
            )
          )}
        </Panel>
        <Panel className="filter-panel" header="Apparel" key="2">
          <Row>
            <Col md={6}>
              <h3>Tops</h3>
              {["Base Layer", "Short Sleeve", "Long Sleeve", "Outerwear"].map(
                type => (
                  <a onClick={() => setApparelFilter("T" + type)} key={type}>
                    {type}
                  </a>
                )
              )}
            </Col>
            <Col md={6}>
              <h3>Bottoms</h3>
              {["Base Layers", "Shorts", "Pants", "Leggings"].map(type => (
                <a onClick={() => setApparelFilter("B" + type)} key={type}>
                  {type}
                </a>
              ))}
            </Col>
          </Row>
        </Panel>
        <Panel className="filter-panel" header="Size" key="3">
          <a onClick={() => setSizeFilter("XS")}>{"XS (26 - 28)"}</a>
          <a onClick={() => setSizeFilter("S")}>{"S  (28 - 30)"}</a>
          <a onClick={() => setSizeFilter("M")}>{"M  (30 - 32)"}</a>
          <a onClick={() => setSizeFilter("L")}>{"L  (32 - 34)"}</a>
          <a onClick={() => setSizeFilter("XL")}>{"XL (34 - 36)"}</a>
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
