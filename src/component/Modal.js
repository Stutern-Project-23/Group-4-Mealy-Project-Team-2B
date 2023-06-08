import React from "react";
import PropTypes from "prop-types";
import { CgClose } from "react-icons/cg";
import styled from "styled-components";

const Modal = ({ onCloseModal, title, children }) => {
  const handleCloseModalClick = () => {
    onCloseModal();
  };

  return (
    <ModalStyle>
      <div className="modal-overlay">
        <div className="modal-container">
          <div className="close-icon-div">
            <CgClose
              className="close-icon"
              onClick={() => handleCloseModalClick()}
            />
          </div>

          <div className="modal-content">
            <h1 className="modal-title">{title}</h1>
            <div> {children}</div>
          </div>
        </div>
      </div>
    </ModalStyle>
  );
};

const ModalStyle = styled.div`
  .modal-container {
    width: 50%;
    margin: 0 auto;
    height: auto;
    background-color: #ffffff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    padding: 2em;
    padding-top: 1em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    @media (max-width: 400px) {
      width: 60%;
      padding-left: 1em;
      padding-right: 1em;
    }
  }
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9999;
  }
  .close-icon-div {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1em;
  }
  .close-icon {
    right: 50px;
    font-size: 25px;
    cursor: pointer;
    color: #d6d6d6;
  }
  .modal-content {
    display: grid;
    place-items: center;
    align-items: center;
    justify-content: center;
    h1 {
      margin-bottom: 0.5em;
    }
    > div {
      text-align: center;
    }
  }
`;

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  onCloseModal: PropTypes.func,
};

export default Modal;
