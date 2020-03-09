import React, { useState, useEffect } from "react";
import { Collapse, Icon } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Filter.scss";
import { db } from "../App";

const { Panel } = Collapse;

const Filter = ({ allProducts, setProducts }) => {
  const [brandFilter, setBrandFilter] = useState("");
  const [apparelFilter, setApparelFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [FYFFilter, setFYFFilter] = useState({});
  const { state } = useLocation();

  // get FYF Filter
  useEffect(() => {
    db.collection("smart_suggestions")
      .doc("Snhz7v2gpYPTPhdZMJFP")
      .get()
      .then(querySnapshot => {
        setFYFFilter(querySnapshot.data());
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const handleFYF = () => {
    const FYFProducts = allProducts.filter(product => {
      const genderMatch = product.gender === FYFFilter.gender;
      const activityMatch = product.activity.filter(act =>
        FYFFilter.activities.includes(act)
      ).length;
      return genderMatch && activityMatch;
    });
    setProducts(FYFProducts);
  };

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
      let holder = allProducts.filter(obj => obj.brand === brandFilter);
      setProducts(holder);
    }
    if (apparelFilter.length > 1) {
      let holder = allProducts.filter(obj => obj.type === apparelFilter);
      setProducts(holder);
    }

    if (genderFilter.length > 1) {
      let holder = allProducts.filter(obj => obj.gender === genderFilter);
      setProducts(holder);
    }

    if ((apparelFilter.length > 1) & (brandFilter.length > 1)) {
      let holder = allProducts.filter(obj => obj.type === apparelFilter);
      holder = holder.filter(obj => obj.brand === brandFilter);
      setProducts(holder);
    }
    if (
      brandFilter.length < 1 &&
      apparelFilter.length < 1 &&
      genderFilter.length < 1
    )
      setProducts(allProducts);

    if ((genderFilter.length > 1) & (brandFilter.length > 1)) {
      let holder = allProducts.filter(obj => obj.gender === genderFilter);
      holder = holder.filter(obj => obj.brand === brandFilter);
      setProducts(holder);
    }
    if ((genderFilter.length > 1) & (apparelFilter.length > 1)) {
      let holder = allProducts.filter(obj => obj.gender === genderFilter);
      holder = holder.filter(obj => obj.type === apparelFilter);
      setProducts(holder);
    }
    if (
      (genderFilter.length > 1) &
      (apparelFilter.length > 1) &
      (brandFilter.length > 1)
    ) {
      let holder = allProducts.filter(obj => obj.gender === genderFilter);
      holder = holder.filter(obj => obj.type === apparelFilter);
      holder = holder.filter(obj => obj.brand === brandFilter);
      setProducts(holder);
    }
    // if (sizeFilter.length >= 1) {
    //   let holder = allProducts.filter((product) => {
    //     const product =
    //   });
    // }
  };

  return (
    <Container>
      <h3 className="filter-header">Filters</h3>
      <hr />
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) =>
          isActive ? <Icon type="minus" /> : <Icon type="plus" />
        }
        expandIconPosition="right"
      >
        <Panel className="filter-panel" header="Gender" key="6">
          {["Women", "Men"].map(gender => (
            <div>
              <a
                className={genderFilter === gender ? "red" : null}
                onClick={() => {
                  genderFilter === gender
                    ? setGenderFilter("")
                    : setGenderFilter(gender);
                }}
                key={gender}
              >
                {gender}
              </a>
            </div>
          ))}
        </Panel>
        <Panel className="filter-panel" header="Brands" key="4">
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
              <h6 className="filter-header">Tops</h6>
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
              <h6 className="filter-header">Bottoms</h6>
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
        className="filter-button btn-sm rounded-0"
        variant="outline-dark"
        onClick={viewProducts}
      >
        View Results
      </Button>
      {!state ? (
        <Link to="/yourfit">
          <Button
            id="fyf"
            className="filter-button btn-sm rounded-0"
            variant="outline-dark"
          >
            Try Now: Find your Fit Quiz
          </Button>
        </Link>
      ) : (
        <div>
          <Link to="/yourfit">
            <Button
              id="fyf"
              className="filter-button btn-sm rounded-0"
              variant="outline-dark"
            >
              Try a different suggestion!
            </Button>
          </Link>
          <Button
            id="fyf"
            className="filter-button btn-sm rounded-0"
            variant="outline-dark"
            onClick={handleFYF}
          >
            See results of customized items
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Filter;
