import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";
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
    { name: "Yoga", value: "yoga" },
    { name: "HIIT/Crossfit", value: "hiit/crossfit" },
    { name: "Obstacle Racing", value: "obstacle racing" },
    { name: "Weight Lifting", value: "weight lifting" }
  ];

  const allEvents = [
    { name: "Marathon", value: "distance running" },
    { name: "Triathlon", value: "mountain biking" },
    { name: "Cycling Race", value: "road cycling" },
    { name: "Obstacle Race", value: "obstacle racing" }
  ];

  const history = useHistory();

  const handleGenderChange = value => {
    setResults({ ...results, gender: value });
  };

  const toggleImageActivity = value => {
    if (imageActivities.includes(value)) {
      setImageActivities(
        imageActivities.filter(activity => activity !== value)
      );
    } else {
      setImageActivities([...imageActivities, value]);
    }
  };

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
          <Form.Label style={{ marginTop: 0 }}>Please select one.</Form.Label>
          <ButtonToolbar>
            <ToggleButtonGroup
              type="radio"
              name="gender"
              onChange={handleGenderChange}
              value={results.gender}
            >
              <ToggleButton
                style={{ borderRadius: 0 }}
                variant="outline-dark"
                value="Men"
              >
                Men
              </ToggleButton>
              <ToggleButton
                style={{ borderRadius: 0 }}
                variant="outline-dark"
                value="Women"
              >
                Women
              </ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Form.Group>
        <Form.Label>
          Which of the below activites do you currently partake in?
        </Form.Label>
        <CheckboxQuestion
          options={allActivities}
          activities={activities}
          setActivities={setActivities}
        />
        <Form.Label>Do you have any upcoming events or races?</Form.Label>
        <CheckboxQuestion
          options={allEvents}
          activities={eventActivities}
          setActivities={setEventActivities}
        />
        <Form.Label>
          Which of the below photos best represent your workout aspirations?
        </Form.Label>
        <ImageQuestion
          activities={imageActivities}
          toggleActivity={toggleImageActivity}
        />
        <div id="submit-container">
          <Button
            variant="outline-dark"
            style={{ borderRadius: 0 }}
            type="submit"
          >
            Finish
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default FYFPage;
