import React from "react";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";

//react + css
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/App.scss";

//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Banner />

      <ProductList />

     </Router>

  );
}

export default App;
