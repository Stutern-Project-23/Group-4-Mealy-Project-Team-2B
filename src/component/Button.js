import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick, children }) => (
  <button type="button" onClick={onClick}>
    {text}
    {children}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};
Button.defaultProps = {
  children: null,
};

export default Button;
