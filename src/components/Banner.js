import React, { useContext } from "react";
// import { UserContext } from "../contexts/UserContext";
import {Navbar, Nav} from "react-bootstrap";
import "../styles/Banner.scss";


const Banner = () => {
  
    return (
		<Navbar bg="dark" variant="dark" className="navigation-bar" sticky="top" >
			<Navbar.Brand href="#home" className="home">
				Shopping Cart
             </Navbar.Brand>
			<Nav className="ml-auto">
				
			</Nav>
		</Navbar>
	)
  };
  
  export default Banner;
  