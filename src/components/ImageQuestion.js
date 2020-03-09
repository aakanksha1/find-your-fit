import React from "react";
import { Row, Col } from "react-bootstrap";

const CheckboxQuestion = ({ activities, toggleActivity }) => {
  const style = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    marginBottom: "20px",
    cursor: "pointer"
  };

  const images = [
    {
      src: "https://trainright.com/wp-content/uploads/2018/06/ATOC-uphill.jpg",
      value: "road cycling"
    },
    {
      src:
        "https://i.insider.com/5da1a3ddcc4a0a79db630ae3?width=1100&format=jpeg&auto=webp",
      value: "distance running"
    },
    {
      src:
        "https://sgbonline.com/wp-content/uploads/2016/12/Skylar_Diggins_NTC.Nike_Metcon_DSX_Flyknit_original.jpg",
      value: "hiit/crossfit"
    },
    {
      src:
        "https://www.wellandgood.com/wp-content/uploads/2019/09/Getty-Images-fizkes-yoga-foot-stretches.jpg",
      value: "yoga"
    },
    {
      src:
        "https://nextlevelweightlossfl.com/wp-content/uploads/2019/07/benefits-of-lifting-weights.jpeg",
      value: "weight lifting"
    },
    {
      src:
        "https://www.chaletribot.com/media/1498863600/1500591600/1500624065-2bca07c5fb5e59168f0fd472ce1eb35c.jpg",
      value: "mountain biking"
    }
  ];

  return (
    <Row>
      {images.map(image => (
        <Col xs={6} sm={6} md={4}>
          <img
            style={{
              ...style,
              border: activities.includes(image.value)
                ? "3px solid blue"
                : "0px"
            }}
            src={image.src}
            onClick={() => toggleActivity(image.value)}
            alt=""
          />
        </Col>
      ))}
    </Row>
  );
};

export default CheckboxQuestion;
