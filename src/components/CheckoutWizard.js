import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card, Form, Button } from "react-bootstrap";
import { useParams, Link, useLocation } from "react-router-dom";
import ReactDOM from "react-dom";
import CheckoutPage from "./CheckoutPage";

import "../styles/CheckoutWizard.scss";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      username: "",
      password: "",
      product: this.props.location.state.checkoutProduct
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
    if (1 < currentStep && currentStep < 3) {
      return (
        <Container>
          <span class="previous-wrapper">
            <Row>
              <Col xs={12} sm={12} md={10} lg={10}>
                <Row>
                  <Col
                    xs={12}
                    sm={12}
                    md={{ span: 4, offset: 1 }}
                    lg={{ span: 4, offset: 1 }}
                  >
                    <Button
                      class="previous"
                      variant="secondary"
                      type="button"
                      onClick={this._prev}
                    >
                      Previous
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col></Col>
            </Row>
          </span>
        </Container>
      );
    }
    return null;
  }
  takeHomeButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 3) {
      return (
        <span>
          <br></br>
          <Col
            class="next"
            xs={{ span: 12, offset: 1 }}
            sm={12}
            md={{ span: 7, offset: 5 }}
            lg={{ span: 7, offset: 5 }}
          >
            <Button
              variant="dark"
              type="button"
              size="md"
              href="/"
              style={{ marginLeft: "55px" }}
            >
              Back to Home Page
            </Button>
          </Col>
        </span>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <Container>
          <span class="next-wrapper">
            <Row>
              <Col xs={12} sm={12} md={10} lg={10}>
                <Row>
                  <Col
                    xs={12}
                    sm={12}
                    md={{ span: 4, offset: 8 }}
                    lg={{ span: 4, offset: 8 }}
                  >
                    <Button
                      class="next"
                      variant="dark"
                      type="button"
                      onClick={this._next}
                    >
                      Next
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col></Col>
            </Row>
          </span>
        </Container>
      );
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        {/* <p> {this.state.currentStep} </p>*/}

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
          {this.takeHomeButton()}
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
    <div>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={10} lg={10}>
            <Row className="header">
              <Col
                xs={12}
                sm={12}
                md={{ span: 6, offset: 1 }}
                lg={{ span: 6, offset: 1 }}
              >
                <h2> SHIPPING</h2>
              </Col>
            </Row>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={{ span: 6, offset: 1 }}
                lg={{ span: 6, offset: 1 }}
              >
                <h5> CONTACT INFORMATION</h5>
              </Col>
            </Row>
            <Row className="input_row">
              <Col
                xs={12}
                sm={12}
                md={{ span: 8, offset: 1 }}
                lg={{ span: 8, offset: 1 }}
              >
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter email"
                  value="batu@u.northwestern.edu"
                  onChange={props.handleChange}
                />
              </Col>
            </Row>

            <Row className="input_row">
              <Col
                xs={12}
                sm={12}
                md={{ span: 8, offset: 1 }}
                lg={{ span: 8, offset: 1 }}
              >
                <input
                  className="form-control"
                  id="lname"
                  name="lname"
                  type="text"
                  placeholder="Phone Number"
                  value="+1(312)999-8877"
                />
              </Col>
            </Row>

            <br></br>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={{ span: 6, offset: 1 }}
                lg={{ span: 6, offset: 1 }}
              >
                <h5> SHIPPING ADDRESS</h5>
              </Col>
            </Row>
            <Row className="input_row">
              <Col
                mb-3
                xs={12}
                sm={12}
                md={{ span: 4, offset: 1 }}
                lg={{ span: 4, offset: 1 }}
              >
                <input
                  className="form-control"
                  id="fname"
                  name="fname"
                  type="text"
                  placeholder="First Name"
                  value="Batuhan"
                />
              </Col>
              <Col
                xs={12}
                sm={12}
                md={{ span: 4, offset: 0 }}
                lg={{ span: 4, offset: 0 }}
              >
                <input
                  className="form-control"
                  id="lname"
                  name="fname"
                  type="text"
                  placeholder="Last Name"
                  value="Ergor"
                />
              </Col>
            </Row>
            <Row className="input_row">
              <Col
                xs={12}
                sm={12}
                md={{ span: 8, offset: 1 }}
                lg={{ span: 8, offset: 1 }}
              >
                <input
                  className="form-control"
                  id="address"
                  name="lname"
                  type="text"
                  placeholder="Address"
                  value="1630 Chicago Ave"
                />
              </Col>
            </Row>
            <Row className="input_row">
              <Col
                xs={12}
                sm={12}
                md={{ span: 8, offset: 1 }}
                lg={{ span: 8, offset: 1 }}
              >
                <input
                  className="form-control"
                  id="address2"
                  name="lname"
                  type="text"
                  placeholder="Apt. Suite, Etc"
                  value="The Park Evanston"
                />
              </Col>
            </Row>
            <Row className="input_row">
              <Col
                xs={12}
                sm={12}
                md={{ span: 8, offset: 1 }}
                lg={{ span: 8, offset: 1 }}
              >
                <input
                  className="form-control"
                  id="city"
                  name="lname"
                  type="text"
                  placeholder="City"
                  value="Evanston"
                />
              </Col>
            </Row>
            <Row className="input_row">
              <Col
                xs={12}
                sm={12}
                md={{ span: 3, offset: 1 }}
                lg={{ span: 3, offset: 1 }}
              >
                <input
                  className="form-control"
                  id="country"
                  name="fname"
                  type="text"
                  placeholder="First Name"
                  value="USA"
                />
              </Col>
              <Col
                xs={12}
                sm={12}
                md={{ span: 2, offset: 0 }}
                lg={{ span: 2, offset: 0 }}
              >
                <input
                  className="form-control"
                  id="state"
                  name="fname"
                  type="text"
                  placeholder="Last Name"
                  value="IL"
                />
              </Col>
              <Col
                xs={12}
                sm={12}
                md={{ span: 3, offset: 0 }}
                lg={{ span: 3, offset: 0 }}
              >
                <input
                  className="form-control"
                  id="zip"
                  name="fname"
                  type="text"
                  placeholder="First Name"
                  value="60201"
                />
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={2} lg={2}>
            {/* <div>
              <p>Order Summary</p>
              <div class="img">
              </div>
            </div> */}
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
    <div>
      <Container>
        <Row className="header">
          <Col
            xs={12}
            sm={12}
            md={{ span: 6, offset: 1 }}
            lg={{ span: 6, offset: 1 }}
          >
            <h2>PAYMENT</h2>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={{ span: 6, offset: 1 }}
            lg={{ span: 6, offset: 1 }}
          >
            <h5> CREDIT CARD INFORMATION</h5>
          </Col>
        </Row>
        <Row className="input_row">
          <Col
            xs={12}
            sm={12}
            md={{ span: 8, offset: 1 }}
            lg={{ span: 8, offset: 1 }}
          >
            <input
              className="form-control"
              id="name"
              name="lname"
              type="text"
              placeholder="City"
              value="Batuhan Ergor"
            />
          </Col>
        </Row>
        <Row className="input_row">
          <Col
            xs={12}
            sm={12}
            md={{ span: 8, offset: 1 }}
            lg={{ span: 8, offset: 1 }}
          >
            <input
              className="form-control"
              id="ccnumber"
              name="lname"
              type="text"
              placeholder="City"
              value="1111222233334444"
            />
          </Col>
        </Row>
        <Row className="input_row">
          <Col
            xs={12}
            sm={12}
            md={{ span: 4, offset: 1 }}
            lg={{ span: 4, offset: 1 }}
          >
            <input
              className="form-control"
              id="ccexp"
              name="fname"
              type="text"
              placeholder="First Name"
              value="12/21"
            />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={{ span: 4, offset: 0 }}
            lg={{ span: 4, offset: 0 }}
          >
            <input
              className="form-control"
              id="ccv"
              name="fname"
              type="text"
              placeholder="Last Name"
              value="999"
            />
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col
            xs={12}
            sm={{ span: 6, offset: 1 }}
            md={{ span: 6, offset: 1 }}
            lg={{ span: 6, offset: 1 }}
          >
            <h5> BILLING ADDRESS</h5>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            sm={{ span: 6, offset: 1 }}
            md={{ span: 6, offset: 1 }}
            lg={{ span: 6, offset: 1 }}
          >
            <Form>
              <Form.Check
                type="radio"
                label="Same as Shipping Address"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="Enter New Address"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Form>
          </Col>
        </Row>
      </Container>
      <br></br>
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
