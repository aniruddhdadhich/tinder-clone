import React from "react";
import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Pepper Potts"
        message="What are you doing on Tinder Tony?"
        timestamp="12 minutes ago"
        profile="https://www.looper.com/img/gallery/why-pepper-potts-will-be-more-important-than-you-think-in-endgame/intro-1552915184.jpg"
      />
      <Chat
        name="Jane Foster"
        message="I am not here for hookups, Stark."
        timestamp="16 minutes ago"
        profile="https://i.pinimg.com/originals/9b/cc/44/9bcc44fb477245090a1e660dfbbfa0df.jpg"
      />
      <Chat
        name="Nick Fury"
        message="This is our secret message platform. Stop using it to find dates."
        timestamp="19 minutes ago"
        profile="https://hips.hearstapps.com/hmg-prod/images/nick-fury-eye-1552397861.jpg?crop=0.488xw:0.976xh;0,0&resize=1200:*"
      />
      <Chat
        name="Maria Hill"
        message="Mr. Stark, Should I report to you or Cap?"
        timestamp="1 minutes ago"
        profile="https://tvline.com/wp-content/uploads/2021/12/cobie-smulders-maria-hill-secret-invasion.jpg?w=1024"
      />
    </div>
  );
};

export default Chats;
