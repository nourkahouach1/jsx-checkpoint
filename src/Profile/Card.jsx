import React, { useState } from "react";
import "./Card.css";
import PropTypes from "prop-types";

function Card({ name, job, about, showName, children }) {
  // console.log(props);
  // const {name,job,about}=props
  const handleClick = (e) => {
    e.preventDefault();
    showName(name);
  };

  return (
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">{children}</div>
      </div>
      <div className="lower-container">
        <h3> {name} </h3>
        <h4> {job} </h4>
        <p> {about} </p>

        <button onClick={handleClick}>Visit Profile </button>
      </div>
    </div>
  );
}
Card.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  showName: PropTypes.func.isRequired,
};
Card.defaultProps = {
  name: "Jane Doe",
  job: "Default Profession",
  about: "About Jane",
  showName: (name) => console.log(`Hello ${name}`),
};

export default Card;
