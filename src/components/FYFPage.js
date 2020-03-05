import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import "../styles/FYFPage.scss";
import { db } from "../App";
import CheckboxQuestion from "./CheckboxQuestion";
import ImageQuestion from "./ImageQuestion";

const FYFPage = () => {
  const [results, setResults] = useState({ gender: "Men" });
  const [activities, setActivities] = useState([]);
  const [eventActivities, setEventActivities] = useState([]);
  const [imageActivities, setImageActivities] = useState([]);

  const allActivities = [
    { name: "Distance Running", value: "distance running" },
    { name: "Track Running", value: "track running" },
    { name: "Road Cycling", value: "road cycling" },
    { name: "Mountain Biking", value: "mountain biking" },
    { name: "Swimming", value: "swimming" },
    { name: "Yoga", value: "yoga" },
    { name: "HIIT/Crossfit", value: "hiit/crossfit" },
    { name: "Obstacle Racing", value: "obstacle racing" },
    { name: "Weight Lifting", value: "weight lifting" }
  ];

  const allEvents = [
    { name: "Marathon", value: "distance running" },
    { name: "Triathlon", value: "swimming" },
    { name: "Cycling Race", value: "road cycling" },
    { name: "Obstacle Race", value: "obstacle racing" }
  ];

  const history = useHistory();

  const handleChange = type => {
    return e => {
      setResults({
        [type]: e.target.value
      });
    };
  };

  const createActivityToggler = (arr, setArr) => {
    return activity => {
      if (arr.includes(activity)) {
        setArr(arr.filter(x => x !== activity));
      } else {
        setArr([...arr, activity]);
      }
    };
  };

  const toggleActivity = createActivityToggler(activities, setActivities);
  const toggleEventActivity = createActivityToggler(
    eventActivities,
    setEventActivities
  );
  const toggleImageActivity = createActivityToggler(
    imageActivities,
    setImageActivities
  );

  const handleSubmit = e => {
    e.preventDefault();
    let allActivities = [...activities, ...eventActivities, ...imageActivities];
    // Remove duplicate activities
    allActivities = allActivities.filter(
      (activity, i) => allActivities.indexOf(activity) === i
    );
    const data = { ...results, activities: allActivities };
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
            <option>Men</option>
            <option>Women</option>
          </Form.Control>
        </Form.Group>
        <Form.Label>
          Which of the below activites do you currently partake in?
        </Form.Label>
        <CheckboxQuestion
          list={allActivities}
          toggleActivity={toggleActivity}
        />
        <Form.Label>
          Do you have any upcoming events or races? Add your events below.
        </Form.Label>
        <CheckboxQuestion
          list={allEvents}
          toggleActivity={toggleEventActivity}
        />
        <Form.Label>
          Which of the below photos best represent your workout aspirations?
        </Form.Label>
        <ImageQuestion
          activities={imageActivities}
          toggleActivity={toggleImageActivity}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default FYFPage;
