import React from "react";

//component imports
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";

//firebase imports
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//react + css
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./styles/App.scss";

//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyA3RpF6mVTPOERmNM8Xtdy8jvP34hqQzoA",
  authDomain: "rinserepeat-1292e.firebaseapp.com",
  databaseURL: "https://rinserepeat-1292e.firebaseio.com",
  projectId: "rinserepeat-1292e",
  storageBucket: "rinserepeat-1292e.appspot.com",
  messagingSenderId: "397943590232",
  appId: "1:397943590232:web:c6c91ac2cb6d13d572e92d"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function App() {
  return (
    <Router>
      <Banner />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/:id" component={ProductPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
export { db };
