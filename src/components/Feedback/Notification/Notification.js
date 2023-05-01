import React from "react";
import PropTypes from "prop-types";
import "./Notification.css";

const Notification = ({ message }) => {
  return <p className="my-text">{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;