import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const Filter = ({ productsArr, setProducts }) => {
  const [brandFilter, setBrandFilter] = useState("");
  const [apparelFilter, setApparelFiter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");

  //filter through productArr and setProducts after

  const ViewProducts = () => {
    var holder = productsArr.filter(obj => obj.brand == filter.brandFilter);
    setProducts(holder);
  };

  return (
    <div>
      <p>This is a filter</p>
      <Button onClick={ViewProducts}>View Results</Button>
    </div>
  );
};

export default Filter;
