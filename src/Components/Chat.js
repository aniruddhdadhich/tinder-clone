import React from "react";
import Avatar from "@mui/material/Avatar";
import "./Chat.css";
import { Link } from "react-router-dom";

const Chat = ({ name, message, profile, timestamp }) => {
  return (
    <Link to={`/cgat/${name}`}>
      <div className="chat">
        <Avatar className="chat__image" src={profile} alt={name} />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
};

export default Chat;
