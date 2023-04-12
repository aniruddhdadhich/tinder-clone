import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./ChatScreen.css";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Nick Fury",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/nick-fury-eye-1552397861.jpg?crop=0.488xw:0.976xh;0,0&resize=1200:*",
      message: "Stark",
    },
    {
      name: "Nick Fury",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/nick-fury-eye-1552397861.jpg?crop=0.488xw:0.976xh;0,0&resize=1200:*",
      message: "Where are you? Need you asap.",
    },
    {
      message: "Can't tell you, 'cause last time I checked I was my own boss.",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH NICK ON 12/12/2009
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__img"
              src={message.image}
              alt={message.name}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type a message..."
          className="chatScreen__inputField"
        />
        <button onClick={handleSend} className="chatScreen__inputButton">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
