/* eslint-disable react/prop-types */
import React from "react";

const Footer = ({ inputMessage, setInputMessage, handleSendMessage }) => (
  <div className="chat-input-btn-div flex">
    <input
      type="text"
      placeholder="Type Something..."
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSendMessage();
        }
      }}
      value={inputMessage}
      onChange={(e) => setInputMessage(e.target.value)}
    />
    <button
      className="chat-send-btn"
      type="button"
      disabled={inputMessage.trim().length <= 0}
      onClick={handleSendMessage}>
      Send
    </button>
  </div>
);

export default Footer;
