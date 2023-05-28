import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({ text, onClick, children, className }) => (
  <ButtonStyle>
    <button type="button" onClick={onClick} className={className}>
      {text}
      {children}
    </button>
  </ButtonStyle>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};
Button.defaultProps = {
  children: null,
};

const ButtonStyle = styled.div`
  button {
    cursor: pointer;
    padding: 0.8rem 0;
    border: none;
    outline: none;
    font-size: 0.9rem;
    font-weight: 500;
    color: #ffffff;
    background-color: #fa5a00;
    border-radius: 16px;
    width: 400px;
    height: 48px;
  }

  button:hover {
    opacity: 0.8;
    transition: 0.4s ease-in-out;
  }
`;

export default Button;
