import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { useParams, Link, useLocation } from "react-router-dom";
import ReactDOM from "react-dom";
import CheckoutPage from "./CheckoutPage";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
           Email: ${email} \n 
           Username: ${username} \n
           Password: ${password}`);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <p> {this.state.currentStep} </p>

        <form onSubmit={this.handleSubmit}>
          {/* 
        render the form steps and pass required props in
      */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          />
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (

    <div className="form-group">
      <Container class="shipping-info-container">
        <h2> Shipping Information</h2>
        <h5> Contact Information</h5>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} >
            <input
              className="form-control"
              id="email"
              name="email"
              type="text"
              placeholder="Enter email"
              value={props.email}
              onChange={props.handleChange}
            />
          </Col>
        </Row>
        <h5> Shipping Address</h5>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} >
            <input
              className="form-control"
              id="fname"
              name="fname"
              type="text"
              placeholder="First Name"
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} >
            <input
              className="form-control"
              id="lname"
              name="lname"
              type="text"
              placeholder="Last Name"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} >
            <input
              className="form-control"
              id="address1"
              name="address1"
              type="text"
              placeholder="Street"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} >
            <input
              className="form-control"
              id="address2"
              name="address2"
              type="text"
              placeholder="Apt. Suite, Etc"
            />
          </Col>
        </Row>
        <Row className="header1">
          <Col xs={12} sm={12} md={12} lg={12} >
            <input
              className="form-control"
              id="city"
              name="city"
              type="text"
              placeholder="City"
            />
          </Col>
        </Row>
        <Row className="header1">
          <Col xs={12} sm={12} md={4} lg={4} >
            <input
              className="form-control"
              id="state"
              name="state"
              type="text"
              placeholder="State"
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} >
            <input
              className="form-control"
              id="country"
              name="country"
              type="text"
              placeholder="Country"
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} >
            <input
              className="form-control"
              id="zip"
              name="zip"
              type="text"
              placeholder="Zip"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} >
            <input
              className="form-control"
              id="pnumber"
              name="pnumber"
              type="text"
              placeholder="Phone Number"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="form-group">
      <Container class="shipping-info-container">
        <h2> Billing Information</h2>
        <h4> Credit Card Information</h4>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} >
            <input
              className="form-control"
              id="ccname"
              name="ccname"
              type="text"
              placeholder="Name on Card"
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} >

            <input
              className="form-control"
              id="ccnumber"
              name="ccnumber"
              type="text"
              placeholder="Card Number"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} >
            <input
              className="form-control"
              id="edate"
              name="edate"
              type="text"
              placeholder="Expiration Date"
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} >

            <input
              className="form-control"
              id="cvv"
              name="cvv"
              type="text"
              placeholder="CVV"
            />
          </Col>
        </Row>
        <h4>Billing Address</h4>
        <Row>
          <Col xs={6} sm={6} md={5} lg={3} >
            <label for="shipping">Same as Shipping Address</label>
            <input
              className="form-control"
              id="shipping"
              name="lname"
              type="checkbox"
            ></input>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} >

            <label for="billing">Enter New Address </label>
            <input
              className="form-control"
              id="shipping"
              name="lname"
              type="checkbox"
            ></input>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <CheckoutPage></CheckoutPage>
    </React.Fragment>
  );
}
export default MasterForm;
//ReactDOM.render(<MasterForm />, document.getElementById("root"));
