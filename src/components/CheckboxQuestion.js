import React from "react";
import { Form } from "react-bootstrap";

const CheckboxQuestion = ({ list, toggleActivity }) => {
  return (
    <div className="mb-3">
      {list.map(option => (
        <Form.Check
          inline={true}
          label={option.name}
          value={option.value}
          onChange={e => toggleActivity(e.target.value)}
        />
      ))}
    </div>
  );
};

export default CheckboxQuestion;
