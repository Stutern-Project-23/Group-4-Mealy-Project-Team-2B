import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({ text, onClick, children, className, type, style }) => (
  <ButtonStyle>
    {/* eslint-disable-next-line react/button-has-type */}
    <button type={type} onClick={onClick} className={className} style={style}>
      {text}
      {children}
    </button>
  </ButtonStyle>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.instanceOf(Object),
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
    border-radius: 5px;
    width: 400px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:hover {
    opacity: 0.8;
    transition: 0.4s ease-in-out;
  }
`;

export default Button;
