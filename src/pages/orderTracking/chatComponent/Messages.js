/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";

const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};

const Messages = ({ messages }) => (
  <div className="chat-message-div">
    {messages.map((item, index) => {
      if (item.from === "me") {
        return (
          <div
            key={index.id}
            style={{ width: "100%", justifyContent: "flex-end" }}
            className="flex">
            <div
              className="flex"
              style={{
                bg: "black",
                color: "blue",
                marginTop: "1em",
                marginBottom: "1em",
                padding: "3",
                paddingRight: "1em",
              }}>
              <p>{item.text}</p>
            </div>
          </div>
        );
      } else {
        return (
          <div key={index.id} style={{ width: "100%" }} className="flex">
            <img alt="" className="rider-img" />
            <div
              className="flex"
              style={{
                background: "gray.100",
                color: "black",
                minWidth: "100px",
                maxWidth: "350px",
                marginTop: "1",
                padding: "3",
              }}>
              <p>{item.text}</p>
            </div>
          </div>
        );
      }
    })}
    <AlwaysScrollToBottom />
  </div>
);

export default Messages;
