import React from "react";
import PropTypes from "prop-types";
import "./Notification.css";

const Notification = ({ message }) => {
  return (
    <div  className="message">
      {message.split(" ").map((word, index) => (
        <span key={index}>
          {word}
          {index !== message.split(" ").length - 1 && " "}
        </span>
      ))}
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;