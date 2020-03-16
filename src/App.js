import React from "react";

//component imports
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
import FYFPage from "./components/FYFPage";
import MasterForm from "./components/CheckoutWizard";

//firebase imports
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//react + css
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";

//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const App = () => {
  return (
    <Router>
      <Banner />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/checkout" exact component={MasterForm} />
        <Route path="/yourfit" exact component={FYFPage} />
        <Route path="/:id" exact component={ProductPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
export { db };
