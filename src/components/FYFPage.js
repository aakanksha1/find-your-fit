import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import "../styles/FYFPage.scss";
import { db } from "../App";

const FYFPage = () => {
  const [results, setResults] = useState({ gender: "Male" });
  const [activities, setActivities] = useState([]);
  const history = useHistory();
  const handleChange = type => {
    return e => {
      setResults({
        [type]: e.target.value
      });
    };
  };

  const handleCheck = e => {
    const activity = e.target.value;
    if (activities.includes(activity)) {
      setActivities(activities.filter(x => x !== activity));
    } else {
      setActivities([...activities, activity]);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = { ...results, activities };
    db.collection("smart_suggestions")
      .doc("Snhz7v2gpYPTPhdZMJFP")
      .set(data);
    history.push({ pathname: "/", state: { filtered: true } });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="FYF.ControlSelect1">
          <Form.Label>Gender</Form.Label>
          <Form.Control as="select" onChange={handleChange("gender")}>
            <option>Male</option>
            <option>Female</option>
          </Form.Control>
        </Form.Group>
        <Form.Label>
          Which of the below activites do you currently partake in?
        </Form.Label>
        <div className="mb-3">
          <Form.Check
            inline
            label="Running"
            value="Running"
            onChange={handleCheck}
          />
          <Form.Check
            inline
            label="Weight Training"
            value="Weight Training"
            onChange={handleCheck}
          />
          <Form.Check
            inline
            label="Cycling"
            value="Cycling"
            onChange={handleCheck}
          />
          <Form.Check
            inline
            label="Hiking"
            value="Hiking"
            onChange={handleCheck}
          />
          <Form.Check
            inline
            label="Climbing"
            value="Climbing"
            onChange={handleCheck}
          />
          <Form.Check
            inline
            label="Marathon"
            value="Marathon"
            onChange={handleCheck}
          />
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default FYFPage;
