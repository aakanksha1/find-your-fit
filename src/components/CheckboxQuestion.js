import React from "react";
import {
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";

const CheckboxQuestion = ({ options, activities, setActivities }) => {
  return (
    <ButtonToolbar>
      <ToggleButtonGroup
        type="checkbox"
        onChange={setActivities}
        value={activities}
      >
        {options.map(option => (
          <ToggleButton
            className="col-6"
            style={{ borderRadius: 0, marginBottom: "10px" }}
            variant="outline-dark"
            value={option.value}
          >
            {option.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </ButtonToolbar>
  );
};

export default CheckboxQuestion;
